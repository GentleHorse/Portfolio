import { RigidBody } from "@react-three/rapier";

export default function TestSimpleGeometries() {
  return (
    <>
      <RigidBody position={[-2, 3, 0]}>
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </RigidBody>

      <RigidBody colliders="hull" position={[2, 2, 0]}>
        <mesh>
          <icosahedronGeometry />
          <meshNormalMaterial />
        </mesh>
      </RigidBody>
    </>
  );
}
