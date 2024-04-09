import React, { useRef } from "react";
import {
  useGLTF,
  useAnimations,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  MeshWobbleMaterial,
  Outlines,
} from "@react-three/drei";
import { SkinnedMesh } from "three";

export default function MangaStyleMan(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./models/manga-style-man/manga-style-man.gltf"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="manga-style-man"
          position={[0, -0.6, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.003}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="manga-style-man001"
            geometry={nodes["manga-style-man001"].geometry}
            // material={nodes["manga-style-man001"].material}
            skeleton={nodes["manga-style-man001"].skeleton}
          >
            <meshBasicMaterial color="snow" />
            {/* <MeshDistortMaterial distort={0.15} speed={5} /> */}
            {/* <MeshWobbleMaterial factor={0.15} speed={5} /> */}
            <Outlines thickness={10} />
          </skinnedMesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/manga-style-man/manga-style-man.gltf");
