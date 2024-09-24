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

/**
 * INITIAL PARAM VALUES
 */
const LINE_NB_POINTS = 1000;
const LINE_PATH_HALF_WIDTH = 0.08;
const CURVE_DISTANCE = 250;
const CURVE_PATH_MAX_WIDTH = 100;
const CURVE_AHEAD_CAMERA = 0.008; // for the look-at camera point
const CURVE_AHEAD_ASTRONOUT = 0.002; // for the astronout rotation
const ASTRONOUT_MAX_ANGLE = 35; // for the astronout rotation
const FRICTION_DISTANCE = 150;

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

        <EffectComposer>
          <Noise opacity={0.08} />
        </EffectComposer>
      </Canvas>
    </>
  );
}

function Experience() {
  /**
   * CURVE PATH
   */
  const curvePoints = useMemo(() => {
    const curvePoints = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -1 * CURVE_DISTANCE),
      new THREE.Vector3(CURVE_PATH_MAX_WIDTH, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(-CURVE_PATH_MAX_WIDTH, 0, -3 * CURVE_DISTANCE),
      new THREE.Vector3(CURVE_PATH_MAX_WIDTH, 0, -4 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -8 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -9 * CURVE_DISTANCE),
      new THREE.Vector3(CURVE_PATH_MAX_WIDTH, 0, -10 * CURVE_DISTANCE),
      new THREE.Vector3(-CURVE_PATH_MAX_WIDTH, 0, -11 * CURVE_DISTANCE),
      new THREE.Vector3(CURVE_PATH_MAX_WIDTH, 0, -12 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -13 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -14 * CURVE_DISTANCE),
    ];

    return curvePoints;
  }, []);

  // catmullromcurve3
  const curve = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(
      curvePoints,
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
    shape.moveTo(0, -LINE_PATH_HALF_WIDTH);
    shape.lineTo(0, LINE_PATH_HALF_WIDTH);

    return shape;
  }, [curve]);

  /**
   * METEOROIDS ARRAY
   */
  const meteoroidsArray = useMemo(
    () => [
      // STARTING
      {
        position: new THREE.Vector3(-3.5, -3.2, -7),
      },
      {
        position: new THREE.Vector3(3.5, -4, -10),
      },
      {
        scale: new THREE.Vector3(4, 4, 4),
        position: new THREE.Vector3(-18, 0.2, -68),
        rotation: new THREE.Euler(-Math.PI / 5, Math.PI / 6, 0),
      },
      {
        scale: new THREE.Vector3(2.5, 2.5, 2.5),
        position: new THREE.Vector3(10, -1.2, -52),
      },
      // 1ST POINT
      {
        scale: new THREE.Vector3(4, 4, 4),
        position: new THREE.Vector3(
          curvePoints[1].x + 10,
          curvePoints[1].y - 4,
          curvePoints[1].z + 64
        ),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[1].x - 20,
          curvePoints[1].y + 4,
          curvePoints[1].z + 28
        ),
        rotation: new THREE.Euler(0, Math.PI / 7, 0),
      },
      {
        rotation: new THREE.Euler(0, Math.PI / 7, Math.PI / 5),
        scale: new THREE.Vector3(5, 5, 5),
        position: new THREE.Vector3(
          curvePoints[1].x - 13,
          curvePoints[1].y + 4,
          curvePoints[1].z - 62
        ),
      },
      {
        rotation: new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 3),
        scale: new THREE.Vector3(5, 5, 5),
        position: new THREE.Vector3(
          curvePoints[1].x + 54,
          curvePoints[1].y + 2,
          curvePoints[1].z - 82
        ),
      },
      {
        scale: new THREE.Vector3(5, 5, 5),
        position: new THREE.Vector3(
          curvePoints[1].x + 8,
          curvePoints[1].y - 14,
          curvePoints[1].z - 22
        ),
      },
      // 2ND POINT
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[2].x + 6,
          curvePoints[2].y - 7,
          curvePoints[2].z + 50
        ),
      },
      {
        scale: new THREE.Vector3(2, 2, 2),
        position: new THREE.Vector3(
          curvePoints[2].x - 2,
          curvePoints[2].y + 4,
          curvePoints[2].z - 26
        ),
      },
      {
        scale: new THREE.Vector3(4, 4, 4),
        position: new THREE.Vector3(
          curvePoints[2].x + 12,
          curvePoints[2].y + 1,
          curvePoints[2].z - 86
        ),
        rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 3),
      },
      // 3RD POINT
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[3].x + 3,
          curvePoints[3].y - 10,
          curvePoints[3].z + 50
        ),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[3].x - 10,
          curvePoints[3].y,
          curvePoints[3].z + 30
        ),
        rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new THREE.Vector3(4, 4, 4),
        position: new THREE.Vector3(
          curvePoints[3].x - 20,
          curvePoints[3].y - 5,
          curvePoints[3].z - 8
        ),
        rotation: new THREE.Euler(Math.PI, 0, Math.PI / 5),
      },
      {
        scale: new THREE.Vector3(5, 5, 5),
        position: new THREE.Vector3(
          curvePoints[3].x + 0,
          curvePoints[3].y - 5,
          curvePoints[3].z - 98
        ),
        rotation: new THREE.Euler(0, Math.PI / 3, 0),
      },
      // 4TH POINT
      {
        scale: new THREE.Vector3(2, 2, 2),
        position: new THREE.Vector3(
          curvePoints[4].x + 3,
          curvePoints[4].y - 10,
          curvePoints[4].z + 2
        ),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[4].x + 24,
          curvePoints[4].y - 6,
          curvePoints[4].z - 42
        ),
        rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[4].x - 4,
          curvePoints[4].y + 9,
          curvePoints[4].z - 62
        ),
        rotation: new THREE.Euler(Math.PI / 3, 0, Math.PI / 3),
      },
      // 7TH POINT
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[7].x + 12,
          curvePoints[7].y - 5,
          curvePoints[7].z + 60
        ),
        rotation: new THREE.Euler(-Math.PI / 4, -Math.PI / 6, 0),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[7].x - 12,
          curvePoints[7].y + 5,
          curvePoints[7].z + 120
        ),
        rotation: new THREE.Euler(Math.PI / 4, Math.PI / 6, 0),
      },

      // 9TH POINT
      {
        scale: new THREE.Vector3(4, 4, 4),
        position: new THREE.Vector3(
          curvePoints[9].x + 10,
          curvePoints[9].y - 4,
          curvePoints[9].z + 64
        ),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[9].x - 20,
          curvePoints[9].y + 4,
          curvePoints[9].z + 28
        ),
        rotation: new THREE.Euler(0, Math.PI / 7, 0),
      },
      {
        rotation: new THREE.Euler(0, Math.PI / 7, Math.PI / 5),
        scale: new THREE.Vector3(5, 5, 5),
        position: new THREE.Vector3(
          curvePoints[9].x - 13,
          curvePoints[9].y + 4,
          curvePoints[9].z - 62
        ),
      },
      {
        rotation: new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 3),
        scale: new THREE.Vector3(5, 5, 5),
        position: new THREE.Vector3(
          curvePoints[9].x + 54,
          curvePoints[9].y + 2,
          curvePoints[9].z - 82
        ),
      },
      {
        scale: new THREE.Vector3(5, 5, 5),
        position: new THREE.Vector3(
          curvePoints[9].x + 8,
          curvePoints[9].y - 14,
          curvePoints[9].z - 22
        ),
      },
      // 10TH POINT
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[2].x + 6,
          curvePoints[2].y - 7,
          curvePoints[2].z + 50
        ),
      },
      {
        scale: new THREE.Vector3(2, 2, 2),
        position: new THREE.Vector3(
          curvePoints[10].x - 2,
          curvePoints[10].y + 4,
          curvePoints[10].z - 26
        ),
      },
      {
        scale: new THREE.Vector3(4, 4, 4),
        position: new THREE.Vector3(
          curvePoints[10].x + 12,
          curvePoints[10].y + 1,
          curvePoints[10].z - 86
        ),
        rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 3),
      },
      // 11TH POINT
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[11].x + 3,
          curvePoints[11].y - 10,
          curvePoints[11].z + 50
        ),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[11].x - 10,
          curvePoints[11].y,
          curvePoints[11].z + 30
        ),
        rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new THREE.Vector3(4, 4, 4),
        position: new THREE.Vector3(
          curvePoints[11].x - 20,
          curvePoints[11].y - 5,
          curvePoints[11].z - 8
        ),
        rotation: new THREE.Euler(Math.PI, 0, Math.PI / 5),
      },
      {
        scale: new THREE.Vector3(5, 5, 5),
        position: new THREE.Vector3(
          curvePoints[11].x + 0,
          curvePoints[11].y - 5,
          curvePoints[11].z - 98
        ),
        rotation: new THREE.Euler(0, Math.PI / 3, 0),
      },
      // 12TH POINT
      {
        scale: new THREE.Vector3(2, 2, 2),
        position: new THREE.Vector3(
          curvePoints[12].x + 3,
          curvePoints[12].y - 10,
          curvePoints[12].z + 2
        ),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[12].x + 24,
          curvePoints[12].y - 6,
          curvePoints[12].z - 42
        ),
        rotation: new THREE.Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new THREE.Vector3(3, 3, 3),
        position: new THREE.Vector3(
          curvePoints[12].x - 4,
          curvePoints[12].y + 9,
          curvePoints[12].z - 62
        ),
        rotation: new THREE.Euler(Math.PI / 3, 0, Math.PI / 3),
      },
    ],
    []
  );

  /**
   * TEXT SECTION
   */
  const textSections = useMemo(() => {
    return [
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[1].x + 1.05,
          curvePoints[1].y + 2.5,
          curvePoints[1].z
        ),
        subtitle: `Space between objects, elements, matters.

What's happening there?
What will happen there?
What happened there?`,
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[8].x + 1.05,
          curvePoints[8].y + 2.5,
          curvePoints[8].z
        ),
        subtitle: `Developing applications.

It's like making toys with passions & precision.`,
      },
    ];
  }, []);

  /**
   * CAMERA
   */
  const cameraGroup = useRef();
  const cameraRail = useRef();

  /**
   * ASTRONOUT
   */
  const astronout = useRef();

  /**
   * SCROLL, LASTSCROLL
   */
  const scroll = useScroll();
  const lastScroll = useRef(0);

  /**
   * USEFRAME - SCROLL ANIMATION
   */
  useFrame((state, delta) => {
    /**
     * GENERAL
     */

    // 0. Limit the offset value above 0
    const scrollOffset = Math.max(0, scroll.offset);

    // 1. Declaration & initialization of param
    let resetCameraRail = true;

    // 2. Silde the camera on x-axis based on the distance to text sections
    textSections.forEach((textSection) => {
      const distance = textSection.position.distanceTo(
        new THREE.Vector3(
          cameraGroup.current.position.x,
          cameraGroup.current.position.y,
          cameraGroup.current.position.z
        )
      );

      if (distance < FRICTION_DISTANCE) {
        const targetCameraRailPosition = new THREE.Vector3(
          (1 - distance / FRICTION_DISTANCE) * textSection.cameraRailDist,
          0,
          0
        );
        cameraRail.current.position.lerp(targetCameraRailPosition, delta);
        resetCameraRail = false;
      }
    });

    // 3. Reset the camera rail position (slide on x-axis)
    if (resetCameraRail) {
      const targetCameraRailPosition = new THREE.Vector3(0, 0, 0);
      cameraRail.current.position.lerp(targetCameraRailPosition, delta);
    }

    // 4. Match the gsap duration to the scroll offset value
    tl.current.seek(scrollOffset * tl.current.duration());

    // 5. Get the closest point based on scroll percentage
    const curPoint = curve.getPoint(scrollOffset);

    /**
     * SCROLL ANIMATION - CAMERA
     */

    // 0. Lerp the camera group position to the current point
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // 1. Get the second closest point based on 'CURVE_AHEAD_CAMERA'
    const lookAtPoint = curve.getPoint(
      Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    // 2. Get the current camera look-at
    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );

    // 3. Calculate the vector: curPoint - lookAtPoint, and normalize
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    // 4. Lerp the current camera look-at to the target look-at
    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);

    // 5. Update the camera target
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

  /**
   * GRADIENT ANIMATION
   */
  const tl = useRef();
  const backgroundColors = useRef({
    colorA: "#3535CC",
    colorB: "#ABAADD",
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
      {/* <axesHelper /> */}
      {/* <OrbitControls enabled={true} enableZoom={true} /> */}

      <group ref={cameraGroup}>
        <Background backgroundColors={backgroundColors} />

        {/* PERSPECTIVE CAMERA */}
        <group ref={cameraRail}>
          <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
        </group>

        {/* HORIZONTAL SCROLL PROJECT THUMBNAILS */}
        <ProjectThumbnailImages scroll={scroll} />

        {/* ASTRONOUT */}
        <group ref={astronout}>
          <Float floatIntensity={1.5} speed={1.5} rotationIntensity={0.5}>
            <Astronout
              rotation={[0, Math.PI, 0]}
              scale={[0.5, 0.5, 0.5]}
              position={[0, 0, -0.8]}
            />
          </Float>
        </group>
      </group>

      {/* TEXT */}
      {textSections.map((textSection, index) => (
        <TextSection {...textSection} key={index} />
      ))}

      {/* LINE */}
      <group position={[0, -2.5, 0]}>
        {/* <Line
          points={linePoints}
          color={"snow"}
          opacity={0.7}
          transparent
          lineWidth={16}
        /> */}
        <mesh visible={true}>
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
          <meshStandardMaterial
            color={"snow"}
            opacity={1}
            transparent
            envMapIntensity={2}
            onBeforeCompile={fadeOnBeforeCompile}
          />
        </mesh>
      </group>

      {/* Meteoroids */}
      {meteoroidsArray.map((meteoroid, index) => (
        <Meteoroid key={index} {...meteoroid} />
      ))}
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

function TextSection({ title, subtitle, ...props }) {
  return (
    <>
      <group {...props}>
        {!!title && (
          <Text
            anchorX="left"
            anchorY="center"
            fontSize={0.52}
            maxWidth={2.5}
            font="./fonts/DMSerifDisplay-Regular.ttf"
          >
            {title}
            <meshStandardMaterial
              color={"#ffffff"}
              onBeforeCompile={fadeOnBeforeCompileFlat}
            />
          </Text>
        )}

        {!!subtitle && (
          <Text
            anchorX="left"
            anchorY="top"
            position={[-0.8, -0.6, 0]}
            fontSize={0.32}
            maxWidth={5.0}
            font="./fonts/Aleo-ExtraLightItalic.ttf"
          >
            {subtitle}
            <meshStandardMaterial
              color={"#ffffff"}
              onBeforeCompile={fadeOnBeforeCompileFlat}
              envMapIntensity={5.0}
            />
          </Text>
        )}
      </group>
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
      id: "Scroll to Start the Journey",
      position: [0 * thumbnailDistance, imagePosY, 0],
      fontSize: 0.15,
      maxWidth: 2.0,
    },
    {
      id: "D E S I G N",
      position: [1 * thumbnailDistance, imagePosY, 0],
      fontSize: 0.75,
      maxWidth: 5.0,
    },
    {
      id: "Ambience of Light",
      position: [2 * thumbnailDistance, imagePosY, 0],
      imageUrl: AmbienceOfLightThumbnail,
      fontSize: 0.15,
      maxWidth: 1.0,
    },
    {
      id: "Beauty of Time Passing",
      position: [3 * thumbnailDistance, imagePosY, 0],
      imageUrl: BeautyOfTimePassingThumbnail,
      fontSize: 0.15,
      maxWidth: 1.0,
    },
    {
      id: "Intervention In Our Disconnection",
      position: [4 * thumbnailDistance, imagePosY, 0],
      imageUrl: InterventionInOurDisconnectionThumbnail,
      fontSize: 0.15,
      maxWidth: 1.0,
    },
    {
      id: "Masu Typo",
      position: [5 * thumbnailDistance, imagePosY, 0],
      imageUrl: MasuTypoThumbnail,
      fontSize: 0.15,
      maxWidth: 1.0,
    },
    {
      id: "Comforting Dinner",
      position: [6 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
      fontSize: 0.15,
      maxWidth: 1.0,
    },
    {
      id: "3D Visuals",
      position: [7 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
      fontSize: 0.15,
      maxWidth: 10.0,
    },
    {
      id: "W E B  A P P",
      position: [8 * thumbnailDistance, imagePosY, 0],
      fontSize: 0.75,
      maxWidth: 5.0,
    },
    {
      id: "Portfolio Website",
      position: [9 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
      fontSize: 0.15,
      maxWidth: 1.0,
    },
    {
      id: "OBJECT Rotterdam 2024",
      position: [10 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
      fontSize: 0.15,
      maxWidth: 1.0,
    },
    {
      id: "Weather Cereal",
      position: [11 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
      fontSize: 0.15,
      maxWidth: 1.0,
    },
    {
      id: "Donuts Universe",
      position: [12 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
      fontSize: 0.15,
      maxWidth: 1.0,
    },
    {
      id: "Marble's on a Roll",
      position: [13 * thumbnailDistance, imagePosY, 0],
      imageUrl: ComfortingDinnerThumbnail,
      fontSize: 0.15,
      maxWidth: 1.0,
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
              fontSize={thumbnail.fontSize}
              font="./fonts/DMSerifDisplay-Regular.ttf"
              maxWidth={thumbnail.maxWidth}
              anchorX="left"
              toneMapped={false}
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
