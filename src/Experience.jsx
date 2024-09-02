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
import Stage from "./components/models/stage/Stage.jsx";
import FirstPersonViewControl from "./components/characterControl/firstPersonViewControl/FirstPersonViewControl.jsx";
import StageCollisionObjects from "./components/models/stage/StageCollisionObjects.jsx";
import DesignProjectUI from "./components/UI/DesignProjectUI.jsx";
import PortalAreas from "./components/portal/PortalAreas.jsx";

export default function Experience() {
  return (
    <>
      {/* ENVIRONMENT SET UP */}
      <Lights />
      <Background />

      <Environment
        background={false}
        files={"./textures/envMap/kloppenheim_07_puresky_1k.hdr"}
      />

      {/* DEBUG TOOLS */}
      <Perf position="top-right" />
      <axesHelper />
      <OrbitControls makeDefault />

      {/* FOG */}
      <fog attach="fog" args={["#1C1C1C", 8, 100]} />

      {/* PHYSICS SCENE */}
      <Physics debug={false}>
        {/* CONTROLS */}
        {isBrowser && <FirstPersonViewControl />}

        <group position={[0, 0, -15]}>
          {/* UI */}
          {/* <DesignProjectUI /> */}

          {/* STAGE COLLISION OBJECTS */}
          <StageCollisionObjects />

          {/* PROJECT PAGE PORTALS */}
          {/* <PortalAreas /> */}

          {/* STAGE TEST MODEL */}
          <Stage scale={0.2} />

          <mesh
            scale={[300, 300, 1]}
            position={[0, -0.5, 0]}
            rotation={[-Math.PI * 0.5, 0, 0]}
          >
            <planeGeometry />
            <MeshReflectorMaterial
              resolution={256} // this affects performance a lot!
              blur={[300, 100]}
              mixBlur={1}
              mirror={[0.85]}
              color="#C1C1C1"
              mixStrength={2}
              depthScale={1}
              minDepthThreshold={0.85}
              metalness={0.5}
              roughness={0.7}
              reflectorOffset={0.2}
            />
          </mesh>
        </group>
      </Physics>
    </>
  );
}
