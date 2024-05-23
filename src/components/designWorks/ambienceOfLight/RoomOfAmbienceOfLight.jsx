import { RigidBody, CuboidCollider } from "@react-three/rapier";

import BoxRoom from "../../models/BoxRoom.jsx";
import { AmbienceOfLightLowPoly } from "./AmbienceOfLightLowPoly.jsx";

// Temporary value, the ray casting should be optimized later
const MIN_FLOOR_THICKNESS = 1.1;

export default function RoomOfAmbienceOfLight({ ...props }) {
  return (
    <group {...props}>
      <BoxRoom
        rotation={[0, -Math.PI / 2, 0]}
        position={[0, 0.6, 0]}
        scale={0.6}
      />

      <RigidBody
        name={"ground"}
        colliders={false}
        type="fixed"
        position={[0, -0.4, 0]}
      >
        <CuboidCollider args={[4.5, MIN_FLOOR_THICKNESS, 4.5]} />
      </RigidBody>

      <AmbienceOfLightLowPoly scale={0.9} position={[0, 3, 0]} />
    </group>
  );
}
