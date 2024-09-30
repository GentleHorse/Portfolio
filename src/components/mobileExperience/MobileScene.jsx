import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Environment } from "@react-three/drei";

const LERPED_STRENGTH = {
  testCube01: 0.01,
  testCube02: 0.005,
  testCube03: 0.001,
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
    if (mobileOrientation) {
      // Test cube 01
      LERPED_MOBILE_ORIENTATION.testCube01.BETA = lerp(
        LERPED_MOBILE_ORIENTATION.testCube01.BETA,
        mobileOrientation.beta,
        LERPED_STRENGTH.testCube01
      );
      LERPED_MOBILE_ORIENTATION.testCube01.GAMMA = lerp(
        LERPED_MOBILE_ORIENTATION.testCube01.GAMMA,
        mobileOrientation.gamma,
        LERPED_STRENGTH.testCube01
      );

      testCube01.current.rotation.x =
        LERPED_MOBILE_ORIENTATION.testCube01.BETA * Math.PI * 2;
      testCube01.current.rotation.y =
        LERPED_MOBILE_ORIENTATION.testCube01.GAMMA * Math.PI;

      // Test cube 02
      LERPED_MOBILE_ORIENTATION.testCube02.BETA = lerp(
        LERPED_MOBILE_ORIENTATION.testCube02.BETA,
        mobileOrientation.beta,
        LERPED_STRENGTH.testCube02
      );
      LERPED_MOBILE_ORIENTATION.testCube02.GAMMA = lerp(
        LERPED_MOBILE_ORIENTATION.testCube02.GAMMA,
        mobileOrientation.gamma,
        LERPED_STRENGTH.testCube02
      );

      testCube02.current.rotation.x =
        LERPED_MOBILE_ORIENTATION.testCube02.BETA * Math.PI * 2;
      testCube02.current.rotation.y =
        LERPED_MOBILE_ORIENTATION.testCube02.GAMMA * Math.PI;

      // Test cube 03
      LERPED_MOBILE_ORIENTATION.testCube03.BETA = lerp(
        LERPED_MOBILE_ORIENTATION.testCube03.BETA,
        mobileOrientation.beta,
        LERPED_STRENGTH.testCube03
      );
      LERPED_MOBILE_ORIENTATION.testCube03.GAMMA = lerp(
        LERPED_MOBILE_ORIENTATION.testCube03.GAMMA,
        mobileOrientation.gamma,
        LERPED_STRENGTH.testCube03
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
      <axesHelper args={[0.8]} />

      <Environment
        background={true}
        files={"./textures/envMap/kloppenheim_07_puresky_1k_small.hdr"}
      />

      {/* <Physics debug={true}>
        <HollowCube mobileOrientation={mobileOrientation} />
      </Physics> */}

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
    </>
  );
}
