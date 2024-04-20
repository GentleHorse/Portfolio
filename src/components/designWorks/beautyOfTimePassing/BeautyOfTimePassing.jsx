import { useState } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import {
  useGLTF,
  MeshTransmissionMaterial,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import clearSceneryVideo from "../../../../public/videos/clear.mp4";

const FILED_SIZES = {
  x: 80,
  z: 80,
};

export default function BeautyOfTimePassing(props) {
  /**
   * IMPORT THE SPACE STRUCTURE
   */
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
    <group {...props}>
      {/* VIDEO PLANE */}
      <mesh scale={[10, 18, 1]} position={[0, 8, -12]}>
        <planeGeometry />
        <meshStandardMaterial emissive={"white"}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>

      {/* GLASS PLANE */}
      <mesh scale={[10, 18, 0.5]} position={[0, 8, -11.5]}>
        <boxGeometry />
        <MeshTransmissionMaterial
          backside
          samples={6} // refraction samples, default: 6
          thickness={0.2}
          chromaticAberration={0.05}
          anisotropy={0.9} // the structural property of non-uniformity in different directions, default: 0.1
          distortion={0.1} // default: 0
          distortionScale={0.1}
          temporalDistortion={0.1} // speed of movement, default: 0.0
          iridescence={1} // certain surfaces that appear gradually to change colour
          iridescenceIOR={1}
          iridescenceThicknessRange={[100, 400]}
          normalMap={GLASS_TEXTURES[glassTexture]}
        />
      </mesh>

      {/* FLOOR */}
      <RigidBody type="fixed" restitution={0.5} friction={0.6}>
        <mesh
          scale={[FILED_SIZES.x, 0.1, FILED_SIZES.x]}
          position={[0, -0.1, 0]}
          receiveShadow
        >
          <boxGeometry />
          <meshStandardMaterial color="#000000" roughness={0.8} />
        </mesh>

        <mesh
          scale={[FILED_SIZES.x, FILED_SIZES.x, 1]}
          rotation={[-Math.PI * 0.5, 0, 0]}
        >
          <planeGeometry />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={0.7}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>
      </RigidBody>

      {/* ARCHITECTURE */}
      <group dispose={null}>
        {/* <mesh
          geometry={nodes.walls001.geometry}
          material={materials["dark-color-wall"]}
          position={[0, 6.685, 0]}
          scale={-9.998}
        /> */}
        {/* <mesh
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
        /> */}
      </group>

      {/* SPOTLIGHT */}
      <spotLight
        intensity={1}
        decay={0}
        position={[0, 20, -25]}
        angle={0.35}
        penumbra={1}
      />
    </group>
  );
}

useGLTF.preload(
  "./models/design-works/beauty-of-time-passing/beauty-of-time-passing.gltf"
);
