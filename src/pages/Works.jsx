import * as THREE from "three";
import { useRef, useMemo } from "react";
import {
  Environment,
  Float,
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

/**
 * INITIAL PARAM VALUES
 */
const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_ASTRONOUT = 0.02;
const ASTRONOUT_MAX_ANGLE = 35;

export default function WorksPage() {
  return (
    <>
      <Header home about contact />

      <Loader />

      <Canvas>
        <ScrollControls pages={100} damping={1}>
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

      <color attach="background" args={["#1C1C1C"]} />
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
      new THREE.Vector3(0, 0, -CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
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
        position: new THREE.Vector3(
          curvePoints[1].x - 3,
          curvePoints[1].y,
          curvePoints[1].z
        ),
        subtitle: `Welcome to "Works" page!
Scroll to explore my works!`,
      },
      {
        position: new THREE.Vector3(
          curvePoints[2].x + 2,
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
        position: new THREE.Vector3(
          curvePoints[3].x - 3,
          curvePoints[3].y,
          curvePoints[3].z
        ),
        title: "App Dev",
        subtitle: `Developing applications.

it's like making toys with passions & precision.
        `,
      },
    ];
  }, []);

  /**
   * REF - CAMERA GROUP
   */
  const cameraGroup = useRef();

  /**
   * REF - ASTRONOUT
   */
  const astronout = useRef();

  /**
   * SCROLL LOGIC
   *
   * only the camera & astronout move along with scrolling
   * (the line, meteoroids, fog, etc don't move!)
   */
  const scroll = useScroll();

  useFrame((state, delta) => {
    /**
     * CAMERA SCROLL ANIMATION
     */

    // Get the current scroll position between 0 and 1
    const scrollOffset = Math.max(0, scroll.offset);

    // Get the nearest curve point
    const curPoint = curve.getPoint(scrollOffset);

    // Move the camera position (following the curve points)
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // Get the nearest 'look-ahead' curve point
    const lookAtPoint = curve.getPoint(
      Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1)
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
    const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_ASTRONOUT);

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
        <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />

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

function TextSection({ title, subtitle, ...props }) {
  /**
   * SHARED PROPS
   */
  const sharedTitleProps = {
    color: "snow",
    anchorX: "left",
    anchorY: "bottom",
    fontSize: 0.52,
    maxWidth: 2.5,
    lineHeight: 1,
    font: "/fonts/DMSerifDisplay-Regular.ttf",
  };
  const sharedTextProps = {
    color: "snow",
    anchorX: "left",
    anchorY: "top",
    fontSize: 0.18,
    maxWidth: 2.5,
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

        <Text {...sharedTextProps}>{subtitle}</Text>
      </group>
    </>
  );
}

// =====================================================

function TextOnlyScrollContents() {
  const navigate = useNavigate();

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
      <ScrollControls damping={0.15} pages={10} distance={0.5}>
        {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

        <TestCube scale={1.5} position={[0, 0, -2]} />

        <Scroll>{/* Canvas contents in here will scroll along */}</Scroll>

        <Scroll html>
          {/* DOM contents in here will scroll along */}

          <section className="flex flex-col">
            <h1 className="font-permanent-marker mb-[5px] text-[60px] text-[#d0e6efb1]">
              Design
            </h1>

            <button
              className="text-left"
              onClick={() => {
                navigate("/ambience-of-light");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Ambience of Light
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/beauty-of-time-passing");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Beauty of Time Passing
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/intervention-in-our-disconnection");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Intervention In Our Disconnection
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/masu-typo");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Masu Typo
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/comforting-dinner");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Comforting Dinner
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/three-d-visuals");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                3D Visuals
              </p>
            </button>
          </section>

          <section className="flex flex-col">
            <h1 className="font-permanent-marker mb-[5px] text-[60px] text-[#d0e6efb1]">
              Web Development
            </h1>

            <button
              className="text-left"
              onClick={() => {
                navigate("/portfolio-website");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Portfolio Website
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/object-rotterdam-2024");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Object Rotterdam 2024
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/weather-cereal");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Weather Cereal
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/donuts-universe");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Donuts Universe
              </p>
            </button>

            <button
              className="text-left"
              onClick={() => {
                navigate("/marble-race");
              }}
            >
              <p className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
                Marble Race
              </p>
            </button>
          </section>

          <article
            className="py-[5%] px-[12%] w-[60vw]"
            style={{ transform: "translate3d(40vw, 250vh, 0)" }}
          >
            <p className="font-roboto text-[#fcfaf2]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
              massa ultricies, venenatis lorem vitae, mollis urna. Aliquam quis
              rutrum orci. Sed sodales, metus vel tempor fringilla, nibh sapien
              molestie nisi, in convallis lorem erat et tortor. In luctus tellus
              pharetra diam interdum, at fermentum nibh luctus. Morbi rhoncus
              mollis enim, vitae rutrum dui accumsan eu. Cras laoreet sit amet
              urna quis vulputate. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer venenatis, lectus id dapibus consectetur,
              dui lacus viverra libero, eu faucibus ipsum nibh ac ipsum. Ut nunc
              odio, blandit vel condimentum ac, tincidunt ut nunc. Duis est dui,
              semper sit amet lectus eget, feugiat scelerisque urna. Sed
              consequat, arcu sit amet pharetra laoreet, dui mi pellentesque
              ante, in tristique orci enim in ipsum. Sed ultrices fermentum est,
              quis congue mauris interdum vel. Aliquam id eros in lectus
              pulvinar sagittis vitae eu augue. Duis at semper risus, eu maximus
              mauris. Proin eget erat ac nisi pharetra placerat. Vestibulum sit
              amet euismod ex. Vivamus sagittis pulvinar ante ac tristique.
              Morbi convallis, magna in bibendum tempus, nunc est commodo
              libero, at rhoncus augue ex nec felis. Pellentesque condimentum
              bibendum mi, sit amet sollicitudin nisl. Ut sem felis, pretium id
              iaculis vitae, dignissim a quam. Quisque bibendum lacus sed erat
              ultrices, ut efficitur sapien scelerisque. Phasellus orci nibh,
              convallis vel dolor at, vulputate consectetur nulla. Duis vehicula
              orci augue, non iaculis ipsum fringilla quis. Nullam consectetur,
              sapien sit amet tincidunt pretium, lacus lectus ultricies nibh,
              sit amet lobortis purus ex at diam. Pellentesque lorem dolor,
              malesuada quis accumsan ac, auctor sed est. Nam aliquam sem vitae
              sagittis pharetra. Duis volutpat, sapien vitae egestas lobortis,
              ipsum nisl aliquam enim, ac ultrices ante erat eu lorem. Aliquam
              tempor placerat volutpat. Nullam vitae tristique arcu. Vivamus
              magna mauris, faucibus id dapibus ut, vehicula a dolor. Aliquam
              tempus sem gravida felis porta aliquam. Nullam eu diam neque. Nam
              euismod eleifend mauris a feugiat. Cras porttitor libero et arcu
              gravida porttitor. Sed arcu odio, egestas dignissim sodales sit
              amet, molestie sit amet erat. Fusce non turpis diam. Vestibulum a
              ipsum non nulla tincidunt cursus. Fusce orci dui, fermentum eget
              condimentum eget, viverra vitae odio. Integer sed nisl vitae elit
              eleifend egestas eu eget nunc. In efficitur pretium accumsan. Cras
              venenatis sollicitudin elit ut suscipit. Duis quis justo urna.
              Aliquam venenatis id eros vitae commodo. Suspendisse iaculis
              suscipit est nec sagittis. Nullam viverra felis orci. Nam quis
              arcu accumsan, luctus lorem vitae, gravida turpis. Integer
              gravida, libero et molestie consectetur, tellus quam pellentesque
              ipsum, vitae hendrerit ante turpis nec ante. Morbi dignissim nisi
              sed erat varius accumsan. Vivamus vitae egestas nisl, et sodales
              est. Mauris ac blandit dolor. Ut quis elit lacus. Integer
              convallis, justo ac pretium efficitur, erat magna tincidunt urna,
              commodo gravida velit purus ut magna. Nulla ac leo sed ipsum
              faucibus pulvinar. Duis a sollicitudin leo, in interdum dolor.
              Pellentesque ac enim id ligula finibus consectetur ut ut turpis.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Vestibulum luctus eleifend justo.
            </p>
          </article>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

function TestCube(props) {
  const testCube = useRef();

  const scroll = useScroll();

  useFrame((state, delta) => {
    testCube.current.rotation.y = Math.PI * 2 * scroll.offset;
  });

  return (
    <mesh {...props} ref={testCube}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}
