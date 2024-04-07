import { useState, useEffect, Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import TestFloor from "./components/test/TestFloor.jsx";
import CharacterControl from "./components/character/CharacterControl.jsx";
import PostProcessingEffects from "./components/postprocessing/PostProcessingEffects.jsx";
import TestGeometriesEmission from "./components/test/TestGeometriesEmission.jsx";

export default function Experience() {
  const [isSceneReady, setIsSceneReady] = useState(false);

  useEffect(() => {
    setIsSceneReady(true);
    console.log("scene is ready");
  }, []);

  return (
    <>
      {/* <OrbitControls makeDefault /> */}

      <Environment preset="city" />

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      <axesHelper />

      {/* POSTRPROCESSING */}
      {isSceneReady && (
        <Suspense>
          <PostProcessingEffects />
        </Suspense>
      )}

      <Physics debug={Physics} timeStep="vary">
        <TestFloor />

        <Suspense>
          <RigidBody position={[-2, 3, 0]}>
            <mesh>
              <boxGeometry />
              <meshNormalMaterial />
            </mesh>
          </RigidBody>
        </Suspense>

        <Suspense>
          <RigidBody colliders="hull" position={[2, 2, 0]}>
            <mesh>
              <icosahedronGeometry />
              <meshNormalMaterial />
            </mesh>
          </RigidBody>
        </Suspense>

        <Suspense>
          <CharacterControl />
        </Suspense>

        <TestGeometriesEmission />
      </Physics>
    </>
  );
}
