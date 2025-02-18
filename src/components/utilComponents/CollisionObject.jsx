import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useControls } from "leva";

export default function CollisionObject({
  collisionObjectName = "Collision Object",
  friction = 0.5,
  posX = 0.0,
  posY = 0.0,
  posZ = 0.0,
  width = 1.0,
  height = 1.0,
  depth = 1.0,
  rotationY = 0.0,
}) {
  const {
    positionX,
    positionY,
    positionZ,
    objWidth,
    objHeight,
    objDepth,
    objRotationY,
  } = useControls(collisionObjectName, {
    positionX: { value: posX, step: 0.01, min: -100.0, max: 100 },
    positionY: { value: posY, step: 0.001, min: -100.0, max: 100 },
    positionZ: { value: posZ, step: 0.001, min: -100.0, max: 100 },
    objWidth: { value: width, step: 0.001, min: 1.0, max: 150 },
    objHeight: { value: height, step: 0.001, min: 1.0, max: 10 },
    objDepth: { value: depth, step: 0.001, min: 1.0, max: 150 },
    objRotationY: {
      value: rotationY,
      step: 0.001,
      min: -Math.PI,
      max: Math.PI,
    },
  });

  return (
    <>
      <RigidBody
        colliders={false}
        type="fixed"
        position={[positionX, positionY, positionZ]}
        rotation={[0, objRotationY, 0]}
        friction={friction}
      >
        <CuboidCollider
          position={[0, objHeight, 0]} // Touch its bottom on the ground
          args={[objWidth, objHeight, objDepth]}
        />
      </RigidBody>
    </>
  );
}
