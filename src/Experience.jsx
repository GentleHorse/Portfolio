import {
  Environment,
  OrbitControls,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { isBrowser } from "react-device-detect";

import Background from "./components/utilComponents/Background.jsx";
import Lights from "./components/utilComponents/Lights.jsx";
import StageTest from "./components/models/stage-test/StageTest.jsx";
import FirstPersonViewControl from "./components/characterControl/firstPersonViewControl/FirstPersonViewControl.jsx";
import StageTestCollisionObjects from "./components/models/stage-test/StageTestCollisionObjects.jsx";
import DesignProjectUI from "./components/UI/DesignProjectUI.jsx";
import PortalAreas from "./components/portal/PortalAreas.jsx";

export default function Experience() {
  return (
    <>
      {/* ENVIRONMENT SET UP */}
      <Lights />
      <Background />

      <Environment preset="night" />

      {/* DEBUG TOOLS */}
      <Perf position="top-right" />
      <axesHelper />
      <OrbitControls makeDefault />

      {/* PHYSICS SCENE */}
      <Physics debug={false}>
        {/* CONTROLS */}
        {isBrowser && <FirstPersonViewControl />}

        <group position={[0, 0, -15]}>
          {/* UI */}
          {/* <DesignProjectUI /> */}

          {/* STAGE COLLISION OBJECTS */}
          <StageTestCollisionObjects />

          {/* PROJECT PAGE PORTALS */}
          {/* <PortalAreas /> */}

          {/* STAGE TEST MODEL */}
          <StageTest scale={0.2} />

          <mesh
            scale={[200, 200, 1]}
            position={[0, -0.5, 0]}
            rotation={[-Math.PI * 0.5, 0, 0]}
          >
            <planeGeometry />
            <MeshReflectorMaterial
              resolution={2048}
              blur={[300, 100]}
              mixBlur={1}
              mirror={[0.85]}
              color="#C1C1C1"
              mixStrength={2}
              depthScale={1}
              minDepthThreshold={0.85}
              metalness={0.5}
              roughness={0.7}
              reflectorOffset={1.0}
            />
          </mesh>
        </group>
      </Physics>
    </>
  );
}
