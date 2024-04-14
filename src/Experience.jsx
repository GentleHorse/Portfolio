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
import AmbienceOfLight from "./components/designWorks/ambienceOfLight/AmbienceOfLight.jsx";
import BeautyOfTimePassing from "./components/designWorks/beautyOfTimePassing/BeautyOfTimePassing.jsx";

export default function Experience() {
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

      {/* <Environment preset="city" /> */}

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      <axesHelper />
      <OrbitControls makeDefault />

      {/* POSTRPROCESSING */}
      {/* {isCharacterStartMove && <PostProcessingEffects />} */}

      <Physics debug={true}>
        {/* <CharacterControl /> */}

        {/* <AmbienceOfLight /> */}
        <BeautyOfTimePassing />
      </Physics>
    </>
  );
}
