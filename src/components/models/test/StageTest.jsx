/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 ./public/models/test/stage-test.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function StageTest(props) {
  const { nodes, materials } = useGLTF("/models/test/stage-test.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["marina-low-poly"].geometry}
        material={materials["low-poly-human"]}
        position={[32.862, 0, -0.838]}
        rotation={[0, -1.362, 0]}
        scale={1.951}
      />
      <mesh
        geometry={nodes["marina-low-poly001"].geometry}
        material={materials["low-poly-human"]}
        position={[-49.397, 0.348, 72.055]}
        rotation={[Math.PI, -0.98, Math.PI]}
        scale={1.951}
      />
      <mesh
        geometry={nodes["marina-low-poly002"].geometry}
        material={materials["low-poly-human"]}
        position={[-80.738, 0.348, -13.573]}
        rotation={[-Math.PI, 0.165, -Math.PI]}
        scale={1.951}
      />
      <mesh
        geometry={nodes["marina-low-poly003"].geometry}
        material={materials["low-poly-human"]}
        position={[57.662, 0, -56.41]}
        rotation={[-Math.PI, 1.106, -Math.PI]}
        scale={1.951}
      />
      <mesh
        geometry={nodes["marina-low-poly004"].geometry}
        material={materials["low-poly-human"]}
        position={[35.924, 0, 34.487]}
        rotation={[0, 1.298, 0]}
        scale={1.951}
      />
      <group
        position={[-74.301, 5.387, 57.907]}
        rotation={[0, 1.039, -2.002]}
        scale={1.519}
      >
        <mesh
          geometry={nodes.Cylinder158.geometry}
          material={materials["wood-natural-low-poly-baked"]}
        />
        <mesh
          geometry={nodes.Cylinder158_1.geometry}
          material={materials["wood-dark-low-poly-baked"]}
        />
        <mesh
          geometry={nodes.Cylinder158_2.geometry}
          material={materials["black-low-poly-baked.001"]}
        />
        <mesh
          geometry={nodes.Cylinder158_3.geometry}
          material={materials["glass-low-poly-baked"]}
        />
        <mesh
          geometry={nodes.Cylinder158_4.geometry}
          material={materials["black-low-poly-baked"]}
        />
        <mesh
          geometry={nodes.Cylinder158_5.geometry}
          material={materials["white-matt-podium-baked"]}
        />
      </group>
      <mesh
        geometry={nodes.wall003.geometry}
        material={materials["white-matt-test-architecture"]}
        position={[-80.345, -0.015, -51.382]}
        rotation={[Math.PI / 2, 0, 0.602]}
        scale={13.938}
      />
      <group
        position={[-80.439, 0.11, -51.282]}
        rotation={[Math.PI / 2, 0, 0.592]}
        scale={[1.275, 1.275, 1.267]}
      >
        <mesh
          geometry={nodes.Plane043.geometry}
          material={materials["emission-plane-pink-baked"]}
        />
        <mesh
          geometry={nodes.Plane043_1.geometry}
          material={materials["emission-plane-green-baked"]}
        />
        <mesh
          geometry={nodes.Plane043_2.geometry}
          material={materials["emission-plane-red-baked"]}
        />
        <mesh
          geometry={nodes.Plane043_3.geometry}
          material={materials["emission-plane-white-baked"]}
        />
        <mesh
          geometry={nodes.Plane043_4.geometry}
          material={materials["test-architecture-white-matt-baked"]}
        />
      </group>
      <group
        position={[53.252, 4.102, 48.498]}
        rotation={[0, 0.481, -Math.PI / 2]}
      >
        <mesh
          geometry={nodes.Cube160.geometry}
          material={materials["wood-natural-IIOD-baked"]}
        />
        <mesh
          geometry={nodes.Cube160_1.geometry}
          material={materials["marble-a-low-poly-baked"]}
        />
        <mesh
          geometry={nodes.Cube160_2.geometry}
          material={materials["marble-b-low-poly-baked"]}
        />
      </group>
      <group
        position={[84.384, 14.429, -58.031]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={14.021}
      >
        <mesh
          geometry={nodes.Plane044.geometry}
          material={materials["emission-typography-baked"]}
        />
        <mesh
          geometry={nodes.Plane044_1.geometry}
          material={materials["white-matt-typography-baked"]}
        />
      </group>
      <group
        position={[-0.563, 7.922, -28.346]}
        rotation={[0.086, 0.57, -0.531]}
      >
        <mesh
          geometry={nodes.Plane055.geometry}
          material={materials["ceramic-white-cutlery-baked"]}
        />
        <mesh
          geometry={nodes.Plane055_1.geometry}
          material={materials["ceramic-black-cutlery-baked"]}
        />
      </group>
      <mesh
        geometry={nodes["comforting-dinner-baked-table"].geometry}
        material={materials["table-comforting-dinner-baked"]}
        position={[0.928, 1.281, -9.771]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes["test-ground"].geometry}
        // material={materials["test-architecture-white-matt"]}
        scale={95.777}
      >
        <meshStandardMaterial roughness={0.6} metalness={0.7} color="black" />
      </mesh>
      <mesh
        geometry={nodes["test-outer-wall"].geometry}
        material={materials["test-architecture-white-matt"]}
        position={[0, 0, -75.213]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[88.336, 14.08, 14.08]}
      >
        <meshStandardMaterial roughness={0.6} metalness={0.7} color="black" />
      </mesh>
      <mesh
        geometry={nodes["test-inner-walls"].geometry}
        material={materials["test-architecture-white-matt"]}
        scale={[1, 13.192, 1]}
      >
        <meshStandardMaterial roughness={0.6} metalness={0.7} color="black" />
      </mesh>
      <mesh
        geometry={nodes["test-ceiling"].geometry}
        material={materials["test-architecture-white-matt"]}
        position={[0, 28.394, 0]}
        rotation={[0, 0, Math.PI]}
        scale={95.777}
      >
        <meshStandardMaterial roughness={0.6} metalness={0.7} color="black" />
      </mesh>
      <mesh
        geometry={nodes["comforting-dinner-baked-johns"].geometry}
        material={materials["john-mesh-baked"]}
        position={[-1.069, 0.399, 7.113]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={15.866}
      />
    </group>
  );
}

useGLTF.preload("/models/test/stage-test.glb");
