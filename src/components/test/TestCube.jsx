import { Outlines, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

const MOVE_SPEED_NORMAL = 0.5;
const MOVE_SPEED_FAST = 1.5;
const JUMP_FORCE = 0.5;

/**
 * 
 * @param {*float} scale scale (RigidBody)
 * @param {*array} position position (RigidBody)
 * @param {*str} outlinesColor color of Outline
 * @param {*float} thickness thickness of Outline
 * @param {*boolean} outlines visibility of Outline
 * 
 * @returns Test Cube Geometry
 */
export default function TestCube({
  scale = 0.5,
  position = [0, 3, 0],
  outlinesColor = "black",
  thickness = 0.07,
  outlines = false,
}) {
  const body = useRef();

  const [subscribeKeys, getKeys] = useKeyboardControls();

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward, run } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };

    if (forward) {
      if (run) {
        impulse.z -= MOVE_SPEED_FAST * delta;
      } else {
        impulse.z -= MOVE_SPEED_NORMAL * delta;
      }
    }
    if (backward) {
      if (run) {
        impulse.z += MOVE_SPEED_FAST * delta;
      } else {
        impulse.z += MOVE_SPEED_NORMAL * delta;
      }
    }
    if (leftward) {
      if (run) {
        impulse.x -= MOVE_SPEED_FAST * delta;
      } else {
        impulse.x -= MOVE_SPEED_NORMAL * delta;
      }
    }
    if (rightward) {
      if (run) {
        impulse.x += MOVE_SPEED_FAST * delta;
      } else {
        impulse.x += MOVE_SPEED_NORMAL * delta;
      }
    }

    body.current.applyImpulse(impulse, true);
  });

  const jump = () => {
    body.current.applyImpulse({ x: 0, y: JUMP_FORCE, z: 0 }, true);
    body.current.applyTorqueImpulse(
      {
        x: Math.random() * 0.01,
        y: Math.random() * 0.01,
        z: Math.random() * 0.01,
      },
      true
    );
  };

  useEffect(() => {
    const unsubscribeJump = subscribeKeys(
      (state) => state.jump,
      (value) => {
        jump();
      }
    );

    return () => {
      unsubscribeJump();
    };
  }, []);

  return (
    <RigidBody
      ref={body}
      restitution={0.5}
      friction={0.2}
      linearDamping={true}
      angularDamping={true}
      scale={scale}
      position={position}
    >
      <mesh>
        <Outlines color={outlinesColor} thickness={thickness} visible={outlines} />
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </RigidBody>
  );
}
