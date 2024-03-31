import { RigidBody } from "@react-three/rapier";

export default function TestFloor() {
  return (
    <RigidBody type="fixed" restitution={0.5} friction={0.2}>
      <mesh scale={[20, 0.1, 20]} position={[0, 0.1, 0]}>
        <boxGeometry />
        <meshBasicMaterial color="snow" />
      </mesh>
    </RigidBody>
  );
}
