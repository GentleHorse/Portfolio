import * as THREE from "three";
import { useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useScroll,
  Text,
  Image,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Link } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Astronout from "../components/models/astronout/Astronout.jsx";


export default function WorksPage() {
  return (
    <>
      <Header home about contact />

      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 30,
        }}
      >
        <color attach="background" args={["#1C1C1C"]} />
        
        <OrbitControls />
        <Background />
        <Environment preset="forest" />

        <Astronout />

        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  );
}

function Background(){
  return <></>
}


// =====================================================


function TextOnlyScrollContents() {
  const navigate = useNavigate();

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
      <ScrollControls damping={0.15} pages={10} distance={0.5}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

        <TestCube scale={1.5} position={[0, 0, -2]} />

        <Scroll>{/* Canvas contents in here will scroll along */}</Scroll>

        <Scroll html>
          {/* DOM contents in here will scroll along */}

          <section className="flex flex-col">
            <h1 className="font-permanent-marker mb-[5px] text-[60px] text-[#d0e6efb1]">
              Design
            </h1>

            <button
              className="text-left"
              onClick={() => {
                navigate("/ambience-of-light");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Ambience of Light
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/beauty-of-time-passing");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Beauty of Time Passing
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/intervention-in-our-disconnection");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Intervention In Our Disconnection
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/masu-typo");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Masu Typo
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/comforting-dinner");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Comforting Dinner
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/three-d-visuals");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                3D Visuals
              </p>
            </button>
          </section>

          <section className="flex flex-col">
            <h1 className="font-permanent-marker mb-[5px] text-[60px] text-[#d0e6efb1]">
              Web Development
            </h1>

            <button
              className="text-left"
              onClick={() => {
                navigate("/portfolio-website");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Portfolio Website
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/object-rotterdam-2024");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Object Rotterdam 2024
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/weather-cereal");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Weather Cereal
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/donuts-universe");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Donuts Universe
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/marble-race");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Marble Race
              </p>
            </button>
          </section>

          <article
            className="py-[5%] px-[12%] w-[60vw]"
            style={{ transform: "translate3d(40vw, 250vh, 0)" }}
          >
            <p className="font-roboto text-[#fcfaf2]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              massa ultricies, venenatis lorem vitae, mollis urna. Aliquam quis
              rutrum orci. Sed sodales, metus vel tempor fringilla, nibh sapien
              molestie nisi, in convallis lorem erat et tortor. In luctus tellus
              pharetra diam interdum, at fermentum nibh luctus. Morbi rhoncus
              mollis enim, vitae rutrum dui accumsan eu. Cras laoreet sit amet
              urna quis vulputate. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer venenatis, lectus id dapibus consectetur,
              dui lacus viverra libero, eu faucibus ipsum nibh ac ipsum. Ut nunc
              odio, blandit vel condimentum ac, tincidunt ut nunc. Duis est dui,
              semper sit amet lectus eget, feugiat scelerisque urna. Sed
              consequat, arcu sit amet pharetra laoreet, dui mi pellentesque
              ante, in tristique orci enim in ipsum. Sed ultrices fermentum est,
              quis congue mauris interdum vel. Aliquam id eros in lectus
              pulvinar sagittis vitae eu augue. Duis at semper risus, eu maximus
              mauris. Proin eget erat ac nisi pharetra placerat. Vestibulum sit
              amet euismod ex. Vivamus sagittis pulvinar ante ac tristique.
              Morbi convallis, magna in bibendum tempus, nunc est commodo
              libero, at rhoncus augue ex nec felis. Pellentesque condimentum
              bibendum mi, sit amet sollicitudin nisl. Ut sem felis, pretium id
              iaculis vitae, dignissim a quam. Quisque bibendum lacus sed erat
              ultrices, ut efficitur sapien scelerisque. Phasellus orci nibh,
              convallis vel dolor at, vulputate consectetur nulla. Duis vehicula
              orci augue, non iaculis ipsum fringilla quis. Nullam consectetur,
              sapien sit amet tincidunt pretium, lacus lectus ultricies nibh,
              sit amet lobortis purus ex at diam. Pellentesque lorem dolor,
              malesuada quis accumsan ac, auctor sed est. Nam aliquam sem vitae
              sagittis pharetra. Duis volutpat, sapien vitae egestas lobortis,
              ipsum nisl aliquam enim, ac ultrices ante erat eu lorem. Aliquam
              tempor placerat volutpat. Nullam vitae tristique arcu. Vivamus
              magna mauris, faucibus id dapibus ut, vehicula a dolor. Aliquam
              tempus sem gravida felis porta aliquam. Nullam eu diam neque. Nam
              euismod eleifend mauris a feugiat. Cras porttitor libero et arcu
              gravida porttitor. Sed arcu odio, egestas dignissim sodales sit
              amet, molestie sit amet erat. Fusce non turpis diam. Vestibulum a
              ipsum non nulla tincidunt cursus. Fusce orci dui, fermentum eget
              condimentum eget, viverra vitae odio. Integer sed nisl vitae elit
              eleifend egestas eu eget nunc. In efficitur pretium accumsan. Cras
              venenatis sollicitudin elit ut suscipit. Duis quis justo urna.
              Aliquam venenatis id eros vitae commodo. Suspendisse iaculis
              suscipit est nec sagittis. Nullam viverra felis orci. Nam quis
              arcu accumsan, luctus lorem vitae, gravida turpis. Integer
              gravida, libero et molestie consectetur, tellus quam pellentesque
              ipsum, vitae hendrerit ante turpis nec ante. Morbi dignissim nisi
              sed erat varius accumsan. Vivamus vitae egestas nisl, et sodales
              est. Mauris ac blandit dolor. Ut quis elit lacus. Integer
              convallis, justo ac pretium efficitur, erat magna tincidunt urna,
              commodo gravida velit purus ut magna. Nulla ac leo sed ipsum
              faucibus pulvinar. Duis a sollicitudin leo, in interdum dolor.
              Pellentesque ac enim id ligula finibus consectetur ut ut turpis.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Vestibulum luctus eleifend justo.
            </p>
          </article>
        </Scroll>
      </ScrollControls>
    </Canvas>
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
