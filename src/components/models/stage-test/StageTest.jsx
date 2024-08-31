/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 ./public/models/test/stage-test.glb 
*/

import React, { useEffect, useRef, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  useVideoTexture,
  Mask,
  useMask,
  MeshDistortMaterial,
} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

import waterVertexShader from "../../../shaders/water/vertex.glsl";
import waterFragmentShader from "../../../shaders/water/fragment.glsl";

/**
 * MATERIAL FOR PICTURE FREAME GLASS
 */
const waterMaterial = new THREE.ShaderMaterial({
  vertexShader: waterVertexShader,
  fragmentShader: waterFragmentShader,
  uniforms: {
    uTime: new THREE.Uniform(0),

    uBigWavesElevation: new THREE.Uniform(0.2),
    uBigWaveFrequency: new THREE.Uniform(new THREE.Vector2(0.4, 0.25)),
    uBigWavesSpeed: new THREE.Uniform(0.05),

    uSmallWavesElevation: new THREE.Uniform(0.15),
    uSmallWavesFrequency: new THREE.Uniform(0.3),
    uSmallWavesSpeed: new THREE.Uniform(0.08),
    uSmallWavesIteration: new THREE.Uniform(4),

    uDepthColor: new THREE.Uniform(new THREE.Color("#1C1C1C")),
    uSurfaceColor: new THREE.Uniform(new THREE.Color("#00abf5")),
    uColorOffset: new THREE.Uniform(0.08),
    uColorMultiplier: new THREE.Uniform(5),

    uMaterialOpacity: new THREE.Uniform(0.8),
  },
  transparent: true,
});

export default function StageTest(props) {
  /**
   * REF - SHADER MATERIAL FOR PICTURE FRAME GLASS
   */
  const pictureFrameGlass = useRef();

  useFrame(
    (state, delta) =>
      (pictureFrameGlass.current.material.uniforms.uTime.value =
        state.clock.getElapsedTime())
  );

  /**
   * MASK STENCIL
   */
  const stencil = useMask(1);

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
   * VIDEO FOR DIGITAL SCENERY
   */
  const binaryNumbersBackgroundVideo = useVideoTexture(
    "./videos/beauty-of-time-passing/binary-numbers-resize-40perc.mp4"
  );
  binaryNumbersBackgroundVideo.wrapS = THREE.RepeatWrapping;
  binaryNumbersBackgroundVideo.wrapT = THREE.RepeatWrapping;
  binaryNumbersBackgroundVideo.flipY = false;
  binaryNumbersBackgroundVideo.repeat.set(3, 3);

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

  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./models/test/stage-test.glb"
  );
  const { actions } = useAnimations(animations, group);

  /**
   * USEEFFECT - TYPOGRAPHY ANIMATIONS
   */
  useEffect(() => {
    // Typo A
    actions?.["typo-A-big-circle.001Action"].play();
    actions?.["typo-A-line-horizontal.001Action"].play();
    actions?.["typo-A-line-vertical-left.001Action"].play();
    actions?.["typo-A-line-vertical-right.001Action"].play();

    // Typo B
    actions?.["typo-B-line-horizontal-bottom.001Action"].play();
    actions?.["typo-B-line-horizontal-top.002Action"].play();
    actions?.["typo-B-line-vertical.001Action"].play();
    actions?.["typo-B-small-circle-bottom.001Action"].play();
    actions?.["typo-B-small-circle-top.001Action"].play();

    // Typo C
    actions?.["typo-C-big-circle.001Action"].play();
    actions?.["typo-C-line-horizontal-bottom.001Action"].play();
    actions?.["typo-C-line-horizontal-top.001Action"].play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="glass-brick-window-modified"
          geometry={nodes["glass-brick-window-modified"].geometry}
          material={materials["glass-low-poly-opaque"]}
          position={[-179.792, 74.039, -259.002]}
          rotation={[0, 0.647, 0]}
          scale={1.557}
        />
        <group
          name="ambience-of-light-single-product"
          position={[-123.531, 35, -185.844]}
          rotation={[0.361, 1.186, -0.488]}
          scale={[5.32, 16.973, 0.76]}
        >
          <mesh
            name="Cube277"
            geometry={nodes.Cube277.geometry}
            material={materials["wood-dark-low-poly-without-texture"]}
          />
          <mesh
            name="Cube277_1"
            geometry={nodes.Cube277_1.geometry}
            material={materials["glass-low-poly-opaque"]}
          />
          <mesh
            name="Cube277_2"
            geometry={nodes.Cube277_2.geometry}
            material={materials["black-low-poly"]}
          />
          <mesh
            name="Cube277_3"
            geometry={nodes.Cube277_3.geometry}
            material={materials["wood-natural-low-poly"]}
          />
        </group>
        <group
          name="ambience-of-light-wall"
          position={[-181.793, 0, -256.852]}
          rotation={[0, -0.923, 0]}
        >
          <mesh
            name="Cube323"
            geometry={nodes.Cube323.geometry}
            material={materials["ambience-of-light-dispersion"]}
          />
          <mesh
            name="Cube323_1"
            geometry={nodes.Cube323_1.geometry}
            material={materials["ambience-of-light-dispersion"]}
          />
        </group>

        {/* MASK - SCENERY CIRCLE WINDOW */}
        <Mask
          id={1}
          geometry={nodes["scenery-window-mask"].geometry}
          position={[8.845, 28.988, -338.373]}
          rotation={[Math.PI / 2, 0, -0.004]}
          scale={7.427}
        >
          <meshBasicMaterial />
        </Mask>

        <group
          name="circle-window-frame"
          position={[8.774, 28.703, -334.365]}
          rotation={[Math.PI / 2, 0, -0.004]}
          scale={[1.582, 1.034, 1.582]}
        >
          <mesh
            name="Cylinder239"
            geometry={nodes.Cylinder239.geometry}
            material={materials["black-low-poly"]}
          />
          <mesh
            name="Cylinder239_1"
            geometry={nodes.Cylinder239_1.geometry}
            material={materials["paper-screen-white"]}
          />
        </group>

        {/* VIDEO SCREEN - SCENERY REFLECTIONS */}
        <mesh
          name="scenery-reflection-on-the-ground"
          geometry={nodes["scenery-reflection-on-the-ground"].geometry}
          position={[8.165, 5.485, -300.186]}
        >
          <meshBasicMaterial map={springVideoTexture} toneMapped={false} />
        </mesh>

        {/* MASKED - TREE TRUNKS */}
        <mesh
          name="tree-trunks-low-poly"
          geometry={nodes["tree-trunks-low-poly"].geometry}
          position={[-45.805, 14.82, -424.357]}
          rotation={[2.585, -0.595, 0.854]}
          scale={1.382}
        >
          <meshStandardMaterial color="#554236" {...stencil} />
        </mesh>

        {/* MASKED - TREE LEAVES, FLOAT PARTICLE LEAVES */}
        <mesh
          name="float-particles005"
          geometry={nodes["float-particles005"].geometry}
          position={[11.194, 13.085, -387.559]}
          rotation={[Math.PI / 2, 0, 1.352]}
          scale={[22.903, 17.377, 16.426]}
        >
          <MeshDistortMaterial
            distort={0.5}
            speed={1}
            color="#F8C3CD"
            {...stencil}
          />
        </mesh>
        <mesh
          name="tree-leaves-low-poly008"
          geometry={nodes["tree-leaves-low-poly008"].geometry}
          position={[-46.391, 14.363, -425.091]}
          rotation={[2.585, -0.595, 0.854]}
          scale={1.382}
        >
          <MeshDistortMaterial
            distort={0.3}
            speed={1}
            color="#F8C3CD"
            {...stencil}
          />
        </mesh>
        <mesh
          name="tree-leaves-low-poly009"
          geometry={nodes["tree-leaves-low-poly009"].geometry}
          position={[-15.909, 9.415, -455.623]}
          rotation={[2.069, -0.504, -2.562]}
          scale={2.765}
        >
          <MeshDistortMaterial
            distort={0.3}
            speed={1}
            color="#F8C3CD"
            {...stencil}
          />
        </mesh>

        {/* MASKED - DIGITAL SCENERY*/}
        <mesh
          name="digital-world"
          geometry={nodes["digital-world"].geometry}
          position={[8.346, 29.465, -408.117]}
          rotation={[0, 0.004, 0]}
        >
          <meshBasicMaterial
            map={binaryNumbersBackgroundVideo}
            toneMapped={false}
            {...stencil}
          />
        </mesh>

        <group
          name="weather-models"
          position={[22.066, 33.601, -360.556]}
          rotation={[Math.PI / 2, 0, 0.616]}
          scale={0.063}
        >
          <mesh name="clouds002" geometry={nodes.clouds002.geometry}>
            <meshStandardMaterial color="snow" {...stencil} />
          </mesh>
          <mesh name="clouds002_1" geometry={nodes.clouds002_1.geometry}>
            <meshStandardMaterial color="#81C7D4" {...stencil} />
          </mesh>
        </group>

        <group
          name="intervention-in-our-disconnection-models"
          position={[63.786, 6.996, -148.779]}
          rotation={[0.134, -0.786, 0.201]}
          scale={2.089}
        >
          <mesh
            name="Cube269"
            geometry={nodes.Cube269.geometry}
            material={materials["wood-natural-stand-without-texture"]}
          />
          <mesh
            name="Cube269_1"
            geometry={nodes.Cube269_1.geometry}
            material={materials["marble-black-witouth-texture"]}
          />
          <mesh
            name="Cube269_2"
            geometry={nodes.Cube269_2.geometry}
            material={materials["marble-white-without-texture"]}
          />
          <mesh
            name="Cube269_3"
            geometry={nodes.Cube269_3.geometry}
            material={materials["marble-b-low-poly"]}
          />
          <mesh
            name="Cube269_4"
            geometry={nodes.Cube269_4.geometry}
            material={materials["marble-baige"]}
          />
          <mesh
            name="Cube269_5"
            geometry={nodes.Cube269_5.geometry}
            material={materials["marble-brown"]}
          />
          <mesh
            name="Cube269_6"
            geometry={nodes.Cube269_6.geometry}
            material={materials["marble-dark-brown"]}
          />
          <mesh
            name="Cube269_7"
            geometry={nodes.Cube269_7.geometry}
            material={materials["stone-material"]}
          />
          <mesh
            name="Cube269_8"
            geometry={nodes.Cube269_8.geometry}
            material={materials["wood-beech"]}
          />
          <mesh
            name="Cube269_9"
            geometry={nodes.Cube269_9.geometry}
            material={materials["wood-natural"]}
          />
          <mesh
            name="Cube269_10"
            geometry={nodes.Cube269_10.geometry}
            material={materials["wood-natural"]}
          />
        </group>

        {/* TYPO ANIMATION WALLS */}
        <mesh
          name="typo-A-backwall001"
          geometry={nodes["typo-A-backwall001"].geometry}
          material={materials["matt-black"]}
          position={[-245.98, 8.775, -613.353]}
          rotation={[0, -0.741, 0]}
          scale={[57.602, 97.036, 1.286]}
        />
        <mesh
          name="typo-A-line-horizontal001"
          geometry={nodes["typo-A-line-horizontal001"].geometry}
          material={materials["matt-white"]}
          position={[-249.665, 56.08, -608.609]}
          rotation={[0, -0.741, 0]}
          scale={24.341}
        />
        <group
          name="typo-A-big-circle001"
          position={[-254.266, 56.08, -603.579]}
          rotation={[0, -0.741, 0]}
          scale={24.341}
        >
          <mesh
            name="Circle001"
            geometry={nodes.Circle001.geometry}
            material={materials["matt-white"]}
          />
          <mesh
            name="Circle001_1"
            geometry={nodes.Circle001_1.geometry}
            material={materials["matt-black"]}
          />
        </group>
        <mesh
          name="typo-A-line-vertical-left001"
          geometry={nodes["typo-A-line-vertical-left001"].geometry}
          material={materials["matt-white"]}
          position={[-276.606, 56.08, -614.982]}
          rotation={[0, -0.741, 0]}
          scale={24.341}
        />
        <mesh
          name="typo-A-line-vertical-right001"
          geometry={nodes["typo-A-line-vertical-right001"].geometry}
          material={materials["matt-white"]}
          position={[-240.908, 56.08, -582.328]}
          rotation={[0, -0.741, 0]}
          scale={24.341}
        />
        <mesh
          name="typo-B-backwall001"
          geometry={nodes["typo-B-backwall001"].geometry}
          material={materials["matt-black"]}
          position={[-164.761, 8.775, -645.58]}
          rotation={[0, 1.45, 0]}
          scale={[57.602, 97.036, 1.286]}
        />
        <mesh
          name="typo-B-line-horizontal-bottom001"
          geometry={nodes["typo-B-line-horizontal-bottom001"].geometry}
          material={materials["matt-white"]}
          position={[-152.511, 30.329, -644.443]}
          rotation={[0, 1.45, 0]}
          scale={24.341}
        />
        <mesh
          name="typo-B-line-horizontal-top002"
          geometry={nodes["typo-B-line-horizontal-top002"].geometry}
          material={materials["matt-white"]}
          position={[-151.069, 80.783, -644.252]}
          rotation={[0, 1.45, 0]}
          scale={24.341}
        />
        <mesh
          name="typo-B-line-horizontal-middle001"
          geometry={nodes["typo-B-line-horizontal-middle001"].geometry}
          material={materials["matt-white"]}
          position={[-152.511, 55.541, -644.443]}
          rotation={[0, 1.45, 0]}
          scale={24.341}
        />
        <mesh
          name="typo-B-line-vertical001"
          geometry={nodes["typo-B-line-vertical001"].geometry}
          material={materials["matt-white"]}
          position={[-147.73, 56.08, -619.419]}
          rotation={[0, 1.45, 0]}
          scale={24.341}
        />
        <group
          name="typo-B-small-circle-top001"
          position={[-157.104, 68.24, -657.329]}
          rotation={[0, 1.45, 0]}
          scale={25.413}
        >
          <mesh
            name="Circle003"
            geometry={nodes.Circle003.geometry}
            material={materials["matt-black"]}
          />
          <mesh
            name="Circle003_1"
            geometry={nodes.Circle003_1.geometry}
            material={materials["matt-white"]}
          />
        </group>
        <group
          name="typo-B-small-circle-bottom001"
          position={[-157.104, 42.827, -657.329]}
          rotation={[0, 1.45, 0]}
          scale={25.413}
        >
          <mesh
            name="Circle005"
            geometry={nodes.Circle005.geometry}
            material={materials["matt-black"]}
          />
          <mesh
            name="Circle005_1"
            geometry={nodes.Circle005_1.geometry}
            material={materials["matt-white"]}
          />
        </group>
        <mesh
          name="typo-C-backwall001"
          geometry={nodes["typo-C-backwall001"].geometry}
          material={materials["matt-black"]}
          position={[-230.381, 8.775, -699.237]}
          rotation={[Math.PI, -0.425, Math.PI]}
          scale={[57.602, 97.036, 1.286]}
        />
        <group
          name="typo-C-big-circle001"
          position={[-233.479, 56.082, -704.876]}
          rotation={[Math.PI, -0.425, Math.PI]}
          scale={24.341}
        >
          <mesh
            name="Circle006"
            geometry={nodes.Circle006.geometry}
            material={materials["matt-white"]}
          />
          <mesh
            name="Circle006_1"
            geometry={nodes.Circle006_1.geometry}
            material={materials["matt-black"]}
          />
        </group>
        <mesh
          name="typo-C-line-horizontal-bottom001"
          geometry={nodes["typo-C-line-horizontal-bottom001"].geometry}
          material={materials["matt-white"]}
          position={[-236.484, 31.902, -711.501]}
          rotation={[Math.PI, -0.425, Math.PI]}
          scale={24.341}
        />
        <mesh
          name="typo-C-line-horizontal-top001"
          geometry={nodes["typo-C-line-horizontal-top001"].geometry}
          material={nodes["typo-C-line-horizontal-top001"].material}
          position={[-236.484, 80.283, -711.501]}
          rotation={[Math.PI, -0.425, Math.PI]}
          scale={24.341}
        />

        {/* TYPO - HANGING TEXTILE */}

        <mesh
          name="typo-graphic-wood-stick-bottom001"
          geometry={nodes["typo-graphic-wood-stick-bottom001"].geometry}
          material={materials["wood-natural-low-poly"]}
          position={[-386.878, 14.515, -701.933]}
          rotation={[-Math.PI, -0.117, Math.PI / 2]}
          scale={[-0.745, -29.292, -0.745]}
        />
        <mesh
          name="typo-graphic-textile001"
          geometry={nodes["typo-graphic-textile001"].geometry}
          material={materials["typo-graphic-textile"]}
          position={[-386.79, 56.877, -701.943]}
          rotation={[0, 0.117, Math.PI / 2]}
          scale={1.488}
        />
        <mesh
          name="typo-graphic-wood-stick-top001"
          geometry={nodes["typo-graphic-wood-stick-top001"].geometry}
          material={materials["wood-natural-low-poly"]}
          position={[-386.878, 99.239, -701.933]}
          rotation={[-Math.PI, -0.117, Math.PI / 2]}
          scale={[-0.745, -29.292, -0.745]}
        />
        <group
          name="comforting-dinner-baked-cutlery003"
          position={[560.991, 40.635, -388.556]}
          rotation={[2.739, -1.386, 2.26]}
          scale={12.497}
        >
          <mesh
            name="Plane106"
            geometry={nodes.Plane106.geometry}
            material={materials["ceramic-white-cutlery-without-texture"]}
          />
          <mesh
            name="Plane106_1"
            geometry={nodes.Plane106_1.geometry}
            material={materials["ceramic-black-cutlery-without-texture"]}
          />
        </group>
        <mesh
          name="comforting-dinner-baked-johns003"
          geometry={nodes["comforting-dinner-baked-johns003"].geometry}
          material={materials["john-mesh-without-texture"]}
          position={[239.751, -55.112, -694.671]}
          rotation={[Math.PI / 2, 0, 0.742]}
          scale={198.515}
        />
        <mesh
          name="working-desk001"
          geometry={nodes["working-desk001"].geometry}
          material={materials["wood-coating-palissandre"]}
          position={[-33.833, 0.134, -7.815]}
          rotation={[0, -1.571, 0]}
          scale={1.476}
        />
        <mesh
          name="chair001"
          geometry={nodes.chair001.geometry}
          material={nodes.chair001.material}
          position={[-24.225, 0.134, -9.61]}
          rotation={[0, -1.229, 0]}
          scale={10.889}
        />
        <mesh
          name="keyboard001"
          geometry={nodes.keyboard001.geometry}
          material={materials.keyboard}
          position={[-34.599, 9.473, -3.294]}
          scale={3.085}
        />
        <mesh
          name="monitor001"
          geometry={nodes.monitor001.geometry}
          material={materials.monitor}
          position={[-34.207, 10.519, -2.958]}
          scale={4.516}
        />
        <mesh
          name="monitor-screen-world"
          geometry={nodes["monitor-screen-world"].geometry}
          material={materials["monitor-screen"]}
          position={[-34.118, 10.519, -2.916]}
          scale={4.516}
        />
        <mesh
          name="mouse001"
          geometry={nodes.mouse001.geometry}
          material={materials.mouse}
          position={[-33.065, 9.473, -3.121]}
          rotation={[0, 0.301, 0]}
          scale={3.085}
        />
        <mesh
          name="wall-hanging-shelf"
          geometry={nodes["wall-hanging-shelf"].geometry}
          material={materials["wood-beech"]}
          position={[-36.954, 20.706, -28.273]}
          scale={5.398}
        />
        <mesh
          name="monitor-screen-world-pin"
          geometry={nodes["monitor-screen-world-pin"].geometry}
          material={materials["monitor-screen-world-pin"]}
          position={[-39.552, 37.235, 42.702]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1.599}
        />
        <mesh
          name="monitor-screen-world-pin001"
          geometry={nodes["monitor-screen-world-pin001"].geometry}
          material={materials["monitor-screen-world-pin"]}
          position={[-39.552, 37.235, 10.235]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={1.599}
        />
        <mesh
          name="cutting-mat"
          geometry={nodes["cutting-mat"].geometry}
          material={materials["cutting-mat-material"]}
          position={[171.712, 73.729, 178.007]}
          rotation={[0, -0.267, 0]}
          scale={[81.879, 14.183, 61.409]}
        />
        <mesh
          name="mesh-marble-race"
          geometry={nodes["mesh-marble-race"].geometry}
          material={materials["foam-board"]}
          position={[34.949, 1.915, 120.951]}
          rotation={[Math.PI, -1.325, Math.PI]}
          scale={4.649}
        />
        <mesh
          name="mesh-object-rotterdam-2024"
          geometry={nodes["mesh-object-rotterdam-2024"].geometry}
          material={materials["foam-board"]}
          position={[-0.158, 2.773, 200.552]}
          rotation={[Math.PI, -1.276, Math.PI]}
          scale={0.296}
        />
        <mesh
          name="mesh-weather-cereal"
          geometry={nodes["mesh-weather-cereal"].geometry}
          material={materials["foam-board"]}
          position={[81.08, 8.203, 206.681]}
          rotation={[-1.781, -0.016, -1.495]}
          scale={0.455}
        />
        <mesh
          name="mesh-donuts-universe"
          geometry={nodes["mesh-donuts-universe"].geometry}
          material={materials["foam-board"]}
          position={[135.92, 11.959, 159.475]}
          rotation={[1.564, -0.209, 1.757]}
          scale={150.05}
        />
        <group
          name="three-d-app-modeling-utils"
          position={[197.713, 33.683, 219.971]}
          rotation={[-0.184, -0.583, 0.831]}
          scale={[7.888, 5.92, 5.92]}
        >
          <mesh
            name="Plane091"
            geometry={nodes.Plane091.geometry}
            material={materials.frame}
          />
          <mesh
            name="Plane091_1"
            geometry={nodes.Plane091_1.geometry}
            material={materials.grip}
          />
          <mesh
            name="Plane091_2"
            geometry={nodes.Plane091_2.geometry}
            material={materials.blade}
          />
          <mesh
            name="Plane091_3"
            geometry={nodes.Plane091_3.geometry}
            material={materials["foam-board"]}
          />
          <mesh
            name="Plane091_4"
            geometry={nodes.Plane091_4.geometry}
            material={materials["metal-ruler-material"]}
          />
          <mesh
            name="Plane091_5"
            geometry={nodes.Plane091_5.geometry}
            material={materials["pencil-body-metal"]}
          />
          <mesh
            name="Plane091_6"
            geometry={nodes.Plane091_6.geometry}
            material={materials["pencil-body"]}
          />
        </group>
        <mesh
          name="working-desk-workshop003"
          geometry={nodes["working-desk-workshop003"].geometry}
          material={materials["wood-natural"]}
          position={[-164.397, 0.422, 6.978]}
          rotation={[0, 0.29, 0]}
          scale={7.956}
        />
        <mesh
          name="working-desk-workshop004"
          geometry={nodes["working-desk-workshop004"].geometry}
          material={materials["wood-natural"]}
          position={[-149.171, 0.422, 2.433]}
          rotation={[0, 0.29, 0]}
          scale={7.956}
        />
        <mesh
          name="sculpture-stand-square-small001"
          geometry={nodes["sculpture-stand-square-small001"].geometry}
          material={materials["wood-natural"]}
          position={[-149.915, 0.66, 112.276]}
          scale={13.798}
        />
        <mesh
          name="sculpture-stand-round001"
          geometry={nodes["sculpture-stand-round001"].geometry}
          material={materials["wood-natural"]}
          position={[-138.624, 0.422, 43.014]}
          rotation={[0, 0.191, 0]}
          scale={13.502}
        />
        <mesh
          name="sculpture-stand-square-big001"
          geometry={nodes["sculpture-stand-square-big001"].geometry}
          material={materials["wood-natural"]}
          position={[-167.798, 0.422, 61.509]}
          rotation={[0, -0.091, 0]}
          scale={[24.824, 16.072, 24.824]}
        />
        <mesh
          name="working-desk-workshop005"
          geometry={nodes["working-desk-workshop005"].geometry}
          material={materials["wood-dark"]}
          position={[-111.208, 0.422, 22.179]}
          scale={7.956}
        />
        <mesh
          name="clay-board001"
          geometry={nodes["clay-board001"].geometry}
          material={nodes["clay-board001"].material}
          position={[-119.35, 11.373, 39.341]}
          scale={1.712}
        />
        <mesh
          name="paper001"
          geometry={nodes.paper001.geometry}
          material={nodes.paper001.material}
          position={[-119.334, 10.853, 57.433]}
          scale={1.712}
        />
        <mesh
          name="clay-in-process-01001"
          geometry={nodes["clay-in-process-01001"].geometry}
          material={materials.clay}
          position={[-111.997, 11.989, 16.784]}
          scale={1.712}
        />
        <mesh
          name="clay-in-process-02001"
          geometry={nodes["clay-in-process-02001"].geometry}
          material={materials.clay}
          position={[-110.34, 13.165, 21.892]}
          rotation={[-0.482, -0.017, 0.033]}
          scale={1.712}
        />
        <mesh
          name="sculpture-tool-01001"
          geometry={nodes["sculpture-tool-01001"].geometry}
          material={materials["clay-tools"]}
          position={[-111.644, 11.082, 5.476]}
          scale={2.797}
        />
        <mesh
          name="sculpture-tool-02001"
          geometry={nodes["sculpture-tool-02001"].geometry}
          material={materials["clay-tools"]}
          position={[-112.268, 11.057, 8.708]}
          rotation={[0, -1.571, 0]}
          scale={0.567}
        />
        <group
          name="analog-tv-shells"
          position={[-194.784, 0, 11.666]}
          rotation={[-Math.PI, 0.791, -Math.PI]}
        >
          <mesh
            name="Mesh006"
            geometry={nodes.Mesh006.geometry}
            material={materials["analog-tv-black-matt"]}
          />
          <mesh
            name="Mesh006_1"
            geometry={nodes.Mesh006_1.geometry}
            material={materials["cable-black"]}
          />
        </group>

        {/* 3D VISUALS TV SCREENS */}
        <mesh
          geometry={nodes["analog-tv-01-modified-square-screen001"].geometry}
          position={[-194.784, 0, 11.666]}
          rotation={[-Math.PI, 0.791, -Math.PI]}
        >
          <meshBasicMaterial map={silkySphereVideoTexture} toneMapped={false} />
        </mesh>
        <mesh
          geometry={
            nodes["analog-tv-02-modified-horizontal-screen-01001"].geometry
          }
          position={[-194.784, 0, 11.666]}
          rotation={[-Math.PI, 0.791, -Math.PI]}
        >
          <meshBasicMaterial
            map={dancingTentacleVideoTexture}
            toneMapped={false}
          />
        </mesh>
        <mesh
          geometry={
            nodes["analog-tv-03-modified-horizontal-screen001"].geometry
          }
          position={[-194.784, 0, 11.666]}
          rotation={[-Math.PI, 0.791, -Math.PI]}
        >
          <meshBasicMaterial
            map={bloomingFlowerVideoTexture}
            toneMapped={false}
          />
        </mesh>
        <mesh
          geometry={
            nodes["analog-tv-03-modified-vertical-big-screen001"].geometry
          }
          position={[-194.784, 0, 11.666]}
          rotation={[-Math.PI, 0.791, -Math.PI]}
        >
          <meshBasicMaterial
            map={beautyOfTimePassingVideoTexture}
            toneMapped={false}
          />
        </mesh>
        <mesh
          geometry={
            nodes["analog-tv-03-modified-vertical-small-screen001"].geometry
          }
          position={[-194.784, 0, 11.666]}
          rotation={[-Math.PI, 0.791, -Math.PI]}
        >
          <meshBasicMaterial
            map={squishyObjectsVideoTexture}
            toneMapped={false}
          />
        </mesh>
        <mesh
          geometry={
            nodes["analog-tv-04-modified-horizontal-screen001"].geometry
          }
          position={[-194.784, 0, 11.666]}
          rotation={[-Math.PI, 0.791, -Math.PI]}
        >
          <meshBasicMaterial
            map={sakuraPetalsVideoTexture}
            toneMapped={false}
          />
        </mesh>
        <mesh
          geometry={
            nodes["analog-tv-05-modified-horizontal-screen001"].geometry
          }
          position={[-194.784, 0, 11.666]}
          rotation={[-Math.PI, 0.791, -Math.PI]}
        >
          <meshBasicMaterial
            map={glassPoppingVideoTexture}
            toneMapped={false}
          />
        </mesh>
        <mesh
          geometry={
            nodes["analog-tv-02-modified-horizontal-screen-02001"].geometry
          }
          position={[-194.784, 0, 11.666]}
          rotation={[-Math.PI, 0.791, -Math.PI]}
        >
          <meshBasicMaterial
            map={sequenceRiverVideoTexture}
            toneMapped={false}
          />
        </mesh>

        <group
          name="sequence-river-soil001"
          position={[-156.963, 10.997, 5.021]}
          rotation={[0, 0.29, 0]}
          scale={13.422}
        >
          <mesh
            name="Cube329"
            geometry={nodes.Cube329.geometry}
            material={materials.clay}
          />
          <mesh
            name="Cube329_1"
            geometry={nodes.Cube329_1.geometry}
            material={materials.clay}
          />
        </group>
        <mesh
          name="sequence-river-water001"
          geometry={nodes["sequence-river-water001"].geometry}
          material={materials.clay}
          position={[-156.963, 15.33, 5.021]}
          rotation={[0, 0.29, 0]}
          scale={17.529}
        />
        <mesh
          name="blooming-flower001"
          geometry={nodes["blooming-flower001"].geometry}
          material={materials.clay}
          position={[-151.004, 13.152, 113.457]}
          rotation={[Math.PI / 2, 0, 0.484]}
          scale={4.661}
        />
        <mesh
          name="silky-sphere-low-planer001"
          geometry={nodes["silky-sphere-low-planer001"].geometry}
          material={materials.clay}
          position={[-139.051, 22.749, 42.957]}
          rotation={[0, 0.191, 0]}
          scale={5.537}
        />
        <group
          name="glass-popping-partial001"
          position={[-166.27, 18.923, 61.62]}
          rotation={[0, 0.34, 0]}
          scale={24.149}
        >
          <mesh
            name="Plane109"
            geometry={nodes.Plane109.geometry}
            material={materials.clay}
          />
          <mesh
            name="Plane109_1"
            geometry={nodes.Plane109_1.geometry}
            material={materials.clay}
          />
        </group>
        <mesh
          name="photo-screen001"
          geometry={nodes["photo-screen001"].geometry}
          material={nodes["photo-screen001"].material}
          position={[-168.374, 14.194, 110.86]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.835, 1.179, 0.835]}
        />
        <mesh
          name="photo-area-support001"
          geometry={nodes["photo-area-support001"].geometry}
          material={nodes["photo-area-support001"].material}
          position={[-168.374, 37.959, 110.93]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[-0.418, -24.35, -0.418]}
        />
        <mesh
          name="spotlight-01001"
          geometry={nodes["spotlight-01001"].geometry}
          material={materials["dark-grey"]}
          position={[-116.195, 1.078, 78.643]}
          rotation={[1.567, -0.001, 0.733]}
          scale={0.251}
        />
        <mesh
          name="spotlight-02001"
          geometry={nodes["spotlight-02001"].geometry}
          material={materials["dark-grey"]}
          position={[-154.369, 1.078, 148.606]}
          rotation={[1.575, -0.001, -3.076]}
          scale={0.251}
        />
        <group
          name="camera-low-poly"
          position={[-95.521, 19.483, 112.243]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.633, 0.544, 1.633]}
        >
          <mesh
            name="Cilindro001"
            geometry={nodes.Cilindro001.geometry}
            material={materials["dark-grey"]}
          />
          <mesh
            name="Cilindro001_1"
            geometry={nodes.Cilindro001_1.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Cilindro001_2"
            geometry={nodes.Cilindro001_2.geometry}
            material={materials["Material.004"]}
          />
        </group>
        <mesh
          name="tripod-low-poly001"
          geometry={nodes["tripod-low-poly001"].geometry}
          material={materials["dark-grey"]}
          position={[-91.174, 19.19, 112.227]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.017}
        />
        <mesh
          name="camera-low-poly-screen"
          geometry={nodes["camera-low-poly-screen"].geometry}
          material={materials["dark-grey"]}
          position={[-95.521, 19.483, 112.243]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1.633, 0.544, 1.633]}
        />
        <mesh
          name="room"
          geometry={nodes.room.geometry}
          material={nodes.room.material}
        />
        <mesh
          name="picture-frame"
          geometry={nodes["picture-frame"].geometry}
          material={materials["picture-frame"]}
          position={[14.09, 21.805, -44.241]}
          scale={1.902}
        />

        {/* PICTURE FRAME GLASS */}
        <mesh
          ref={pictureFrameGlass}
          position={[13, 22, -45]}
          scale={[18, 12, 1]}
          material={waterMaterial}
        >
          <planeGeometry args={[3, 3, 512, 512]} />
        </mesh>

        <mesh
          name="museum-label"
          geometry={nodes["museum-label"].geometry}
          material={materials["museum-label"]}
          position={[-22.343, 17.058, -46.621]}
          scale={[2.807, 2.807, 4.266]}
        />
        <mesh
          name="left-hand-low-poly"
          geometry={nodes["left-hand-low-poly"].geometry}
          material={materials["human-skin"]}
          position={[-22.627, 2.115, 43.112]}
          rotation={[-2.258, -1.194, -2.383]}
          scale={21.74}
        />
        <mesh
          name="right-hand-low-poly"
          geometry={nodes["right-hand-low-poly"].geometry}
          material={materials["human-skin"]}
          position={[-12.756, -0.55, 0.029]}
          rotation={[-0.463, -0.963, -0.456]}
          scale={21.74}
        />
      </group>


    </group>
  );
}

useGLTF.preload("./models/test/stage-test.glb");
