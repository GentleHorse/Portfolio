import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import GlassBrick from "./GlassBrick";

export default function ProductOfAmbienceOfLight({
  scale,
  position,
  rotation,
  minEmissionStrength = 0.1,
  emissionStrength = 10,
  blinkSpeed = 2,
  blinkDelay = 8,
  rotationSpeed = 0.5,
  glassBrickMovementStrength = 0.4,
  glassBrickMovementDelay = 8,
}) {
  /**
   * LOAD NODES, MATERIALS
   */
  const { nodes, materials } = useGLTF(
    "./models/design-works/ambience-of-light/ambience-of-light.gltf"
  );

  /**
   * THE WHOLE PRODUCT REF
   */
  const meshBody = useRef();

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
      (Math.sin(time * blinkSpeed + blinkDelay) + 1 + minEmissionStrength);

    meshBody.current.rotation.y += rotationSpeed * delta;

    glassBrickTop.current.position.x =
      Math.sin(time) * glassBrickMovementStrength;
    glassBrickBottom.current.position.x =
      Math.sin(time + glassBrickMovementDelay) * glassBrickMovementStrength;
  });

  return (
    // <RigidBody
    //   scale={scale}
    //   position={position}
    //   rotation={rotation}
    //   type="fixed"
    // >
    <group
      ref={meshBody}
      scale={scale}
      position={position}
      rotation={rotation}
      dispose={null}
    >
      {/* GLASS BRICKS */}
      <group ref={glassBrickTop}>
        <GlassBrick position={[0, 1.75, 0]} />
      </group>
      <group ref={glassBrickBottom}>
        <GlassBrick position={[0, 1, 0]} />
      </group>

      {/* SUPPORT WOOD STICKS */}
      <mesh
        geometry={nodes.supportStickRight.geometry}
        // material={materials["wood-dark-brown"]}
        position={[0.378, 0.561, -0.005]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 0.675, 1]}
      >
        <meshStandardMaterial color="#fcfaf2" />
      </mesh>
      <mesh
        geometry={nodes.supportStickLeft.geometry}
        // material={materials["wood-dark-brown"]}
        position={[-0.377, 0.561, -0.005]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 0.675, 1]}
      >
        <meshStandardMaterial color="#fcfaf2" />
      </mesh>

      {/* WOOD FRAME */}
      <mesh
        geometry={nodes.woodFrame.geometry}
        // material={materials["wood-brown"]}
      >
        <meshStandardMaterial color="#fcfaf2" />
      </mesh>

      {/* LIGTH SOCKET */}
      <mesh
        geometry={nodes.lightSocket.geometry}
        // material={materials.black}
        position={[0, 3.308, 0]}
        scale={[0.24, 0.314, 0.24]}
      >
        <meshStandardMaterial color="#fcfaf2" />
      </mesh>

      {/* LED LIGHT SOURCE */}
      <pointLight ref={light} position={[0, 1.5, 0]} intensity={0.5} />
    </group>
    // </RigidBody>
  );
}

useGLTF.preload(
  "./models/design-works/ambience-of-light/ambience-of-light.gltf"
);
