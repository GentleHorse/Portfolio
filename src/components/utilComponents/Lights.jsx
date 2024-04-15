import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Lights() {
  const directionalLightRef = useRef();

  useFrame((state) => {
    const cameraPosition = state.camera.position;

    directionalLightRef.current.position.z = cameraPosition.z + 1 - 4;
    directionalLightRef.current.target.position.z = cameraPosition.z - 4;
    directionalLightRef.current.target.updateMatrixWorld();
  });

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

      <ambientLight intensity={1} />
    </>
  );
}
