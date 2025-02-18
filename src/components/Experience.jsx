import { OrbitControls } from "@react-three/drei";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { isBrowser } from "react-device-detect";
import { gameStates, useGameStore } from "../store/store.js";

import Background from "./utilComponents/Background.jsx";
import Lights from "./utilComponents/Lights.jsx";
import Atelier from "./models/atelier/Atelier.jsx";
import FirstPersonViewControl from "./characterControl/firstPersonViewControl/FirstPersonViewControl.jsx";
import PortalAreas from "./portal/PortalAreas.jsx";
import AtelierCollisionObjects from "./models/atelier/AtelierCollisionObjects.jsx";

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

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      <axesHelper />
      <OrbitControls makeDefault />

      {/* FOG */}
      {/* <fog attach="fog" args={["#C1C1C1", 8, 80]} /> */}

      {/* PHYSICS SCENE */}
      <Physics debug={true}>
        {/* CONTROLS */}
        {isBrowser && <FirstPersonViewControl />}

        <group position={[0, 0, 0]} rotation={[0, Math.PI * -0.5, 0]}>

          <Atelier scale={2.0} />
          <AtelierCollisionObjects />

          {/* PROJECT PAGE PORTALS */}
          {/* {gameState !== gameStates.LOADING && <PortalAreas />} */}
        </group>
      </Physics>
    </>
  );
}
