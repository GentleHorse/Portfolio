import { useState, useEffect, Suspense } from "react";
import {
  Environment,
  OrbitControls,
  useKeyboardControls,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { isBrowser, isMobile } from "react-device-detect";

import TestFloor from "./components/test/TestFloor.jsx";
import PostProcessingEffects from "./components/postprocessing/PostProcessingEffects.jsx";
import Background from "./components/utilComponents/Background.jsx";
import Lights from "./components/utilComponents/Lights.jsx";
import StageTest from "./components/models/stage-test/StageTest.jsx";
import FirstPersonViewControlWithEcctrl from "./components/characterControl/firstPersonViewControl/FirstPersonViewControlWithEcctrl.jsx";
import StageTestCollisionObjects from "./components/models/stage-test/StageTestCollisionObjects.jsx";
import FirstPersonViewControl from "./components/characterControl/firstPersonViewControl/FirstPersonViewControl.jsx";
import AmbienceOfLight from "./components/models/designWorks/ambienceOfLight/AmbienceOfLight.jsx";
import BeautyOfTimePassing from "./components/models/designWorks/beautyOfTimePassing/BeautyOfTimePassing.jsx";
import InterventionInOurDisconnection from "./components/models/designWorks/interventionInOurDisconnection/InterventionInOurDisconnection.jsx";
import MasuTypo from "./components/models/designWorks/masuTypo/MasuTypo.jsx";
import ComfortingDinner from "./components/models/designWorks/comfortingDinner/ComfortingDinner.jsx";
import DesignProjectUI from "./components/UI/DesignProjectUI.jsx";
import SensorUIObjects from "./components/UI/SensorUIOBjects.jsx";

export default function Experience() {
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

        {isBrowser && <FirstPersonViewControl />}

        <group position={[0, 0, -15]}>
          {/* UI */}
          {/* <DesignProjectUI /> */}

          {/* STAGE COLLISION OBJECTS */}
          <StageTestCollisionObjects />

          {/* PROJECT PAGE JUMP SENSOR */}
          {/* <SensorUIObjects /> */}

          {/* STAGE TEST MODEL */}
          <StageTest scale={0.2} />
        </group>
      </Physics>
    </>
  );
}
