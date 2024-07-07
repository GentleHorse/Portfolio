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
import StageTest from "./components/models/test/StageTest.jsx";
import FirstPersonViewControl from "./components/models/character/firstPersonViewControl/FirstPersonViewControl.jsx";
import StageTestCollisionObjects from "./components/models/test/StageTestCollisionObjects.jsx";


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

      <Environment preset="forest"  />

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      {/* <axesHelper /> */}
      <OrbitControls makeDefault />

      {/* POSTRPROCESSING */}
      {/* {isCharacterStartMove && <PostProcessingEffects />} */}

      <Physics debug={false}>
        <FirstPersonViewControl />

        <StageTestCollisionObjects />

        <StageTest scale={0.22} rotation={[0, Math.PI, 0]} position={[0.8, 0, 0]} />

        {/* <AmbienceOfLight scale={0.3} rotation={[0, Math.PI, 0]} /> */}

      </Physics>
    </>
  );
}
