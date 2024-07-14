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
      <group scale={[1, 1, 1]}>
        <group
          position={[-5.602, 7.534, -4.363]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.288, 1, 1.579]}
        >
          <mesh
            geometry={nodes.Plane045.geometry}
            material={materials["black-low-poly"]}
          />
          <mesh
            geometry={nodes.Plane045_1.geometry}
            material={materials["black-low-poly"]}
          />
        </group>
        <group
          position={[0.123, 0.573, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.753, 1, 1.513]}
        >
          <mesh
            geometry={nodes.Plane051.geometry}
            material={materials["scenery-wall"]}
          />
          <mesh
            geometry={nodes.Plane051_1.geometry}
            material={materials["plane-white"]}
          />
        </group>
        <mesh
          geometry={nodes["window-vertical-divisions"].geometry}
          material={materials["scenery-wall"]}
          position={[-4.528, 7.478, 0]}
          scale={[0.186, 1, 1]}
        />
        <mesh
          geometry={nodes["scnery-window-spring"].geometry}
          material={materials["emission-plane-pink"]}
          position={[0.16, 7.516, -3.324]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.6, 1, 1.513]}
        >
          <meshBasicMaterial map={springVideoTexture} toneMapped={false} />
        </mesh>
        <mesh
          geometry={nodes["scnery-window-summer"].geometry}
          material={materials["emission-plane-green"]}
          position={[0.16, 7.516, -3.324]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.6, 1, 1.513]}
        >
          <meshBasicMaterial map={summerVideoTexture} toneMapped={false} />
        </mesh>
        <mesh
          geometry={nodes["scnery-window-autumn"].geometry}
          material={materials["emission-plane-red"]}
          position={[0.16, 7.516, -3.324]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.6, 1, 1.513]}
        >
          <meshBasicMaterial map={autumnVideoTexture} toneMapped={false} />
        </mesh>
        <mesh
          geometry={nodes["scnery-window-winter"].geometry}
          material={materials["emission-plane-white"]}
          position={[0.16, 7.516, -3.324]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.6, 1, 1.513]}
        >
          <meshBasicMaterial map={winterVideoTexture} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload(
  "./models/design-works/beauty-of-time-passing/beauty-of-time-passing.glb"
);
