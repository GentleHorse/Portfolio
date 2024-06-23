import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Leva } from "leva";

import Experience from "../Experience.jsx";
import Header from "../components/header/Header.jsx";
import Interface from "../components/interface/Interface.jsx";

/**
 * Keyboard control preset
 */
const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
  // Optional animation key map
  { name: "action1", keys: ["1"] },
  { name: "action2", keys: ["2"] },
  { name: "action3", keys: ["3"] },
  { name: "action4", keys: ["KeyF"] },
];

export default function HomePage() {
  return (
    <>
      {/* <Interface /> */}

      <Leva collapsed={true} />

      <KeyboardControls map={keyboardMap}>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [0, 1.5, 8],
          }}
        >
          <Experience />
        </Canvas>
      </KeyboardControls>
    </>
  );
}
