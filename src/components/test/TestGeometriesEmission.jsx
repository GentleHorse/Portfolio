import { useControls } from "leva";
import { RigidBody } from "@react-three/rapier";
import { Suspense } from "react";

export default function TestGeometriesEmission() {
  const { sphereEmission, cubeEmission } = useControls("emission", {
    sphereEmission: { value: 1, min: 0, max: 20, step: 0.01 },
    cubeEmission: { value: 1, min: 0, max: 20, step: 0.01 },
  });

  return (
    <>
      <Suspense>
        <RigidBody colliders="ball" position={[-1.5, 1, 1.5]} scale={0.9}>
          <mesh castShadow>
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
          <mesh castShadow>
            <boxGeometry />
            <meshBasicMaterial
              color={[4 * cubeEmission, 1 * cubeEmission, 1.5 * cubeEmission]}
              toneMapping={false}
            />
          </mesh>
        </RigidBody>
      </Suspense>
    </>
  );
}
