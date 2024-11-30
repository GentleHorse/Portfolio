/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 ./public/models/male-head/male-head.glb 
*/

import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { isBrowser, isMobile } from "react-device-detect";

const HEAD_MOVE_STRENGTH = isBrowser ? 0.06 : 0.12;
const EYE_BALLS_MOVE_STRENGTH = 1.25;
const HEAD_LERP_STRENGTH = 1.65;
const BG_PLANE_MOVE_STRENGTH = 0.02;
const BG_PLANE_LERP_STERNGTH = 0.9;

let LERPED_HEAD_ORIENTATION = {
  X: 0,
  Y: 0,
  Z: 0,
};

let LERPED_BG_PLANE_ORIENTATION = {
  X: 0,
  Y: 0,
  Z: 0,
};

export default function MaleHead(props) {
  /**
   * LOAD THE MODEL
   */
  const { nodes, materials } = useGLTF("/models/male-head/male-head.glb");

  /**
   * REF - UPPER HEAD, EYE BALLS
   */
  const upperHeadPart = useRef();
  const eyeBallRight = useRef();
  const eyeBallLeft = useRef();

  const bgPlane = useRef();

  /**
   * MOUSE POINTER MOVE SETTING
   */
  const mouse = new THREE.Vector2();

  useEffect(() => {
    window.addEventListener("pointermove", (event) => {
      if (event.isPrimary === false) return;

      // Scale half window side into 1% for mouse movements
      mouse.x = (event.clientX - window.innerWidth / 2) * 0.02;
      mouse.y = (event.clientY - window.innerHeight / 2) * 0.02;
    });
  });

  function lerp(a, b, alpha) {
    return a + alpha * (b - a);
  }

  useFrame((state, delta) => {
    LERPED_BG_PLANE_ORIENTATION.Y = lerp(
      LERPED_BG_PLANE_ORIENTATION.Y,
      (bgPlane.current.rotation.y = mouse.x * BG_PLANE_MOVE_STRENGTH),
      delta * BG_PLANE_LERP_STERNGTH
    );
    LERPED_BG_PLANE_ORIENTATION.X = lerp(
      LERPED_BG_PLANE_ORIENTATION.X,
      (bgPlane.current.rotation.x = mouse.y * BG_PLANE_MOVE_STRENGTH),
      delta * BG_PLANE_LERP_STERNGTH
    );

    LERPED_HEAD_ORIENTATION.Y = lerp(
      LERPED_HEAD_ORIENTATION.Y,
      (bgPlane.current.rotation.y = mouse.x * HEAD_MOVE_STRENGTH),
      delta * HEAD_LERP_STRENGTH
    );
    LERPED_HEAD_ORIENTATION.X = lerp(
      LERPED_HEAD_ORIENTATION.X,
      (bgPlane.current.rotation.x = mouse.y * HEAD_MOVE_STRENGTH),
      delta * HEAD_LERP_STRENGTH
    );

    bgPlane.current.rotation.y = LERPED_BG_PLANE_ORIENTATION.Y;
    bgPlane.current.rotation.x = LERPED_BG_PLANE_ORIENTATION.X;

    upperHeadPart.current.rotation.y = LERPED_HEAD_ORIENTATION.Y;
    upperHeadPart.current.rotation.x = LERPED_HEAD_ORIENTATION.X;

    eyeBallRight.current.rotation.y =
      LERPED_HEAD_ORIENTATION.Y * EYE_BALLS_MOVE_STRENGTH;
    eyeBallRight.current.rotation.x =
      LERPED_HEAD_ORIENTATION.X * EYE_BALLS_MOVE_STRENGTH;

    eyeBallLeft.current.rotation.y =
      LERPED_HEAD_ORIENTATION.Y * EYE_BALLS_MOVE_STRENGTH;
    eyeBallLeft.current.rotation.x =
      LERPED_HEAD_ORIENTATION.X * EYE_BALLS_MOVE_STRENGTH;
  });

  /**
   * TEXTURE FOR BACKGROUND LOGO PATTERN
   */
  const bgLogoPatternTexture = useTexture(
    "./textures/logo-pattern/logo-pattern-for-roughness-map.jpg"
  );

  return (
    <>
      <group {...props} dispose={null}>
        {/* ---- MOVE WITH POINTER ---- */}

        <group ref={upperHeadPart} rotation={[0, 0, 0]}>
          {/* MALE HEAD TOP */}
          <mesh
            geometry={nodes["male-head-top"].geometry}
            // material={materials["head-skin"]}
          >
            <meshStandardMaterial
              color="#656765"
              metalness={0.8}
              roughness={0.01}
            />
          </mesh>

          {/* GLASSES */}
          <mesh
            geometry={nodes["glassese-front-frame"].geometry}
            material={materials["glasses-black"]}
          />
          <mesh
            geometry={nodes["glasses-hinge"].geometry}
            material={materials["SVGMat-gold"]}
          />
          <mesh
            geometry={nodes["glassese-side-frame"].geometry}
            material={materials["glasses-black"]}
          />

          {/* EYES */}
          <mesh
            ref={eyeBallRight}
            geometry={nodes["right-eye"].geometry}
            material={materials["eye-ball-material"]}
            position={[-1.115, 6.309, 2.809]}
          />
          <mesh
            ref={eyeBallLeft}
            geometry={nodes["left-eye"].geometry}
            material={materials["eye-ball-material"]}
            position={[1.115, 6.309, 2.809]}
          />
        </group>

        {/* ---- FIXED ---- */}

        {/* MALE HEAD NECK */}
        <mesh
          geometry={nodes["male-head-neck"].geometry}
          // material={materials["head-skin"]}
        >
          <meshStandardMaterial
            color="#656765"
            metalness={0.8}
            roughness={0.01}
          />
        </mesh>
      </group>

      <mesh ref={bgPlane} position={[0, 0, -20]} scale={[30, 30, 1]}>
        <planeGeometry />
        <meshStandardMaterial
          color="#000000"
          roughnessMap={bgLogoPatternTexture}
          envMapIntensity={3.0}
        />
      </mesh>
    </>
  );
}

useGLTF.preload("/models/male-head/male-head.glb");
