/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 ./public/models/silky-sphere/silky-sphere.glb 
*/

import React, { useMemo } from "react";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";

export default function SilkySphere(props) {
  /**
   * LOAD MODEL
   */
  const { nodes, materials } = useGLTF(
    "./models/silky-sphere/silky-sphere.glb"
  );

  /**
   * MATERIAL
   */
  const GLASS_MATERIAL = useMemo(() => {
    return <MeshTransmissionMaterial backside={false} thickness={2} />;
  }, []);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube001.geometry}
        // material={materials["Material.001"]}
      >
        {GLASS_MATERIAL}
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/silky-sphere/silky-sphere.glb");
