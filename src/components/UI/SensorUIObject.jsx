import { useState } from "react";
import { Outlines, Text } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";

export default function SensorUIObject({ projectName, children, ...props }) {
  const [isPlayerTouched, setIsPlayerTouched] = useState(false);

  const playerEnter = () => {
    setIsPlayerTouched(true);
  };

  const playerLeave = () => {
    setIsPlayerTouched(false);
  };

  return (
    <group {...props}>
      <RigidBody
        position={[0, 0.51, 0]}
        colliders={false}
        type="fixed"
        onIntersectionEnter={({ other }) => {
          if (other.rigidBodyObject.name === "player") {
            playerEnter();
          }
        }}
        onIntersectionExit={({ other }) => {
          if (other.rigidBodyObject.name === "player") {
            playerLeave();
          }
        }}
      >
        <group position={[0, -0.5, 0]}>{children}</group>
        <CuboidCollider args={[0.5, 0.5, 0.5]} sensor={true} />

        {isPlayerTouched && (
          <group scale={0.03} position={[0, 0.1, -0.2]}>
            <Text
              color="crimson"
              anchorX="center"
              anchorY="middle"
              font="./fonts/shippori-mincho-b1-v21-japanese-800.woff"
              characters="abcdefghijklmnopqrstuvwxyz0123456789!"
            >
              Go to the {projectName} page?
            </Text>
            <mesh scale={5} position={[0, 0, -2.0]} rotation={[Math.PI * 0.6, Math.PI * 0.4, Math.PI * 0.2]}>
              <boxGeometry />
              <meshBasicMaterial color="#FFB11B" toneMapped={false} wireframe />
            </mesh>
          </group>
        )}
      </RigidBody>
    </group>
  );
}
