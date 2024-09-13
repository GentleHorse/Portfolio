import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Environment } from "@react-three/drei";
import { useControls } from "leva";

/**
 * LOAD NORMAL TEXTURES
 */
const loader = new THREE.TextureLoader();

const ABSTRACT_ORGANIC_02_NORMAL_TEXTURE = loader.load(
  "./textures/abstract-organic/abstract-organic-02-normal.jpg"
);
const ABSTRACT_ORGANIC_03_NORMAL_TEXTURE = loader.load(
  "./textures/abstract-organic/abstract-organic-03-normal.jpg"
);
const ABSTRACT_ORGANIC_04_NORMAL_TEXTURE = loader.load(
  "./textures/abstract-organic/abstract-organic-04-normal.jpg"
);
const GLASS_FROSTED_NORMAL_TEXTURE = loader.load(
  "./textures/glass-frosted/glass-frosted-normal.jpg"
);
const PLASTER_NORMAL_TEXTURE = loader.load(
  "./textures/plaster/plaster-normal.jpg"
);
const STONE_FLOOR_NORMAL_TEXTURE = loader.load(
  "./textures/stone-floor/stone-floor-normal.jpg"
);
const WATER_NORMAL_TEXTURE = loader.load("./textures/water/water-normal.jpg");
const WOOD_PLANKS_NORMAL_TEXTURE = loader.load(
  "./textures/wood-planks/wood-planks-normal.jpg"
);

/**
 * GLASS MATERIAL
 */
const GLASS_MATERIAL_ABSTRACT_ORGANIC_02 = new THREE.MeshPhysicalMaterial({
  color: "#ffffff",
  roughness: 0.15,
  transmission: 1,
  thickness: 0.5,
  normalMap: ABSTRACT_ORGANIC_02_NORMAL_TEXTURE,
});
const GLASS_MATERIAL_ABSTRACT_ORGANIC_03 = new THREE.MeshPhysicalMaterial({
  color: "#ffffff",
  roughness: 0.15,
  transmission: 1,
  thickness: 0.5,
  normalMap: ABSTRACT_ORGANIC_03_NORMAL_TEXTURE,
});
const GLASS_MATERIAL_ABSTRACT_ORGANIC_04 = new THREE.MeshPhysicalMaterial({
  color: "#ffffff",
  roughness: 0.15,
  transmission: 1,
  thickness: 0.5,
  normalMap: ABSTRACT_ORGANIC_04_NORMAL_TEXTURE,
});
const GLASS_MATERIAL_FROSTED = new THREE.MeshPhysicalMaterial({
  color: "#ffffff",
  roughness: 0.15,
  transmission: 1,
  thickness: 0.5,
  normalMap: GLASS_FROSTED_NORMAL_TEXTURE,
});
const GLASS_MATERIAL_PLASTER = new THREE.MeshPhysicalMaterial({
  color: "#ffffff",
  roughness: 0.15,
  transmission: 1,
  thickness: 0.5,
  normalMap: PLASTER_NORMAL_TEXTURE,
});
const GLASS_MATERIAL_STONE_FLOOR = new THREE.MeshPhysicalMaterial({
  color: "#ffffff",
  roughness: 0.15,
  transmission: 1,
  thickness: 0.5,
  normalMap: STONE_FLOOR_NORMAL_TEXTURE,
});
const GLASS_MATERIAL_WATER = new THREE.MeshPhysicalMaterial({
  color: "#ffffff",
  roughness: 0.15,
  transmission: 1,
  thickness: 0.5,
  normalMap: WATER_NORMAL_TEXTURE,
});
const GLASS_MATERIAL_WOOD_PLANKS = new THREE.MeshPhysicalMaterial({
  color: "#ffffff",
  roughness: 0.15,
  transmission: 1,
  thickness: 0.5,
  normalMap: WOOD_PLANKS_NORMAL_TEXTURE,
});

export default function MobileScene({ mobileOrientation }) {
  /**
   * REF - CUBE
   */
  const cube = useRef();

  /**
   * FOR DEBUGGING
   */
  useFrame(() => {
    if (mobileOrientation) {
      // console.log(mobileOrientation);
    }
  });
  const { cubeMaterial } = useControls({
    cubeMaterial: {
      options: {
        GLASS_MATERIAL_ABSTRACT_ORGANIC_02,
        GLASS_MATERIAL_ABSTRACT_ORGANIC_03,
        GLASS_MATERIAL_ABSTRACT_ORGANIC_04,
        GLASS_MATERIAL_FROSTED,
        GLASS_MATERIAL_PLASTER,
        GLASS_MATERIAL_STONE_FLOOR,
        GLASS_MATERIAL_WATER,
        GLASS_MATERIAL_WOOD_PLANKS,
      },
    },
  });

  /**
   * MOBILE CONTROL - PLAYING LOGIC
   */
  useFrame(() => {
    if (mobileOrientation) {
      cube.current.rotation.x = mobileOrientation.beta * Math.PI * 2;
      cube.current.rotation.y = mobileOrientation.gamma * Math.PI;
    }
  });

  return (
    <>
      {/* DEBUG TOOLS */}
      {/* <Perf position="top-left" /> */}
      <axesHelper args={[0.8]} />

      <Environment
        background={true}
        files={"./textures/envMap/kloppenheim_07_puresky_1k_small.hdr"}
      />

      <mesh
        ref={cube}
        scale={2.0}
        position={[0.0, 0, 0]}
        material={cubeMaterial}
      >
        <boxGeometry args={[1.0, 1.0, 1.0]} />
      </mesh>
    </>
  );
}
