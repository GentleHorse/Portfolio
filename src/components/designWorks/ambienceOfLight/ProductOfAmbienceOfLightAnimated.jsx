import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, Outlines } from "@react-three/drei";

export default function ProductOfAmbienceOfLightAnimated(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/design-works/ambience-of-light/ambience-of-light-animated.gltf "
  );
  const { actions } = useAnimations(animations, group);

  console.log(actions);

  useEffect(() => {
    actions["frameAction.001"].play().setEffectiveTimeScale(0.3);
    actions["glassBrickDetailed.001Action"].play().setEffectiveTimeScale(0.3);
    actions["glassBrickDetailed.002Action"].play().setEffectiveTimeScale(0.3);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="pathForTopGlassBrick"
          position={[0, 3.877, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2.052}
        />
        <group
          name="pathForBottomGlassBrick"
          position={[4.96, 3.963, 0]}
          rotation={[Math.PI / 2, 0.021, Math.PI]}
          scale={2.052}
        />
        <mesh
          name="glassBrickDetailed002"
          geometry={nodes.glassBrickDetailed002.geometry}
          // material={materials["glass.001"]}
          position={[-0.034, 1.43, 0]}
          rotation={[Math.PI / 2, -0.005, 0]}
        >
          <meshBasicMaterial color="white" opacity={0.8} transparent />
          <Outlines thickness={0.01} />
        </mesh>
        <group name="frame">
          <mesh
            name="Cylinder025"
            geometry={nodes.Cylinder025.geometry}
            material={materials["wood-dark-brown"]}
          >
            <meshBasicMaterial color="white" opacity={0.8} transparent />
            <Outlines thickness={0.01} />
          </mesh>
          <mesh
            name="Cylinder025_1"
            geometry={nodes.Cylinder025_1.geometry}
            material={materials["wood-brown"]}
          >
            <meshBasicMaterial color="white" opacity={0.8} transparent />
            <Outlines thickness={0.01} />
          </mesh>
          <mesh
            name="Cylinder025_2"
            geometry={nodes.Cylinder025_2.geometry}
            material={materials.black}
          >
            <meshBasicMaterial color="white" opacity={0.8} transparent />
            <Outlines thickness={0.01} />
          </mesh>
        </group>
        <mesh
          name="glassBrickDetailed001"
          geometry={nodes.glassBrickDetailed001.geometry}
          material={materials["glass.001"]}
          position={[1.912, -0.4, 0]}
          rotation={[0, 0, -0.005]}
        >
          <meshBasicMaterial color="white" opacity={0.8} transparent />
          <Outlines thickness={0.01} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload(
  "/models/design-works/ambience-of-light/ambience-of-light-animated.gltf "
);
