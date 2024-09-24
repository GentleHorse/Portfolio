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

      <Canvas>
        <color attach="background" args={["#1C1C1C"]} />

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

function Scene() {
  return (
    <>
      {/* <OrbitControls enableZoom={true} /> */}
      {/* <axesHelper /> */}
      <Perf position="top-left" />

      <fog attach="fog" args={["#1C1C1C", 8, 100]} />

      <Environment preset="forest" />
    </>
  );
}

function Experience() {
  /**
   * SEMI-TRANSPARENT LINE PATH
   */
  const curvePoints = useMemo(() => {
    return [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -1 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -3 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -4 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -8 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -9 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -10 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -11 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -12 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -13 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -14 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -15 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -16 * CURVE_DISTANCE),
    ];
  }, []);

  // Curve itself - a smooth 3d spline curve
  const curve = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(
      curvePoints,
      false,
      "catmullrom",
      0.5
    );

    return curve;
  }, []);

  // Points - an array of Vector3 points
  const linePoints = useMemo(() => {
    const linePoints = curve.getPoints(LINE_NB_POINTS);

    return linePoints;
  }, [curve]);

  // 2D shape - for extrudeGeometry
  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.008);
    shape.lineTo(0, 0.008);

    return shape;
  }, []);

  /**
   * TEXT SECTIONS
   */
  const textSections = useMemo(() => {
    return [
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[0].x,
          curvePoints[0].y + 1.2,
          curvePoints[0].z - 5
        ),
        subTitleAnchorX: "center",
        subtitle: `Scroll to explore`,
      },
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[2].x + 0.5,
          curvePoints[2].y,
          curvePoints[2].z
        ),
        title: "Design",
        subtitle: `Space between objects, elements, matters.

What's happening there?
What will happen there?
What happened there?`,
      },
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[3].x - 3.5,
          curvePoints[3].y,
          curvePoints[3].z
        ),
        title: "Ambience of Light",
        titleMaxWidth: 2.0,
        imageUrl: AmbienceOfLightThumbnail,
        projectPageUrl: "/ambience-of-light",
      },
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[4].x - 3.5,
          curvePoints[4].y,
          curvePoints[4].z
        ),
        title: "Beauty of Time Passing",
        titleMaxWidth: 2.0,
        imageUrl: BeautyOfTimePassingThumbnail,
        projectPageUrl: "/beauty-of-time-passing",
      },
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[5].x - 3.5,
          curvePoints[5].y,
          curvePoints[5].z
        ),
        title: "Intervention In Our Disconnection",
        titleMaxWidth: 2.0,
        imageUrl: InterventionInOurDisconnectionThumbnail,
        projectPageUrl: "/intervention-in-our-disconnection",
      },
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[6].x - 3.5,
          curvePoints[6].y,
          curvePoints[6].z
        ),
        title: "Masu Typo",
        titleMaxWidth: 2.0,
        imageUrl: MasuTypoThumbnail,
        projectPageUrl: "/masu-typo",
      },
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[7].x - 3.5,
          curvePoints[7].y,
          curvePoints[7].z
        ),
        title: "Comforting Dinner",
        titleMaxWidth: 2.0,
        imageUrl: ComfortingDinnerThumbnail,
        projectPageUrl: "/comforting-dinner",
      },
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[8].x - 3.5,
          curvePoints[8].y,
          curvePoints[8].z
        ),
        title: "3D Visuals",
        titleMaxWidth: 2.0,
      },
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[10].x + 0.5,
          curvePoints[10].y,
          curvePoints[10].z
        ),
        title: "App Dev",
        subtitle: `Developing applications.

It's like making toys with passions & precision.`,
      },
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[11].x - 3.5,
          curvePoints[11].y,
          curvePoints[11].z
        ),
        title: "Portfolio Website",
        titleMaxWidth: 2.0,
      },
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[12].x - 3.5,
          curvePoints[12].y,
          curvePoints[12].z
        ),
        title: "OBJECT Rotterdam 2024",
        titleMaxWidth: 2.0,
      },
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[13].x - 3.5,
          curvePoints[13].y,
          curvePoints[13].z
        ),
        title: "Weather Cereal",
        titleMaxWidth: 2.0,
      },
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[14].x - 3.5,
          curvePoints[14].y,
          curvePoints[14].z
        ),
        title: "Donuts Universe",
        titleMaxWidth: 2.0,
      },
      {
        cameraRailDist: 0,
        position: new THREE.Vector3(
          curvePoints[15].x - 3.5,
          curvePoints[15].y,
          curvePoints[15].z
        ),
        title: "A Ball's on a Roll",
        titleMaxWidth: 2.0,
      },
    ];
  }, []);

  /**
   * REFS - CAMERA
   */
  const cameraGroup = useRef();
  const cameraRail = useRef();

  /**
   * REF - ASTRONOUT
   */
  const astronout = useRef();

  /**
   * USESCROLL - SCROLL
   * REF - SCROLL
   */
  const scroll = useScroll();
  const lastScroll = useRef(0);

  /**
   * SCROLL ANIMATION LOGIC
   *
   * only the camera & astronout move along with scrolling
   * (the line, meteoroids, fog, etc don't move!)
   */
  useFrame((state, delta) => {
    /**
     * CAMERA SCROLL ANIMATION
     */

    // Get the current scroll position between 0 and 1
    const scrollOffset = Math.max(0, scroll.offset);

    // For slowing down the scroll animation
    let friction = 1;

    // For resetting the camera look at to the center
    let resetCameraRail = true;

    // Look to the close text sections
    textSections.forEach((textSection) => {
      const distance = textSection.position.distanceTo(
        cameraGroup.current.position
      );

      if (distance < FRICTION_DISTANCE) {
        friction = Math.max(distance / FRICTION_DISTANCE, 0.1);
        const targetCameraRailPosition = new THREE.Vector3(
          (1 - distance / FRICTION_DISTANCE) * textSection.cameraRailDist,
          0,
          0
        );
        cameraRail.current.position.lerp(targetCameraRailPosition, delta);
        resetCameraRail = false;
      }
    });
    if (resetCameraRail) {
      const targetCameraRailPosition = new THREE.Vector3(0, 0, 0);
      cameraRail.current.position.lerp(targetCameraRailPosition, delta);
    }

    // Calculate lerped scroll offset
    let lerpedScrollOffset = THREE.MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta * friction
    );

    // Protect below 0 and above 1
    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

    lastScroll.current = lerpedScrollOffset;

    // Get the nearest curve point
    const curPoint = curve.getPoint(lerpedScrollOffset);

    // Move the camera position (following the curve points)
    // cameraGroup.current.position.lerp(curPoint, delta * 24);
    cameraGroup.current.position.set(curPoint.x, curPoint.y, curPoint.z);

    // Get the nearest 'look-ahead' curve point
    const lookAtPoint = curve.getPoint(
      Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    // Create the normalized vector between curPoint and lookAtPoint
    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    // Make the camera group look ahead on the curve
    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    /**
     * ASTRONOUT SCROLL ANIMATION
     */
    const tangent = curve.getTangent(
      lerpedScrollOffset + CURVE_AHEAD_ASTRONOUT
    );

    const nonLerpLookAt = new THREE.Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    // applyAxisAngle(axis, angle)
    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; // stronger angle

    // Limit the astronout rotation angle
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -ASTRONOUT_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, ASTRONOUT_MAX_ANGLE);
    }

    // Set back the angle
    angle = (angleDegrees * Math.PI) / 180;

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
      {/* ------- MOVE WITH SCROLL ------- */}

      <group ref={cameraGroup}>
        {/* CAMERA */}
        <group ref={cameraRail}>
          <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
        </group>

        {/* ASTRONOUT */}
        <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
          <group ref={astronout}>
            <Astronout
              rotation={[Math.PI * 0.15, Math.PI, 0]}
              scale={[0.25, 0.25, 0.25]}
              position={[0, -0.5, 0]}
            />
          </group>
        </Float>
      </group>

      {/* ------- NOT MOVE WITH SCROLL ------- */}

      {/* LINE PATH */}
      <group position={[0, -2, 0]} visible={true}>
        {/* <Line
          points={linePoints}
          color={"white"}
          opacity={0.7}
          transparent
          lineWidth={8}
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
          <meshStandardMaterial color={"white"} opacity={1} transparent />
        </mesh>
      </group>

      {/* TEXT */}
      {textSections.map((textSection, index) => (
        <TextSection {...textSection} key={index} />
      ))}

      {/* METEOROIDS */}
      <Meteoroid01 opacity={0.5} scale={[1, 1, 1]} position={[-3.5, 1.2, -7]} />
      <Meteoroid01
        opacity={0.5}
        scale={[1, 1, 2]}
        position={[3.5, -1, -10]}
        rotation={[0, Math.PI, 0]}
      />
      <Meteoroid01
        opacity={0.7}
        scale={[1, 1, 1]}
        position={[-3.5, 0.2, -12]}
        rotation={[0, Math.PI / 3, 0]}
      />
      <Meteoroid01 opacity={0.7} scale={[1, 1, 1]} position={[3.5, 0.2, -12]} />
      <Meteoroid01
        opacity={0.7}
        scale={[0.4, 0.4, 0.4]}
        position={[1, -0.2, -12]}
        rotation={[0, Math.PI / 9, 0]}
      />
      <Meteoroid01
        opacity={0.3}
        scale={[0.3, 0.5, 2]}
        position={[-4, -0.5, -53]}
      />
      <Meteoroid01
        opacity={0.3}
        scale={[0.8, 0.8, 0.8]}
        position={[-1, -1.5, -100]}
      />
    </>
  );
}

function TextSection({
  title,
  titleAnchorX = "left",
  titleMaxWidth = 2.5,
  subtitle,
  subTitleAnchorX = "left",
  subTitleMaxWidth = 2.5,
  imageUrl,
  projectPageUrl,
  ...props
}) {
  /**
   * USENAVIGATE
   */
  const navigate = useNavigate();

  /**
   * SHARED PROPS
   */
  const sharedTitleProps = {
    color: "snow",
    anchorX: titleAnchorX,
    anchorY: "bottom",
    fontSize: 0.52,
    maxWidth: titleMaxWidth,
    lineHeight: 1,
    font: "/fonts/DMSerifDisplay-Regular.ttf",
  };
  const sharedSubtitleProps = {
    color: "snow",
    anchorX: subTitleAnchorX,
    anchorY: "top",
    fontSize: 0.18,
    maxWidth: subTitleMaxWidth,
    letterSpacing: -0.01,
    lineHeight: 1.2,
    "material-toneMapped": false,
    font: "/fonts/shippori-mincho-b1-v21-japanese-regular.woff",
    position: [0, -0.4, 0],
  };
  const sharedTextProps = {
    color: "snow",
    anchorX: "right",
    anchorY: "top",
    fontSize: 0.18,
    maxWidth: 3.0,
    letterSpacing: -0.01,
    lineHeight: 1.2,
    "material-toneMapped": false,
    font: "/fonts/shippori-mincho-b1-v21-japanese-regular.woff",
    position: [0, -0.4, 0],
  };

  return (
    <>
      <group {...props}>
        {!!title && <Text {...sharedTitleProps}>{title}</Text>}

        {!!subtitle && <Text {...sharedSubtitleProps}>{subtitle}</Text>}

        {!!imageUrl && (
          <group position={[3, 0, 0]}>
            <Image
              position={[-0.75, 0, 0]}
              url={imageUrl}
              scale={[14.4 * 0.25 * 0.5, 9.6 * 0.25, 1]}
              toneMapped={false}
            />
            <Text
              {...sharedTextProps}
              position={[2, -0.5, 0]}
              onClick={(event) => {
                event.stopPropagation();
                navigate(projectPageUrl);
              }}
            >
              Go to Project Page
            </Text>
          </group>
        )}
      </group>
    </>
  );
}
