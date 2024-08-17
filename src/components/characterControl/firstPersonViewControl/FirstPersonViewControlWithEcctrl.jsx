import Ecctrl from "ecctrl";

export default function FirstPersonViewControlWithEcctrl({
  position = [0, 0, 0],
}) {
  return (
    <>
      {/* "friction" must be set above 0, otherwise it causes the bug! */}

      <Ecctrl
        friction={0.6}
        position={position}
        camInitDis={-0.01} // camera intial position
        camMinDis={-0.01} // camera zoom in closest position
        camFollowMult={100} // give any big number here, so the camera follows the character instantly
        maxVelLimit={12.0}
        turnVelMultiplier={1} // Turning speed same as moving speed
        turnSpeed={100} // give it big turning speed to prevent turning wait time
        mode="CameraBasedMovement"
      />
    </>
  );
}
