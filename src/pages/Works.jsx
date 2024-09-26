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
} from "@react-three/drei";
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
import { Perf } from "r3f-perf";
import { Gradient, LayerMaterial } from "lamina";

import Header from "../components/header/Header.jsx";
import Astronout from "../components/models/astronout/Astronout.jsx";
import Meteoroid from "../components/models/meteoroids/Meteoroid.jsx";
import Monolith from "../components/models/monolith/Monolith.jsx";

import AmbienceOfLightThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-ambience-of-light.jpg";
import BeautyOfTimePassingThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";
import InterventionInOurDisconnectionThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-intervention-in-our-disconnection.jpg";
import MasuTypoThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-masu-typo.jpg";
import ComfortingDinnerThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-comforting-dinner.jpg";
import gsap from "gsap";
import {
  fadeOnBeforeCompile,
  fadeOnBeforeCompileFlat,
} from "../utils/fadeMaterial.js";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import PopTiles from "../components/models/popTiles/PopTiles.jsx";

/**
 * INITIAL SCROLLCONTROLS VALUES
 */
const SCROLL_PAGES = 11;
const SCROLL_DAMPING = 0.1; // the lower, the slower animation gets
const SCROLL_DISTANCE = 5.0; // the higher, the slower animation gets

export default function WorksPage() {
  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.08} />
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
          position: [6, 7, 8],
          fov: 30,
        }}
      >
        <color attach="background" args={["#ececec"]} />

        <ScrollControls
          pages={SCROLL_PAGES}
          damping={SCROLL_DAMPING}
          distance={SCROLL_DISTANCE}
        >
          <Experience />
        </ScrollControls>
        {/* {effects} */}
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
      <Perf position="top-left" />
      <axesHelper />
      <OrbitControls enableZoom={false} />

      {/* <Background backgroundColors={backgroundColors} /> */}
      <Environment preset="city" />

      {/* <PerspectiveCamera ref={camera} makeDefault /> */}

      <PopTiles scroll={scroll} />
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
      <Sphere scale={[500, 500, 500]} rotation={[0, Math.PI / 2, 0]}>
        <LayerMaterial color="#ffffff" side={THREE.BackSide}>
          <Gradient ref={gradientRef} axes="y" start={start} end={end} />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256} frames={Infinity}>
        <Sphere scale={[100, 100, 100]} rotation={[Math.PI, Math.PI / 2, 0]}>
          <LayerMaterial color="#ffffff" side={THREE.BackSide}>
            <Gradient ref={gradientEnvRef} axes="y" start={start} end={end} />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  );
}
