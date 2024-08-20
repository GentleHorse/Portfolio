import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useScroll,
  Text,
  Image,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import Header from "../components/header/Header.jsx";

export default function AboutPage() {
  return (
    <>
      <Header home works contact />

      <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
        <ScrollControls damping={0.15} pages={10} distance={0.5}>
          {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

          <TestCube scale={1.5} position={[0, 0, -2]} />

          <Scroll>{/* Canvas contents in here will scroll along */}</Scroll>

          <Scroll html>
            {/* DOM contents in here will scroll along */}
            <h1 className="font-permanent-marker mb-[5px] text-[60px] text-[#cbe2fd]">
              Hello, it's Me, Toshi !
            </h1>

            

            <article
              className="py-[5%] px-[12%] w-[60vw]"
              style={{ transform: "translate3d(40vw, 250vh, 0)" }}
            >
              <p className="font-roboto text-[#fcfaf2]">
                In his earlier work, "Beauty of Time Passing" (2023), the
                designer ambitiously sought to illuminate indoor spaces by
                integrating data-driven weather landscapes and innovative light
                manipulation. By using glass bricks, known for their reflective
                qualities, he created a harmonious connection between the
                interior environment and the natural world, resulting in a
                sophisticated, nature-inspired ambiance. Now, with his latest
                project, "Ambience of Light," he continues with the same
                overarching goal but shifts his approach to make the project
                more accessible. This time, he focuses on the raw, pure
                qualities of materials like wood and glass, along with
                intangible elements like light reflections and dispersions. By
                carefully selecting and arranging these components, he crafts a
                much stronger design language. The simplified structure of this
                project also highlights the direct influences of the designer's
                Japanese cultural heritage and his personal interpretation of
                it. This thoughtful approach not only enhances the aesthetic
                appeal but also makes the project more relatable and meaningful
                to a broader audience.
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
