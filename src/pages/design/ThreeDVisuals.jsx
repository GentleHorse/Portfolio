import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";
import Header from "../../components/header/Header.jsx";

export default function ThreeDVisualsPage() {
  return (
    <>
      <Header home about works contact />

      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 1.5, 8],
        }}
      >
        {/* DEBUG TOOLS */}
        <Perf position="top-left" />
        <axesHelper />
        <OrbitControls makeDefault />

        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  );
}
