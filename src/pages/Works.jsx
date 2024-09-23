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
import { Perf } from "r3f-perf";
import { Gradient, LayerMaterial } from "lamina";

import Header from "../components/header/Header.jsx";
import Astronout from "../components/models/astronout/Astronout.jsx";
import Meteoroid01 from "../components/models/meteoroids/Meteoroid01.jsx";
import Monolith from "../components/models/monolith/Monolith.jsx";

import AmbienceOfLightThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-ambience-of-light.jpg";
import BeautyOfTimePassingThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";
import InterventionInOurDisconnectionThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-intervention-in-our-disconnection.jpg";
import MasuTypoThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-masu-typo.jpg";
import ComfortingDinnerThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-comforting-dinner.jpg";

/**
 * INITIAL PARAM VALUES
 */
const LINE_NB_POINTS = 12000;
const SCROLL_PAGES = 10;
const SCROLL_DAMPING = 0.25; // the lower, the slower animation gets
const SCROLL_DISTANCE = 2.5; // the higher, the slower animation gets

export default function WorksPage() {
  return (
    <>
      <Header home about contact />

      <Loader />

      <Canvas>
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
  /**
   * CURVE PATH
   */

  // catmullromcurve3
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

  // line points on the curve (points num: LINE_NB_POINTS)
  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  // shape for extrusion of the curve path
  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.2);

    return shape;
  }, [curve]);

  /**
   * CAMERA GROUP
   */
  const cameraGroup = useRef();

  /**
   * ASTRONOUT
   */
  const astronout = useRef();

  /**
   * USESCROLL
   */
  const scroll = useScroll();

  /**
   * USEFRAME - SCROLL ANIMATION
   */
  useFrame((state, delta) => {
    // 1. Get the closest point index based on scroll percentage
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );

    // 2. Get the closest point
    const curPoint = linePoints[curPointIndex];

    // 3. Calculate the second closest point
    const pointAhead =
      linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];

    // 4. Calculate the distance between the current point and the next point
    const xDisplacement = (pointAhead.x - curPoint.x) * 80;

    // 5. Based on x distance,
    //    - switch angle rotations (left: +1 | right: -1)
    //    - limit angle rotations (max Math.PI / 3)
    const angleRotation =
      (xDisplacement < 0 ? 1 : -1) *
      Math.min(Math.abs(xDisplacement), Math.PI / 3);

    // 6. Calculate and apply the astronout rotation on z-axis
    const targetAstronoutQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        astronout.current.rotation.x,
        astronout.current.rotation.y,
        angleRotation
      )
    );
    astronout.current.quaternion.slerp(targetAstronoutQuaternion, delta * 2);

    // 7. Calculate and apply the camera group rotation on y-axis
    const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        cameraGroup.current.rotation.x,
        angleRotation,
        cameraGroup.current.rotation.z
      )
    );
    cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta * 2);

    // 8. Lerp the camera group position to the current point
    cameraGroup.current.position.lerp(curPoint, delta * 20);
  });

  return (
    <>
      <Perf position="top-left" />
      {/* <OrbitControls enabled={true} enableZoom={false} /> */}

      <group ref={cameraGroup}>
        <Background />

        {/* PERSPECTIVE CAMERA */}
        <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />

        {/* HORIZONTAL SCROLL PROJECT THUMBNAILS */}
        {/* <ProjectThumbnailImages scroll={scroll} /> */}

        {/* ASTRONOUT */}
        <group ref={astronout}>
          <Float floatIntensity={2} speed={2}>
            <Astronout
              rotation={[0, Math.PI, 0]}
              scale={[0.5, 0.5, 0.5]}
              position={[0, 0, -0.8]}
            />
          </Float>
        </group>
      </group>

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

function ProjectThumbnailImages({ scroll }) {
  /**
   * PROJECT THUMBNAIL GROUP
   */
  const projectThumbnailGroup = useRef();

  /**
   * PROJECT THUMBNAIL PARAMS
   */
  const initialDistance = 2.5;
  const imagePosY = -1.0;
  const thumbnailDistance = 6.5;
  const thumbnailPositionsArray = [
    {
      id: "Ambience of Light",
      position: [initialDistance, imagePosY, 0],
      imageUrl: AmbienceOfLightThumbnail,
    },
    {
      id: "Beauty of Time Passing",
      position: [initialDistance + 1 * thumbnailDistance, imagePosY, 0],
      imageUrl: BeautyOfTimePassingThumbnail,
    },
    {
      id: "Intervention In Our Disconnection",
      position: [initialDistance + 2 * thumbnailDistance, imagePosY, 0],
      imageUrl: InterventionInOurDisconnectionThumbnail,
    },
    {
      id: "Masu Typo",
      position: [initialDistance + 3 * thumbnailDistance, imagePosY, 0],
      imageUrl: MasuTypoThumbnail,
    },
    {
      id: "Comforting Dinner",
      position: [initialDistance + 4 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "3D Visuals",
      position: [initialDistance + 5 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "Portfolio Website",
      position: [initialDistance + 6 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "OBJECT Rotterdam 2024",
      position: [initialDistance + 7 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "Weather Cereal",
      position: [initialDistance + 8 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "Donuts Universe",
      position: [initialDistance + 9 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "Marble's on a Roll",
      position: [initialDistance + 10 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
    },
  ];

  /**
   * PROJECT THUMBNAIL SCROLL LOGIC
   */
  useFrame(() => {
    // Horizontal scroll effect
    projectThumbnailGroup.current.position.x =
      -scroll.offset * thumbnailDistance * thumbnailPositionsArray.length;
  });

  return (
    <>
      <group ref={projectThumbnailGroup}>
        {thumbnailPositionsArray.map((thumbnail, index) => (
          <group
            // ref={(element) => (monolithInputRefs.current[index] = element)}
            key={thumbnail.id}
            position={thumbnail.position}
          >
            <group scale={[1.5, 1.5, 1.5]} position={[0, 1.0, 0]}>
              {/* <Monolith scale={[1, 1, 1]} /> */}
              <Image
                url={thumbnail.imageUrl}
                position={[0.1, 0, 0]}
                scale={[14.4 * 0.125, 9.6 * 0.125, 1]}
                toneMapped={false}
              />
            </group>

            <Text
              position={[-1.0, 0.5, 0.5]}
              fontSize={0.15}
              font="./fonts/DMSerifDisplay-Regular.ttf"
              maxWidth={1.0}
              anchorX="left"
            >
              {thumbnail.id}
              <meshBasicMaterial color="#ffffff" toneMapped={false} />
            </Text>
          </group>
        ))}
      </group>
    </>
  );
}
