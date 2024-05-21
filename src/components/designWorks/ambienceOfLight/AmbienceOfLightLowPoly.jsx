import React from "react";
import { useGLTF, Float } from "@react-three/drei";

export function AmbienceOfLightLowPoly(props) {
  const { nodes, materials } = useGLTF(
    "/models/design-works/ambience-of-light/ambience-of-light-low-poly.gltf"
  );
  return (
    <group {...props} dispose={null}>
      {/* Frame */}
      <Float floatIntensity={0.8} floatingRange={0.8}>
        <group position={[0, -0.973, 0.197]}>
          <mesh
            geometry={nodes.Cylinder003.geometry}
            material={materials["wood-natural-low-poly"]}
          />
          <mesh
            geometry={nodes.Cylinder003_1.geometry}
            material={materials["wood-dark-low-poly"]}
          />
          <mesh
            geometry={nodes.Cylinder003_2.geometry}
            material={materials["black-low-poly"]}
          />
        </group>
      </Float>

      {/* Glass brick 01 */}
      <Float floatIntensity={0.8} floatingRange={0.8}>
        <mesh
          geometry={nodes.glassBrick01.geometry}
          material={materials["glass-low-poly"]}
          position={[-1.403, -0.25, -1.029]}
        />
      </Float>
      {/* Glass brick 02 */}
      <Float floatIntensity={0.8} floatingRange={0.8}>
        <mesh
          geometry={nodes.glassBrick02.geometry}
          material={materials["glass-low-poly"]}
          position={[1.183, 1.24, 2.076]}
        />
      </Float>
    </group>
  );
}

useGLTF.preload(
  "/models/design-works/ambience-of-light/ambience-of-light-low-poly.gltf"
);
