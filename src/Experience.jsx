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

const FLOAT_INTENSITY = 0.15;
const FLOAT_ROTATION_INTENTSITY = 0.25;

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
        {/* CONTROLS */}
        {isMobile && (
          <FirstPersonViewControlWithEcctrl position={[0, 0, -10]} />
        )}

        {isBrowser && <FirstPersonViewControl />}

        {/* STAGE COLLISION OBJECTS */}
        <StageTestCollisionObjects />

        {/* STAGE TEST MODEL */}
        <StageTest scale={0.2} />

        {/* DESIGN WORKS */}
        {/* <group scale={0.8} position={[0, 0.5, -10]}>
          <Float
            floatIntensity={FLOAT_INTENSITY}
            rotationIntensity={FLOAT_ROTATION_INTENTSITY}
          >
            <AmbienceOfLight scale={0.5} position={[-2, 0, 2]} />
          </Float>

          <Float
            floatIntensity={FLOAT_INTENSITY}
            rotationIntensity={FLOAT_ROTATION_INTENTSITY}
          >
            <BeautyOfTimePassing
              scale={[0.25, 0.25, 0.25]}
              rotation={[0, -Math.PI * 0.1, 0]}
              position={[3, 0, -15]}
            />
          </Float>

          <Float
            floatIntensity={FLOAT_INTENSITY}
            rotationIntensity={FLOAT_ROTATION_INTENTSITY}
          >
            <InterventionInOurDisconnection
              scale={0.5}
              rotation={[0, Math.PI * 0.1, 0]}
              position={[-4, 0, -40]}
            />
          </Float>

          <Float
            floatIntensity={FLOAT_INTENSITY}
            rotationIntensity={FLOAT_ROTATION_INTENTSITY}
          >
            <MasuTypo scale={0.3} position={[4, 0, -65]} />
          </Float>

          <Float
            floatIntensity={FLOAT_INTENSITY}
            rotationIntensity={FLOAT_ROTATION_INTENTSITY}
          >
            <ComfortingDinner
              scale={0.5}
              rotation={[0, Math.PI * 0.2, 0]}
              position={[-5, 0, -100]}
            />
          </Float>
        </group> */}

        {/* TEST GROUND */}
        {/* <mesh rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 0, -60]}>
          <planeGeometry args={[100, 150]} />
          <MeshReflectorMaterial
            resolution={512}
            blur={[400, 400]}
            mixBlur={0.5}
            mirror={[0.85]}
            color="#1C1C1C"
            mixStrength={2}
            depthScale={1}
            minDepthThreshold={0.85}
            metalness={0.5}
            roughness={0.8}
          />
        </mesh> */}
      </Physics>
    </>
  );
}
