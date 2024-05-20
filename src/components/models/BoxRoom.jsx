import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export default function BoxRoom(props) {
  const { nodes, materials } = useGLTF("/models/box-room/boxRoom.gltf");

  /**
   * BAKED TEXTURE
   */
  const bakedTexture = useTexture("/textures/box-room/ambience-of-light.jpg");
  bakedTexture.flipY = false;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.boxRoom.geometry}
        position={[0, 7.125, 0]}
        scale={7.131}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/box-room/boxRoom.gltf");
