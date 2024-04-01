import Ecctrl, { EcctrlAnimation } from "ecctrl";
import FourthDimensionalBeing from "./fourth-dimensional-being/FourthDimensionalBeing.jsx";

export default function CharacterControl() {
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
      <Ecctrl position={[0, 0, 0]} animated>
        <EcctrlAnimation
          characterURL={characterURL} // Must have property
          animationSet={animationSet} // Must have property
        >
          <FourthDimensionalBeing />
        </EcctrlAnimation>
      </Ecctrl>
    </>
  );
}
