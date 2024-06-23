import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, createPortal, useFrame, useThree } from "@react-three/fiber";
import {
  useScroll,
  Text,
  Image,
  Scroll,
  Preload,
  ScrollControls,
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
      <ScrollControls damping={0.2} pages={10} distance={0.5}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

        {/* <TestCube scale={1.5} position={[0, 0, -2]} /> */}

        <Scroll>
          {/* Canvas contents in here will scroll along */}

          <Typography />
          <ProjectImages />

        </Scroll>

        <Scroll html>
          {/* DOM contents in here will scroll along */}

          <article
            className="py-[5%] px-[12%] w-[60vw]"
            style={{ transform: "translate3d(40vw, 250vh, 0)" }}
          >
            <p className="font-roboto text-[#fcfaf2]">
              In his earlier work, "Beauty of Time Passing" (2023), the designer
              ambitiously sought to illuminate indoor spaces by integrating
              data-driven weather landscapes and innovative light manipulation.
              By using glass bricks, known for their reflective qualities, he
              created a harmonious connection between the interior environment
              and the natural world, resulting in a sophisticated,
              nature-inspired ambiance. Now, with his latest project, "Ambience
              of Light," he continues with the same overarching goal but shifts
              his approach to make the project more accessible. This time, he
              focuses on the raw, pure qualities of materials like wood and
              glass, along with intangible elements like light reflections and
              dispersions. By carefully selecting and arranging these
              components, he crafts a much stronger design language. The
              simplified structure of this project also highlights the direct
              influences of the designer's Japanese cultural heritage and his
              personal interpretation of it. This thoughtful approach not only
              enhances the aesthetic appeal but also makes the project more
              relatable and meaningful to a broader audience.
            </p>
          </article>

          <article
            className="py-[5%] px-[12%] w-[60vw]"
            style={{ transform: "translate3d(0vw, 325vh, 0)" }}
          >
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
    fontSize: 0.6,
    letterSpacing: -0.1,
    color: "white",
  };

  return (
    <>
      <Text
        anchorX="left"
        position={[-width / 2.25, -height * 0.1, 12]}
        {...shared}
      >
        AMBIENCE
        <meshBasicMaterial color="white" toneMapped={false} />
      </Text>
      <Text anchorX="center" position={[0, -height * 0.8, 12]} {...shared}>
        OF
        <meshBasicMaterial color="white" toneMapped={false} />
      </Text>
      <Text
        anchorX="right"
        position={[width / 2.5, -height * 1.5, 12]}
        {...shared}
      >
        LIGHT
        <meshBasicMaterial color="white" toneMapped={false} />
      </Text>
    </>
  );
}

function ProjectImages() {
  const state = useThree();
  const { width, height } = state.viewport.getCurrentViewport(
    state.camera,
    [0, 0, 12]
  );

  return (
    <>
      <Image
        url={AmbienceOfLightImage13}
        scale={[14.4 * 0.5, 9.6 * 0.5, 1]}
        position={[-width / 1.5, 0, -5]}
      />

      <Image
        url={AmbienceOfLightImage07}
        scale={[14.4 * 0.5, 9.6 * 0.5, 1]}
        position={[width / 2.5, -height * 2.5, -1]}
      />

      <Image
        url={AmbienceOfLightImage11}
        scale={[14.4 * 0.5, 9.6 * 0.5, 1]}
        position={[-width / 1.5, -height * 5, -10]}
      />

      <Image
        url={AmbienceOfLightImage01}
        scale={[14.4 * 0.5, 9.6 * 0.5, 1]}
        position={[0, -height * 8, 1]}
      />
    </>
  );
}

function TestCube(props) {
  const testCube = useRef();

  const scroll = useScroll();

  useFrame((state, delta) => {
    testCube.current.rotation.y = Math.PI * 2 * scroll.offset;
  });

  return (
    <mesh {...props} ref={testCube}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}

// Reference
// https://codesandbox.io/p/sandbox/scrollcontrols-and-lens-refraction-2n98yj?file=%2Fsrc%2FApp.js%3A7%2C32
