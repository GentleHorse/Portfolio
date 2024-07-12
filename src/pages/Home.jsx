import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Leva } from "leva";
import { EcctrlJoystick } from "ecctrl";
import { MobileView, BrowserView } from "react-device-detect";
import Menu from "../components/menu/Menu.jsx";
import Experience from "../Experience.jsx";

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
  // For the menu
  { name: "menu", keys: ["Escape"] },
];

export default function HomePage() {
  return (
    <>
      <BrowserView>
        <Menu />
      </BrowserView>

      <Leva collapsed={true} />

      {/* The interface for smartphones */}
      <MobileView>
        <EcctrlJoystick
          joystickBaseProps={{
            material: new THREE.MeshBasicMaterial({
              color: "#080808",
              transparent: true,
              opacity: 0.45,
            }),
          }}
          joystickStickProps={{
            material: new THREE.MeshBasicMaterial({
              color: "#434343",
              transparent: true,
              opacity: 0.45,
            }),
          }}
          joystickHandleProps={{
            material: new THREE.MeshBasicMaterial({
              color: "#080808",
              transparent: true,
              opacity: 0.6,
            }),
          }}
          buttonLargeBaseProps={{
            material: new THREE.MeshBasicMaterial({
              color: "#080808",
              transparent: true,
              opacity: 0.45,
            }),
          }}
          buttonTop1Props={{
            material: new THREE.MeshBasicMaterial({
              color: "#080808",
              transparent: true,
              opacity: 0.45,
            }),
          }}
        />
      </MobileView>

      <KeyboardControls map={keyboardMap}>
        <Canvas
          camera={{
            fov: 60,
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
