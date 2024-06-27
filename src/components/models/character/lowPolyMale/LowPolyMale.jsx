import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function LowPolyMale(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/low-poly-male/low-poly-male.gltf"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="low-poly-male" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="low-poly-male001"
            geometry={nodes["low-poly-male001"].geometry}
            material={materials["low-poly-male.001"]}
            skeleton={nodes["low-poly-male001"].skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/low-poly-male/low-poly-male.gltf");
