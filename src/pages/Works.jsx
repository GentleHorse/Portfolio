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
const LINE_NB_POINTS = 2000;
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
  const curve = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(-2, 0, -20),
        new THREE.Vector3(-3, 0, -30),
        new THREE.Vector3(0, 0, -40),
        new THREE.Vector3(5, 0, -50),
        new THREE.Vector3(7, 0, -60),
        new THREE.Vector3(5, 0, -70),
        new THREE.Vector3(0, 0, -80),
        new THREE.Vector3(0, 0, -90),
        new THREE.Vector3(0, 0, -100),
      ],
      false,
      "catmullrom",
      0.5
    );

    return curve;
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.2);

    return shape;
  }, [curve]);

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls />
      <Background />

      {/* Astronout */}
      <Float floatIntensity={2} speed={2}>
        <Astronout rotation={[0, Math.PI, 0]} scale={[0.5, 0.5, 0.5]} />
      </Float>

      {/* LINE */}
      <group position={[0, -2.5, 0]}>
        {/* <Line
          points={linePoints}
          color={"snow"}
          opacity={0.7}
          transparent
          lineWidth={16}
        /> */}
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial color={"snow"} opacity={0.65} transparent />
        </mesh>
      </group>

      {/* Meteoroids */}
      <Meteoroid01
        opacity={0.5}
        scale={[0.3, 0.3, 0.3]}
        position={[-2, 1, -3]}
      />
      <Meteoroid01
        opacity={0.5}
        scale={[0.2, 0.3, 0.4]}
        position={[1.5, -0.5, -2]}
      />
      <Meteoroid01
        opacity={0.7}
        scale={[0.3, 0.3, 0.4]}
        rotation={[0, Math.PI / 9, 0]}
        position={[2, -0.2, -2]}
      />
      <Meteoroid01
        opacity={0.7}
        scale={[0.4, 0.4, 0.4]}
        rotation={[0, Math.PI / 9, 0]}
        position={[1, -0.2, -12]}
      />
      <Meteoroid01
        opacity={0.7}
        scale={[0.5, 0.5, 0.5]}
        position={[-1, 1, -53]}
      />
      <Meteoroid01
        opacity={0.3}
        scale={[0.8, 0.8, 0.8]}
        position={[0, 1, -100]}
      />
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
