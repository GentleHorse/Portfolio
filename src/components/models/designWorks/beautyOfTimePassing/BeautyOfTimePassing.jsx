import React, { useRef } from "react";
import { useGLTF, Text, useVideoTexture } from "@react-three/drei";

export default function BeautyOfTimePassing(props) {
  const springVideoTexture = useVideoTexture(
    "./videos/beauty-of-time-passing/spring.mp4"
  );
  const summerVideoTexture = useVideoTexture(
    "./videos/beauty-of-time-passing/summer.mp4"
  );
  const autumnVideoTexture = useVideoTexture(
    "./videos/beauty-of-time-passing/autumn.mp4"
  );
  const winterVideoTexture = useVideoTexture(
    "./videos/beauty-of-time-passing/winter.mp4"
  );

  const { nodes, materials } = useGLTF(
    "./models/design-works/beauty-of-time-passing/beauty-of-time-passing.glb"
  );
  return (
    <group {...props} dispose={null}>
      {/* TOPIC */}
      <group scale={5} position={[10, 5, 8]} rotation={[0, Math.PI * 0.1, 0]}>
        <Text
          color="white"
          anchorX="center"
          anchorY="middle"
          font="./fonts/shippori-mincho-b1-v21-japanese-800.woff"
          characters="abcdefghijklmnopqrstuvwxyz0123456789!"
        >
          Beauty of Time Passing
        </Text>
      </group>

      {/* MODEL */}
      <mesh
        geometry={nodes.wall004.geometry}
        material={materials["wood-natural-wall"]}
      />
      <mesh
        geometry={nodes["scenery-window-spring"].geometry}
        // material={materials["emission-plane-pink"]}
      >
        <meshBasicMaterial map={springVideoTexture} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes["scenery-window-summer"].geometry}
        // material={materials["emission-plane-green"]}
        >
        <meshBasicMaterial map={summerVideoTexture} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes["scenery-window-fall"].geometry}
        // material={materials["emission-plane-red"]}
        >
        <meshBasicMaterial map={autumnVideoTexture} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes["scenery-window-winter"].geometry}
        // material={materials["emission-plane-white"]}
        >
        <meshBasicMaterial map={winterVideoTexture} toneMapped={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload(
  "./models/design-works/beauty-of-time-passing/beauty-of-time-passing.glb"
);
