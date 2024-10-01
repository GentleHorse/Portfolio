import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Environment, OrbitControls } from "@react-three/drei";
import TileGround from "../models/tileGround/TileGround";

const LERPED_STRENGTH = {
  mesh01: 1.0,
  mesh02: 0.5,
  mesh03: 0.1,
};

let LERPED_MOBILE_ORIENTATION = {
  mesh01: {
    BETA: 0,
    GAMMA: 0,
  },
  mesh02: {
    BETA: 0,
    GAMMA: 0,
  },
  mesh03: {
    BETA: 0,
    GAMMA: 0,
  },
};

export default function MobileScene({ mobileOrientation }) {
  const mesh01 = useRef();
  const mesh02 = useRef();
  const mesh03 = useRef();

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
        LERPED_MOBILE_ORIENTATION.mesh01.BETA * Math.PI * 2;
      mesh01.current.rotation.y =
        LERPED_MOBILE_ORIENTATION.mesh01.GAMMA * Math.PI;

      // Test cube 02
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
        LERPED_MOBILE_ORIENTATION.mesh02.BETA * Math.PI * 2;
      mesh02.current.rotation.y =
        LERPED_MOBILE_ORIENTATION.mesh02.GAMMA * Math.PI;

      // Test cube 03
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
        LERPED_MOBILE_ORIENTATION.mesh03.BETA * Math.PI * 2;
      mesh03.current.rotation.y =
        LERPED_MOBILE_ORIENTATION.mesh03.GAMMA * Math.PI;
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
        files={"./textures/envMap/kloofendal_48d_partly_cloudy_puresky_1k.hdr"}
      />

      <group position={[2, 4, 2]}>
        <mesh scale={0.5} ref={mesh01}>
          <torusGeometry args={[1, 0.15]} />
          <meshStandardMaterial roughness={0.01} color="silver" metalness={0.95} />
        </mesh>

        <mesh scale={1.0} ref={mesh02}>
          <torusGeometry args={[1, 0.15]} />
          <meshStandardMaterial roughness={0.01} color="silver" metalness={0.95} />
        </mesh>

        <mesh scale={1.5} ref={mesh03}>
          <torusGeometry args={[1, 0.15]} />
          <meshStandardMaterial roughness={0.01} color="silver" metalness={0.95} />
        </mesh>
      </group>

      <TileGround />
    </>
  );
}
