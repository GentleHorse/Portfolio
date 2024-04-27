import { RigidBody } from "@react-three/rapier";

// Temporary value, the ray casting should be optimized later
const MIN_FLOOR_THICKNESS = 1.1;

export default function TestFloor(props) {
  return (
    <>
      <group {...props}>
        {/* BLOCKS */}
        <RigidBody
          type="fixed"
          name={"ground"}
          restitution={0}
          friction={0.2}
          scale={[3, MIN_FLOOR_THICKNESS, 1]}
          position={[5, 2.5, 0]}
        >
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </RigidBody>

        <RigidBody
          type="fixed"
          name={"ground"}
          restitution={0}
          friction={0.2}
          scale={[3, MIN_FLOOR_THICKNESS, 1]}
          position={[7, 5, 0]}
        >
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </RigidBody>

        {/* FLOOR */}
        <RigidBody
          type="fixed"
          name={"ground"}
          restitution={0}
          friction={0.2}
          scale={[100, MIN_FLOOR_THICKNESS, 5]}
          position={[0, 0, 0]}
        >
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color="#676767" />
          </mesh>
        </RigidBody>
      </group>
    </>
  );
}
