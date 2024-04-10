import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DirectionalLight } from "three";

export default function Lights() {
  const directionalLightRef = useRef();
  const pointLightRef = useRef();

  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[4, 2, 0]}
        intensity={0.1}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />
      
      <ambientLight intensity={0.1} />

      {/* <pointLight ref={pointLightRef} position={[0, 2, 0]} /> */}
    </>
  );
}
