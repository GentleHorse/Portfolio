import { useState, useEffect, Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import TestFloor from "./components/test/TestFloor.jsx";
import CharacterControl from "./components/character/CharacterControl.jsx";
import PostProcessingEffects from "./components/postprocessing/PostProcessingEffects.jsx";
import TestGeometriesEmission from "./components/test/TestGeometriesEmission.jsx";
import Background from "./components/util-components/Background.jsx";
import Lights from "./components/util-components/Lights.jsx";
import TestSimpleGeometries from "./components/test/testSimpleGeometries.jsx";

export default function Experience() {
  const [isSceneReady, setIsSceneReady] = useState(false);

  useEffect(() => {
    setIsSceneReady(true);
    console.log("scene is ready");
  }, []);

  return (
    <>
      {/* <OrbitControls makeDefault /> */}

      {/* <Environment preset="city" /> */}

      <Lights />

      <Background />

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      <axesHelper />

      {/* POSTRPROCESSING: needs to optimize the perfomance */}
      {/* {isSceneReady && <PostProcessingEffects />} */}

      <Physics debug={Physics} timeStep="vary">
        <TestFloor />

        <CharacterControl />

      </Physics>
    </>
  );
}
