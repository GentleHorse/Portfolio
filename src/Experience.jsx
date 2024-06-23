import { useState, useEffect, Suspense } from "react";
import {
  Environment,
  OrbitControls,
  useKeyboardControls,
  Float,
} from "@react-three/drei";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import TestFloor from "./components/test/TestFloor.jsx";
import PostProcessingEffects from "./components/postprocessing/PostProcessingEffects.jsx";
import Background from "./components/utilComponents/Background.jsx";
import Lights from "./components/utilComponents/Lights.jsx";
import CharacterControl from "./components/characterControl/CharacterControl.jsx";
import AmbienceOfLight from "./components/models/designWorks/ambienceOfLight/AmbienceOfLight.jsx";


export default function ExperienceHome() {
  const [isCharacterStartMove, setIsCharacterStartMove] = useState(false);
  const [subscribeKeys, getKeys] = useKeyboardControls();

  // Listen whether the character starts moving or not
  useEffect(() => {
    const unsubscribeAny = subscribeKeys(() => setIsCharacterStartMove(true));

    return () => {
      return unsubscribeAny();
    };
  }, []);

  return (
    <>
      {/* ENVIRONMENT SET UP */}
      <Lights />
      <Background />

      {/* <Environment preset="forest" /> */}

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      {/* <axesHelper /> */}
      <OrbitControls makeDefault />

      {/* POSTRPROCESSING */}
      {/* {isCharacterStartMove && <PostProcessingEffects />} */}

      <Physics debug={true}>
        {/* <CharacterControl /> */}

        <TestFloor />

        <AmbienceOfLight />

      </Physics>
    </>
  );
}
