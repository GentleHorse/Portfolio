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
const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 250;
const CURVE_PATH_MAX_WIDTH = 100;
const CURVE_AHEAD_CAMERA = 0.008; // for the look-at camera point
const CURVE_AHEAD_ASTRONOUT = 0.002; // for the astronout rotation
const ASTRONOUT_MAX_ANGLE = 35; // for the astronout rotation

const SCROLL_PAGES = 25;
const SCROLL_DAMPING = 0.3; // the lower, the slower animation gets
const SCROLL_DISTANCE = 1.5; // the higher, the slower animation gets

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
        new THREE.Vector3(0, 0, -1 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -2 * CURVE_DISTANCE),
        new THREE.Vector3(CURVE_PATH_MAX_WIDTH, 0, -3 * CURVE_DISTANCE),
        new THREE.Vector3(-CURVE_PATH_MAX_WIDTH, 0, -4 * CURVE_DISTANCE),
        new THREE.Vector3(CURVE_PATH_MAX_WIDTH, 0, -5 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -8 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -9 * CURVE_DISTANCE),
        new THREE.Vector3(CURVE_PATH_MAX_WIDTH, 0, -10 * CURVE_DISTANCE),
        new THREE.Vector3(-CURVE_PATH_MAX_WIDTH, 0, -11 * CURVE_DISTANCE),
        new THREE.Vector3(CURVE_PATH_MAX_WIDTH, 0, -12 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -13 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -14 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -15 * CURVE_DISTANCE),
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
    /**
     * SCROLL ANIMATION - CAMERA
     */

    // 0. Limit the offset value above 0
    const scrollOffset = Math.max(0, scroll.offset);

    // 1. Get the closest point based on scroll percentage
    const curPoint = curve.getPoint(scrollOffset);

    // 2. Lerp the camera group position to the current point
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // 3. Get the second closest point based on 'CURVE_AHEAD_CAMERA'
    const lookAtPoint = curve.getPoint(
      Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    // 4. Get the current camera look-at
    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );

    // 5. Calculate the vector: curPoint - lookAtPoint, and normalize
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    // 6. Lerp the current camera look-at to the target look-at
    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);

    // 7. Update the camera target
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    /**
     * SCROLL ANIMATION - ASTRONOUT
     */

    // 1. Get the tangent of the current curve point with 'CURVE_AHEAD_ASTRONOUT' value
    const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_ASTRONOUT);

    // 2. Calculate non-lerp current curve point
    const nonLerpLookAt = new THREE.Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    // 3. Update the astronout's tangent based on the non-lerp current look-at vector
    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0), // axis - y
      -nonLerpLookAt.rotation.y // angle
    );

    // 4. Calculate the rotation angle based on the tangent - zx plane
    let angle = Math.atan2(-tangent.z, tangent.x);
    angle -= Math.PI / 2; // adjust the rotation

    // 5. Make the 'angle' rotation effect stronger
    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; // stronger angle

    // 6. Limit the angle
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -ASTRONOUT_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, ASTRONOUT_MAX_ANGLE);
    }

    // 7. Set back the angle to radians
    angle = (angleDegrees * Math.PI) / 180;

    // 8. Calculate the quaternion rotation angle and apply it
    const targetAstronoutQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        astronout.current.rotation.x,
        astronout.current.rotation.y,
        angle
      )
    );
    astronout.current.quaternion.slerp(targetAstronoutQuaternion, delta * 2);
  });

  return (
    <>
      <Perf position="top-left" />
      {/* <OrbitControls enabled={true} enableZoom={true} /> */}

      <group ref={cameraGroup}>
        <Background />

        {/* PERSPECTIVE CAMERA */}
        <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />

        {/* HORIZONTAL SCROLL PROJECT THUMBNAILS */}
        <ProjectThumbnailImages scroll={scroll} />

        {/* ASTRONOUT */}
        <group ref={astronout}>
          <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
            <Astronout
              rotation={[0, Math.PI, 0]}
              scale={[0.5, 0.5, 0.5]}
              position={[0, 0, -0.8]}
            />
          </Float>
        </group>
      </group>

      {/* TEXT */}
      <group position={[-3, 0, -100]}>
        <Text
          color="snow"
          anchorX="left"
          anchorY="middle"
          fontSize={0.22}
          maxWidth={2.5}
          font="./fonts/Aleo-ExtraLightItalic.ttf"
        >
          Welcome! {"\n"}
          Have a cup of coffee and enjoy!
        </Text>
      </group>

      <group position={[-10, 1, -200]}>
        <Text
          color="snow"
          anchorX="left"
          anchorY="center"
          fontSize={0.52}
          maxWidth={2.5}
          font="./fonts/DMSerifDisplay-Regular.ttf"
        >
          Design
        </Text>
        <Text
          color="snow"
          anchorX="left"
          anchorY="top"
          position-y={-1.2}
          fontSize={0.22}
          maxWidth={2.5}
          font="./fonts/Aleo-ExtraLightItalic.ttf"
        >
          Space between objects, elements, matters. {"\n"}
          {"\n"}
          {"\n"}
          What's happening there?{"\n"}
          What will happen there?{"\n"}
          What happened there?
        </Text>
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
      <Meteoroid01 scale={[1, 1, 1.5]} position={[-3.5, 1.2, 7]} />
      <Meteoroid01
        scale={[1, 1, 2]}
        position={[3.5, -1, -10]}
        rotation-y={Math.PI}
      />
      <Meteoroid01
        scale={[1, 1, 1]}
        position={[-3.5, 0.2, -12]}
        rotation-y={Math.PI / 3}
      />
      <Meteoroid01
        scale={[1, 1, 1]}
        position={[3.5, 0.2, -12]}
        rotation-y={Math.PI / 3}
      />
      <Meteoroid01
        scale={[0.4, 0.4, 0.4]}
        position={[1, -0.2, -12]}
        rotation-y={Math.PI / 9}
      />
      <Meteoroid01 scale={[0.3, 0.5, 2]} position={[-4, -0.5, -53]} />
      <Meteoroid01 scale={[0.8, 0.8, 0.8]} position={[-1, -1.5, -100]} />
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
  const imagePosY = -1.0;
  const thumbnailDistance = 5.5;
  const thumbnailPositionsArray = [
    {
      id: "Scroll to Start",
      position: [0 * thumbnailDistance, imagePosY, 0],
    },
    {
      id: "D E S I G N",
      position: [1 * thumbnailDistance, imagePosY, 0],
    },
    {
      id: "Ambience of Light",
      position: [2 * thumbnailDistance, imagePosY, 0],
      imageUrl: AmbienceOfLightThumbnail,
    },
    {
      id: "Beauty of Time Passing",
      position: [3 * thumbnailDistance, imagePosY, 0],
      imageUrl: BeautyOfTimePassingThumbnail,
    },
    {
      id: "Intervention In Our Disconnection",
      position: [4 * thumbnailDistance, imagePosY, 0],
      imageUrl: InterventionInOurDisconnectionThumbnail,
    },
    {
      id: "Masu Typo",
      position: [5 * thumbnailDistance, imagePosY, 0],
      imageUrl: MasuTypoThumbnail,
    },
    {
      id: "Comforting Dinner",
      position: [6 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "3D Visuals",
      position: [7 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "W E B  A P P",
      position: [8 * thumbnailDistance, imagePosY, 0],
    },
    {
      id: "Portfolio Website",
      position: [9 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "OBJECT Rotterdam 2024",
      position: [10 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "Weather Cereal",
      position: [11 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "Donuts Universe",
      position: [12 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
    },
    {
      id: "Marble's on a Roll",
      position: [13 * thumbnailDistance, imagePosY, 0],
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
            {!!thumbnail.imageUrl && (
              <group scale={[1.5, 1.5, 1.5]} position={[0, 1.0, 0]}>
                {/* <Monolith scale={[1, 1, 1]} /> */}
                <Image
                  url={thumbnail.imageUrl}
                  position={[0.1, 0, 0]}
                  scale={[14.4 * 0.125, 9.6 * 0.125, 1]}
                  toneMapped={false}
                />
              </group>
            )}

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
