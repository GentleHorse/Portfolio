import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, Outlines } from "@react-three/drei";


export default function FourthDimensionalBeing(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./models/fourth-dimensional-being/fourth-dimensional-being.gltf"
  );

  // Idle, Walk, Run, Jump_Start, Jump_Idle, Jump_Land, Climbing, Dance
  const { actions } = useAnimations(animations, group);

  // Animations
  // useEffect(() => {
  //   // Test
  //   actions.Idle.play();
  //   // actions.Walk.play();
  //   // actions.Run.play();
  //   // actions.Jump_Start.play();
  //   // actions.Jump_Idle.play();
  //   // actions.Jump_Land.play();
  //   // actions.Climbing.play();
  //   // actions.Dance.play();
  // }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="FourthDimensionalBeing"
          position={[0, -0.9, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0007}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="lowpoly-male-abstraction-01001"
            geometry={nodes["lowpoly-male-abstraction-01001"].geometry}
            // material={materials.Material}
            skeleton={nodes["lowpoly-male-abstraction-01001"].skeleton}
          >
            <meshStandardMaterial color="silver" metalness={0.7} roughness={0.05} />
          </skinnedMesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  "./models/fourth-dimensional-being/fourth-dimensional-being.gltf"
);
