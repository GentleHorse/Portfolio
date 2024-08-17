import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { isBrowser, isMobile } from "react-device-detect";

import Background from "./components/utilComponents/Background.jsx";
import Lights from "./components/utilComponents/Lights.jsx";
import StageTest from "./components/models/stage-test/StageTest.jsx";
import FirstPersonViewControl from "./components/characterControl/firstPersonViewControl/FirstPersonViewControl.jsx";
import FirstPersonViewControlWithEcctrl from "./components/characterControl/firstPersonViewControl/FirstPersonViewControlWithEcctrl.jsx";
import StageTestCollisionObjects from "./components/models/stage-test/StageTestCollisionObjects.jsx";
import DesignProjectUI from "./components/UI/DesignProjectUI.jsx";
import PortalAreas from "./components/portal/PortalAreas.jsx";

import seasonalColorTransitionVertexShader from "./shaders/seasonalTransition/vertex.glsl";
import seasonalColorTransitionFragmentShader from "./shaders/seasonalTransition/fragment.glsl";

export default function Experience() {
  const seasonalMaterial = useRef();

  const seasonalColorTransitionMaterial = new THREE.ShaderMaterial({
    vertexShader: seasonalColorTransitionVertexShader,
    fragmentShader: seasonalColorTransitionFragmentShader,
    uniforms: {
      uTime: new THREE.Uniform(0.0),
    },
  });

  useFrame((state, delta) => {
    seasonalMaterial.current.material.uniforms.uTime.value += delta;
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
        {/* {isMobile && (
          <FirstPersonViewControlWithEcctrl position={[0, 0, -10]} />
        )} */}

        {isBrowser && <FirstPersonViewControl />}

        <mesh ref={seasonalMaterial} material={seasonalColorTransitionMaterial}>
          <boxGeometry />
          {/* <meshBasicMaterial /> */}
        </mesh>

        <mesh scale={4.0} position={[0, 0, -1]}>
          <planeGeometry />
          <meshBasicMaterial color="white" />
        </mesh>

        <group position={[0, 0, -15]}>
          {/* UI */}
          {/* <DesignProjectUI /> */}

          {/* STAGE COLLISION OBJECTS */}
          <StageTestCollisionObjects />

          {/* PROJECT PAGE PORTALS */}
          {/* <PortalAreas /> */}

          {/* STAGE TEST MODEL */}
          <StageTest scale={0.2} />
        </group>
      </Physics>
    </>
  );
}
