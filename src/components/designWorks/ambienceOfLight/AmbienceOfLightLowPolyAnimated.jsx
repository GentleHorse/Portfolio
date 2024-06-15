import React, { useRef, useEffect } from "react";
import { useGLTF, useTexture, useAnimations } from "@react-three/drei";
import { useControls } from "leva";

export default function AmbienceOfLightLowPolyAnimated(props) {
  /**
   * GUI - GLASS LIKE SPHERE MATERIAL
   */
  const config = useControls({
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 },
    resolution: { value: 1024, min: 256, max: 2048, step: 256 },
    transmission: { value: 1, min: 0, max: 1 },
    roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
    thickness: { value: 0, min: 0, max: 10, step: 0.01 },
    ior: { value: 1, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0, min: 0, max: 1 },
    anisotropy: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 1, min: 0, max: 1 },
    attenuationDistance: { value: 1, min: 0, max: 10, step: 0.01 },
    attenuationColor: "#ffffff",
    color: "#80d6ff",
    bg: "#ffffff",
  });

  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/design-works/ambience-of-light/ambience-of-light-low-poly-animated.gltf"
  );

  const bakedTexture = useTexture(
    "./textures/design-works/ambience-of-light/baked.jpg"
  );
  bakedTexture.flipY = false;

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["frame.001Action.001"].play().setEffectiveTimeScale(0.7);
    actions["glassBrickBottomAction.001"].play().setEffectiveTimeScale(0.7);
    actions["glassBrickTopAction.001"].play().setEffectiveTimeScale(0.7);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="frame001"
          geometry={nodes.frame001.geometry}
          // material={nodes.frame001.material}
        >
          {/* <meshBasicMaterial map={bakedTexture} /> */}
        </mesh>
        <mesh
          name="glassBrickBottom"
          geometry={nodes.glassBrickBottom.geometry}
          // material={nodes.glassBrickBottom.material}
        >
          {/* <meshBasicMaterial map={bakedTexture} /> */}
          {/* <meshPhysicalMaterial {...config} /> */}
        </mesh>
        <mesh
          name="glassBrickTop"
          geometry={nodes.glassBrickTop.geometry}
          // material={nodes.glassBrickTop.material}
        >
          {/* <meshBasicMaterial map={bakedTexture} /> */}
          {/* <meshPhysicalMaterial {...config} /> */}
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload(
  "/models/design-works/ambience-of-light/ambience-of-light-low-poly-animated.gltf"
);
