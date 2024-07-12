/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 ./public/models/design-works/comforting-dinner/comforting-dinner.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ComfortingDinner(props) {
  const { nodes, materials } = useGLTF(
    "./models/design-works/comforting-dinner/comforting-dinner.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group
        position={[17.777, 7.922, -0.585]}
        rotation={[0.133, -0.995, -0.373]}
      >
        <mesh
          geometry={nodes.Plane067.geometry}
          material={materials["ceramic-white-cutlery-baked"]}
        />
        <mesh
          geometry={nodes.Plane067_1.geometry}
          material={materials["ceramic-black-cutlery-baked"]}
        />
      </group>
      <mesh
        geometry={nodes["comforting-dinner-baked-table001"].geometry}
        material={materials["table-comforting-dinner-baked"]}
        position={[-0.798, 1.281, 0.906]}
      />
      <mesh
        geometry={nodes["comforting-dinner-baked-johns001"].geometry}
        material={materials["john-mesh-baked"]}
        position={[-17.682, 0.399, -1.091]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={15.866}
      />
    </group>
  );
}

useGLTF.preload(
  "./models/design-works/comforting-dinner/comforting-dinner.glb"
);
