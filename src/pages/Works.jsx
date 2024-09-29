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
import { faLess } from "@fortawesome/free-brands-svg-icons";

/**
 * INITIAL SCROLLCONTROLS VALUES
 */
const SCROLL_PAGES = 4;
const SCROLL_DAMPING = 0.4; // the lower, the slower animation gets
const SCROLL_DISTANCE = 1; // the higher, the slower animation gets

/**
 * PROJECTS LIST ARRAY
 */
const PROJECTS_LIST_ARRAY = [
  {
    id: "d01",
    title: "Ambience of Light",
    imageUrl: AmbienceOfLightThumbnail,
  },
  {
    id: "d02",
    title: "Beauty of Time Passing",
    imageUrl: BeautyOfTimePassingThumbnail,
  },
  {
    id: "d03",
    title: "Intervention in our Disconnection",
    imageUrl: InterventionInOurDisconnectionThumbnail,
  },
  {
    id: "d04",
    title: "Masu Typo",
    imageUrl: MasuTypoThumbnail,
  },
  {
    id: "d05",
    title: "Comforting Dinner",
    imageUrl: ComfortingDinnerThumbnail,
  },
  {
    id: "d06",
    title: "3D Visuals",
    imageUrl: ThreeDVisualThumbnail,
  },
  {
    id: "a01",
    title: "Portfolio Website",
    imageUrl: PortfolioWebsiteThumbnail,
  },
  {
    id: "a02",
    title: "OBJECT Rotterdam 2024",
    imageUrl: OBJECRotterdam2024Thumbnail,
  },
  {
    id: "a03",
    title: "Weather Cereal",
    imageUrl: WeatherCerealThumbnail,
  },
  {
    id: "a04",
    title: "Donuts Universe",
    imageUrl: DonutsUniverseThumbnail,
  },
  {
    id: "a05",
    title: "Marble's on a Roll",
    imageUrl: MarbleOnARollThumbnail,
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
      <Perf position="top-left" />
      <axesHelper />
      {/* <OrbitControls enableZoom={false} /> */}

      <Environment preset="night" />

      {/* <UI scroll={scroll} /> */}

      <Scroll>
        <Pages />
      </Scroll>
    </>
  );
}

function Pages() {
  const { width } = useThree((state) => state.viewport);
  return (
    <>
      <Page
        position={[-width * 1, 0, 0]}
        urls={[
          PROJECTS_LIST_ARRAY[0].imageUrl,
          PROJECTS_LIST_ARRAY[1].imageUrl,
          PROJECTS_LIST_ARRAY[2].imageUrl,
        ]}
      />
      <Page
        position={[width * 0, 0, 0]}
        urls={[
          PROJECTS_LIST_ARRAY[3].imageUrl,
          PROJECTS_LIST_ARRAY[4].imageUrl,
          PROJECTS_LIST_ARRAY[5].imageUrl,
        ]}
      />
      <Page
        position={[width * 1, 0, 0]}
        urls={[
          PROJECTS_LIST_ARRAY[6].imageUrl,
          PROJECTS_LIST_ARRAY[7].imageUrl,
          PROJECTS_LIST_ARRAY[8].imageUrl,
        ]}
      />
      <Page
        position={[width * 2, 0, 0]}
        urls={[
          PROJECTS_LIST_ARRAY[9].imageUrl,
          PROJECTS_LIST_ARRAY[10].imageUrl,
          PROJECTS_LIST_ARRAY[1].imageUrl,
        ]}
      />
      <Page
        position={[width * 3, 0, 0]}
        urls={[
          PROJECTS_LIST_ARRAY[2].imageUrl,
          PROJECTS_LIST_ARRAY[3].imageUrl,
          PROJECTS_LIST_ARRAY[4].imageUrl,
        ]}
      />
      <Page
        position={[width * 4, 0, 0]}
        urls={[
          PROJECTS_LIST_ARRAY[5].imageUrl,
          PROJECTS_LIST_ARRAY[6].imageUrl,
          PROJECTS_LIST_ARRAY[7].imageUrl,
        ]}
      />
      <Page
        position={[width * 4, 0, 0]}
        urls={[
          PROJECTS_LIST_ARRAY[8].imageUrl,
          PROJECTS_LIST_ARRAY[9].imageUrl,
          PROJECTS_LIST_ARRAY[10].imageUrl,
        ]}
      />
      <Page
        position={[-width * 1, 0, 0]}
        urls={[
          PROJECTS_LIST_ARRAY[0].imageUrl,
          PROJECTS_LIST_ARRAY[1].imageUrl,
          PROJECTS_LIST_ARRAY[2].imageUrl,
        ]}
      />
    </>
  );
}

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;
  return (
    <group {...props}>
      <Image
        position={[-width * w, 0, -1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[0]}
      />
      <Image
        position={[0, 0, 0]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[1]}
      />
      <Image
        position={[width * w, 0, 1]}
        scale={[width * w - m * 2, 5, 1]}
        url={urls[2]}
      />
    </group>
  );
}

function Image(props) {
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
    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      Math.max(0, 1 - data.delta * 1000),
      4,
      delta
    );
  });
  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} />
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
