import * as THREE from "three";
import { useKeyboardControls } from "@react-three/drei";
import useSound from "use-sound";
import walkSound from "../../../public/sounds/character/walking.mp3";
import runSound from "../../../public/sounds/character/run.wav";
import jumpSound from "../../../public/sounds/character/jump-male.wav";
import { Suspense, useEffect, useRef } from "react";
import MangaStyleMan from "./mangaStyleMan/MangaStyleMan.jsx";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useGameStore } from "../../store/store.js";

export default function CharacterControl3D() {
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
  const { forward, backward, leftward, rightward, run, jump } = getKeys();

  const WALK_SPEED = 2.5;
  const RUN_SPEED = 10.0;

  useFrame((state, delta) => {
    if (body.current) {
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
      if (forward) {
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
      if (backward) {
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
      if (leftward) {
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
      if (rightward) {
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
      if (!forward && !backward && !rightward && !leftward) {
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
      // state.camera.position.z = characterWorldPosition.z - 2;
      state.camera.position.z = characterWorldPosition.z + 8;

      const cameraTarget = new THREE.Vector3();
      // cameraTarget.x = characterWorldPosition.x;
      // cameraTarget.z = characterWorldPosition.z - 10;

      cameraTarget.copy(characterWorldPosition);
      state.camera.lookAt(cameraTarget);
    }
  });

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
          position={[0, 0, 5]}
          linearDamping={15} // Set the high value for stop movements as soon as the key is released
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
