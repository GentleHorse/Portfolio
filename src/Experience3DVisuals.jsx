import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";

export default function Experience3DVisuals() {
  return (
    <>
      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      <axesHelper />
      <OrbitControls makeDefault />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
