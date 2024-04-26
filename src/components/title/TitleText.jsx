import { useState } from "react";
import { Text3D } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function TitleText({ char, index }) {
    const [isTouched, setIsTouched] = useState(false);

  return (
    <>
      <RigidBody
        name="title"
        key={index}
        position={[index * 0.5, 2, 0]}
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
    </>
  );
}
