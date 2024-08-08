import { useRef } from "react";
import * as THREE from "three";
import { useFrame, extend } from "@react-three/fiber";
import { Environment, OrbitControls, shaderMaterial } from "@react-three/drei";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { isBrowser, isMobile } from "react-device-detect";

import Background from "./components/utilComponents/Background.jsx";
import Lights from "./components/utilComponents/Lights.jsx";
import StageTest from "./components/models/stage-test/StageTest.jsx";
import FirstPersonViewControlWithEcctrl from "./components/characterControl/firstPersonViewControl/FirstPersonViewControlWithEcctrl.jsx";
import StageTestCollisionObjects from "./components/models/stage-test/StageTestCollisionObjects.jsx";
import DesignProjectUI from "./components/UI/DesignProjectUI.jsx";
import PortalAreas from "./components/portal/PortalAreas.jsx";

import portalVertexShader from "./shaders/portal/vertex.glsl";
import portalFragmentShader from "./shaders/portal/fragment.glsl";

// Test - shader material -portal material
const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#027a00"),
    uColorEnd: new THREE.Color("#1b9dee"),
  },
  portalVertexShader,
  portalFragmentShader
);

extend({ PortalMaterial });

export default function Experience() {

  // Test - shader material -portal material
  const portalMaterialRef = useRef();

  useFrame((status, delta) => {
    portalMaterialRef.current.uTime += delta;
  });

  return (
    <>
      {/* ENVIRONMENT SET UP */}
      <Lights />
      <Background />

      <Environment preset="forest" />

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      <axesHelper />
      <OrbitControls makeDefault />

      {/* PHYSICS SCENE */}
      <Physics debug={false}>
        {/* CONTROLS */}
        {isMobile && (
          <FirstPersonViewControlWithEcctrl position={[0, 0, -10]} />
        )}

        {/* {isBrowser && <FirstPersonViewControl />} */}

        <group position={[0, 0, -15]}>
          {/* UI */}
          <DesignProjectUI />

          {/* STAGE COLLISION OBJECTS */}
          <StageTestCollisionObjects />

          {/* PROJECT PAGE PORTALS */}
          <PortalAreas />

          {/* STAGE TEST MODEL */}
          <StageTest scale={0.2} />

          <mesh position={[5, 5, 0]} scale={4.0}>
            <boxGeometry />
            <portalMaterial ref={portalMaterialRef} />
          </mesh>
        </group>
      </Physics>
    </>
  );
}
