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
import TestGeometriesEmission from "./components/test/TestGeometriesEmission.jsx";
import Background from "./components/utilComponents/Background.jsx";
import Lights from "./components/utilComponents/Lights.jsx";
import BeautyOfTimePassing from "./components/designWorks/beautyOfTimePassing/BeautyOfTimePassing.jsx";
import CharacterControl3D from "./components/character/characterControls/CharacterControl3D.jsx";
import Title from "./components/title/Title.jsx";
import Fog from "./components/fog/Fog.jsx";
import AmbienceOfLightLowPolyAnimated from "./components/designWorks/ambienceOfLight/AmbienceOfLightLowPolyAnimated.jsx";
import LowPolyScene from "./components/designWorks/LowPolyScene.jsx";

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
      {/* <Fog /> */}

      <Environment preset="city" />

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      {/* <axesHelper /> */}
      <OrbitControls makeDefault />

      {/* POSTRPROCESSING */}
      {/* {isCharacterStartMove && <PostProcessingEffects />} */}

      <Physics debug={false}>
        <CharacterControl3D />

        {/* <Title position={[0, 2, 0]} scale={0.45} /> */}

        <TestFloor />

        <LowPolyScene scale={0.25} position={[0, 0.5, -5]} rotation={[0, -Math.PI * 0.1, 0]} />

        {/* <AmbienceOfLightLowPolyAnimated scale={0.6} position={[-5, 1, 2]} /> */}

        {/* <BeautyOfTimePassing scale={0.3} rotation={[0, 0, 0]} /> */}
      </Physics>
    </>
  );
}
