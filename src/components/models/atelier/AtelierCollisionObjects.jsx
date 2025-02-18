import { RigidBody, CuboidCollider } from "@react-three/rapier";
import CollisionObject from "../../utilComponents/CollisionObject.jsx";

/**

      <RigidBody
        colliders={false}
        type="fixed"
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 0, 0]} // Touch its bottom on the ground
          args={[1.0, 1.0, 1.0]}
        />
      </RigidBody>

 */

export default function AtelierCollisionObjects() {
  return (
    <>
      <CollisionObject collisionObjectName="object 1" />

      {/* --- ATELIER, WORKSHOP AREA  -------------------------- */}

      {/* --- VIRTUAL AREA ------------------------------------- */}

      {/* --- MUSEUM AREA -------------------------------------- */}

      {/* --- GARDEN AREA -------------------------------------- */}

      {/* --- ENVIRONMENT AREA --------------------------------- */}

      {/* Ground */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[0, 0.5, 30]}
        friction={0.5}
      >
        <CuboidCollider args={[115, 0.5, 70]} />
      </RigidBody>

      {/* Fence - post, masu-typo side */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[88, 0, 35]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 8.0, 0]} // Touch its bottom on the ground
          args={[1.0, 8.0, 50.0]}
        />
      </RigidBody>

      {/* Fence - museum side */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[40.0, 0, 84.5]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 8, 0]} // Touch its bottom on the ground
          args={[50.0, 8.0, 1.0]}
        />
      </RigidBody>

      {/* Fence - atelier, workshop side */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[40.0, 0, -12.0]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 8, 0]} // Touch its bottom on the ground
          args={[50.0, 8.0, 1.0]}
        />
      </RigidBody>

      {/* Fence - between virtual area - short */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[-10, 0, -17.5]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 8.0, 0]} // Touch its bottom on the ground
          args={[1.0, 8.0, 15.0]}
        />
      </RigidBody>

      {/* Fence - between virtual area - long */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[-10, 0, 45.5]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 8.0, 0]} // Touch its bottom on the ground
          args={[1.0, 8.0, 42.5]}
        />
      </RigidBody>
    </>
  );
}
