import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import Experience3DVisuals from "../Experience3DVisuals.jsx";

export default function ThreeDVisualsPage() {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 1.5, 8],
      }}
    >
      <Experience3DVisuals />
    </Canvas>
  );
}
