import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function ProductOfAmbienceOfLight(props) {
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
   * BLINK PARAMS
   */
  const MIN_EMISSION_STRENGTH = 0.1;
  const EMISSION_STRENGTH = 15;
  const BLINK_SPEED = 4;
  const BLINK_DELAY = 8;

  /**
   * BLINKING LOGIC BY FRAME
   */
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    glassBrickTop.current.material.color.r =
      EMISSION_STRENGTH *
      (Math.sin(time * BLINK_SPEED + BLINK_DELAY) + 1 + MIN_EMISSION_STRENGTH);
    glassBrickTop.current.material.color.g =
      EMISSION_STRENGTH *
      (Math.sin(time * BLINK_SPEED + BLINK_DELAY) + 1 + MIN_EMISSION_STRENGTH);
    glassBrickTop.current.material.color.b =
      EMISSION_STRENGTH *
      (Math.sin(time * BLINK_SPEED + BLINK_DELAY) + 1 + MIN_EMISSION_STRENGTH);

    glassBrickBottom.current.material.color.r =
      EMISSION_STRENGTH * (Math.sin(time * BLINK_SPEED) + 1 + MIN_EMISSION_STRENGTH);
    glassBrickBottom.current.material.color.g =
      EMISSION_STRENGTH * (Math.sin(time * BLINK_SPEED) + 1 + MIN_EMISSION_STRENGTH);
    glassBrickBottom.current.material.color.b =
      EMISSION_STRENGTH * (Math.sin(time * BLINK_SPEED) + 1 + MIN_EMISSION_STRENGTH);
  });

  return (
    <RigidBody {...props} type="fixed">
      <group dispose={null}>
        {/* GLASS BRICKS */}
        <mesh
          ref={glassBrickTop}
          geometry={nodes.glassBrickTop.geometry}
          scale={0.888}
        >
          <meshBasicMaterial color={[0.5, 0.5, 1.5]} toneMapping={false} />
        </mesh>
        <mesh
          ref={glassBrickBottom}
          geometry={nodes.glassBrickBottom.geometry}
          position={[0, -0.836, 0]}
          scale={0.888}
        >
          <meshBasicMaterial color={[0.5, 0.5, 1.5]} toneMapping={false} />
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
      </group>

      {/* LED LIGHT SOURCE */}
      <pointLight position={[0, 2, 0]} intensity={0.6} />
    </RigidBody>
  );
}

useGLTF.preload(
  "./models/design-works/ambience-of-light/ambience-of-light.gltf"
);
