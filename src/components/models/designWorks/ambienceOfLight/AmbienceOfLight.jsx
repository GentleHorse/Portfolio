/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 ./public/models/design-works/ambience-of-light/ambience-of-light.gltf 
*/

import React, { useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";

export default function AmbienceOfLight(props) {
  const { nodes, materials } = useGLTF(
    "/models/design-works/ambience-of-light/ambience-of-light.gltf"
  );
  return (
    <group {...props} dispose={null}>
      
      {/* TOPIC */}
      <group scale={2} position={[0, 3, 5]}>
        <Text
          color="white"
          anchorX="center"
          anchorY="middle"
          font="./fonts/shippori-mincho-b1-v21-japanese-800.woff"
          characters="abcdefghijklmnopqrstuvwxyz0123456789!"
        >
          Ambience of Light
        </Text>
      </group>

      {/* MODEL */}
      <mesh
        geometry={nodes["wood-frame-right001"].geometry}
        material={materials["wood-dark-low-poly"]}
        position={[3.57, 6.057, 0.112]}
      />
      <mesh
        geometry={nodes["wood-frame-bottom001"].geometry}
        material={materials["wood-dark-low-poly"]}
        position={[-0.085, 1.122, 1.21]}
      />
      <mesh
        geometry={nodes["wood-frame-left001"].geometry}
        material={materials["wood-dark-low-poly"]}
        position={[-4.606, 4.766, 2.18]}
      />
      <mesh
        geometry={nodes["wood-frame-top001"].geometry}
        material={materials["wood-dark-low-poly"]}
        position={[-0.156, 10.762, -1.364]}
      />
      <mesh
        geometry={nodes["wood-stick-back001"].geometry}
        material={materials["wood-dark-low-poly.001"]}
        position={[0.196, 2.766, 0.091]}
      />
      <mesh
        geometry={nodes["wood-stick-front001"].geometry}
        material={materials["wood-dark-low-poly.001"]}
        position={[0.654, 6.716, 1.898]}
      />
      <mesh
        geometry={nodes["led-light-socket001"].geometry}
        material={materials["black-low-poly"]}
        position={[-2.127, 9.5, -0.603]}
      />
      <mesh
        geometry={nodes.glassBrick01004.geometry}
        material={materials["glass-low-poly"]}
        position={[-2.177, 6.064, -0.878]}
      />
      <mesh
        geometry={nodes.glassBrick02004.geometry}
        material={materials["glass-low-poly"]}
        position={[0.402, 4.01, 2.639]}
      />
      <mesh
        geometry={nodes["led-light-wire-curve001"].geometry}
        material={materials["black-low-poly"]}
        position={[-0.328, 10.612, -0.829]}
      />
    </group>
  );
}

useGLTF.preload(
  "/models/design-works/ambience-of-light/ambience-of-light.gltf"
);
