import { OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <Physics debug={true}>
        <RigidBody restitution={0.5}>
          <mesh scale={0.5} position={[0, 3, 0]}>
            <boxGeometry />
            <meshNormalMaterial />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" restitution={0.5}>
          <mesh scale={[10, 0.1, 10]} position={[0, -1, 0]}>
            <boxGeometry />
            <meshBasicMaterial color="snow" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
}
