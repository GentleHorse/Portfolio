import * as THREE from "three";
import { useRef, useMemo, useEffect } from "react";
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
import { isMobile, isBrowser } from "react-device-detect";

import Header from "../components/header/Header.jsx";
import PopTiles from "../components/models/popTiles/PopTiles.jsx";

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
        camera={
          isBrowser
            ? {
                fov: 30,
                position: [0, 3.5, 5.5],
              }
            : {
                fov: 80,
                position: [0, 0.5, 2.5],
              }
        }
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
   * Poptiles
   */
  const popTiles = useRef();

  /**
   * SCROLL
   */
  const scroll = useScroll();

  /**
   * USEFRAME - SCROLL ANIMATION
   */
  const tl = useRef();
  useFrame((state, delta) => {
    /**
     * BACKGROUND ANIMATION
     */
    const scrollOffset = Math.max(0, scroll.offset);

    /**
     * POPTILE SLIDE ON Z AXIS
     */
    popTiles.current.position.lerp(
      new THREE.Vector3(-0.5, -0.75, 3 * scrollOffset),
      delta * 12
    );

    /**
     * ORBIT CONTROL LIKE EFFECT
     */
    popTiles.current.rotation.y = mouse.x * 0.004;
  });

  return (
    <>
      <Perf position="top-left" />
      {/* <axesHelper /> */}
      {/* <OrbitControls enableZoom={false} /> */}

      <Environment preset="night" />

      {/* <UI scroll={scroll} /> */}

      <group
        rotation={[0, -Math.PI * 0.1, 0]}
        position={isBrowser ? [0, 0, 0] : [0.5, 0, 0]}
      >
        <group ref={popTiles}>
          <PopTiles
            scroll={scroll}
            projectListArray={PROJECTS_LIST_ARRAY}
            scale={[1, 1, 1]}
          />
        </group>
      </group>
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
