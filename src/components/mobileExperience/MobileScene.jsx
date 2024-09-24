import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Environment } from "@react-three/drei";
import { useControls } from "leva";
import HollowCube from "../models/hollowCube/HollowCube";
import { Physics } from "@react-three/rapier";

export default function MobileScene({ mobileOrientation }) {
  return (
    <>
      {/* DEBUG TOOLS */}
      {/* <Perf position="top-left" /> */}
      <axesHelper args={[0.8]} />

      <Environment
        background={true}
        files={"./textures/envMap/kloppenheim_07_puresky_1k_small.hdr"}
      />

      <Physics debug={true}>
        <HollowCube mobileOrientation={mobileOrientation} />
      </Physics>
    </>
  );
}
