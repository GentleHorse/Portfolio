import * as THREE from "three";
import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { isBrowser } from "react-device-detect";
import { gameStates, useGameStore } from "../store/store.js";

import Background from "./utilComponents/Background.jsx";
import Lights from "./utilComponents/Lights.jsx";
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

  return (
    <>
      {/* ENVIRONMENT SET UP */}
      <Lights />
      <Background color="#C1C1C1" />

      {/* <Environment
        background={true}
        files={"./textures/envMap/kloppenheim_07_puresky_1k_small.hdr"}
      /> */}

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      {/* <axesHelper /> */}
      {/* <OrbitControls makeDefault /> */}

      {/* FOG */}
      <fog attach="fog" args={["#C1C1C1", 8, 80]} />

      {/* PHYSICS SCENE */}
      <Physics debug={true}>
        {/* CONTROLS */}
        {isBrowser && <FirstPersonViewControl />}

        <group position={[0, 0, 0]} rotation={[0, Math.PI * -0.5, 0]}>
          {/* New Atelier */}
          <NewAtelier scale={2.0} />
          {/* <StageCollisionObjects /> */}

          {/* TEST GROUND COLLISION */}
          <RigidBody
            colliders={false}
            type="fixed"
            position={[0, 0.5, -50]}
            friction={0.5}
          >
            <CuboidCollider args={[200, 0.5, 200]} />
          </RigidBody>

          {/* PROJECT PAGE PORTALS */}
          {/* {gameState !== gameStates.LOADING && <PortalAreas />} */}
        </group>
      </Physics>
    </>
  );
}
