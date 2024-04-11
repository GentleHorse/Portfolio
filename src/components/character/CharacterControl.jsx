import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { useKeyboardControls } from "@react-three/drei";
import useSound from "use-sound";
import walkSound from "../../../public/sounds/character/walking.mp3";
import runSound from "../../../public/sounds/character/run.wav";
import jumpSound from "../../../public/sounds/character/jump-male.wav";
import { Suspense, useEffect, useRef, useState } from "react";
import MangaStyleMan from "./mangaStyleMan/MangaStyleMan.jsx";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useGameStore } from "../../store/store.js";

export default function CharacterControl() {
  /**
   * GLTF MODEL LOCATION
   */
  const characterURL = "./models/manga-style-man/manga-style-man.gltf";

  /**
   * CHARACTER ANIMATION LIST
   */
  const animationSet = {
    idle: "Idle",
    walk: "Walk",
    run: "Run",
    jump: "Jump_Start",
    jumpIdle: "Jump_Idle",
    jumpLand: "Jump_Land",
    fall: "Climbing", // This is for falling from high sky

    // Currently support four additional animations
    action1: "Wave",
    action2: "Dance",
    action3: "Cheer",
    action4: "Attack(1h)", // This is special action which can be trigger while walking or running
  };

  /**
   * REF - CHARACTER
   */
  const body = useRef();
  const character = useRef();

  /**
   * CHARACTER STATE
   */
  const { characterState, setCharacterState } = useGameStore((state) => ({
    characterState: state.characterState,
    setCharacterState: state.setCharacterState,
  }));

  /**
   * LISTEN CHARACTER MOVEMENTS
   */
  const [isWalking, setIsWalking] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const forwardPressed = useKeyboardControls((state) => state.forward);
  const backwardPressed = useKeyboardControls((state) => state.backward);
  const leftwardPressed = useKeyboardControls((state) => state.leftward);
  const rightwardPressed = useKeyboardControls((state) => state.rightward);
  const runPressed = useKeyboardControls((state) => state.run);
  const jumpPressed = useKeyboardControls((state) => state.jump);

  /**
   * MAKE THE CHARACTER MOVE
   */
  const [subscribeKeys, getKeys] = useKeyboardControls();

  const MOVE_SPEED = 2.5;
  
  useFrame((state, delta) => {
    // Get input key states
    const { forward, backward, leftward, rightward } = getKeys();

    // One vector for handling all applied forces
    const impluse = { x: 0, y: 0, z: 0 };

    // Access the character linear velocity
    const linvel = body.current.linvel();

    // Control the character mesh rotation
    let changeRotation = false;

    // Move forward, backward, leftward, rightward
    if (forward && linvel.z > -MOVE_SPEED) {
      impluse.z -= MOVE_SPEED * delta;
      changeRotation = true;

      if (characterState === "Idle") {
        setCharacterState("Walk");
      }
    }
    if (backward && linvel.z < MOVE_SPEED) {
      impluse.z += MOVE_SPEED * delta;
      changeRotation = true;

      if (characterState === "Idle") {
        setCharacterState("Walk");
      }
    }
    if (leftward && linvel.x > -MOVE_SPEED) {
      impluse.x -= MOVE_SPEED * delta;
      changeRotation = true;

      if (characterState === "Idle") {
        setCharacterState("Walk");
      }
    }
    if (rightward && linvel.x < MOVE_SPEED) {
      impluse.x += MOVE_SPEED * delta;
      changeRotation = true;

      if (characterState === "Idle") {
        setCharacterState("Walk");
      }
    }

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
  });

  /**
   * UPDATE "WALKING" & "RUNNING" STATES
   */
  useEffect(() => {
    // Update the walking state
    if (
      (!jumpPressed && !runPressed && forwardPressed) ||
      (!jumpPressed && !runPressed && backwardPressed) ||
      (!jumpPressed && !runPressed && leftwardPressed) ||
      (!jumpPressed && !runPressed && rightwardPressed)
    ) {
      setIsWalking(true);
    } else {
      setIsWalking(false);
    }

    // Update the running state
    if (
      (!jumpPressed && runPressed && forwardPressed) ||
      (!jumpPressed && runPressed && backwardPressed) ||
      (!jumpPressed && runPressed && leftwardPressed) ||
      (!jumpPressed && runPressed && rightwardPressed)
    ) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  }, [
    forwardPressed,
    backwardPressed,
    leftwardPressed,
    rightwardPressed,
    jumpPressed,
    runPressed,
  ]);

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
    if (isWalking) {
      playWalkSound();
      walkingSound.loop(true); // allow looping
    } else {
      stopPlayWalkSound();
    }

    // Run
    if (isRunning) {
      playRunSound();
      runingSound.loop(true); // allow looping
    } else {
      stopPlayRunSound();
    }
  }, [isWalking, isRunning]);

  /**
   * SOUNDS CONTROL - JUMP
   */
  const [
    playJumpSound, // play sound method
    {
      stop: stopPlayJumpSound, // stop sound method
      isPlaying: isPlayingJumpSound, // return boolean
      sound: jumpingSound, // allow access to "sound" object
    },
  ] = useSound(jumpSound);

  useEffect(() => {
    if (jumpPressed) {
      playJumpSound();
    } else {
      stopPlayJumpSound();
    }
  }, [jumpPressed]);

  return (
    <>
      <Suspense>
        <RigidBody
          ref={body}
          colliders={false}
          position={[0, 0, 5]}
          linearDamping={0.9}
          angularDamping={0.5}
          enabledRotations={[false, false, false]}
          friction={0.6}
        >
          <group ref={character}>
            <MangaStyleMan position={[0, 1, 0]} />
          </group>

          <CapsuleCollider args={[0.3, 0.25]} position={[0, 1, 0]} />
        </RigidBody>
      </Suspense>

      {/* WITH ECCTRL */}
      {/* <Ecctrl animated camInitDis={-4} camInitDir={{ x: 0.3, y: 0 }} position-z={-8}>
          <EcctrlAnimation
            characterURL={characterURL} // Must have property
            animationSet={animationSet} // Must have property
          >
            <MangaStyleMan />
          </EcctrlAnimation>
      </Ecctrl> */}
    </>
  );
}
