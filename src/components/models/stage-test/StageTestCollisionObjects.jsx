import { RigidBody, CuboidCollider } from "@react-three/rapier";

export default function StageTestCollisionObjects(props) {
  return (
    <>
      <group {...props}>
        {/* GROUND */}
        <RigidBody colliders={false} type="fixed" position={[-20, -0.5, -20]}>
          <CuboidCollider args={[40, 0.5, 50]} />
        </RigidBody>

        {/* LEFT WALL */}
        <RigidBody colliders={false} type="fixed" position={[-50, 5, -20]}>
          <CuboidCollider args={[0.5, 5, 50]} />
        </RigidBody>

        {/* RIGHT WALL */}
        <RigidBody colliders={false} type="fixed" position={[15, 5, -20]}>
          <CuboidCollider args={[0.5, 5, 50]} />
        </RigidBody>

        {/* FRONT WALL */}
        <RigidBody colliders={false} type="fixed" position={[-20, 5, 20]}>
          <CuboidCollider args={[40, 5, 0.5]} />
        </RigidBody>

        {/* BACK WALL */}
        <RigidBody colliders={false} type="fixed" position={[-20, 5, -40]}>
          <CuboidCollider args={[40, 5, 0.5]} />
        </RigidBody>

        {/* STAIRS */}
        {/* <RigidBody colliders={false} type="fixed" position={[9, -0.3, 6.5]} rotation={[- Math.PI * 0.09, 0, 0]}>
        <CuboidCollider args={[3, 1.5, 5]} />
      </RigidBody> */}
      </group>
    </>
  );
}
