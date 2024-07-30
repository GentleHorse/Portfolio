/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 ./public/models/test/stage-test.glb 
*/

import React, { Suspense } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";

export default function StageTest(props) {
  /**
   * VIDEOS FOR THE BEAUTY OF TIME PASSING PROJECT
   */
  const springVideoTexture = useVideoTexture(
    "./videos/beauty-of-time-passing/spring.mp4"
  );
  const summerVideoTexture = useVideoTexture(
    "./videos/beauty-of-time-passing/summer.mp4"
  );
  const autumnVideoTexture = useVideoTexture(
    "./videos/beauty-of-time-passing/autumn.mp4"
  );
  const winterVideoTexture = useVideoTexture(
    "./videos/beauty-of-time-passing/winter.mp4"
  );

  /**
   * VIDEOS FOR THE 3D VIDUALS
   */
  const silkySphereVideoTexture = useVideoTexture(
    "./videos/three-d-visuals/Silkey_Sphere.mp4"
  );

  silkySphereVideoTexture.wrapS = THREE.RepeatWrapping;
  silkySphereVideoTexture.wrapT = THREE.RepeatWrapping;
  silkySphereVideoTexture.flipY = false;

  const bloomingFlowerVideoTexture = useVideoTexture(
    "./videos/three-d-visuals/Blooming_Flower.mp4"
  );

  bloomingFlowerVideoTexture.wrapS = THREE.RepeatWrapping;
  bloomingFlowerVideoTexture.wrapT = THREE.RepeatWrapping;
  bloomingFlowerVideoTexture.flipY = false;

  const dancingTentacleVideoTexture = useVideoTexture(
    "./videos/three-d-visuals/Dancing_Tentacles.mp4"
  );

  dancingTentacleVideoTexture.wrapS = THREE.RepeatWrapping;
  dancingTentacleVideoTexture.wrapT = THREE.RepeatWrapping;
  dancingTentacleVideoTexture.flipY = false;

  const glassPoppingVideoTexture = useVideoTexture(
    "./videos/three-d-visuals/Glass_Popping.mp4"
  );

  glassPoppingVideoTexture.wrapS = THREE.RepeatWrapping;
  glassPoppingVideoTexture.wrapT = THREE.RepeatWrapping;
  glassPoppingVideoTexture.flipY = false;

  const beautyOfTimePassingVideoTexture = useVideoTexture(
    "./videos/three-d-visuals/Beauty_Of_Time_Passing.mp4"
  );

  beautyOfTimePassingVideoTexture.wrapS = THREE.RepeatWrapping;
  beautyOfTimePassingVideoTexture.wrapT = THREE.RepeatWrapping;
  beautyOfTimePassingVideoTexture.flipY = false;

  const sakuraPetalsVideoTexture = useVideoTexture(
    "./videos/three-d-visuals/Sakura_Petals.mp4"
  );

  sakuraPetalsVideoTexture.wrapS = THREE.RepeatWrapping;
  sakuraPetalsVideoTexture.wrapT = THREE.RepeatWrapping;
  sakuraPetalsVideoTexture.flipY = false;

  const squishyObjectsVideoTexture = useVideoTexture(
    "./videos/three-d-visuals/Squishy_Objects.mp4"
  );

  squishyObjectsVideoTexture.wrapS = THREE.RepeatWrapping;
  squishyObjectsVideoTexture.wrapT = THREE.RepeatWrapping;
  squishyObjectsVideoTexture.flipY = false;

  const sequenceRiverVideoTexture = useVideoTexture(
    "./videos/three-d-visuals/Sequence_River.mp4"
  );

  sequenceRiverVideoTexture.wrapS = THREE.RepeatWrapping;
  sequenceRiverVideoTexture.wrapT = THREE.RepeatWrapping;
  sequenceRiverVideoTexture.flipY = false;

  /**
   * MODEL -------------------------------------------------------
   */

  const { nodes, materials } = useGLTF("./models/test/stage-test.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.glassBrickBottom009.geometry}
        material={materials["glass-low-poly"]}
        position={[-29.149, 11.971, 39.615]}
        rotation={[Math.PI, 0.73, 1.571]}
        scale={7.863}
      />
      <mesh
        geometry={nodes.Cube047.geometry}
        material={nodes.Cube047.material}
        position={[-37.434, 1.337, 33.087]}
        scale={[6.576, 1.313, 6.576]}
      />
      <mesh
        geometry={nodes.Plane010.geometry}
        material={materials["emission-ceiling-light"]}
        position={[-37.273, 2.95, 32.799]}
        scale={5.492}
      />
      <mesh
        geometry={nodes["wood-frame-right002"].geometry}
        material={materials["wood-dark-low-poly-without-texture"]}
        position={[-5.94, 15.124, -1.54]}
        rotation={[2.548, 1.148, -2.505]}
        scale={[2.408, 7.684, 0.344]}
      />
      <mesh
        geometry={nodes["wood-frame-bottom002"].geometry}
        material={materials["wood-dark-low-poly-without-texture"]}
        position={[-15.168, 2.664, 1.231]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2.408, 0.344, 2.762]}
      />
      <mesh
        geometry={nodes["wood-frame-left002"].geometry}
        material={materials["wood-dark-low-poly-without-texture"]}
        position={[-26.581, 11.864, 3.681]}
        rotation={[0.609, -1.225, 0.58]}
        scale={[2.408, 7.684, 0.344]}
      />
      <mesh
        geometry={nodes["wood-frame-top002"].geometry}
        material={materials["wood-dark-low-poly-without-texture"]}
        position={[-15.346, 27.001, -5.266]}
        rotation={[-Math.PI / 2, -1.259, 2.061]}
        scale={[2.408, 0.344, 2.762]}
      />
      <mesh
        geometry={nodes["wood-stick-back002"].geometry}
        material={materials["wood-natural-low-poly"]}
        position={[-14.459, 6.814, -1.593]}
        rotation={[Math.PI / 2, -0.179, -1.436]}
        scale={[4.588, 3.097, 4.588]}
      />
      <mesh
        geometry={nodes["wood-stick-front002"].geometry}
        material={materials["wood-natural-low-poly"]}
        position={[-13.302, 16.786, 2.969]}
        rotation={[2.415, 0.347, -2.487]}
        scale={[4.588, 3.097, 4.588]}
      />
      <mesh
        geometry={nodes["led-light-socket002"].geometry}
        material={materials["black-low-poly"]}
        position={[-20.324, 23.816, -3.345]}
        rotation={[Math.PI, 1.028, 2.712]}
        scale={[22.761, 1.032, 22.761]}
      />
      <mesh
        geometry={nodes.glassBrick01005.geometry}
        material={materials["glass-low-poly.002"]}
        position={[-20.449, 15.139, -4.038]}
        rotation={[-0.225, -0.124, -1.344]}
        scale={3.856}
      />
      <mesh
        geometry={nodes.glassBrick02005.geometry}
        material={materials["glass-low-poly.002"]}
        position={[-13.937, 9.954, 4.841]}
        rotation={[0, 0, -0.45]}
        scale={3.856}
      />
      <mesh
        geometry={nodes["led-light-wire-curve006"].geometry}
        material={materials["black-low-poly"]}
        position={[-15.78, 26.623, -3.916]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.588}
      />
      <group
        position={[47.618, 10.587, 38.293]}
        rotation={[Math.PI, 0.73, 1.14]}
        scale={4.421}
      >
        <mesh
          geometry={nodes.Cylinder193.geometry}
          material={materials["wood-natural-low-poly"]}
        />
        <mesh
          geometry={nodes.Cylinder193_1.geometry}
          material={materials["wood-dark-low-poly-without-texture"]}
        />
        <mesh
          geometry={nodes.Cylinder193_2.geometry}
          material={materials["black-low-poly.002"]}
        />
      </group>
      <mesh
        geometry={nodes.glassBrickBottom006.geometry}
        material={materials["glass-low-poly"]}
        position={[48.361, 5.743, 38.958]}
        rotation={[Math.PI, 0.73, 1.571]}
        scale={4.421}
      />
      <mesh
        geometry={nodes.glassBrickTop006.geometry}
        material={materials["glass-low-poly"]}
        position={[48.361, 5.743, 38.958]}
        rotation={[Math.PI, 0.73, 1.571]}
        scale={4.421}
      />
      <mesh
        geometry={nodes["led-light-wire-curve007"].geometry}
        material={materials["black-low-poly"]}
        position={[36.682, 0.195, 28.267]}
        rotation={[-2.947, 0.93, 0.89]}
        scale={1.616}
      />
      <group
        position={[60.702, 0.607, 13.943]}
        rotation={[0, -0.489, 0]}
        scale={4.421}
      >
        <mesh
          geometry={nodes.Cylinder194.geometry}
          material={materials["wood-natural-low-poly"]}
        />
        <mesh
          geometry={nodes.Cylinder194_1.geometry}
          material={materials["wood-dark-low-poly-without-texture"]}
        />
        <mesh
          geometry={nodes.Cylinder194_2.geometry}
          material={materials["black-low-poly.002"]}
        />
      </group>
      <mesh
        geometry={nodes.glassBrickBottom007.geometry}
        material={materials["glass-low-poly"]}
        position={[60.702, 0.607, 13.943]}
        rotation={[0, -0.489, 0]}
        scale={4.421}
      />
      <mesh
        geometry={nodes.glassBrickTop007.geometry}
        material={materials["glass-low-poly"]}
        position={[60.702, 0.607, 13.943]}
        rotation={[0, -0.489, 0]}
        scale={4.421}
      />
      <mesh
        geometry={nodes["led-light-wire-curve008"].geometry}
        material={materials["black-low-poly"]}
        position={[59.794, 18.428, 17.076]}
        rotation={[2.355, -1.231, 2.277]}
        scale={1.616}
      />
      <group
        position={[39.6, 3.504, 6.274]}
        rotation={[0, 0.396, 0]}
        scale={4.421}
      >
        <mesh
          geometry={nodes.Cylinder195.geometry}
          material={materials["wood-natural-low-poly"]}
        />
        <mesh
          geometry={nodes.Cylinder195_1.geometry}
          material={materials["wood-dark-low-poly-without-texture"]}
        />
        <mesh
          geometry={nodes.Cylinder195_2.geometry}
          material={materials["black-low-poly.002"]}
        />
      </group>
      <mesh
        geometry={nodes.glassBrickBottom008.geometry}
        material={materials["glass-low-poly"]}
        position={[38.447, 3.504, 6.756]}
        rotation={[0, 0.396, 0]}
        scale={4.421}
      />
      <mesh
        geometry={nodes.glassBrickTop008.geometry}
        material={materials["glass-low-poly"]}
        position={[40.927, 3.504, 5.719]}
        rotation={[0, 0.396, 0]}
        scale={4.421}
      />
      <mesh
        geometry={nodes["led-light-wire-curve009"].geometry}
        material={materials["black-low-poly"]}
        position={[42.661, 21.324, 5.193]}
        rotation={[0.255, 0.366, -0.201]}
        scale={1.616}
      />
      <mesh
        geometry={nodes["book-in-praise-of-shadows"].geometry}
        material={materials["Material.001"]}
        position={[16.32, 4.868, -9.317]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.968, 1, 1]}
      />
      <mesh
        geometry={nodes["fluid-domain002"].geometry}
        material={materials["wood-coating-acajou"]}
        position={[-3.359, 6.595, 30.273]}
        scale={[5.586, 9.296, 5.586]}
      />
      <group
        position={[-6.107, 19.177, 28.906]}
        rotation={[-1.625, -0.484, 0.341]}
        scale={[0.017, 0.008, 0.03]}
      >
        <mesh
          geometry={nodes.Mesh013.geometry}
          material={materials["brush-hair"]}
        />
        <mesh
          geometry={nodes.Mesh013_1.geometry}
          material={materials["brush-metal"]}
        />
        <mesh
          geometry={nodes.Mesh013_2.geometry}
          material={materials["brush-wood"]}
        />
      </group>
      <group
        position={[-1.342, 12.757, 27.373]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[7.202, 0.497, 1.918]}
      >
        <mesh
          geometry={nodes.Cube193.geometry}
          material={materials["wood-beech"]}
        />
        <mesh
          geometry={nodes.Cube193_1.geometry}
          material={materials["wood-coating-acajou"]}
        />
      </group>
      <mesh
        geometry={nodes["fluid-domain003"].geometry}
        material={materials["wood-coating-palissandre"]}
        position={[7.561, 6.595, 30.273]}
        scale={[5.586, 9.296, 5.586]}
      />
      <group
        position={[4.813, 19.177, 28.906]}
        rotation={[-1.625, -0.484, 0.341]}
        scale={[0.017, 0.008, 0.03]}
      >
        <mesh
          geometry={nodes.Mesh014.geometry}
          material={materials["brush-hair"]}
        />
        <mesh
          geometry={nodes.Mesh014_1.geometry}
          material={materials["brush-metal"]}
        />
        <mesh
          geometry={nodes.Mesh014_2.geometry}
          material={materials["brush-wood"]}
        />
      </group>
      <group
        position={[9.578, 12.757, 27.373]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[7.202, 0.497, 1.918]}
      >
        <mesh
          geometry={nodes.Cube195.geometry}
          material={materials["wood-beech"]}
        />
        <mesh
          geometry={nodes.Cube195_1.geometry}
          material={materials["wood-coating-palissandre"]}
        />
      </group>
      <mesh
        geometry={nodes["scnery-window-screen"].geometry}
        material={materials["emission-plane-pink"]}
        position={[-3.005, 0.226, -106.691]}
        rotation={[Math.PI / 2, 0, 0.913]}
        scale={[2.028, 1, 2.02]}
      />
      <group
        position={[-3.232, 0.023, -106.474]}
        rotation={[Math.PI / 2, 0, 0.913]}
        scale={[4.523, 1.525, 2.71]}
      >
        <mesh
          geometry={nodes.Plane075.geometry}
          material={materials["black-low-poly"]}
        />
        <mesh
          geometry={nodes.Plane075_1.geometry}
          material={materials["black-low-poly"]}
        />
      </group>
      <mesh
        geometry={nodes["window-wall"].geometry}
        material={nodes["window-wall"].material}
        position={[-11.396, 0, -107.035]}
        rotation={[Math.PI / 2, 0, 0.913]}
      />
      <mesh
        geometry={nodes["tree-trunk-low-poly003"].geometry}
        material={materials.Bark}
        position={[92.197, 17.414, -167.184]}
        rotation={[2.053, 0.541, 2.275]}
        scale={1.475}
      />
      <mesh
        geometry={nodes["tree-leaves-low-poly006"].geometry}
        material={materials.Leaves}
        position={[92.771, 16.566, -167.627]}
        rotation={[2.053, 0.541, 2.275]}
        scale={1.475}
      />
      <mesh
        geometry={nodes["float-particles006"].geometry}
        material={materials.Leaves}
        position={[49.092, 7.284, -126.946]}
        rotation={[Math.PI / 2, 0, 0.261]}
        scale={[19.559, 14.84, 14.028]}
      />
      <mesh
        geometry={nodes["weather-data-plane"].geometry}
        material={materials["weather-data-amsterdam"]}
        position={[107.452, -4.124, -170.383]}
        rotation={[1.275, -0.361, 0.859]}
        scale={[1.622, 1.261, 1.261]}
      />
      <group position={[57.181, -0.519, -246.029]} scale={1.21}>
        <mesh
          geometry={nodes.Cube161.geometry}
          material={materials["wood-natural-stand-without-texture"]}
        />
        <mesh
          geometry={nodes.Cube161_1.geometry}
          material={materials["wood-natural-stand-without-texture"]}
        />
      </group>
      <group position={[57.181, -0.519, -246.029]} scale={1.21}>
        <mesh
          geometry={nodes.Cylinder170.geometry}
          material={materials["wood-natural-stand-without-texture"]}
        />
        <mesh
          geometry={nodes.Cylinder170_1.geometry}
          material={materials["wood-natural-stand-without-texture"]}
        />
      </group>
      <mesh
        geometry={nodes["wood-stand003"].geometry}
        material={materials["wood-natural-stand-without-texture"]}
        position={[57.181, -0.519, -246.029]}
        scale={1.21}
      />
      <group position={[57.181, -0.519, -246.029]} scale={1.21}>
        <mesh
          geometry={nodes.Cube162.geometry}
          material={materials["marble-black-witouth-texture"]}
        />
        <mesh
          geometry={nodes.Cube162_1.geometry}
          material={materials["marble-black-witouth-texture"]}
        />
      </group>
      <group position={[57.165, -1.576, -246.081]} scale={1.21}>
        <mesh
          geometry={nodes.Cube163.geometry}
          material={materials["marble-black-witouth-texture"]}
        />
        <mesh
          geometry={nodes.Cube163_1.geometry}
          material={materials["marble-black-witouth-texture"]}
        />
      </group>
      <group position={[57.181, -0.519, -246.029]} scale={1.21}>
        <mesh
          geometry={nodes.Cube164.geometry}
          material={materials["marble-white-without-texture"]}
        />
        <mesh
          geometry={nodes.Cube164_1.geometry}
          material={materials["marble-white-without-texture"]}
        />
      </group>
      <group position={[57.181, -0.519, -246.029]} scale={1.21}>
        <mesh
          geometry={nodes.Cube165.geometry}
          material={materials["wood-natural-stand-without-texture"]}
        />
        <mesh
          geometry={nodes.Cube165_1.geometry}
          material={materials["wood-natural-stand-without-texture"]}
        />
      </group>
      <group position={[57.181, -0.519, -246.029]} scale={1.21}>
        <mesh
          geometry={nodes.Cube166.geometry}
          material={materials["marble-black-witouth-texture"]}
        />
        <mesh
          geometry={nodes.Cube166_1.geometry}
          material={materials["marble-black-witouth-texture"]}
        />
      </group>
      <mesh
        geometry={nodes["typo-alphabet-a002"].geometry}
        material={materials["white-matt-typography"]}
        position={[-48.159, 0, -226.059]}
        rotation={[0, 1.14, 0]}
      />
      <mesh
        geometry={nodes["typo-alphabet-b002"].geometry}
        material={materials["white-matt-typography"]}
        position={[-48.159, 0, -226.059]}
        rotation={[0, 1.14, 0]}
      />
      <mesh
        geometry={nodes["typo-alphabet-c002"].geometry}
        material={materials["white-matt-typography"]}
        position={[-48.159, 0, -226.059]}
        rotation={[0, 1.14, 0]}
      />
      <mesh
        geometry={nodes["typo-hiragana-a002"].geometry}
        material={materials["white-matt-typography"]}
        position={[-48.159, 0, -226.059]}
        rotation={[0, 1.14, 0]}
      />
      <mesh
        geometry={nodes["typo-hiragana-i002"].geometry}
        material={materials["white-matt-typography"]}
        position={[-48.159, 0, -226.059]}
        rotation={[0, 1.14, 0]}
      />
      <mesh
        geometry={nodes["typo-hiragana-u002"].geometry}
        material={materials["white-matt-typography"]}
        position={[-48.159, 0, -226.059]}
        rotation={[0, 1.14, 0]}
      />
      <mesh
        geometry={nodes["back-lighting"].geometry}
        material={materials["emission-typography"]}
        position={[-48.159, 0, -226.059]}
        rotation={[0, 1.14, 0]}
      />
      <mesh
        geometry={nodes.grid.geometry}
        material={materials["white-matt-typography"]}
        position={[-48.159, 0, -226.059]}
        rotation={[0, 1.14, 0]}
      />
      <mesh
        geometry={nodes["square-frame001"].geometry}
        material={materials["black-low-poly.002"]}
        position={[-34.332, 13.686, -197.963]}
        rotation={[-Math.PI, 1.206, -Math.PI]}
        scale={[8.619, 8.619, 2.596]}
      />
      <mesh
        geometry={nodes["paper-typo001"].geometry}
        material={materials["white-paper"]}
        position={[-34.332, 13.686, -197.963]}
        rotation={[Math.PI / 2, 0, -1.936]}
        scale={[8.426, 9.266, 8.426]}
      />
      <mesh
        geometry={nodes["comforting-dinner-baked-johns002"].geometry}
        material={materials["john-mesh-without-texture"]}
        position={[-182.564, 1.299, -155.284]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={29.583}
      />
      <group
        position={[-116.452, 15.567, -154.009]}
        rotation={[0.133, -0.995, -0.373]}
        scale={1.862}
      >
        <mesh
          geometry={nodes.Plane072.geometry}
          material={materials["ceramic-white-cutlery-without-texture"]}
        />
        <mesh
          geometry={nodes.Plane072_1.geometry}
          material={materials["ceramic-black-cutlery-without-texture"]}
        />
      </group>
      <mesh
        geometry={nodes["comforting-dinner-baked-table002"].geometry}
        material={materials["table-comforting-dinner-without-texture"]}
        position={[-151.042, 3.199, -151.234]}
        scale={1.862}
      />
      <mesh
        geometry={nodes["analog-tv-01-modified-square"].geometry}
        material={materials["analog-tv-black-matt"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      />
      <mesh
        geometry={nodes["analog-tv-02-modified-horizontal-01"].geometry}
        material={materials["analog-tv-black-matt"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      />
      <mesh
        geometry={nodes["analog-tv-03-modified-horizontal"].geometry}
        material={materials["analog-tv-black-matt"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      />
      <mesh
        geometry={nodes["analog-tv-03-modified-vertical-big"].geometry}
        material={materials["analog-tv-black-matt"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      />
      <mesh
        geometry={nodes["analog-tv-03-modified-vertical-small"].geometry}
        material={materials["analog-tv-black-matt"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      />
      <mesh
        geometry={nodes["analog-tv-04-modified-horizontal"].geometry}
        material={materials["analog-tv-black-matt"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      />
      <mesh
        geometry={nodes["analog-tv-05-modified-horizontal"].geometry}
        material={materials["analog-tv-black-matt"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      />
      <mesh
        geometry={nodes["analog-tv-02-modified-horizontal-02"].geometry}
        material={materials["analog-tv-black-matt"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      />

      <mesh
        geometry={nodes["analog-tv-01-modified-square-screen"].geometry}
        // material={materials["analog-tv-01-modified-square-screen"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      >
        <meshBasicMaterial map={silkySphereVideoTexture} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes["analog-tv-02-modified-horizontal-screen-01"].geometry}
        // material={materials["analog-tv-02-modified-horizontal-screen-01"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      >
        <meshBasicMaterial
          map={dancingTentacleVideoTexture}
          toneMapped={false}
        />
      </mesh>
      <mesh
        geometry={nodes["analog-tv-03-modified-horizontal-screen"].geometry}
        // material={materials["analog-tv-03-modified-horizontal-screen"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      >
        <meshBasicMaterial
          map={bloomingFlowerVideoTexture}
          toneMapped={false}
        />
      </mesh>
      <mesh
        geometry={nodes["analog-tv-03-modified-vertical-big-screen"].geometry}
        // material={materials["analog-tv-03-modified-vertical-big-screen"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      >
        <meshBasicMaterial
          map={beautyOfTimePassingVideoTexture}
          toneMapped={false}
        />
      </mesh>
      <mesh
        geometry={nodes["analog-tv-03-modified-vertical-small-screen"].geometry}
        // material={materials["analog-tv-03-modified-vertical-small-screen"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      >
        <meshBasicMaterial
          map={squishyObjectsVideoTexture}
          toneMapped={false}
        />
      </mesh>
      <mesh
        geometry={nodes["analog-tv-04-modified-horizontal-screen"].geometry}
        // material={materials["analog-tv-04-modified-horizontal-screen"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      >
        <meshBasicMaterial map={sakuraPetalsVideoTexture} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes["analog-tv-05-modified-horizontal-screen"].geometry}
        // material={materials["analog-tv-05-modified-horizontal-screen"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      >
        <meshBasicMaterial map={glassPoppingVideoTexture} toneMapped={false} />
      </mesh>
      <mesh
        geometry={nodes["analog-tv-02-modified-horizontal-screen-02"].geometry}
        // material={materials["analog-tv-02-modified-horizontal-screen-02"]}
        position={[10.108, 0, 35.09]}
        rotation={[0, 0.242, 0]}
      >
        <meshBasicMaterial map={sequenceRiverVideoTexture} toneMapped={false} />
      </mesh>

      <mesh
        geometry={nodes["test-ground-ver2001"].geometry}
        material={materials["test-architecture-white-matt"]}
      />
    </group>
  );
}

useGLTF.preload("./models/test/stage-test.glb");
