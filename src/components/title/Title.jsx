import { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import TitleText from "./TitleText";

const TITLE = "Toshihito Endo's portfolio";

export default function Title(props) {
  const logo = useGLTF("./models/title/logo.gltf");
  const arrowMark = useGLTF("./models/title/arrow-mark.gltf");

  const [isLogoTouched, setIsLogoTouched] = useState(false);
  const [isArrowTouched, setIsArrowTouched] = useState(false);

  // UI
  const { color } = useControls("title", {
    color: "#fcfaf2",
  });

  return (
    <group {...props}>
      {/* LOGO */}
      <RigidBody
        name="title"
        gravityScale={isLogoTouched ? 1.5 : 0}
        onCollisionEnter={() => setIsLogoTouched(true)}
        canSleep={false}
      >
        <mesh
          scale={2}
          position={[0.8, 2.3, 0]}
          rotation={[0, 0, 0]}
          geometry={logo.nodes.logo.geometry}
        >
          <meshStandardMaterial color={color} />
        </mesh>
      </RigidBody>

      {/* 3D TEXT */}
      <group position={[1.5, 0, 0]}>
        {TITLE.split("").map((char, index) => (
          <TitleText key={char + index} char={char} index={index} color={color} />
        ))}
      </group>

      {/* ARROW MARK */}
      <RigidBody
        name="title"
        gravityScale={isArrowTouched ? 1.5 : 0}
        onCollisionEnter={() => setIsArrowTouched(true)}
        canSleep={false}
      >
        <mesh
          scale={2}
          position={[15.5, 2, 0]}
          rotation={[0, 0, 0]}
          geometry={arrowMark.nodes.arrowMark.geometry}
        >
          <meshStandardMaterial color={color} />
        </mesh>
      </RigidBody>
    </group>
  );
}

useGLTF.preload("./models/title/logo.gltf");
useGLTF.preload("./models/title/arrow-mark.gltf");
