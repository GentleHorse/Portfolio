import React, { useRef } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from "leva";


export default function GlassBrick(props) {
  /**
   * IMPORT THE GLTF MODEL
   */
  const { nodes, materials } = useGLTF(
    "/models/design-works/ambience-of-light/glass-brick.gltf"
  );

    /**
   * GLASS TEXUTRES
   */
  // Load normal textures for the glass plane
  const glassNormalTextureAbstractOrganic01 = useLoader(
    THREE.TextureLoader,
    "./textures/abstarct-organic/Abstract_Organic_002_NORM.jpg"
  );
  const glassNormalTextureAbstractOrganic02 = useLoader(
    THREE.TextureLoader,
    "./textures/abstarct-organic/Abstract_004_NRM.jpg"
  );
  const glassNormalTextureAbstractOrganic03 = useLoader(
    THREE.TextureLoader,
    "./textures/abstarct-organic/Abstract_Organic_003_normal.jpg"
  );

  // The texture object used for "normalMap" attribute of meshPhysicalMaterial
  const GLASS_TEXTURES = {
    abstractOrganic01: glassNormalTextureAbstractOrganic01,
    abstractOrganic02: glassNormalTextureAbstractOrganic02,
    abstractOrganic03: glassNormalTextureAbstractOrganic03,
  };

  // GUI to display texture names
  const { glassTexture } = useControls("glassTextures", {
    glassTexture: {
      options: Object.keys(GLASS_TEXTURES),
    },
  });

  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.glassBrickModified.geometry}
          position={[0.002, 0.016, -0.005]}
        >
          <MeshTransmissionMaterial
          backside
          samples={6} // refraction samples, default: 6
          thickness={0.2}
          chromaticAberration={0.05}
          anisotropy={0.9} // the structural property of non-uniformity in different directions, default: 0.1
          distortion={0.1} // default: 0
          distortionScale={0.5}
          temporalDistortion={0.1} // speed of movement, default: 0.0
          iridescence={1} // certain surfaces that appear gradually to change colour
          iridescenceIOR={1}
          iridescenceThicknessRange={[100, 400]}
          normalMap={GLASS_TEXTURES[glassTexture]}
        />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/models/design-works/ambience-of-light/glass-brick.gltf");
