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
import CharacterControl from "./components/character/characterControls/CharacterControl3D.jsx";
import PostProcessingEffects from "./components/postprocessing/PostProcessingEffects.jsx";
import TestGeometriesEmission from "./components/test/TestGeometriesEmission.jsx";
import Background from "./components/utilComponents/Background.jsx";
import Lights from "./components/utilComponents/Lights.jsx";
import AmbienceOfLight from "./components/designWorks/ambienceOfLight/AmbienceOfLight.jsx";
import BeautyOfTimePassing from "./components/designWorks/beautyOfTimePassing/BeautyOfTimePassing.jsx";
import CharacterControl2D from "./components/character/characterControls/CharacterControl2D.jsx";
import Title from "./components/title/Title.jsx";
import Fog from "./components/fog/Fog.jsx";
import ProductOfAmbienceOfLight from "./components/designWorks/ambienceOfLight/ProductOfAmbienceOfLight.jsx";
import BoxRoom from "./components/models/BoxRoom.jsx";
import RoomOfAmbienceOfLight from "./components/designWorks/ambienceOfLight/RoomOfAmbienceOfLight.jsx";
import { Joe } from "./components/character/joe/Joe.jsx";

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
      {/* <Fog /> */}

      <Environment preset="night" />

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      {/* <axesHelper /> */}
      {/* <OrbitControls makeDefault /> */}

      {/* POSTRPROCESSING */}
      {/* {isCharacterStartMove && <PostProcessingEffects />} */}

      <Physics debug={true}>
        <CharacterControl2D />

        {/* <TestFloor /> */}

        {/* <Title position={[-3, 5, 0]} scale={0.45} /> */}

        <RoomOfAmbienceOfLight />
      </Physics>
    </>
  );
}
