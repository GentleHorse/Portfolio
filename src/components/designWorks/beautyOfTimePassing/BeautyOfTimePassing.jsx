import { useState } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import clearSceneryVideo from "../../../../public/videos/clear.mp4";

export default function BeautyOfTimePassing(props) {
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
    abstractOrganic03: glassNormalTextureAbstractOrganic03,
    abstractOrganic01: glassNormalTextureAbstractOrganic01,
    abstractOrganic02: glassNormalTextureAbstractOrganic02,
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
      <mesh scale={[2.5, 14, 3]} position={[2, 9, -11.5]}>
        <boxGeometry />
        <MeshTransmissionMaterial
          backside
          samples={6} // refraction samples, default: 6
          transmission={1}
          thickness={0.2}
          chromaticAberration={0.05}
          anisotropy={0.9} // the structural property of non-uniformity in different directions, default: 0.1
          distortion={3.2} // default: 0
          distortionScale={0.6}
          temporalDistortion={0.1} // speed of movement, default: 0.0
          iridescence={1} // certain surfaces that appear gradually to change colour
          iridescenceIOR={1}
          iridescenceThicknessRange={[100, 400]}
          normalMap={GLASS_TEXTURES[glassTexture]}
        />
      </mesh>

      {/* WALL */}

      {/* Left */}
      <mesh scale={[6, 14, 0.5]} position={[-2, 9, -11.5]}>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
      {/* Right */}
      <mesh scale={[3, 14, 0.5]} position={[5, 9, -11.5]}>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
      {/* Bottom */}
      <mesh scale={[11.5, 2, 0.5]} position={[0.75, 1, -11.5]}>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
      {/* Top */}
      <mesh scale={[11.5, 2, 0.5]} position={[0.75, 17, -11.5]}>
        <boxGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}
