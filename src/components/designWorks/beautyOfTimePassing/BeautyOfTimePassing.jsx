import { useState } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import clearSceneryVideo from "../../../../public/videos/clear.mp4";

export default function BeautyOfTimePassing(props) {
  const { nodes, materials } = useGLTF(
    "./models/design-works/beauty-of-time-passing/beauty-of-time-passing.gltf"
  );

  /**
   * SCENERY VIDEO SETUP AT THE INITIAL RENDER
   */
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = clearSceneryVideo;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  /**
   * GLASS TEXUTRES
   */
  // Load normal textures for the glass plane
  const glassNormalTextureSnow01 = useLoader(
    THREE.TextureLoader,
    "./textures/snow/Snow004_1K-JPG_NormalGL.jpg"
  );
  const glassNormalTextureSnow02 = useLoader(
    THREE.TextureLoader,
    "./textures/snow/Snow004_1K-JPG_NormalDX.jpg"
  );
  const glassNormalTextureAbstractOrganic = useLoader(
    THREE.TextureLoader,
    "./textures/abstarct-organic/Abstract_Organic_002_NORM.jpg"
  );

  // The texture object used for "normalMap" attribute of meshPhysicalMaterial
  const GLASS_TEXTURES = {
    snow01: glassNormalTextureSnow01,
    snow02: glassNormalTextureSnow02,
    abstractOrganic: glassNormalTextureAbstractOrganic,
  };

  // GUI to display texture names
  const { glassTexture } = useControls("glassTextures", {
    glassTexture: {
      options: Object.keys(GLASS_TEXTURES),
    },
  });

  return (
    <>
      {/* VIDEO PLANE */}
      <mesh scale={[5, 8, 1]} position={[0, 3, 0]}>
        <planeGeometry />
        <meshStandardMaterial emissive={"snow"}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>

      {/* GLASS PLANE */}
      <mesh scale={[3, 5, 0.25]} position={[0, 3, 1]}>
        <boxGeometry />
        <meshPhysicalMaterial
          attach="material"
          clearcoat={1.0}
          clearcoatRoughness={0.5}
          roughness={0.0}
          transmission={0.5}
          thickness={0.7}
          normalMap={GLASS_TEXTURES[glassTexture]}
          color="snow"
        />
      </mesh>

      {/* FLOOR */}
      <RigidBody type="fixed" restitution={0.5} friction={0.6}>
        <mesh scale={[20, 0.1, 20]} position={[0, -0.2, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#000000" roughness={0.7} />
        </mesh>
      </RigidBody>

      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.walls001.geometry}
          material={materials["dark-color-wall"]}
          position={[0, 6.685, 0]}
          scale={-9.998}
        />
        <mesh
          geometry={nodes.beams003.geometry}
          material={materials["dark-color-wall"]}
          position={[0, 16.209, 5.091]}
          scale={[11.707, 0.563, 0.65]}
        />
        <mesh
          geometry={nodes.ceiling002.geometry}
          material={materials["dark-color-wood"]}
          position={[0, 15.135, 15.806]}
          scale={[9.268, 0.095, 0.495]}
        />
      </group>
    </>
  );
}

useGLTF.preload(
  "./models/design-works/beauty-of-time-passing/beauty-of-time-passing.gltf"
);
