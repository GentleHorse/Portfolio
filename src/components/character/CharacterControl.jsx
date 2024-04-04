import Ecctrl, { EcctrlAnimation } from "ecctrl";
import FourthDimensionalBeing from "./fourth-dimensional-being/FourthDimensionalBeing.jsx";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useSound from "use-sound";
import walkSound from "../../../public/sounds/character/walk.wav";
import { useEffect, useState } from "react";

export default function CharacterControl() {
  const characterURL =
    "./models/fourth-dimensional-being/fourth-dimensional-being.gltf";

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

  const [playWalkSound, { stop, isPlaying }] = useSound(walkSound);

  const [moveForward, setMoveForward] = useState(false);

  const [subscribeKeys, getKeys] = useKeyboardControls();

  // useFrame((state, delta) => {
  //   const { forward, backward, leftward, rightward, jump, run } = getKeys();

  //   if (forward) {
  //     if (isPlaying){
  //       stop()
  //     }
  //     playWalkSound()

  //   }
  // });

  useEffect(() => {
    const unsubscribeForward = subscribeKeys(
      (state) => state.forward,
      (value) => {
        if (value) {
          setMoveForward(true);
        } else {
          setMoveForward(false);
        }
      }
    );

    return () => {
      unsubscribeForward();
    };
  }, []);

  if (moveForward) {
    playWalkSound();
  } else {
    stop();
  }

  return (
    <>
      <Ecctrl position={[0, 0, 0]} animated>
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
