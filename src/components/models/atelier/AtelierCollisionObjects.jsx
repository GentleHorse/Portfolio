import { RigidBody, CuboidCollider } from "@react-three/rapier";

export default function AtelierCollisionObjects() {
  return (
    <>
      {/* --- ATELIER, WORKSHOP AREA  -------------------------- */}

      {/* Boundary - tokonoma side */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[0, 0, -5]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 5, 0]} // Touch its bottom on the ground
          args={[9.5, 5.0, 0.25]}
        />
      </RigidBody>

      {/* Boundary - coffee side tables side */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[-6, 0, 6.25]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 5, 0]} // Touch its bottom on the ground
          args={[4.0, 5.0, 0.5]}
        />
      </RigidBody>

      {/* Boundary - wood tools side */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[9.75, 0, 0.5]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 5, 0]} // Touch its bottom on the ground
          args={[0.5, 5.0, 6.0]}
        />
      </RigidBody>

      {/* Coffee side tables */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[-6, 0, 6.0]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 1.5, 0]} // Touch its bottom on the ground
          args={[4.0, 1.5, 1.0]}
        />
      </RigidBody>

      {/* Workshop big table */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[4, 0, 2.25]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 1.5, 0]} // Touch its bottom on the ground
          args={[1.3, 1.5, 2.5]}
        />
      </RigidBody>

      {/* Workshop small table */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[9, 0, 3]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 1.5, 0]} // Touch its bottom on the ground
          args={[0.75, 1.5, 2.5]}
        />
      </RigidBody>

      {/* Workshop machines */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[5.25, 0, -4]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 1.5, 0]} // Touch its bottom on the ground
          args={[3.25, 1.5, 1.0]}
        />
      </RigidBody>

      {/* --- VIRTUAL AREA ------------------------------------- */}

      {/* Boundary - analog TV side */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[-64, 0, 4.5]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 8, 0]} // Touch its bottom on the ground
          args={[0.5, 8.0, 37.5]}
        />
      </RigidBody>

      {/* Boundary - clay side */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[-37.5, 0, -30]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 8, 0]} // Touch its bottom on the ground
          args={[30.0, 8.0, 1.0]}
        />
      </RigidBody>

      {/* Boundary - photo booth */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[-37.5, 0, 32.5]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 8, 0]} // Touch its bottom on the ground
          args={[30.0, 8.0, 1.0]}
        />
      </RigidBody>

      {/* --- MUSEUM AREA -------------------------------------- */}

      {/* Building - entrance */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[-5, 0, 32.5]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 5, 0]} // Touch its bottom on the ground
          args={[4.5, 5.0, 1.0]}
        />
      </RigidBody>

      {/* Building - magazine wall */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[41, 0, 78]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 5.0, 0]} // Touch its bottom on the ground
          args={[1.0, 5.0, 5.75]}
        />
      </RigidBody>

      {/* Human head */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[7.5, 0, 51.5]}
        rotation={[0, (Math.PI * 1) / 6.75, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 3.0, 0]} // Touch its bottom on the ground
          args={[2.75, 3.0, 2.75]}
        />
      </RigidBody>

      {/* Accounting */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[-3.5, 0, 54.5]}
        rotation={[0, (Math.PI * 1) / 3.5, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 3.0, 0]} // Touch its bottom on the ground
          args={[2.25, 3.0, 2.25]}
        />
      </RigidBody>

      {/* Local cuisine */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[-3.0, 0, 66.5]}
        rotation={[0, (Math.PI * 1) / 3.5, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 3.0, 0]} // Touch its bottom on the ground
          args={[2.75, 3.0, 2.75]}
        />
      </RigidBody>

      {/* Piano */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[8.75, 0, 68]}
        rotation={[0, (Math.PI * 1) / 4, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 3.0, 0]} // Touch its bottom on the ground
          args={[2.0, 3.0, 2.75]}
        />
      </RigidBody>

      {/* SNES & LEGO */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[15.5, 0, 61.0]}
        rotation={[0, (-Math.PI * 1) / 15, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 3.0, 0]} // Touch its bottom on the ground
          args={[2.5, 3.0, 2.5]}
        />
      </RigidBody>

      {/* Hiking */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[5.0, 0, 79.0]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 3, 0]} // Touch its bottom on the ground
          args={[9.0, 3.0, 3.0]}
        />
      </RigidBody>

      {/* Choir */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[22.5, 0, 71.0]}
        rotation={[0, (-Math.PI * 1) / 6.5, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 3.0, 0]} // Touch its bottom on the ground
          args={[2.5, 3.0, 2.5]}
        />
      </RigidBody>

      {/* Art paintings & books */}
      <RigidBody
        colliders={false}
        type="fixed"
        position={[15.0, 0, 81.0]}
        rotation={[0, 0, 0]}
        friction={0.5}
      >
        <CuboidCollider
          position={[0, 5, 0]} // Touch its bottom on the ground
          args={[27.5, 5.0, 1.0]}
        />
      </RigidBody>

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
