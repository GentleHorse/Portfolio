import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { ScrollControls, Html } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function MobileScene({ isExperiencing, mobileOrientation }) {
  const cube = useRef();

  // FOR DEBUGGING
  useFrame(() => {
    if (isExperiencing) {
      console.log(mobileOrientation);
    }
  });

  /**
   * MOBILE CONTROL - PLAYING LOGIC
   */
  useFrame(() => {
    if (mobileOrientation) {
      cube.current.rotation.x = mobileOrientation.beta * Math.PI * 2;
      cube.current.rotation.y = mobileOrientation.gamma * Math.PI;
    }
  });

  return (
    <>
      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      <axesHelper args={[0.8]} />

      <mesh ref={cube}>
        <boxGeometry />
        <meshNormalMaterial wireframe={false} />
      </mesh>
    </>
  );
}
