import { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import TitleText from "./TitleText";

const TITLE = "Toshihito Endo's portfolio";

export default function Title() {
  const logo = useGLTF("./models/title/logo.gltf");
  const arrowMark = useGLTF("./models/title/arrow-mark.gltf");

  const [isTouched, setIsTouched] = useState(false);

  return (
    <>
      {/* LOGO */}
      <RigidBody
        name="title"
        gravityScale={isTouched ? 1.5 : 0}
        onCollisionEnter={() => setIsTouched(true)}
        canSleep={false}
      >
        <mesh
          scale={2}
          position={[0.8, 2.3, 0]}
          rotation={[0, 0, 0]}
          geometry={logo.nodes.logo.geometry}
        >
          <meshNormalMaterial />
        </mesh>
      </RigidBody>

      {/* 3D TEXT */}
      <group position={[1.5, 0, 0]}>
        {TITLE.split("").map((char, index) => (
          <TitleText
            key={char + index}
            char={char}
            index={index}
          />
        ))}
      </group>

      {/* ARROW MARK */}
      <RigidBody
        name="title"
        gravityScale={isTouched ? 1.5 : 0}
        onCollisionEnter={() => setIsTouched(true)}
        canSleep={false}
      >
        <mesh
          scale={2}
          position={[15.5, 2, 0]}
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
