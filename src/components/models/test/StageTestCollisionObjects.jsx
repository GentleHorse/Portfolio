import { RigidBody, CuboidCollider } from "@react-three/rapier";

export default function StageTestCollisionObjects(props) {
  return (
    <>
      <group {...props}>
        {/* GROUND FLOOR */}
        {/* <RigidBody colliders={false} type="fixed" position={[0, -0.5, 0]}>
        <CuboidCollider args={[12, 0.5, 20]} />
      </RigidBody> */}

        {/* FIRST FLOOR */}
        {/* <RigidBody colliders={false} type="fixed" position={[5, 2, 35]}>
        <CuboidCollider args={[15, 0.5, 20]} />
      </RigidBody> */}
        <RigidBody colliders={false} type="fixed" position={[0, -0.5, -60]}>
          <CuboidCollider args={[5, 0.5, 80]} />
        </RigidBody>

        <RigidBody colliders={false} type="fixed" position={[-3, -0.5, -60]}>
          <CuboidCollider args={[0.5, 5, 80]} />
        </RigidBody>

        <RigidBody colliders={false} type="fixed" position={[3, -0.5, -60]}>
          <CuboidCollider args={[0.5, 5, 80]} />
        </RigidBody>

        <RigidBody colliders={false} type="fixed" position={[0, -0.5, 10]}>
          <CuboidCollider args={[10, 5, 0.5]} />
        </RigidBody>

        <RigidBody colliders={false} type="fixed" position={[0, -0.5, -130]}>
          <CuboidCollider args={[10, 5, 0.5]} />
        </RigidBody>

        {/* GROUND IN FRONT OF WINDOW */}
        {/* <RigidBody colliders={false} type="fixed" position={[1.5, 1, 13]}>
        <CuboidCollider args={[10, 1.5, 2]} />
      </RigidBody> */}

        {/* STAIRS */}
        {/* <RigidBody colliders={false} type="fixed" position={[9, -0.3, 6.5]} rotation={[- Math.PI * 0.09, 0, 0]}>
        <CuboidCollider args={[3, 1.5, 5]} />
      </RigidBody> */}

        {/* WALLS IN HALLWAY */}
        {/* <RigidBody colliders={false} type="fixed" position={[5.5, 5, 17]} >
        <CuboidCollider args={[8, 3, 1.8]} />
      </RigidBody>
      <RigidBody colliders={false} type="fixed" position={[-5.5, 5, 17]} >
        <CuboidCollider args={[1, 3, 1.8]} />
      </RigidBody> */}
      </group>
    </>
  );
}
