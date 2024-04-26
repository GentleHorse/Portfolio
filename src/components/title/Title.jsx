import { useRef, useEffect, useState } from "react";
import { useGLTF, Text3D } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

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
          position={[0.8, 3.3, 0]}
          rotation={[0, 0, 0]}
          geometry={logo.nodes.logo.geometry}
        >
          <meshNormalMaterial />
        </mesh>
      </RigidBody>

      {/* 3D TEXT */}
      <group position={[1.5, 0, 0]}>
        {TITLE.split("").map((char, index) => (
          <RigidBody
            name="title"
            key={index}
            position={[index * 0.5, 3, 0]}
            gravityScale={isTouched ? 1.5 : 0}
            restitution={1.6}
            onCollisionEnter={() => setIsTouched(true)}
            canSleep={false}
          >
            <Text3D
              font="./fonts/Vollkorn_ExtraBold_Regular.json"
              size={0.5}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={1}
            >
              {char}
              <meshNormalMaterial />
            </Text3D>
          </RigidBody>
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
          position={[15.5, 3, 0]}
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
