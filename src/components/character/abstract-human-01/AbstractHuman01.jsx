import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkinnedMesh } from "three";

export function AbstractHuman01(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./models/abstract-human-01/abstract-human-01.gltf"
  );
  const { actions } = useAnimations(animations, group);

  console.log(actions)

  useEffect(() => {
    actions.WalkAnimation.play();
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="lowpoly-male-abstraction-01002"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="lowpoly-male-abstraction-01001"
            geometry={nodes["lowpoly-male-abstraction-01001"].geometry}
            // material={materials["Material.003"]}
            skeleton={nodes["lowpoly-male-abstraction-01001"].skeleton}
          >
            <meshNormalMaterial />
          </skinnedMesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/abstract-human-01/abstract-human-01.gltf");
