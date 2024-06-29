import Ecctrl, { EcctrlAnimation } from "ecctrl";
import LowPolyMaleModel from "./LowPolyMaleModel.jsx";
import { Suspense } from "react";

export default function LowPolyMale() {
  // Prepare character model url
  const characterURL = "./models/low-poly-male/low-poly-male.glb";

  // Prepare and rename your character animations here
  // Note: idle, walk, run, jump, jumpIdle, jumpLand and fall names are essential
  // Missing any of these names might result in an error: "cannot read properties of undifined (reading 'reset')"
  const animationSet = {
    idle: "Idle",
    walk: "Walk",
    run: "Run",
    jump: "Jump_Start",
    jumpIdle: "Jump_Idle",
    jumpLand: "Jump_Land",
    fall: "Climbing", // This is for falling from high sky

    // Currently support four additional animations
    action1: "Wave",
    action2: "Dance",
    action3: "Cheer",
    action4: "Attack(1h)", // This is special action which can be trigger while walking or running
  };

  return (
    <>
      {/* "friction" must be set above 0, otherwise it causes the bug! */}
      <Ecctrl animated position={[0, 3, 0]} friction={0.6}>
        <Suspense>
          <EcctrlAnimation
            characterURL={characterURL} // Must have property
            animationSet={animationSet} // Must have property
          >
            <Suspense>
              <LowPolyMaleModel scale={0.8} position={[0, -0.8, 0]} />
            </Suspense>
          </EcctrlAnimation>
        </Suspense>
      </Ecctrl>
    </>
  );
}
