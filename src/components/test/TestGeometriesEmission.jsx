import { useControls } from "leva";
import { RigidBody } from "@react-three/rapier";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function TestGeometriesEmission() {
  /**
   * REFS
   */
  const emissionSphereMesh = useRef();
  const emissionCubeMesh = useRef();

  /**
   * GUI
   */
  const { sphereEmission, cubeEmission } = useControls("emission", {
    sphereEmission: { value: 1, min: 0, max: 20, step: 0.01 },
    cubeEmission: { value: 1, min: 0, max: 20, step: 0.01 },
  });

  /**
   * BLINK PARAMS
   */
  const MIN_EMISSION_STRENGTH = 0.1;
  const BLINK_SPEED = 5;
  const BLINK_DELAY = 8;

  /**
   * BLINKING LOGIC BY FRAME
   */
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    emissionSphereMesh.current.material.color.r =
      1.5 *
      (Math.sin(time * BLINK_SPEED + BLINK_DELAY) + 1 + MIN_EMISSION_STRENGTH);
    emissionSphereMesh.current.material.color.g =
      4 *
      (Math.sin(time * BLINK_SPEED + BLINK_DELAY) + 1 + MIN_EMISSION_STRENGTH);
    emissionSphereMesh.current.material.color.b =
      4 *
      (Math.sin(time * BLINK_SPEED + BLINK_DELAY) + 1 + MIN_EMISSION_STRENGTH);

    emissionCubeMesh.current.material.color.r =
      4 * (Math.sin(time * BLINK_SPEED) + 1 + MIN_EMISSION_STRENGTH);
    emissionCubeMesh.current.material.color.g =
      1.5 * (Math.sin(time * BLINK_SPEED) + 1 + MIN_EMISSION_STRENGTH);
    emissionCubeMesh.current.material.color.b =
      4 * (Math.sin(time * BLINK_SPEED) + 1 + MIN_EMISSION_STRENGTH);
  });

  return (
    <>
      <Suspense>
        <RigidBody colliders="ball" position={[-1.5, 1, 1.5]} scale={0.9}>
          <mesh ref={emissionSphereMesh} castShadow>
            <sphereGeometry />
            <meshBasicMaterial
              color={[
                1.5 * sphereEmission,
                4 * sphereEmission,
                4 * sphereEmission,
              ]}
              toneMapping={false}
            />
          </mesh>
        </RigidBody>
      </Suspense>

      <Suspense>
        <RigidBody position={[2, 1, 1.5]} scale={0.9}>
          <mesh ref={emissionCubeMesh} castShadow>
            <boxGeometry />
            <meshBasicMaterial
              color={[4 * cubeEmission, 1.5 * cubeEmission, 4 * cubeEmission]}
              toneMapping={false}
            />
          </mesh>
        </RigidBody>
      </Suspense>
    </>
  );
}
