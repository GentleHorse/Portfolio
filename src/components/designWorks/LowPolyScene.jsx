import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function LowPolyScene(props) {
  const { nodes, materials } = useGLTF(
    "/models/design-works/low-poly-scene.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <group position={[-11.195, 3.25, 14.14]}>
        <mesh
          geometry={nodes.Cylinder035.geometry}
          material={materials["wood-dark-low-poly.001"]}
        />
        <mesh
          geometry={nodes.Cylinder035_1.geometry}
          material={materials["wood-dark-low-poly"]}
        />
        <mesh
          geometry={nodes.Cylinder035_2.geometry}
          material={materials["black-low-poly"]}
        />
      </group>
      <mesh
        geometry={nodes.glassBrick01002.geometry}
        material={materials["glass-low-poly"]}
        position={[-12.597, 3.973, 12.914]}
        rotation={[-0.15, -0.209, -0.896]}
      />
      <mesh
        geometry={nodes.glassBrick02002.geometry}
        material={materials["glass-low-poly"]}
        position={[-10.012, 5.463, 16.019]}
      />
      <mesh
        geometry={nodes["podium-aol"].geometry}
        material={nodes["podium-aol"].material}
        position={[-11.391, 1, 14.459]}
        scale={[3, 1, 3]}
      />
      <mesh
        geometry={nodes.walls.geometry}
        material={nodes.walls.material}
        position={[-14.884, 6, -10.944]}
        scale={6}
      />
      <mesh
        geometry={nodes["stacked-glass-bricks"].geometry}
        material={materials["glass-low-poly"]}
        position={[-14.884, 0, -10.944]}
        scale={6}
      />
      <mesh
        geometry={nodes["podium-iiod"].geometry}
        material={nodes["podium-iiod"].material}
        position={[13.56, 0.763, 12.477]}
        scale={[3.986, 0.769, 3.986]}
      />
      <group
        position={[14.432, 2.376, 10.728]}
        rotation={[0, 0.481, -Math.PI / 2]}
        scale={[2.507, 0.24, 1.563]}
      >
        <mesh
          geometry={nodes.Cube083.geometry}
          material={materials["wood-natural-low-poly"]}
        />
        <mesh
          geometry={nodes.Cube083_1.geometry}
          material={materials["wood-natural-low-poly"]}
        />
      </group>
      <group
        position={[14.461, 3.615, 10.646]}
        rotation={[0.819, 0.343, -1.916]}
        scale={[0.233, 0.51, 0.233]}
      >
        <mesh
          geometry={nodes.Cylinder062.geometry}
          material={materials["wood-natural-low-poly"]}
        />
        <mesh
          geometry={nodes.Cylinder062_1.geometry}
          material={materials["wood-natural-low-poly"]}
        />
      </group>
      <mesh
        geometry={nodes["wood-stand001"].geometry}
        material={materials["wood-natural-low-poly"]}
        position={[16.786, 1.672, 9.573]}
        rotation={[Math.PI, -0.481, Math.PI / 2]}
        scale={[0.132, 1.351, 0.203]}
      />
      <group
        position={[14.467, 2.397, 10.696]}
        rotation={[0, 0.481, -Math.PI / 2]}
        scale={[2.439, 0.233, 1.52]}
      >
        <mesh
          geometry={nodes.Cube065.geometry}
          material={materials["marble-a-low-poly"]}
        />
        <mesh
          geometry={nodes.Cube065_1.geometry}
          material={materials["marble-a-low-poly"]}
        />
      </group>
      <group
        position={[11.481, 3.991, 14.098]}
        rotation={[0, 1.074, 1.571]}
        scale={[1.856, 0.116, 1.157]}
      >
        <mesh
          geometry={nodes.Cube091.geometry}
          material={materials["marble-a-low-poly"]}
        />
        <mesh
          geometry={nodes.Cube091_1.geometry}
          material={materials["marble-a-low-poly"]}
        />
      </group>
      <group
        position={[12.614, 2.62, 14.511]}
        rotation={[Math.PI / 2, 0, -1.074]}
        scale={[1.856, 0.133, 1.157]}
      >
        <mesh
          geometry={nodes.Cube092.geometry}
          material={materials["marble-b-low-poly"]}
        />
        <mesh
          geometry={nodes.Cube092_1.geometry}
          material={materials["marble-b-low-poly"]}
        />
      </group>
      <group
        position={[12.614, 2.62, 14.511]}
        rotation={[Math.PI / 2, 0, -1.074]}
        scale={[1.856, 0.178, 1.157]}
      >
        <mesh
          geometry={nodes.Cube093.geometry}
          material={materials["wood-natural-low-poly"]}
        />
        <mesh
          geometry={nodes.Cube093_1.geometry}
          material={materials["wood-natural-low-poly"]}
        />
      </group>
      <group
        position={[10.789, 1.722, 14.4]}
        rotation={[0, -0.496, 0]}
        scale={[1.856, 0.145, 1.157]}
      >
        <mesh
          geometry={nodes.Cube094.geometry}
          material={materials["marble-a-low-poly"]}
        />
        <mesh
          geometry={nodes.Cube094_1.geometry}
          material={materials["marble-a-low-poly"]}
        />
      </group>
      <mesh
        geometry={nodes["typo-alphabet-a"].geometry}
        material={nodes["typo-alphabet-a"].material}
        position={[6.344, 2.898, -9.823]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
      />
      <mesh
        geometry={nodes["typo-alphabet-b"].geometry}
        material={nodes["typo-alphabet-b"].material}
        position={[12.019, 2.898, -9.823]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
      />
      <mesh
        geometry={nodes["typo-alphabet-c"].geometry}
        material={nodes["typo-alphabet-c"].material}
        position={[17.471, 2.898, -9.823]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={50}
      />
      <mesh
        geometry={nodes.Cube037.geometry}
        material={nodes.Cube037.material}
        position={[6.335, 2.932, -9.823]}
        scale={[2.122, 2.122, 0.746]}
      />
      <mesh
        geometry={nodes.Cube038.geometry}
        material={nodes.Cube038.material}
        position={[11.998, 2.932, -9.823]}
        scale={[2.122, 2.122, 0.746]}
      />
      <mesh
        geometry={nodes.Cube039.geometry}
        material={nodes.Cube039.material}
        position={[17.396, 2.932, -9.823]}
        scale={[2.122, 2.122, 0.746]}
      />
      <mesh
        geometry={nodes["podium-cd"].geometry}
        material={nodes["podium-cd"].material}
        position={[1.851, 3.448, 3.718]}
        scale={[3.648, 1.216, 3.648]}
      />
      <group position={[0.213, 6.644, 4.728]} scale={[1.096, 0.876, 1.096]}>
        <mesh
          geometry={nodes.Cylinder142.geometry}
          material={materials["ceramic-white"]}
        />
        <mesh
          geometry={nodes.Cylinder142_1.geometry}
          material={materials["ceramic-white"]}
        />
      </group>
      <group
        position={[0.213, 5.6, 4.728]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-1.044, -0.678, -1.044]}
      >
        <mesh
          geometry={nodes.Cylinder143.geometry}
          material={materials["ceramic-black"]}
        />
        <mesh
          geometry={nodes.Cylinder143_1.geometry}
          material={materials["ceramic-black"]}
        />
      </group>
      <mesh
        geometry={nodes["vessel-b-lid"].geometry}
        material={materials["ceramic-white"]}
        position={[3.258, 7.114, 2.913]}
        scale={[1.145, 0.999, 1.145]}
      />
      <group position={[3.258, 6.048, 2.913]} scale={0.915}>
        <mesh
          geometry={nodes.Sphere006.geometry}
          material={materials["ceramic-black"]}
        />
        <mesh
          geometry={nodes.Sphere006_1.geometry}
          material={materials["ceramic-black"]}
        />
      </group>
      <group position={[3.258, 4.562, 2.913]} scale={[1, 0.806, 1]}>
        <mesh
          geometry={nodes.Sphere007.geometry}
          material={materials["ceramic-black"]}
        />
        <mesh
          geometry={nodes.Sphere007_1.geometry}
          material={materials["ceramic-black"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/design-works/low-poly-scene.gltf");
