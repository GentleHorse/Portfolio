import { useGLTF, Text3D } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Title() {
  const logo = useGLTF("./models/title/logo.gltf");
  const arrowMark = useGLTF("./models/title/arrow-mark.gltf");

  return (
    <>
      {/* LOGO */}
      <RigidBody name="ground">
        <mesh
          scale={2}
          position={[1, 0, 0]}
          rotation={[0, 0, 0]}
          geometry={logo.nodes.logo.geometry}
        >
          <meshNormalMaterial />
        </mesh>
      </RigidBody>

      {/* 3D TEXT */}
      <group position={[1.5, 0, 0]}>
        <RigidBody name="ground">
          <Text3D
            font="./fonts/Vollkorn_ExtraBold_Regular.json"
            size={0.5}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            Toshihito Endo's portfolio
            <meshNormalMaterial />
          </Text3D>
        </RigidBody>
      </group>

      {/* ARROW MARK */}
      <RigidBody name="ground">
        <mesh
          scale={2}
          position={[11.3, 0, 0]}
          rotation={[0, 0, 0]}
          geometry={arrowMark.nodes.arrowMark.geometry}
        >
          <meshNormalMaterial />
        </mesh>
      </RigidBody>
    </>
  );
}

useGLTF.preload("./models/title/logo.gltf");
useGLTF.preload("./models/title/arrow-mark.gltf");
