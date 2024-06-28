import * as THREE from "three";
import { useKeyboardControls } from "@react-three/drei";
import useSound from "use-sound";
import walkSound from "../../../public/sounds/character/walking.mp3";
import runSound from "../../../public/sounds/character/run.wav";
import jumpSound from "../../../public/sounds/character/jump-male.wav";
import pongSound from "../../../public/sounds/character/pong.mp3";
import { Suspense, useEffect, useRef, useState } from "react";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useGameStore } from "../../store/store.js";
import LowPolyMaleModel from "../models/character/lowPolyMale/LowPolyMaleModel.jsx";

const WALK_SPEED = 3.5;
const RUN_SPEED = 12.0;

const JUMP_HEIGHT = 10;
const JUMP_DOWN_FORCE = -0.15;
const JUMP_FORWARD_FORCE = -2;
const JUMP_BACKWARD_FORCE = 2;
const JUMP_LEFT_FORCE = -2;
const JUMP_RIGHT_FORCE = 2;

const CAMERA_HEIGHT = 4;
const CAMERA_DISTANCE = 7;
const CAMERA_TARGET_Z_ADJUSTMENT = 1.5;

export default function CharacterControl() {
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
   * SET UP KEYBORD CONTROL
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
   * MOVE THE CHARACTER ON THE X-Z PLANE
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
      const { forward, backward, leftward, rightward, run } = getKeys();

      // One vector for handling all applied forces
      const impluse = { x: 0, y: 0, z: 0 };

      // Access the character linear velocity
      const linvel = body.current.linvel();

      // Control the character mesh rotation
      let changeRotation = false;

      /**
       * Walk & Run
       */
      // Forward
      if (forward && !isJumping && castRayHit.timeOfImpact === 0) {
        if (run && linvel.z > -RUN_SPEED) {
          impluse.z -= RUN_SPEED * delta;
          changeRotation = true;

          if (characterState !== "Run") {
            setCharacterState("Run");
          }
        } else if (linvel.z > -WALK_SPEED) {
          impluse.z -= WALK_SPEED * delta;
          changeRotation = true;

          if (characterState !== "Walk") {
            setCharacterState("Walk");
          }
        }
      }

      // Backward
      if (backward && !isJumping && castRayHit.timeOfImpact === 0) {
        if (run && linvel.z < RUN_SPEED) {
          impluse.z += RUN_SPEED * delta;
          changeRotation = true;

          if (characterState !== "Run") {
            setCharacterState("Run");
          }
        } else if (linvel.z < WALK_SPEED) {
          impluse.z += WALK_SPEED * delta;
          changeRotation = true;

          if (characterState !== "Walk") {
            setCharacterState("Walk");
          }
        }
      }

      // Leftward
      if (leftward && !isJumping && castRayHit.timeOfImpact === 0) {
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
      if (rightward && !isJumping && castRayHit.timeOfImpact === 0) {
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
      if (!forward && !backward && !rightward && !leftward && !isJumping) {
        body.current.linvel().x = 0;

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
      state.camera.position.y = characterWorldPosition.y + CAMERA_HEIGHT;
      state.camera.position.z = characterWorldPosition.z + CAMERA_DISTANCE;

      const cameraTarget = new THREE.Vector3(
        characterWorldPosition.x,
        characterWorldPosition.y + CAMERA_TARGET_Z_ADJUSTMENT,
        characterWorldPosition.z
      );

      state.camera.lookAt(cameraTarget);

      // Add downward force after the character jumps
      if (castRayHit && castRayHit.timeOfImpact > 0.1) {
        body.current.applyImpulse({ x: 0, y: JUMP_DOWN_FORCE, z: 0 }, true);
      }

      // Check the character is in the air
      if (castRayHit && castRayHit.timeOfImpact > 0.1) {
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

    // Get input key states
    const { forward, backward, leftward, rightward } = getKeys();

    /**
     * Jump is allowed only if the ball is close enough to the floor
     * In order to hit the ray properly, the floor should be thick enough to be hit
     * (otherwise the "hit" returns NULL and cannot read the null property of "timeOfImpact")
     * TEMP_GROUND_THICKNESS ---> refer to <TestFloor />
     */
    if (hit.timeOfImpact < 0.15) {
      setIsJumping(true);

      // Add upward jump force
      body.current.applyImpulse({ x: 0, y: JUMP_HEIGHT, z: 0 }, true);

      // Add  slightly directional force depending on pressed keys
      if (forward) {
        body.current.applyImpulse({ x: 0, y: 0, z: JUMP_FORWARD_FORCE }, true);
      }
      if (backward) {
        body.current.applyImpulse({ x: 0, y: 0, z: JUMP_BACKWARD_FORCE }, true);
      }
      if (leftward) {
        body.current.applyImpulse({ x: JUMP_LEFT_FORCE, y: 0, z: 0 }, true);
      }
      if (rightward) {
        body.current.applyImpulse({ x: JUMP_RIGHT_FORCE, y: 0, z: 0 }, true);
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
          linearDamping={5}
          angularDamping={0.1}
          enabledRotations={[false, false, false]}
          friction={0.6}
          restitution={0}
          onCollisionEnter={(event) => {
            if (event.other.rigidBodyObject.name === "ground") {
              setIsJumping(false);
            }

            if (event.other.rigidBodyObject.name === "title") {
              body.current.applyImpulse({ x: 0, y: -3.5, z: 0 }, true);
              playPongSound();
            }
          }}
        >
          <group ref={character} position={[0, 0.5, 0]}>
            <LowPolyMaleModel scale={0.8} />
          </group>

          <CapsuleCollider args={[0.3, 0.25]} position={[0, 1, 0]} />
        </RigidBody>
      </Suspense>
    </>
  );
}
