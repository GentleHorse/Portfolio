import * as THREE from "three";
import { useRef, useMemo } from "react";
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
import Header from "../components/header/Header.jsx";
import Astronout from "../components/models/astronout/Astronout.jsx";
import Meteoroid01 from "../components/models/meteoroids/Meteoroid01.jsx";
import { Perf } from "r3f-perf";
import { Gradient, LayerMaterial } from "lamina";

import AmbienceOfLightThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-ambience-of-light.jpg";
import BeautyOfTimePassingThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";
import InterventionInOurDisconnectionThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-intervention-in-our-disconnection.jpg";
import MasuTypoThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-masu-typo.jpg";
import ComfortingDinnerThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-comforting-dinner.jpg";

/**
 * INITIAL PARAM VALUES
 */
const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 20;
const CURVE_PATH_MAX_WIDTH = 2.5;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_ASTRONOUT = 0.02;
const ASTRONOUT_MAX_ANGLE = 35;
const FRICTION_DISTANCE = (CURVE_DISTANCE / 5.95) * 1.5;
const SCROLL_PAGES = 5;
const SCROLL_DAMPING = 0.00025; // the lower, the slower animation gets
const SCROLL_DISTANCE = 10.0; // the higher, the slower animation gets

export default function WorksPage() {
  return (
    <>
      <Header home about contact />

      <Loader />

      <Canvas
        camera={{
          position: [0, 0, 5],
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
      </Canvas>
    </>
  );
}

function Experience() {
  const astronout = useRef();

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls />
      <Background />

      <group ref={astronout}>
        <Astronout rotation={[0, Math.PI, 0]} />
      </group>
    </>
  );
}

function Background() {
  return (
    <>
      <Environment preset="sunset" />
      <Sphere scale={[100, 100, 100]} rotation={[0, Math.PI / 2, 0]}>
        <LayerMaterial
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
          <Gradient
            colorA={"#356CA1"}
            colorB={"snow"}
            axes="y"
            start={0}
            end={-0.5}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
}
