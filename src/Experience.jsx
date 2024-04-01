import { Environment, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import TestCube from "./components/test/TestCube";
import TestFloor from "./components/test/TestFloor";
import { Perf } from "r3f-perf";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

import TestIcosahedron from "./components/test/TestIcosahedron";
import FourthDimensionalBeing from "./components/character/fourth-dimensional-being/FourthDimensionalBeing";

export default function Experience() {
  const characterURL =
    "./models/fourth-dimensional-being/fourth-dimensional-being.gltf";

  const animationSet = {
    idle: "Idle",
    walk: "Walk",
    run: "Run",
    jump: "Jump_Start",
    jumpIdle: "Jump_Idle",
    jumpLand: "Jump_Land",
    fall: "Climbing", // This is for falling from high sky
    // Currently support four additional animations
    // action1: "Wave",
    action2: "Dance",
    // action3: "Cheer",
    // action4: "Attack(1h)", // This is special action which can be trigger while walking or running
  };

  return (
    <>
      <OrbitControls makeDefault />

      <Environment preset="city" />

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      <axesHelper />

      <Physics debug={Physics} timeStep="vary">
        {/* <TestIcosahedron outlines={true} /> */}
        {/* <TestCube outlines={true} /> */}
        <TestFloor />

        <Ecctrl
          position={[0, 0, 0]}
          animated
        >
          <EcctrlAnimation
            characterURL={characterURL} // Must have property
            animationSet={animationSet} // Must have property
          >
            <FourthDimensionalBeing />
          </EcctrlAnimation>
        </Ecctrl>
      </Physics>
    </>
  );
}
