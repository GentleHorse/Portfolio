
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { isBrowser } from "react-device-detect";
import { gameStates, useGameStore } from "../store/store.js";

import Background from "./utilComponents/Background.jsx";
import Lights from "./utilComponents/Lights.jsx";
import Atelier from "./models/atelier/Atelier.jsx";
import FirstPersonViewControl from "./characterControl/firstPersonViewControl/FirstPersonViewControl.jsx";
import PortalAreas from "./portal/PortalAreas.jsx";
import AtelierCollisionObjects from "./models/atelier/AtelierCollisionObjects.jsx";
import InfoPops from "./infoPop/InfoPops.jsx";

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
      <Background color="#1C1C1C" />

      {/* DEBUG TOOLS */}
      {/* <Perf position="top-left" /> */}
      {/* <axesHelper /> */}
      {/* <OrbitControls makeDefault /> */}

      {/* FOG */}
      <fog attach="fog" args={["#1C1C1C", 8, 60]} />


      {/* PHYSICS SCENE */}
      <Physics debug={false}>
        {/* CONTROLS */}
        {isBrowser && <FirstPersonViewControl />}

        <group position={[0, 0, 0]} rotation={[0, Math.PI * -0.5, 0]}>
          <Atelier scale={2.0} />
          <AtelierCollisionObjects />
          {gameState !== gameStates.LOADING && <PortalAreas />}
          {gameState !== gameStates.LOADING && <InfoPops />}
        </group>
      </Physics>
    </>
  );
}
