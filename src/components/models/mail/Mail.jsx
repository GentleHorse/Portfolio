/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 ./public/models/mail/mail.glb 
*/

import React from "react";
import { useGLTF, Clone } from "@react-three/drei";

/**
 * Use "<Clone>" instead of "<mesh>" for populating multiple times
 */
export default function Mail(props) {
  const { nodes, materials } = useGLTF("/models/mail/mail.glb");
  return (
    <group {...props} dispose={null}>
      <Clone
        object={nodes.mail001}
        inject={
          <meshStandardMaterial
            color="#434343"
            roughness={0.01}
            metalness={0.95}
          />
        }
      />
    </group>
  );
}

useGLTF.preload("/models/mail/mail.glb");
