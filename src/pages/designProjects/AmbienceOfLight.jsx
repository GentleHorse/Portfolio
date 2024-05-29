import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, createPortal, useFrame, useThree } from "@react-three/fiber";
import {
  useFBO,
  useGLTF,
  useScroll,
  Text,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Html,
} from "@react-three/drei";
import { easing } from "maath";

import AmbienceOfLightImage01 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-01.jpg";
import AmbienceOfLightImage02 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-02.jpg";
import AmbienceOfLightImage06 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-06.jpg";
import AmbienceOfLightImage07 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-07.jpg";
import AmbienceOfLightImage11 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-11.jpg";
import AmbienceOfLightImage13 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-13.jpg";

export default function AmbienceOfLightPage() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
      <ScrollControls damping={0.2} pages={4} distance={0.5}>
        <Scroll>
          <group position={[0, 0, 0]}>
            <mesh>
              <boxGeometry />
              <meshBasicMaterial color="red" />
            </mesh>
            <Typography />
          </group>

          <group position={[0, -5, 0]}>
            <mesh>
              <boxGeometry />
              <meshBasicMaterial color="yellow" />
            </mesh>
          </group>

          <group position={[0, -10, 0]}>
            <mesh>
              <boxGeometry />
              <meshBasicMaterial color="green" />
            </mesh>
          </group>
        </Scroll>

        <Scroll html>
            <article className="py-[5%] px-[12%]" style={{ transform: 'translate3d(0vw, 300vh, 0)' }}>
              <p className="font-roboto text-[#fcfaf2]">
                In his prior artistic endeavor, "Beauty of Time Passing (2023),"
                the designer undertook the ambitious task of introducing
                luminosity into interior spaces through the integration of
                data-driven meteorological landscapes and the strategic
                manipulation of light dispersion. The intentional use of glass
                bricks, with their capacity for reflective interplay, served as
                a conduit for cultivating a symbiotic relationship between the
                designed environment and the natural world, resulting in a
                nuanced nature-inspired ambiance within the domestic realm.In
                his current project, aptly titled "Ambience of Light," the
                artist remains dedicated to the same overarching goal while
                adopting a distinct modus operandi. Here, a profound exploration
                of the materiality intrinsic to wood and glass bricks takes
                precedence, as the designer endeavors to distill his vision into
                a more refined yet robust formal language. This deliberate
                departure from the previous methodology reflects a commitment to
                simplicity, underscoring a conscientious effort to attain a
                heightened aesthetic resonance through a judicious consideration
                of materials and their inherent expressive potential.
              </p>
              <br />
              <p className="font-roboto text-[#fcfaf2]">
                This project was presented at OBJECT Rotterdam 2024 (Feb 2 - 4,
                2024, HAKA-gebouw, Vierhavensstraat 40, 3029 BE Rotterdam).
              </p>
            </article>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

function Typography() {
  const state = useThree();
  const { width, height } = state.viewport.getCurrentViewport(
    state.camera,
    [0, 0, 12]
  );
  const shared = {
    font: "/fonts/shippori-mincho-b1-v21-japanese-800.woff",
    fontSize: 0.4,
    letterSpacing: -0.1,
    color: "black",
  };
  return (
    <>
      <Text
        children="Ambience"
        // anchorX="left"
        position={[0, -height / 10, 12]}
        {...shared}
      />
      <Text
        children="of"
        // anchorX="right"
        position={[0, -height * 2, 12]}
        {...shared}
      />
      <Text children="Light" position={[0, -height * 4.624, 12]} {...shared} />
    </>
  );
}

// Reference
// https://codesandbox.io/p/sandbox/scrollcontrols-and-lens-refraction-2n98yj?file=%2Fsrc%2FApp.js%3A7%2C32
