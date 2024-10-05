import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import TorusKnotTube from "../models/torusKnotTube/TorusKnotTube.jsx";

const LERPED_STRENGTH = 0.8;
let LERPED_MOBILE_ORIENTATION = {
  ALPHA: 0,
  BETA: 0,
  GAMMA: 0,
};

const CAMERA_ANIM_STRENGTH = 2.0;

export default function MobileScene({ mobileOrientation }) {
  /**
   * LERP - FUNCTION
   */
  function lerp(a, b, alpha) {
    return a + alpha * (b - a);
  }

  /**
   * CAMERA
   */
  const camera = useRef();
  useFrame((state, delta) => {
    if (mobileOrientation) {
      // X-axis
      LERPED_MOBILE_ORIENTATION.BETA = lerp(
        LERPED_MOBILE_ORIENTATION.BETA,
        mobileOrientation.beta,
        delta * LERPED_STRENGTH
      );

      camera.current.position.x =
        Math.cos(
          LERPED_MOBILE_ORIENTATION.BETA * Math.PI * 2 * CAMERA_ANIM_STRENGTH
        ) * 10.0;
      camera.current.position.y =
        Math.sin(
          LERPED_MOBILE_ORIENTATION.BETA * Math.PI * 2 * CAMERA_ANIM_STRENGTH
        ) * 10.0;

      // Y-axis
      LERPED_MOBILE_ORIENTATION.GAMMA = lerp(
        LERPED_MOBILE_ORIENTATION.GAMMA,
        mobileOrientation.gamma,
        delta * LERPED_STRENGTH
      );

      camera.current.position.x =
        Math.cos(
          LERPED_MOBILE_ORIENTATION.GAMMA * Math.PI * 2 * CAMERA_ANIM_STRENGTH
        ) * 10.0;
      camera.current.position.z =
        Math.sin(
          LERPED_MOBILE_ORIENTATION.GAMMA * Math.PI * 2 * CAMERA_ANIM_STRENGTH
        ) * 10.0;
    }

    camera.current.lookAt(0, 0, 0);
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

      <Physics debug={false} gravity={[0, -9.81, 0]}>
        <TorusKnotTube mobileOrientation={mobileOrientation} />
      </Physics>

      <PerspectiveCamera
        ref={camera}
        fov={45}
        near={0.1}
        far={100}
        position={[0, 0, 0]}
        makeDefault
      />
    </>
  );
}
