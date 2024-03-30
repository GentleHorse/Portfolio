import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import TestCube from "./components/test/TestCube";
import TestFloor from "./components/test/TestFloor";
import { Perf } from "r3f-perf";
import TestIcosahedron from "./components/test/TestIcosahedron";
import FourthDimensionalBeing from "./components/character/fourth-dimensional-being/FourthDimensionalBeing";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      <axesHelper />

      <Physics debug={true}>
        {/* <TestIcosahedron outlines={true} /> */}
        {/* <TestCube outlines={true} /> */}
        <TestFloor />
      </Physics>

      <FourthDimensionalBeing scale={0.1} />
    </>
  );
}
