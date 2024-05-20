import { RigidBody } from "@react-three/rapier";
import { useControls } from "leva";

// Temporary value, the ray casting should be optimized later
const MIN_FLOOR_THICKNESS = 1.1;

export default function TestFloor(props) {
  const floor = useControls('test-floor', {
    color: "#fcfaf2"
})

const blocks = useControls('test-blocks', {
  color: "#fcfaf2"
})

  return (
    <>
      <group {...props}>
        {/* BLOCKS */}
        <RigidBody
          type="fixed"
          name={"ground"}
          restitution={0}
          friction={0}    // set "0" otherwise the character gets stuck 
          scale={[3, MIN_FLOOR_THICKNESS, 1]}
          position={[10, 2.5, 0]}
        >
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={blocks.color} />
          </mesh>
        </RigidBody>

        <RigidBody
          type="fixed"
          name={"ground"}
          restitution={0}
          friction={0.2}
          scale={[3, MIN_FLOOR_THICKNESS, 1]}
          position={[12, 5, 0]}
        >
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={blocks.color} />
          </mesh>
        </RigidBody>

        <RigidBody
          type="fixed"
          name={"ground"}
          restitution={0}
          friction={0.2}
          scale={[5, MIN_FLOOR_THICKNESS, 1]}
          position={[10, 0.5, 0]}
          rotation={[0, 0, Math.PI * 0.1]}
        >
          <mesh>
            <boxGeometry />
            <meshStandardMaterial color={blocks.color} />
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
            <meshStandardMaterial color={floor.color} />
          </mesh>
        </RigidBody>
      </group>
    </>
  );
}
