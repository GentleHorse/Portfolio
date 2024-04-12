import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function ProductOfAmbienceOfLight({
  scale,
  position,
  rotation,
  minEmissionStrength = 0.1,
  emissionStrength = 10,
  blinkSpeed = 2,
  blinkDelay = 8,
}) {
  /**
   * LOAD NODES, MATERIALS
   */
  const { nodes, materials } = useGLTF(
    "./models/design-works/ambience-of-light/ambience-of-light.gltf"
  );

  /**
   * GLASS BRICK REF
   */
  const glassBrickTop = useRef();
  const glassBrickBottom = useRef();

  /**
   * POINT LIGHT REF
   */
  const light = useRef();

  /**
   * BLINKING LOGIC BY FRAME
   */
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    light.current.intensity =
      emissionStrength *
      (Math.sin(time * blinkSpeed + blinkDelay) + 0.5 + minEmissionStrength);
  });

  return (
    <RigidBody
      scale={scale}
      position={position}
      rotation={rotation}
      type="fixed"
    >
      <group dispose={null}>
        {/* GLASS BRICKS */}
        <mesh
          geometry={nodes.glassBrickDetailedTop.geometry}
          material={materials["glass.001"]}
          position={[0.002, 1.708, -0.005]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.449, 0.36, 0.947]}
        >
          <meshPhysicalMaterial
            roughness={0.0}
            transmission={0.5}
            thickness={0.7}
            color="#81C7D4"
          />
        </mesh>
        <mesh
          geometry={nodes.glassBrickDetailedBottom.geometry}
          material={materials["glass.001"]}
          position={[0.002, 0.947, -0.005]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.449, 0.36, 0.947]}
        >
          <meshPhysicalMaterial
            roughness={0.0}
            transmission={0.5}
            thickness={0.7}
            color="#81C7D4"
          />
        </mesh>

        {/* SUPPORT WOOD STICKS */}
        <mesh
          geometry={nodes.supportStickRight.geometry}
          material={materials["wood-dark-brown"]}
          position={[0.378, 0.561, -0.005]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 0.675, 1]}
        />
        <mesh
          geometry={nodes.supportStickLeft.geometry}
          material={materials["wood-dark-brown"]}
          position={[-0.377, 0.561, -0.005]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 0.675, 1]}
        />

        {/* WOOD FRAME */}
        <mesh
          geometry={nodes.woodFrame.geometry}
          material={materials["wood-brown"]}
        />

        {/* LIGTH SOCKET */}
        <mesh
          geometry={nodes.lightSocket.geometry}
          material={materials.black}
          position={[0, 3.308, 0]}
          scale={[0.24, 0.314, 0.24]}
        />

        {/* LED LIGHT SOURCE */}
        <pointLight ref={light} position={[0, 1.5, 0]} intensity={0.5} />
      </group>
    </RigidBody>
  );
}

useGLTF.preload(
  "./models/design-works/ambience-of-light/ambience-of-light.gltf"
);
