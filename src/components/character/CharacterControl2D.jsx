import * as THREE from "three";
import { useKeyboardControls } from "@react-three/drei";
import useSound from "use-sound";
import walkSound from "../../../public/sounds/character/walking.mp3";
import runSound from "../../../public/sounds/character/run.wav";
import jumpSound from "../../../public/sounds/character/jump-male.wav";
import { Suspense, useEffect, useRef, useState } from "react";
import MangaStyleMan from "./mangaStyleMan/MangaStyleMan.jsx";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useGameStore } from "../../store/store.js";

export default function CharacterControl2D(props) {
  /**
   * REF - CHARACTER
   */
  const body = useRef();
  const character = useRef();

  /**
   * GAME PHASE & CHARACTER STATE
   */
  const { gamePhase, setGamePhase, characterState, setCharacterState } =
    useGameStore((state) => ({
      gamePhase: state.gamePhase,
      setGamePhase: state.setGamePhase,

      characterState: state.characterState,
      setCharacterState: state.setCharacterState,
    }));

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
   * WALK & RUN
   */
  const WALK_SPEED = 2.5;
  const RUN_SPEED = 10.0;

  useFrame((state, delta) => {
    if (body.current) {
      // Ray setting
      const origin = body.current.translation();
      origin.y -= 0.3 + 0.25 + 0.01;
      const direction = { x: 0, y: -1, z: 0 };
      const ray = new rapier.Ray(origin, direction);
      const castRayHit = world.castRay(ray, 10, true);

      // Get input key states
      const { leftward, rightward, run, jump } = getKeys();

      // One vector for handling all applied forces
      const impluse = { x: 0, y: 0, z: 0 };

      // Access the character linear velocity
      const linvel = body.current.linvel();

      // Control the character mesh rotation
      let changeRotation = false;

      /**
       * Walk & Run
       */
      // Leftward
      if (leftward && !isJumping) {
        if (run && linvel.x > -RUN_SPEED) {
          impluse.x -= RUN_SPEED * delta;
          changeRotation = true;

          if (characterState !== "Run") {
            setCharacterState("Run");
          }
        } else if (linvel.x > -WALK_SPEED) {
          impluse.x -= WALK_SPEED * delta;
          changeRotation = true;

          if (characterState !== "Walk") {
            setCharacterState("Walk");
          }
        }
      }

      // Rightward
      if (rightward && !isJumping) {
        if (run && linvel.x < RUN_SPEED) {
          impluse.x += RUN_SPEED * delta;
          changeRotation = true;

          if (characterState !== "Run") {
            setCharacterState("Run");
          }
        } else if (linvel.x < WALK_SPEED) {
          impluse.x += WALK_SPEED * delta;
          changeRotation = true;

          if (characterState !== "Walk") {
            setCharacterState("Walk");
          }
        }
      }

      // Activate the idle animation when the character stops
      if (!rightward && !leftward && !isJumping) {
        if (characterState !== "Idle") {
          setCharacterState("Idle");
        }
      }

      // Rotate the character according to move directions
      if (changeRotation) {
        const angle = Math.atan2(linvel.x, linvel.z);
        character.current.rotation.y = angle;
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
      state.camera.position.y = characterWorldPosition.y + 2;
      state.camera.position.z = characterWorldPosition.z + 8;

      const cameraTarget = new THREE.Vector3(
        characterWorldPosition.x,
        characterWorldPosition.y + 2,
        characterWorldPosition.z
      );

      state.camera.lookAt(cameraTarget);

      // Add downward force after the character jumps
      if (castRayHit && castRayHit.toi > 1.5) {
        body.current.applyImpulse({ x: 0, y: -3.8, z: 0 }, true);
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

    /**
     * Jump is allowed only if the ball is close enough to the floor
     * In order to hit the ray properly, the floor should be thick enough to be hit
     * (otherwise the "hit" returns NULL and cannot read the null property of "toi")
     */
    if (hit.toi < 0.15) {
      setIsJumping(true);

      if (characterState !== "Jump_Start") {
        setCharacterState("Jump_Start");

        setTimeout(() => {
          body.current.applyImpulse({ x: 0, y: 5, z: 0 }, true);

          setTimeout(() => {
            setIsJumping(false);
          }, 500);
        }, 500);
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

  /**
   * SOUNDS CONTROL - WALK, RUN
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

  return (
    <>
      <Suspense>
        <RigidBody
          ref={body}
          colliders={false}
          position={[0, 0, 0]}
          linearDamping={10} // Set the high value for stop movements as soon as the key is released
          angularDamping={0.1}
          enabledRotations={[false, false, false]}
          friction={0.6}
        >
          <group ref={character}>
            <MangaStyleMan position={[0, 1, 0]} />
          </group>

          <CapsuleCollider args={[0.3, 0.25]} position={[0, 1, 0]} />
        </RigidBody>
      </Suspense>
    </>
  );
}
