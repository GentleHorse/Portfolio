import * as THREE from "three";
import {
  Environment,
  OrbitControls,
  MeshReflectorMaterial,
  useTexture,
} from "@react-three/drei";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { isBrowser } from "react-device-detect";
import { gameStates, useGameStore } from "../store/store.js";

import Background from "./utilComponents/Background.jsx";
import Lights from "./utilComponents/Lights.jsx";
import Stage from "./models/stage/Stage.jsx";
import NewAtelier from "./models/newAtelier/NewAtelier.jsx";
import FirstPersonViewControl from "./characterControl/firstPersonViewControl/FirstPersonViewControl.jsx";
import StageCollisionObjects from "./models/stage/StageCollisionObjects.jsx";
import PortalAreas from "./portal/PortalAreas.jsx";

export default function Experience() {
  /**
   * GAME STORE
   */
  const { gameState } = useGameStore((state) => ({
    gameState: state.gameState,
  }));

  /**
   * TEXTURE FOR THE REFLECTIVE FLOOR
   */
  const woodPlanksNormalTexture = useTexture(
    "./textures/wood-planks/wood-planks-normal.jpg"
  );
  woodPlanksNormalTexture.wrapS = THREE.RepeatWrapping;
  woodPlanksNormalTexture.wrapT = THREE.RepeatWrapping;
  woodPlanksNormalTexture.rotation = Math.PI * 0.5;

  return (
    <>
      {/* ENVIRONMENT SET UP */}
      <Lights />
      <Background />

      <Environment
        background={true}
        files={"./textures/envMap/kloppenheim_07_puresky_1k_small.hdr"}
      />

      {/* DEBUG TOOLS */}
      <Perf position="top-right" />
      {/* <axesHelper /> */}
      {/* <OrbitControls makeDefault /> */}

      {/* FOG */}
      <fog attach="fog" args={["#1C1C1C", 8, 100]} />

      {/* PHYSICS SCENE */}
      <Physics debug={true}>
        {/* CONTROLS */}
        {isBrowser && <FirstPersonViewControl />}

        <group position={[-0.0, 0, -5.0]} rotation-y={-Math.PI * 0.25}>
          {/* OLD STAGE MODEL */}
          {/* <Stage scale={0.2} /> */}
          {/* <StageCollisionObjects /> */}

          {/* New Atelier */}
          <NewAtelier scale={0.2} />

          {/* TEST GROUND COLLISION */}
          <RigidBody
            colliders={false}
            type="fixed"
            position={[0, 0.5, -50]}
            friction={0.5}
          >
            <CuboidCollider args={[100, 0.5, 120]} />
          </RigidBody>

          {/* PROJECT PAGE PORTALS */}
          {/* {gameState !== gameStates.LOADING && <PortalAreas />} */}

          {/* REFLECTIVE FLOOR FOR DESIGN WORKS */}
          {/* <mesh
            scale={[300, 300, 1]}
            position={[0, -0.7, -100]}
            rotation={[-Math.PI * 0.5, 0, 0]}
          >
            <planeGeometry />
            <MeshReflectorMaterial
              resolution={256} // this affects performance a lot!
              blur={[300, 100]}
              mixBlur={1}
              mirror={[0.95]}
              color="#FFFFFF"
              mixStrength={2}
              depthScale={1}
              minDepthThreshold={0.85}
              metalness={0.5}
              roughness={0.7}
              normalMap={woodPlanksNormalTexture}
              distortion={2.5}
              distortionMap={woodPlanksNormalTexture}
              reflectorOffset={0.2}
            />
          </mesh> */}
        </group>
      </Physics>
    </>
  );
}
