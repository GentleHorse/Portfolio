import { RigidBody, CuboidCollider } from "@react-three/rapier";

import BoxRoom from "../../models/BoxRoom.jsx";
import { AmbienceOfLightLowPoly } from "./AmbienceOfLightLowPoly.jsx";

export default function RoomOfAmbienceOfLight() {
  return (
    <>
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
        <CuboidCollider args={[4.5, 1, 4.5]} />
      </RigidBody>

      <AmbienceOfLightLowPoly scale={0.9} position={[0, 4, 0]} />
    </>
  );
}
