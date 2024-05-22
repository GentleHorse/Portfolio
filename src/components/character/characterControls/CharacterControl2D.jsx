import * as THREE from "three";
import { useKeyboardControls } from "@react-three/drei";
import useSound from "use-sound";
import walkSound from "../../../../public/sounds/character/walking.mp3";
import runSound from "../../../../public/sounds/character/run.wav";
import jumpSound from "../../../../public/sounds/character/jump-male.wav";
import pongSound from "../../../../public/sounds/character/pong.mp3";
import { Suspense, useEffect, useRef, useState } from "react";
import MangaStyleMan from "../mangaStyleMan/MangaStyleMan.jsx";
import { Joe } from "../joe/Joe.jsx";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useGameStore } from "../../../store/store.js";

const WALK_SPEED = 3.5;
const RUN_SPEED = 12.0;
const JUMP_LEFT_FORCE = -2;
const JUMP_RIGHT_FORCE = 2;
const JUMP_HEIGHT = 10;

export default function CharacterControl2D(props) {
  /**
   * REF - CHARACTER
   */
  const body = useRef();
  const character = useRef();

  /**
   * GAME PHASE & CHARACTER STATE
   */
  const { characterState, setCharacterState, interfaceState } = useGameStore(
    (state) => ({
      characterState: state.characterState,
      setCharacterState: state.setCharacterState,
      interfaceState: state.interfaceState,
    })
  );

  /**
   * MAKE THE CHARACTER MOVE
   */
  const [subscribeKeys, getKeys] = useKeyboardControls();

  /**
   * SET UP RAY CAST
   */
  const { rapier, world } = useRapier();

  /**
   * JUMP STATE
   */
  const [isJumping, setIsJumping] = useState(false);

  /**
   * CHARACTER ROTATION STATE
   */
  const [isCharacterFaceForward, setIsCharacterFaceForward] = useState(true);

  /**
   * MOVE FORWARD AND BACKWARD
   */
  useFrame((state, delta) => {
    if (body.current) {
      // Ray setting
      const origin = body.current.translation();
      origin.y -= 0.3 + 0.25 + 0.01;
      const direction = { x: 0, y: -1, z: 0 };
      const ray = new rapier.Ray(origin, direction);
      const castRayHit = world.castRay(ray, 10, true);

      // Get input key states
      const { leftward, rightward, run } = getKeys();

      // One vector for handling all applied forces
      const impluse = { x: 0, y: 0, z: 0 };

      // Access the character linear velocity
      const linvel = body.current.linvel();

      /**
       * Walk & Run
       */
      // Leftward
      if (
        (leftward || interfaceState.left) &&
        !isJumping &&
        castRayHit.toi === 0
      ) {
        if ((run || interfaceState.run) && linvel.x > -RUN_SPEED) {
          impluse.x -= RUN_SPEED * delta;

          // Rotate the character
          setIsCharacterFaceForward(false);

          if (characterState !== "Run") {
            setCharacterState("Run");
          }
        } else if (linvel.x > -WALK_SPEED) {
          impluse.x -= WALK_SPEED * delta;

          // Rotate the character
          setIsCharacterFaceForward(false);

          if (characterState !== "Walk") {
            setCharacterState("Walk");
          }
        }
      }

      // Rightward
      if (
        (rightward || interfaceState.right) &&
        !isJumping &&
        castRayHit.toi === 0
      ) {
        if ((run || interfaceState.run) && linvel.x < RUN_SPEED) {
          impluse.x += RUN_SPEED * delta;

          // Rotate the character
          setIsCharacterFaceForward(true);

          if (characterState !== "Run") {
            setCharacterState("Run");
          }
        } else if (linvel.x < WALK_SPEED) {
          impluse.x += WALK_SPEED * delta;

          // Rotate the character
          setIsCharacterFaceForward(true);

          if (characterState !== "Walk") {
            setCharacterState("Walk");
          }
        }
      }

      // Activate the idle animation when the character stops
      if (
        !rightward &&
        !interfaceState.right &&
        !leftward &&
        !interfaceState.left &&
        !isJumping
      ) {
        body.current.linvel().x = 0;

        if (characterState !== "Idle") {
          setCharacterState("Idle");
        }
      }

      // Apply forces to the rigid body
      body.current.applyImpulse(impluse, true);

      /**
       * Let the camera follow the character
       */
      const characterWorldPosition = character.current.getWorldPosition(
        new THREE.Vector3()
      );

      state.camera.position.x = characterWorldPosition.x;
      state.camera.position.y = characterWorldPosition.y + 0.5;
      state.camera.position.z = characterWorldPosition.z + 8;

      const cameraTarget = new THREE.Vector3(
        characterWorldPosition.x,
        characterWorldPosition.y + 1.5,
        characterWorldPosition.z
      );

      state.camera.lookAt(cameraTarget);

      // Add downward force after the character jumps
      if (castRayHit && castRayHit.toi > 0.1) {
        body.current.applyImpulse({ x: 0, y: -0.3, z: 0 }, true);
      }

      // Check the character is in the air
      if (castRayHit && castRayHit.toi > 0.1) {
        setCharacterState("Jump_Idle");
      }
    }
  });

  /**
   * Jump
   */
  const jumpAction = () => {
    const origin = body.current.translation();
    origin.y -= 0.3 + 0.25 + 0.01;
    const direction = { x: 0, y: -1, z: 0 };
    const ray = new rapier.Ray(origin, direction);
    const hit = world.castRay(ray, 10, true);

    const { rightward, leftward } = getKeys();

    /**
     * Jump is allowed only if the ball is close enough to the floor
     * In order to hit the ray properly, the floor should be thick enough to be hit
     * (otherwise the "hit" returns NULL and cannot read the null property of "toi")
     * TEMP_GROUND_THICKNESS ---> refer to <TestFloor />
     */
    if (hit.toi < 0.15) {
      setIsJumping(true);

      // Change the jump direction slightly
      if (leftward || interfaceState.left) {
        body.current.applyImpulse(
          { x: JUMP_LEFT_FORCE, y: JUMP_HEIGHT, z: 0 },
          true
        );
      } else if (rightward || interfaceState.right) {
        body.current.applyImpulse(
          { x: JUMP_RIGHT_FORCE, y: JUMP_HEIGHT, z: 0 },
          true
        );
      } else {
        body.current.applyImpulse({ x: 0, y: JUMP_HEIGHT, z: 0 }, true);
      }
    }
  };

  useEffect(() => {
    const unSubscribeJump = subscribeKeys(
      (state) => state.jump,
      (jumpPressedValue) => {
        if (jumpPressedValue) {
          jumpAction();
        }
      }
    );

    return () => {
      unSubscribeJump();
    };
  }, []);

  useEffect(() => {
    if (interfaceState.jump) {
      jumpAction();
    }
  }, [interfaceState.jump]);

  /**
   * SOUNDS CONTROL - WALK, RU
   */
  // Set up the walking sound
  const [
    playWalkSound, // play sound method
    {
      stop: stopPlayWalkSound, // stop sound method
      isPlaying: isPlayingWalkSound, // return boolean
      sound: walkingSound, // allow access to "sound" object
    },
  ] = useSound(walkSound);

  // Set up the running sound
  const [
    playRunSound, // play sound method
    {
      stop: stopPlayRunSound, // stop sound method
      isPlaying: isPlayingRunSound, // return boolean
      sound: runingSound, // allow access to "sound" object
    },
  ] = useSound(runSound);

  // Play the walking & running sounds conditionally
  useEffect(() => {
    // Walk
    if (characterState === "Walk") {
      playWalkSound();
      walkingSound.loop(true); // allow looping
    } else {
      stopPlayWalkSound();
    }

    // Run
    if (characterState === "Run") {
      playRunSound();
      runingSound.loop(true); // allow looping
    } else {
      stopPlayRunSound();
    }
  }, [characterState]);

  /**
   * SOUNDS CONTROL - JUMP
   */
  // const { jump } = getKeys();

  // const [
  //   playJumpSound, // play sound method
  //   {
  //     stop: stopPlayJumpSound, // stop sound method
  //     isPlaying: isPlayingJumpSound, // return boolean
  //     sound: jumpingSound, // allow access to "sound" object
  //   },
  // ] = useSound(jumpSound);

  // useEffect(() => {
  //   if (jump) {
  //     playJumpSound();
  //   } else {
  //     stopPlayJumpSound();
  //   }
  // }, [jump]);

  /**
   * SOUNDS CONTROL - CONTACT TO THE GOUND
   *
   * In order to play the sound only ONCE,
   * set the character & floor restitution to "0" (zero bounciness)
   */
  const [
    playPongSound, // play sound method
    {
      stop: stopPlayPongSound, // stop sound method
      isPlaying: isPlayingPongSound, // return boolean
      sound: PongSound, // allow access to "sound" object
    },
  ] = useSound(pongSound);

  return (
    <>
      <Suspense>
        <RigidBody
          ref={body}
          colliders={false}
          position={[0, 0, 0]}
          linearDamping={5} // Set the high value for stop movements as soon as the key is released
          angularDamping={0.1}
          enabledRotations={[false, false, false]}
          friction={0.6}
          restitution={0}
          onCollisionEnter={(event) => {
            if (event.other.rigidBodyObject.name === "ground") {
              setIsJumping(false);
              // playPongSound();

              // Make the character stay on "Z = 0" axis
              body.current.setTranslation({
                x: body.current.translation().x,
                y: body.current.translation().y,
                z: 0,
              });
            }

            if (event.other.rigidBodyObject.name === "title") {
              body.current.applyImpulse({ x: 0, y: -3.5, z: 0 }, true);
              playPongSound();
            }
          }}
        >
          <group ref={character} position={[0, 1, 0]}>
            {/* <MangaStyleMan isCharacterFaceForward={isCharacterFaceForward} /> */}
            <Joe isCharacterFaceForward={isCharacterFaceForward} />
          </group>

          <CapsuleCollider args={[0.3, 0.25]} position={[0, 1, 0]} />
        </RigidBody>
      </Suspense>
    </>
  );
}
