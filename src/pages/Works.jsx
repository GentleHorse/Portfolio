import * as THREE from "three";
import { useRef, useMemo, useLayoutEffect } from "react";
import {
  Environment,
  Float,
  Html,
  Line,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  useScroll,
  Text,
  Image,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Link } from "react-router-dom";
import { Perf } from "r3f-perf";
import { Gradient, LayerMaterial } from "lamina";
import { proxy, useSnapshot } from "valtio";
import { easing } from "maath";
import gsap from "gsap";
import { EffectComposer, Noise, Bloom } from "@react-three/postprocessing";

import Header from "../components/header/Header.jsx";
import PopTiles from "../components/models/popTiles/PopTiles.jsx";

import AmbienceOfLightThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-ambience-of-light.jpg";
import BeautyOfTimePassingThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";
import InterventionInOurDisconnectionThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-intervention-in-our-disconnection.jpg";
import MasuTypoThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-masu-typo.jpg";
import ComfortingDinnerThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-comforting-dinner.jpg";

/**
 * INITIAL SCROLLCONTROLS VALUES
 */
const SCROLL_PAGES = 5;
const SCROLL_DAMPING = 0.1; // the lower, the slower animation gets
const SCROLL_DISTANCE = 5.0; // the higher, the slower animation gets

/**
 * PROJECTS LIST ARRAY
 */
const PROJECTS_LIST_ARRAY = [
  {
    id: "d01",
    title: "Ambience of Light",
  },
  {
    id: "d02",
    title: "Beauty of Time Passing",
  },
  {
    id: "d03",
    title: "Intervention in our Disconnection",
  },
  {
    id: "d04",
    title: "Masu Typo",
  },
  {
    id: "d05",
    title: "Comforting Dinner",
  },
  {
    id: "d06",
    title: "3D Visuals",
  },
  {
    id: "a01",
    title: "Portfolio Website",
  },
  {
    id: "a02",
    title: "OBJECT Rotterdam 2024",
  },
  {
    id: "a03",
    title: "Weather Cereal",
  },
  {
    id: "a04",
    title: "Donuts Universe",
  },
  {
    id: "a05",
    title: "Marble's on a Roll",
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

export default function WorksPage() {
  const effects = useMemo(
    () => (
      <EffectComposer>
        {/* <Noise opacity={0.08} /> */}
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.5} height={300} />
      </EffectComposer>
    ),
    []
  );

  return (
    <>
      <Header home about contact />

      <Loader />

      <Canvas
        camera={{
          position: [0, 3.5, 5.5],
          fov: 30,
        }}
      >
        <color attach="background" args={["#1C1C1C"]} />
        <fog attach="fog" args={["#1C1C1C", 8, 20]} />

        <ScrollControls
          pages={SCROLL_PAGES}
          damping={SCROLL_DAMPING}
          distance={SCROLL_DISTANCE}
        >
          <Experience />
        </ScrollControls>
        {effects}
      </Canvas>
    </>
  );
}

function Experience() {
  /**
   * CAMERA
   */
  const camera = useRef();

  /**
   * Poptiles
   */
  const popTitles = useRef();

  /**
   * SCROLL
   */
  const scroll = useScroll();

  /**
   * USEFRAME - SCROLL ANIMATION
   */
  useFrame((state, delta) => {
    /**
     * FOR MOBILE
     */
    // if (window.innerWidth > window.innerHeight) {
    //   // LANDSCAPE
    //   camera.current.fov = 30;
    //   camera.current.position.z = 5;
    // } else {
    //   // PORTRAIT
    //   camera.current.fov = 80;
    //   camera.current.position.z = 2.5;
    // }

    /**
     * BACKGROUND ANIMATION
     */
    const scrollOffset = Math.max(0, scroll.offset);

    // Match the gsap duration to the scroll offset value
    tl.current.seek(scrollOffset * tl.current.duration());

    /**
     * POPTILE SLIDE ON Z AXIS
     */
    popTitles.current.position.lerp(
      new THREE.Vector3(-0.5, -0.75, 3 * scrollOffset),
      delta * 12
    );
  });

  /**
   * GRADIENT ANIMATION
   */
  const tl = useRef();
  const backgroundColors = useRef({
    colorA: "#FFFFFF",
    colorB: "#C1C1C1",
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 1.0,
      colorA: "#6F35CC",
      colorB: "#FFAD30",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1.0,
      colorA: "#424242",
      colorB: "#FFCC00",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1.0,
      colorA: "#81318B",
      colorB: "#55AB8F",
    });

    tl.current.pause();
  }, []);

  return (
    <>
      {/* <Perf position="top-left" /> */}
      {/* <axesHelper /> */}
      <OrbitControls enableZoom={false} />

      {/* <Background backgroundColors={backgroundColors} /> */}
      <Environment preset="night" />

      {/* <PerspectiveCamera ref={camera} makeDefault /> */}

      {/* <UI scroll={scroll} /> */}

      <group rotation={[0, -Math.PI * 0.1, 0]}>
        <group ref={popTitles}>
          <PopTiles scroll={scroll} scale={[1, 1, 1]} />
        </group>
      </group>
    </>
  );
}

function Background({ backgroundColors }) {
  const start = 0.2;
  const end = -0.5;

  const gradientRef = useRef();
  const gradientEnvRef = useRef();

  useFrame((state, delta) => {
    gradientRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    );
    gradientRef.current.colorB = new THREE.Color(
      backgroundColors.current.colorB
    );
    gradientEnvRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    );
    gradientEnvRef.current.colorB = new THREE.Color(
      backgroundColors.current.colorB
    );
  });

  return (
    <>
      <Sphere scale={[50, 50, 50]} rotation={[0, Math.PI / 2, 0]}>
        <LayerMaterial color="#ffffff" side={THREE.BackSide}>
          <Gradient ref={gradientRef} axes="y" start={start} end={end} />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256} frames={Infinity}>
        <Sphere scale={[10, 10, 10]} rotation={[Math.PI, Math.PI / 2, 0]}>
          <LayerMaterial color="#ffffff" side={THREE.BackSide}>
            <Gradient ref={gradientEnvRef} axes="y" start={start} end={end} />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
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
