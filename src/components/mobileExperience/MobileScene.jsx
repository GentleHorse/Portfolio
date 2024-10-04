import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Environment, OrbitControls } from "@react-three/drei";
import TileGround from "../models/tileGround/TileGround";
import SilkySphere from "../models/silky-sphere/SilkySphere";

const LERPED_STRENGTH = {
  mesh01: 1.0,
  mesh02: 0.8,
  mesh03: 0.75,
  mesh04: 0.5,
  mesh05: 0.25,
};

let LERPED_MOBILE_ORIENTATION = {
  mesh01: {
    ALPHA: 0,
    BETA: 0,
    GAMMA: 0,
  },
  mesh02: {
    ALPHA: 0,
    BETA: 0,
    GAMMA: 0,
  },
  mesh03: {
    ALPHA: 0,
    BETA: 0,
    GAMMA: 0,
  },
  mesh04: {
    ALPHA: 0,
    BETA: 0,
    GAMMA: 0,
  },
  mesh05: {
    ALPHA: 0,
    BETA: 0,
    GAMMA: 0,
  },
};

export default function MobileScene({ mobileOrientation }) {
  const mesh01 = useRef();
  const mesh02 = useRef();
  const mesh03 = useRef();
  const mesh04 = useRef();
  const mesh05 = useRef();

  /**
   * MOBILE CONTROL - WITH LERPING
   */
  function lerp(a, b, alpha) {
    return a + alpha * (b - a);
  }

  useFrame((state, delta) => {
    // delta = approx. 0.006

    if (mobileOrientation) {
      // Mesh 01
      // LERPED_MOBILE_ORIENTATION.mesh01.ALPHA = lerp(
      //   LERPED_MOBILE_ORIENTATION.mesh01.ALPHA,
      //   mobileOrientation.alpha,
      //   delta * LERPED_STRENGTH.mesh01
      // );
      LERPED_MOBILE_ORIENTATION.mesh01.BETA = lerp(
        LERPED_MOBILE_ORIENTATION.mesh01.BETA,
        mobileOrientation.beta,
        delta * LERPED_STRENGTH.mesh01
      );
      LERPED_MOBILE_ORIENTATION.mesh01.GAMMA = lerp(
        LERPED_MOBILE_ORIENTATION.mesh01.GAMMA,
        mobileOrientation.gamma,
        delta * LERPED_STRENGTH.mesh01
      );

      mesh01.current.rotation.x =
        Math.sin(LERPED_MOBILE_ORIENTATION.mesh01.BETA) * Math.PI * 2 * 2;
      mesh01.current.rotation.y =
        Math.cos(LERPED_MOBILE_ORIENTATION.mesh01.GAMMA) * Math.PI * 2 * 2;
      // mesh01.current.rotation.z =
      //   LERPED_MOBILE_ORIENTATION.mesh01.ALPHA * Math.PI * 2 * 2;

      // Mesh 02
      // LERPED_MOBILE_ORIENTATION.mesh02.ALPHA = lerp(
      //   LERPED_MOBILE_ORIENTATION.mesh02.ALPHA,
      //   mobileOrientation.alpha,
      //   delta * LERPED_STRENGTH.mesh02
      // );
      LERPED_MOBILE_ORIENTATION.mesh02.BETA = lerp(
        LERPED_MOBILE_ORIENTATION.mesh02.BETA,
        mobileOrientation.beta,
        delta * LERPED_STRENGTH.mesh02
      );
      LERPED_MOBILE_ORIENTATION.mesh02.GAMMA = lerp(
        LERPED_MOBILE_ORIENTATION.mesh02.GAMMA,
        mobileOrientation.gamma,
        delta * LERPED_STRENGTH.mesh02
      );

      mesh02.current.rotation.x =
        Math.sin(LERPED_MOBILE_ORIENTATION.mesh02.BETA) * Math.PI * 2 * 2;
      mesh02.current.rotation.y =
        Math.cos(LERPED_MOBILE_ORIENTATION.mesh02.GAMMA) * Math.PI * 2 * 2;
      // mesh02.current.rotation.z =
      //   LERPED_MOBILE_ORIENTATION.mesh02.ALPHA * Math.PI * 2 * 2;

      // Mesh 03
      // LERPED_MOBILE_ORIENTATION.mesh03.ALPHA = lerp(
      //   LERPED_MOBILE_ORIENTATION.mesh03.ALPHA,
      //   mobileOrientation.alpha,
      //   delta * LERPED_STRENGTH.mesh03
      // );
      LERPED_MOBILE_ORIENTATION.mesh03.BETA = lerp(
        LERPED_MOBILE_ORIENTATION.mesh03.BETA,
        mobileOrientation.beta,
        delta * LERPED_STRENGTH.mesh03
      );
      LERPED_MOBILE_ORIENTATION.mesh03.GAMMA = lerp(
        LERPED_MOBILE_ORIENTATION.mesh03.GAMMA,
        mobileOrientation.gamma,
        delta * LERPED_STRENGTH.mesh03
      );

      mesh03.current.rotation.x =
        Math.sin(LERPED_MOBILE_ORIENTATION.mesh03.BETA) * Math.PI * 2 * 2;
      mesh03.current.rotation.y =
        Math.cos(LERPED_MOBILE_ORIENTATION.mesh03.GAMMA) * Math.PI * 2 * 2;
      // mesh03.current.rotation.z =
      //   LERPED_MOBILE_ORIENTATION.mesh03.ALPHA * Math.PI * 2 * 2;

      // Mesh 04
      // LERPED_MOBILE_ORIENTATION.mesh04.ALPHA = lerp(
      //   LERPED_MOBILE_ORIENTATION.mesh04.ALPHA,
      //   mobileOrientation.alpha,
      //   delta * LERPED_STRENGTH.mesh04
      // );
      LERPED_MOBILE_ORIENTATION.mesh04.BETA = lerp(
        LERPED_MOBILE_ORIENTATION.mesh04.BETA,
        mobileOrientation.beta,
        delta * LERPED_STRENGTH.mesh04
      );
      LERPED_MOBILE_ORIENTATION.mesh04.GAMMA = lerp(
        LERPED_MOBILE_ORIENTATION.mesh04.GAMMA,
        mobileOrientation.gamma,
        delta * LERPED_STRENGTH.mesh04
      );

      mesh04.current.rotation.x =
        Math.sin(LERPED_MOBILE_ORIENTATION.mesh04.BETA) * Math.PI * 2 * 2;
      mesh04.current.rotation.y =
        Math.cos(LERPED_MOBILE_ORIENTATION.mesh04.GAMMA) * Math.PI * 2 * 2;
      // mesh04.current.rotation.z =
      //   LERPED_MOBILE_ORIENTATION.mesh04.ALPHA * Math.PI * 2 * 2;

      // Mesh 05
      // LERPED_MOBILE_ORIENTATION.mesh05.ALPHA = lerp(
      //   LERPED_MOBILE_ORIENTATION.mesh05.ALPHA,
      //   mobileOrientation.alpha,
      //   delta * LERPED_STRENGTH.mesh05
      // );
      LERPED_MOBILE_ORIENTATION.mesh05.BETA = lerp(
        LERPED_MOBILE_ORIENTATION.mesh05.BETA,
        mobileOrientation.beta,
        delta * LERPED_STRENGTH.mesh05
      );
      LERPED_MOBILE_ORIENTATION.mesh05.GAMMA = lerp(
        LERPED_MOBILE_ORIENTATION.mesh05.GAMMA,
        mobileOrientation.gamma,
        delta * LERPED_STRENGTH.mesh05
      );

      mesh05.current.rotation.x =
        Math.sin(LERPED_MOBILE_ORIENTATION.mesh05.BETA) * Math.PI * 2 * 2;
      mesh05.current.rotation.y =
        Math.cos(LERPED_MOBILE_ORIENTATION.mesh05.GAMMA) * Math.PI * 2 * 2;
      // mesh05.current.rotation.z =
      //   LERPED_MOBILE_ORIENTATION.mesh05.ALPHA * Math.PI * 2 * 2;
    }
  });

  return (
    <>
      {/* DEBUG TOOLS */}
      {/* <Perf position="top-left" /> */}
      {/* <OrbitControls /> */}
      {/* <axesHelper args={[0.8]} /> */}

      <Environment
        background={true}
        files={"./textures/envMap/kloofendal_48d_partly_cloudy_puresky_1k.hdr"}
      />

      <group position={[0, 0, 0]} scale={1.5}>
        <group ref={mesh01} scale={2.0}>
          <SilkySphere />
        </group>

        <mesh scale={1.8} ref={mesh02}>
          <torusGeometry args={[1, 0.015]} />
          <meshPhysicalMaterial
            roughness={0.01}
            color="#BDC0BA"
            metalness={0.95}
          />
        </mesh>

        <mesh scale={2.0} ref={mesh03}>
          <torusGeometry args={[1, 0.015]} />
          <meshPhysicalMaterial
            roughness={0.01}
            color="#BDC0BA"
            metalness={0.95}
          />
        </mesh>

        <mesh scale={2.25} ref={mesh04}>
          <torusGeometry args={[1, 0.015]} />
          <meshPhysicalMaterial
            roughness={0.01}
            color="#BDC0BA"
            metalness={0.95}
          />
        </mesh>

        <mesh scale={2.5} ref={mesh05}>
          <torusGeometry args={[1, 0.015]} />
          <meshPhysicalMaterial
            roughness={0.01}
            color="#BDC0BA"
            metalness={0.95}
          />
        </mesh>
      </group>

      <TileGround position={[0, 0, -20]} rotation={[Math.PI * 0.5, 0, 0]} />
    </>
  );
}
