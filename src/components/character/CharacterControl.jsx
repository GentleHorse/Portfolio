import Ecctrl, { EcctrlAnimation } from "ecctrl";
import FourthDimensionalBeing from "./fourth-dimensional-being/FourthDimensionalBeing.jsx";
import { useKeyboardControls } from "@react-three/drei";
import useSound from "use-sound";
import walkSound from "../../../public/sounds/character/walking.mp3";
import runSound from "../../../public/sounds/character/run.wav";
import jumpSound from "../../../public/sounds/character/jump-male.wav";
import { useEffect, useState } from "react";

export default function CharacterControl() {
  /**
   * GLTF MODEL LOCATION
   */
  const characterURL =
    "./models/fourth-dimensional-being/fourth-dimensional-being.gltf";

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
    // action1: "Wave",
    action2: "Dance",
    // action3: "Cheer",
    // action4: "Attack(1h)", // This is special action which can be trigger while walking or running
  };

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
      <Ecctrl animated camInitDis={-4.5} camInitDir={{ x: 0.35, y: 0 }}>
        <EcctrlAnimation
          characterURL={characterURL} // Must have property
          animationSet={animationSet} // Must have property
        >
          <FourthDimensionalBeing />
        </EcctrlAnimation>
      </Ecctrl>
    </>
  );
}
