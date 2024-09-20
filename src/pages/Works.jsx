import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import {
  Environment,
  Float,
  Html,
  Loader,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useScroll,
  Text,
  Image,
  Scroll,
  ScrollControls,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { Link } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import { Perf } from "r3f-perf";
import Monolith from "../components/models/monolith/Monolith.jsx";

import AmbienceOfLightThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-ambience-of-light.jpg";
import BeautyOfTimePassingThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";
import InterventionInOurDisconnectionThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-intervention-in-our-disconnection.jpg";
import MasuTypoThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-masu-typo.jpg";
import ComfortingDinnerThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-comforting-dinner.jpg";

/**
 * INITIAL PARAM VALUES
 */
const SCROLL_PAGES = 10;
const SCROLL_DAMPING = 0.15;
const SCROLL_DISTANCE = 0.5;
const MONOLITH_MOUSE_POINTER_ROTATION_STRENGTH = 0.025;

export default function WorksPage() {
  return (
    <>
      <Header home about contact />

      <Loader />

      <Canvas>
        <ScrollControls
          pages={SCROLL_PAGES}
          damping={SCROLL_DAMPING}
          distance={SCROLL_DISTANCE}
        >
          <Scene />
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
}

function Experience() {
  /**
   * SETTING FOR LINKS TO INDIVIDUAL PAGES
   */
  const navigate = useNavigate();

  /**
   * MONOLITH PARAMS
   */
  const monolithDistance = 45.0;
  const monolithPositionsArray = [
    {
      id: "Ambience of Light",
      position: [0, 0, 0],
      imageUrl: AmbienceOfLightThumbnail,
    },
    {
      id: "Beauty of Time Passing",
      position: [0, 0, -1 * monolithDistance],
      imageUrl: BeautyOfTimePassingThumbnail,
    },
    {
      id: "Intervention In Our Disconnection",
      position: [0, 0, -2 * monolithDistance],
      imageUrl: InterventionInOurDisconnectionThumbnail,
    },
    {
      id: "Masu Typo",
      position: [0, 0, -3 * monolithDistance],
      imageUrl: MasuTypoThumbnail,
    },
    {
      id: "Comforting Dinner",
      position: [0, 0, -4 * monolithDistance],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "3D Visuals",
      position: [0, 0, -5 * monolithDistance],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "Portfolio Website",
      position: [0, 0, -6 * monolithDistance],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "OBJECT Rotterdam 2024",
      position: [0, 0, -7 * monolithDistance],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "Weather Cereal",
      position: [0, 0, -8 * monolithDistance],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "Donuts Universe",
      position: [0, 0, -9 * monolithDistance],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "Marble's on a Roll",
      position: [0, 0, -10 * monolithDistance],
      imageUrl: ComfortingDinnerThumbnail,
    },
  ];

  /**
   * MOUSE POINTER MOVE SETTING
   */
  const mouse = new THREE.Vector2();

  useEffect(() => {
    window.addEventListener("pointermove", (event) => {
      if (event.isPrimary === false) return;

      // Scale half window side into 1% for mouse movements
      mouse.x = (event.clientX - window.innerWidth / 2) * 0.02;
      mouse.y = (event.clientY - window.innerHeight / 2) * 0.02;
    });
  }, []);

  /**
   * REF - CAMERA
   */
  const cameraGroup = useRef();

  /**
   * REF - ARRAY REF FOR MONOLITHs
   */
  const monolithInputRefs = useRef([]);

  /**
   * USESCROLL
   */
  const scroll = useScroll(); // must declare INSIDE <ScrollControls> !!

  useFrame(() => {
    // Horizontal scroll effect
    cameraGroup.current.position.z =
      -(scroll.offset * monolithDistance * monolithPositionsArray.length);

    // Orbit control like effect
    if (monolithInputRefs.length === 0) return;

    for (let i = 0; i < monolithPositionsArray.length; i++) {
      if (
        scroll.offset >= (i - 0.5) / monolithPositionsArray.length &&
        scroll.offset < (i + 0.5) / monolithPositionsArray.length
      ) {
        monolithInputRefs.current[i].children[0].rotation.y =
          mouse.x * MONOLITH_MOUSE_POINTER_ROTATION_STRENGTH;
        monolithInputRefs.current[i].children[0].rotation.x =
          mouse.y * MONOLITH_MOUSE_POINTER_ROTATION_STRENGTH;
      }
    }
  });

  return (
    <>
      {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

      <group ref={cameraGroup}>
        <PerspectiveCamera position={[0, 0.5, 0]} fov={15} makeDefault />
      </group>

      <group position={[0, 0, -20]}>
        {monolithPositionsArray.map((monolith, index) => (
          <group
            ref={(element) => (monolithInputRefs.current[index] = element)}
            key={monolith.id}
            position={monolith.position}
          >
            <group scale={[1.5, 1.5, 1.5]} position={[0, 0.5, 0]}>
              {/* <Monolith /> */}
              <Image
                url={monolith.imageUrl}
                position={[0.1, 0, 0]}
                scale={[14.4 * 0.2, 9.6 * 0.2, 1]}
                toneMapped={false}
              />
            </group>

            <Text
              position={[-2.0, 0, 0.5]}
              fontSize={0.35}
              font="./fonts/DMSerifDisplay-Regular.ttf"
              maxWidth={1.5}
              anchorX="left"
            >
              {monolith.id}
              <meshBasicMaterial color="#ffffff" toneMapped={false} />
            </Text>
          </group>
        ))}
      </group>

      {/* REFLECTIVE FLOOR FOR DESIGN WORKS */}
      <mesh
        scale={[40, 500, 1]}
        position={[0, -1.6, -250]}
        rotation={[-Math.PI * 0.5, 0, 0]}
      >
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={256} // this affects performance a lot!
          blur={[300, 100]}
          mixBlur={1}
          mirror={[0.85]}
          color="#1C1C1C"
          mixStrength={2}
          depthScale={1}
          minDepthThreshold={0.85}
          metalness={0.5}
          roughness={0.1}
          distortion={2.5}
          reflectorOffset={0.01}
          envMapIntensity={0.5}
        />
      </mesh>

      {/* ------------------------------------------------------------------ */}

      {/* <Scroll html>
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
            consequat, arcu sit amet pharetra laoreet, dui mi pellentesque ante,
            in tristique orci enim in ipsum. Sed ultrices fermentum est, quis
            congue mauris interdum vel. Aliquam id eros in lectus pulvinar
            sagittis vitae eu augue. Duis at semper risus, eu maximus mauris.
            Proin eget erat ac nisi pharetra placerat. Vestibulum sit amet
            euismod ex. Vivamus sagittis pulvinar ante ac tristique. Morbi
            convallis, magna in bibendum tempus, nunc est commodo libero, at
            rhoncus augue ex nec felis. Pellentesque condimentum bibendum mi,
            sit amet sollicitudin nisl. Ut sem felis, pretium id iaculis vitae,
            dignissim a quam. Quisque bibendum lacus sed erat ultrices, ut
            efficitur sapien scelerisque. Phasellus orci nibh, convallis vel
            dolor at, vulputate consectetur nulla. Duis vehicula orci augue, non
            iaculis ipsum fringilla quis. Nullam consectetur, sapien sit amet
            tincidunt pretium, lacus lectus ultricies nibh, sit amet lobortis
            purus ex at diam. Pellentesque lorem dolor, malesuada quis accumsan
            ac, auctor sed est. Nam aliquam sem vitae sagittis pharetra. Duis
            volutpat, sapien vitae egestas lobortis, ipsum nisl aliquam enim, ac
            ultrices ante erat eu lorem. Aliquam tempor placerat volutpat.
            Nullam vitae tristique arcu. Vivamus magna mauris, faucibus id
            dapibus ut, vehicula a dolor. Aliquam tempus sem gravida felis porta
            aliquam. Nullam eu diam neque. Nam euismod eleifend mauris a
            feugiat. Cras porttitor libero et arcu gravida porttitor. Sed arcu
            odio, egestas dignissim sodales sit amet, molestie sit amet erat.
            Fusce non turpis diam. Vestibulum a ipsum non nulla tincidunt
            cursus. Fusce orci dui, fermentum eget condimentum eget, viverra
            vitae odio. Integer sed nisl vitae elit eleifend egestas eu eget
            nunc. In efficitur pretium accumsan. Cras venenatis sollicitudin
            elit ut suscipit. Duis quis justo urna. Aliquam venenatis id eros
            vitae commodo. Suspendisse iaculis suscipit est nec sagittis. Nullam
            viverra felis orci. Nam quis arcu accumsan, luctus lorem vitae,
            gravida turpis. Integer gravida, libero et molestie consectetur,
            tellus quam pellentesque ipsum, vitae hendrerit ante turpis nec
            ante. Morbi dignissim nisi sed erat varius accumsan. Vivamus vitae
            egestas nisl, et sodales est. Mauris ac blandit dolor. Ut quis elit
            lacus. Integer convallis, justo ac pretium efficitur, erat magna
            tincidunt urna, commodo gravida velit purus ut magna. Nulla ac leo
            sed ipsum faucibus pulvinar. Duis a sollicitudin leo, in interdum
            dolor. Pellentesque ac enim id ligula finibus consectetur ut ut
            turpis. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Vestibulum luctus eleifend justo.
          </p>
        </article>
      </Scroll> */}
    </>
  );
}

function Scene() {
  return (
    <>
      {/* <OrbitControls /> */}
      {/* <axesHelper /> */}
      <Perf position="top-left" />

      <fog attach="fog" args={["#1C1C1C", 8, 35]} />
      <Environment preset="studio" />
    </>
  );
}
