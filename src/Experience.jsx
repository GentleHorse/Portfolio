import { Environment, OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import TestFloor from "./components/test/TestFloor.jsx";
import CharacterControl from "./components/character/CharacterControl.jsx";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <Environment preset="city" />

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      <axesHelper />

      <Physics debug={Physics} timeStep="vary">
        <TestFloor />

        <RigidBody position={[-1, 3, 0]}>
          <mesh>
            <boxGeometry />
            <meshNormalMaterial />
          </mesh>
        </RigidBody>

        <RigidBody colliders="ball" position={[1, 2, 0]}>
          <mesh>
            <icosahedronGeometry />
            <meshNormalMaterial />
          </mesh>
        </RigidBody>

        <CharacterControl />
      </Physics>
    </>
  );
}
