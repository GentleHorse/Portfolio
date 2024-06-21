import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function LowPolyScene(props) {
  const { nodes, materials } = useGLTF(
    "/models/design-works/low-poly-scene.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <group position={[40.888, 0, -17.344]} rotation={[Math.PI, -0.167, Math.PI]} scale={1.951}>
        <mesh geometry={nodes.Marina_1276_COR009.geometry} material={nodes.Marina_1276_COR009.material} />
        <mesh geometry={nodes.Marina_1276_COR009_1.geometry} material={materials['wood-dark-low-poly']} />
        <mesh geometry={nodes.Marina_1276_COR009_2.geometry} material={materials['wood-dark-low-poly.001']} />
        <mesh geometry={nodes.Marina_1276_COR009_3.geometry} material={materials['black-low-poly']} />
        <mesh geometry={nodes.Marina_1276_COR009_4.geometry} material={materials['glass-low-poly']} />
        <mesh geometry={nodes.Marina_1276_COR009_5.geometry} material={materials['tree-summer']} />
        <mesh geometry={nodes.Marina_1276_COR009_6.geometry} material={materials.Bark} />
        <mesh geometry={nodes.Marina_1276_COR009_7.geometry} material={materials['wood-natural-low-poly']} />
        <mesh geometry={nodes.Marina_1276_COR009_8.geometry} material={materials['marble-a-low-poly']} />
        <mesh geometry={nodes.Marina_1276_COR009_9.geometry} material={materials['white-paper']} />
        <mesh geometry={nodes.Marina_1276_COR009_10.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Marina_1276_COR009_11.geometry} material={materials['ceramic-white']} />
        <mesh geometry={nodes.Marina_1276_COR009_12.geometry} material={materials['ceramic-black']} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/design-works/low-poly-scene.gltf");
