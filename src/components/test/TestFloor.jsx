import { RigidBody } from "@react-three/rapier";

export default function TestFloor(props) {
  return (
    <>
      {/* FOR 3D */}
      {/* <RigidBody type="fixed" restitution={0.5} friction={0.2}>
      <mesh scale={[20, 0.1, 20]} position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#676767" />
      </mesh>
    </RigidBody> */}

      {/* FOR 2D */}
      <RigidBody type="fixed" restitution={0} friction={0.2} name={"ground"} {...props}>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="#676767" />
        </mesh>
      </RigidBody>
    </>
  );
}
 