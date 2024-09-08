import { RigidBody, CuboidCollider } from "@react-three/rapier";

export default function StageCollisionObjects(props) {
  return (
    <>
      <group {...props}>
        {/* GROUND */}
        <RigidBody colliders={false} type="fixed" position={[0, 0.5, -50]}>
          <CuboidCollider args={[100, 0.5, 120]} />
        </RigidBody>

        {/* LANDING ROOM */}
        <RigidBody colliders={false} type="fixed" position={[10, 5, 16]}>
          <CuboidCollider args={[18, 8, 0.5]} />
        </RigidBody>

        <RigidBody
          colliders={false}
          type="fixed"
          rotation={[0, Math.PI * 0.5, 0]}
          position={[28, 5, 5]}
        >
          <CuboidCollider args={[15, 8, 0.5]} />
        </RigidBody>

        <RigidBody
          colliders={false}
          type="fixed"
          rotation={[0, Math.PI * 0.5, 0]}
          position={[-8.5, 5, 14]}
        >
          <CuboidCollider args={[6, 8, 0.5]} />
        </RigidBody>

        <RigidBody
          colliders={false}
          type="fixed"
          rotation={[0, Math.PI * 0.5, 0]}
          position={[-8.5, 5, -5]}
        >
          <CuboidCollider args={[7, 8, 0.5]} />
        </RigidBody>

        {/* 3D VISUAL DEV ROOM */}
        <RigidBody
          colliders={false}
          type="fixed"
          rotation={[0, Math.PI * 0.5, 0]}
          position={[-40, 5, 25]}
        >
          <CuboidCollider args={[35, 8, 0.5]} />
        </RigidBody>

        <RigidBody
          colliders={false}
          type="fixed"
          rotation={[0, Math.PI * 0.5, 0]}
          position={[50, 5, 30]}
        >
          <CuboidCollider args={[30, 8, 0.5]} />
        </RigidBody>

        <RigidBody
          colliders={false}
          type="fixed"
          rotation={[0, 0, 0]}
          position={[0, 5, 60]}
        >
          <CuboidCollider args={[50, 8, 0.5]} />
        </RigidBody>

        <RigidBody
          colliders={false}
          type="fixed"
          rotation={[0, 0, 0]}
          position={[20, 5, 20]}
        >
          <CuboidCollider args={[30, 8, 0.5]} />
        </RigidBody>

        {/* BOUNDARY - IN BETWEEN */}
        <RigidBody
          colliders={false}
          type="fixed"
          rotation={[0, 0, 0]}
          position={[-47, 5, -10]}
        >
          <CuboidCollider args={[45, 8, 0.5]} />
        </RigidBody>

        <RigidBody
          colliders={false}
          type="fixed"
          rotation={[0, 0, 0]}
          position={[52.5, 5, -10]}
        >
          <CuboidCollider args={[45, 8, 0.5]} />
        </RigidBody>

        {/* BOUNDARY - DESIGN WORKS */}
        <RigidBody
          colliders={false}
          type="fixed"
          rotation={[0, 0, 0]}
          position={[0, 5, -170]}
        >
          <CuboidCollider args={[100, 8, 0.5]} />
        </RigidBody>

        <RigidBody
          colliders={false}
          type="fixed"
          rotation={[0, Math.PI * 0.5, 0]}
          position={[100, 5, -90]}
        >
          <CuboidCollider args={[80, 8, 0.5]} />
        </RigidBody>

        <RigidBody
          colliders={false}
          type="fixed"
          rotation={[0, Math.PI * 0.5, 0]}
          position={[-100, 5, -90]}
        >
          <CuboidCollider args={[80, 8, 0.5]} />
        </RigidBody>

      </group>
    </>
  );
}
