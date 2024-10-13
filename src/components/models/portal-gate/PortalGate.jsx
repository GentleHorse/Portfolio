/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 ./public/models/portal-gate/portal-gate.glb 
*/

import React from "react";
import { useGLTF, MeshWobbleMaterial } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export default function PortalGate(props) {
  const { nodes, materials } = useGLTF("/models/portal-gate/portal-gate.glb ");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["portal-gate"].geometry}
        // material={materials["portal-gate-material"]}
      >
        {/* <meshBasicMaterial /> */}
        <meshStandardMaterial color="#434343" roughness={0.1} metalness={0.95} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/portal-gate/portal-gate.glb ");
