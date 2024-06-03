import { Cylinder } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useControls } from "leva";

const MIN_FLOOR_THICKNESS = 1.1; // Temporary value, the ray casting should be optimized later
const FLOOR_DIMENSION = 30;

const BLOCK_MAX_Y_POSITION = 3;
const BLOCK_NUM = 10;
const BLOCK_POSITIONS = [];

for (let i = 0; i < BLOCK_NUM; i++) {
  BLOCK_POSITIONS.push({
    id: "block0" + i,
    x: (Math.random() - 0.5) * FLOOR_DIMENSION,
    y: Math.random() * BLOCK_MAX_Y_POSITION,
    z: (Math.random() - 0.5) * FLOOR_DIMENSION,
  });
}

export default function TestFloor(props) {
  const floor = useControls("test-floor", {
    color: "#BDC0BA",
  });

  const blocks = useControls("test-blocks", {
    color: "#FFFFFB",
  });

  return (
    <>
      <group {...props}>
        {/* BLOCKS */}
        {BLOCK_POSITIONS.map((position) => (
          <RigidBody
            key={position.id}
            type="fixed"
            name={"ground"}
            restitution={0}
            friction={0} // set "0" otherwise the character gets stuck
            scale={[3, MIN_FLOOR_THICKNESS, 3]}
            position={[position.x, position.y, position.z]}
          >
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color={blocks.color} />
            </mesh>
          </RigidBody>
        ))}

        {/* FLOOR */}
        <RigidBody
          type="fixed"
          name={"ground"}
          restitution={0}
          friction={0.2}
          scale={[FLOOR_DIMENSION, MIN_FLOOR_THICKNESS, FLOOR_DIMENSION]}
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
