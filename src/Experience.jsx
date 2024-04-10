import { useState, useEffect, Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import TestFloor from "./components/test/TestFloor.jsx";
import CharacterControl from "./components/character/CharacterControl.jsx";
import PostProcessingEffects from "./components/postprocessing/PostProcessingEffects.jsx";
import TestGeometriesEmission from "./components/test/TestGeometriesEmission.jsx";
import Background from "./components/utilComponents/Background.jsx";
import Lights from "./components/utilComponents/Lights.jsx";
import { useKeyboardControls } from "@react-three/drei";

export default function Experience() {
  const [isCharacterStartMove, setIsCharacterStartMove] = useState(false);

  const forwardPressed = useKeyboardControls((state) => state.forward);
  const backwardPressed = useKeyboardControls((state) => state.backward);
  const leftwardPressed = useKeyboardControls((state) => state.leftward);
  const rightwardPressed = useKeyboardControls((state) => state.rightward);

  useEffect(() => {
    if (!isCharacterStartMove) {
      if (
        forwardPressed ||
        backwardPressed ||
        leftwardPressed ||
        rightwardPressed
      ) {
        setIsCharacterStartMove(true);
        console.log("character starts moving");
      }
    }
  }, [forwardPressed, backwardPressed, leftwardPressed, rightwardPressed]);

  return (
    <>
      {/* <OrbitControls makeDefault /> */}

      {/* <Environment preset="city" /> */}

      <Lights />

      <Background />

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      <axesHelper />

      {/* POSTRPROCESSING */}
      {isCharacterStartMove && <PostProcessingEffects />}

      <Physics debug={false}>
        <TestFloor />


        <CharacterControl />

        <TestGeometriesEmission />
      </Physics>
    </>
  );
}
