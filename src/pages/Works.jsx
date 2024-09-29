import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import {
  Environment,
  Float,
  Html,
  Line,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  Text,
  Preload,
  Image as ImageImpl,
  Scroll,
  useScroll,
  ScrollControls,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Link, useNavigate } from "react-router-dom";
import { Perf } from "r3f-perf";
import { Gradient, LayerMaterial } from "lamina";
import { proxy, useSnapshot } from "valtio";
import { easing } from "maath";
import gsap from "gsap";
import { EffectComposer, Noise, Bloom } from "@react-three/postprocessing";
import { isMobile, isBrowser } from "react-device-detect";

import Header from "../components/header/Header.jsx";

import AmbienceOfLightThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-ambience-of-light.jpg";
import BeautyOfTimePassingThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";
import InterventionInOurDisconnectionThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-intervention-in-our-disconnection.jpg";
import MasuTypoThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-masu-typo.jpg";
import ComfortingDinnerThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-comforting-dinner.jpg";
import ThreeDVisualThumbnail from "../../public/images/app-developments/__thumbnail-images/thumbnail-3-d-visuals.jpg";
import PortfolioWebsiteThumbnail from "../../public/images/app-developments/__thumbnail-images/thumbnail-portfolio-website.jpg";
import OBJECRotterdam2024Thumbnail from "../../public/images/app-developments/__thumbnail-images/thumbnail-object-rotterdam-2024.jpg";
import WeatherCerealThumbnail from "../../public/images/app-developments/__thumbnail-images/thumbnail-weather-cereal.jpg";
import DonutsUniverseThumbnail from "../../public/images/app-developments/__thumbnail-images/thumbnail-donuts-universe.jpg";
import MarbleOnARollThumbnail from "../../public/images/app-developments/__thumbnail-images/thumbnail-marble-on-a-roll.jpg";

/**
 * SCROLL VALUES
 */
const SCROLL_PAGES = 5.25;
const SCROLL_DAMPING = 0.4; // the lower, the slower animation gets
const SCROLL_DISTANCE = 0.5; // the higher, the slower animation gets

/**
 * PROJECT THUMBNAIL IMAGE VALUES
 */
const IMAGE_DIST_STRENGTH = 0.45;

/**
 * PROJECTS LIST ARRAY
 */
const PROJECTS_LIST_ARRAY = [
  {
    id: "d01",
    title: "Ambience of Light",
    imageUrl: AmbienceOfLightThumbnail,
    zPos: 0,
  },
  {
    id: "d02",
    title: "Beauty of Time Passing",
    imageUrl: BeautyOfTimePassingThumbnail,
    zPos: -1,
  },
  {
    id: "d03",
    title: "Intervention in our Disconnection",
    imageUrl: InterventionInOurDisconnectionThumbnail,
    zPos: 1,
  },
  {
    id: "d04",
    title: "Masu Typo",
    imageUrl: MasuTypoThumbnail,
    zPos: 0,
  },
  {
    id: "d05",
    title: "Comforting Dinner",
    imageUrl: ComfortingDinnerThumbnail,
    zPos: -1,
  },
  {
    id: "d06",
    title: "3D Visuals",
    imageUrl: ThreeDVisualThumbnail,
    zPos: 1,
  },
  {
    id: "a01",
    title: "Portfolio Website",
    imageUrl: PortfolioWebsiteThumbnail,
    zPos: 0,
  },
  {
    id: "a02",
    title: "OBJECT Rotterdam 2024",
    imageUrl: OBJECRotterdam2024Thumbnail,
    zPos: -1,
  },
  {
    id: "a03",
    title: "Weather Cereal",
    imageUrl: WeatherCerealThumbnail,
    zPos: 1,
  },
  {
    id: "a04",
    title: "Donuts Universe",
    imageUrl: DonutsUniverseThumbnail,
    zPos: 0,
  },
  {
    id: "a05",
    title: "Marble's on a Roll",
    imageUrl: MarbleOnARollThumbnail,
    zPos: -1,
  },
];

/**
 * FOR INDICATOR BAR
 */
const geometry = new THREE.CylinderGeometry(0.025, 0.025, 2.5, 16);
const material = new THREE.MeshStandardMaterial({
  color: "#1C1C1C",
  roughness: 0.125,
  metalness: 0.65,
});

/**
 * PROXY STATE
 */
const state = proxy({
  projects: PROJECTS_LIST_ARRAY,
});

/**
 * COMPONENTS ======================================================
 */
export default function WorksPage() {
  return (
    <>
      <Header home about contact />

      <Loader />

      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        {/* <color attach="background" args={["#1C1C1C"]} />
        <fog attach="fog" args={["#1C1C1C", 8, 20]} /> */}

        <ScrollControls
          infinite={false}
          horizontal={true}
          pages={SCROLL_PAGES}
          damping={SCROLL_DAMPING}
          distance={SCROLL_DISTANCE}
        >
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
}

function Experience() {
  return (
    <>
      {/* <Perf position="top-left" /> */}
      {/* <axesHelper /> */}
      {/* <OrbitControls enableZoom={false} /> */}

      <Environment preset="night" />

      {/* <UI scroll={scroll} /> */}

      <Scroll>
        <ProjectThumbnails />
      </Scroll>
    </>
  );
}

function ProjectThumbnails({ m = 0.4, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;

  const textProps = {
    position: [-1.5, 0, 0.1],
    fontSize: 0.25,
    font: "./fonts/DMSerifDisplay-Regular.ttf",
    maxWidth: 2.5,
    anchorX: "left",
  };

  /**
   * MOUSE POINTER SET UP ON HOVER STATE
   */
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return (
    <group {...props}>
      {PROJECTS_LIST_ARRAY.map((project, index) => (
        <group
          key={project.id}
          position={[index * width * IMAGE_DIST_STRENGTH, 0, project.zPos]}
          onPointerOver={(event) => {
            event.stopPropagation();
            setHovered(true);
          }}
          onPointerOut={() => setHovered(false)}
        >
          <Image scale={[width * w - m * 2, 5, 1]} url={project.imageUrl} />
          <Text
            position={textProps.position}
            fontSize={textProps.fontSize}
            font={textProps.font}
            maxWidth={textProps.maxWidth}
            anchorX={textProps.anchorX}
          >
            {project.title}
            <meshBasicMaterial color="#ffffff" toneMapped={false} />
          </Text>
        </group>
      ))}
    </group>
  );
}

function Image({ ...props }) {
  const ref = useRef();
  const group = useRef();
  const data = useScroll();

  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(
      group.current.position.z,
      Math.max(0, data.delta * 50),
      4,
      delta
    );
  });
  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} toneMapped={false} />
    </group>
  );
}

function UI({ scroll }) {
  const { width, height } = useThree((state) => state.viewport);
  const { projects } = useSnapshot(state);
  const indicator = useRef();

  useFrame((state, delta) => {
    const scrollOffset = Math.max(0, scroll.offset);

    // console.log(scrollOffset);

    indicator.current.children.forEach((child, index) => {
      const y = scroll.curve(
        index / projects.length - 1.5 / projects.length,
        4 / projects.length
      );
      easing.damp(child.scale, "y", 0.01 + y / 8, 0.1, delta);
    });
  });

  return (
    <>
      <group ref={indicator}>
        {projects.map((_, i) => (
          <mesh
            key={i}
            geometry={geometry}
            material={material}
            position={[i * 0.12 - projects.length * 0.06, 0.05, 3]}
          />
        ))}
      </group>
    </>
  );
}
