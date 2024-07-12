import { useState, useEffect, Suspense } from "react";
import {
  Environment,
  OrbitControls,
  useKeyboardControls,
  Float,
} from "@react-three/drei";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { isBrowser, isMobile } from "react-device-detect";

import TestFloor from "./components/test/TestFloor.jsx";
import PostProcessingEffects from "./components/postprocessing/PostProcessingEffects.jsx";
import Background from "./components/utilComponents/Background.jsx";
import Lights from "./components/utilComponents/Lights.jsx";
import StageTest from "./components/models/test/StageTest.jsx";
import FirstPersonViewControlWithEcctrl from "./components/characterControl/firstPersonViewControl/FirstPersonViewControlWithEcctrl.jsx";
import StageTestCollisionObjects from "./components/models/test/StageTestCollisionObjects.jsx";
import FirstPersonViewControl from "./components/characterControl/firstPersonViewControl/FirstPersonViewControl.jsx";
import AmbienceOfLight from "./components/models/designWorks/ambienceOfLight/AmbienceOfLight.jsx";
import BeautyOfTimePassing from "./components/models/designWorks/beautyOfTimePassing/BeautyOfTimePassing.jsx";
import InterventionInOurDisconnection from "./components/models/designWorks/interventionInOurDisconnection/InterventionInOurDisconnection.jsx";


export default function Experience() {
  const [isCharacterStartMove, setIsCharacterStartMove] = useState(false);
  const [subscribeKeys, getKeys] = useKeyboardControls();

  // Listen whether the character starts moving or not
  useEffect(() => {
    const unsubscribeAny = subscribeKeys(() => setIsCharacterStartMove(true));

    return () => {
      return unsubscribeAny();
    };
  }, []);

  return (
    <>
      {/* ENVIRONMENT SET UP */}
      <Lights />
      <Background />

      <Environment preset="forest" />

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      {/* <axesHelper /> */}
      <OrbitControls makeDefault />

      {/* POSTRPROCESSING */}
      {/* {isCharacterStartMove && <PostProcessingEffects />} */}

      <Physics debug={true}>
        {isMobile && (
          <FirstPersonViewControlWithEcctrl position={[0, 0, 0]} />
        )}

        {/* {isBrowser && <FirstPersonViewControl />} */}

        <StageTestCollisionObjects />
        {/* <StageTest scale={0.22} rotation={[0, 0, 0]} position={[0.8, 0, 0]} /> */}

        <AmbienceOfLight scale={0.5} position={[-2, 0, 2]} />
        <BeautyOfTimePassing scale={0.25} rotation={[0, -Math.PI * 0.1, 0]} position={[3, 0, -15]} />
        <InterventionInOurDisconnection scale={0.5} rotation={[0, Math.PI * 0.1, 0]} position={[-4, 0, -40]} />

        {/* <AmbienceOfLight scale={0.3} rotation={[0, Math.PI, 0]} /> */}
      </Physics>
    </>
  );
}
