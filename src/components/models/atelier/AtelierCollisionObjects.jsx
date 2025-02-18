import { RigidBody, CuboidCollider } from "@react-three/rapier";

import CollisionObject from "../../utilComponents/CollisionObject.jsx";

export default function AtelierCollisionObjects() {
  return (
    <>
      {/* GROUND COLLISION */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[0, 0.5, -50]}
        friction={0.5}
      >
        <CuboidCollider args={[200, 0.5, 200]} />
      </RigidBody>

      <CollisionObject collisionObjectName="object 1" />
      <CollisionObject collisionObjectName="object 2" />
      <CollisionObject collisionObjectName="object 3" />
    </>
  );
}
