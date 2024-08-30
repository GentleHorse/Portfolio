import { RigidBody, CuboidCollider } from "@react-three/rapier";

export default function StageTestCollisionObjects(props) {
  return (
    <>
      <group {...props}>
        {/* GROUND */}
        <RigidBody colliders={false} type="fixed" position={[0, 0.5, -40]}>
          <CuboidCollider args={[200, 0.5, 150]} />
        </RigidBody>

        {/* LEFT WALL */}
        {/* <RigidBody colliders={false} type="fixed" position={[-50, 5, -20]}>
          <CuboidCollider args={[0.5, 5, 80]} />
        </RigidBody> */}

        {/* RIGHT WALL */}
        {/* <RigidBody colliders={false} type="fixed" position={[70, 5, -20]}>
          <CuboidCollider args={[0.5, 5, 80]} />
        </RigidBody> */}

        {/* FRONT WALL */}
        {/* <RigidBody colliders={false} type="fixed" position={[0, 5, 20]}>
          <CuboidCollider args={[80, 5, 0.5]} />
        </RigidBody> */}

        {/* BACK WALL */}
        {/* <RigidBody colliders={false} type="fixed" position={[0, 5, -80]}>
          <CuboidCollider args={[80, 5, 0.5]} />
        </RigidBody> */}

        {/* STAIRS */}
        {/* <RigidBody colliders={false} type="fixed" position={[9, -0.3, 6.5]} rotation={[- Math.PI * 0.09, 0, 0]}>
        <CuboidCollider args={[3, 1.5, 5]} />
      </RigidBody> */}
      </group>
    </>
  );
}
