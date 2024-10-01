import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Environment, OrbitControls } from "@react-three/drei";
import TileGround from "../models/tileGround/TileGround";

const LERPED_STRENGTH = {
  testCube01: 1.0,
  testCube02: 0.5,
  testCube03: 0.1,
};

let LERPED_MOBILE_ORIENTATION = {
  testCube01: {
    BETA: 0,
    GAMMA: 0,
  },
  testCube02: {
    BETA: 0,
    GAMMA: 0,
  },
  testCube03: {
    BETA: 0,
    GAMMA: 0,
  },
};

export default function MobileScene({ mobileOrientation }) {
  const testCube01 = useRef();
  const testCube02 = useRef();
  const testCube03 = useRef();

  /**
   * MOBILE CONTROL - WITH LERPING
   */
  function lerp(a, b, alpha) {
    return a + alpha * (b - a);
  }

  useFrame((state, delta) => {
    // delta = approx. 0.006

    if (mobileOrientation) {
      // Test cube 01
      LERPED_MOBILE_ORIENTATION.testCube01.BETA = lerp(
        LERPED_MOBILE_ORIENTATION.testCube01.BETA,
        mobileOrientation.beta,
        delta * LERPED_STRENGTH.testCube01
      );
      LERPED_MOBILE_ORIENTATION.testCube01.GAMMA = lerp(
        LERPED_MOBILE_ORIENTATION.testCube01.GAMMA,
        mobileOrientation.gamma,
        delta * LERPED_STRENGTH.testCube01
      );

      testCube01.current.rotation.x =
        LERPED_MOBILE_ORIENTATION.testCube01.BETA * Math.PI * 2;
      testCube01.current.rotation.y =
        LERPED_MOBILE_ORIENTATION.testCube01.GAMMA * Math.PI;

      // Test cube 02
      LERPED_MOBILE_ORIENTATION.testCube02.BETA = lerp(
        LERPED_MOBILE_ORIENTATION.testCube02.BETA,
        mobileOrientation.beta,
        delta * LERPED_STRENGTH.testCube02
      );
      LERPED_MOBILE_ORIENTATION.testCube02.GAMMA = lerp(
        LERPED_MOBILE_ORIENTATION.testCube02.GAMMA,
        mobileOrientation.gamma,
        delta * LERPED_STRENGTH.testCube02
      );

      testCube02.current.rotation.x =
        LERPED_MOBILE_ORIENTATION.testCube02.BETA * Math.PI * 2;
      testCube02.current.rotation.y =
        LERPED_MOBILE_ORIENTATION.testCube02.GAMMA * Math.PI;

      // Test cube 03
      LERPED_MOBILE_ORIENTATION.testCube03.BETA = lerp(
        LERPED_MOBILE_ORIENTATION.testCube03.BETA,
        mobileOrientation.beta,
        delta * LERPED_STRENGTH.testCube03
      );
      LERPED_MOBILE_ORIENTATION.testCube03.GAMMA = lerp(
        LERPED_MOBILE_ORIENTATION.testCube03.GAMMA,
        mobileOrientation.gamma,
        delta * LERPED_STRENGTH.testCube03
      );

      testCube03.current.rotation.x =
        LERPED_MOBILE_ORIENTATION.testCube03.BETA * Math.PI * 2;
      testCube03.current.rotation.y =
        LERPED_MOBILE_ORIENTATION.testCube03.GAMMA * Math.PI;
    }
  });

  return (
    <>
      {/* DEBUG TOOLS */}
      {/* <Perf position="top-left" /> */}
      <OrbitControls />
      <axesHelper args={[0.8]} />

      <Environment
        background={true}
        files={"./textures/envMap/kloppenheim_07_puresky_1k_small.hdr"}
      />

      <mesh scale={0.5} ref={testCube01}>
        <boxGeometry />
        <meshNormalMaterial wireframe />
      </mesh>

      <mesh scale={1.0} ref={testCube02}>
        <boxGeometry />
        <meshNormalMaterial wireframe />
      </mesh>

      <mesh scale={1.5} ref={testCube03}>
        <boxGeometry />
        <meshNormalMaterial wireframe />
      </mesh>

      <TileGround />
    </>
  );
}
