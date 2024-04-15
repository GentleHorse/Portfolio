import React, { useRef, useEffect } from "react";
import {
  useGLTF,
  useAnimations,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  Outlines,
} from "@react-three/drei";
import { useGameStore } from "../../../store/store";

export default function MangaStyleMan(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./models/manga-style-man/manga-style-man.gltf"
  );

  // Animations: Idle, Walk, Run, Jump_Start, Jump_Idle, Jump_Land
  const { actions } = useAnimations(animations, group);

  // Import the character state
  const characterState = useGameStore((state) => state.characterState);

  // Switch character animations
  useEffect(() => {
    actions[characterState].reset().fadeIn(0.01).play();

    return () => {
      actions[characterState].fadeOut(0.1);
      actions[characterState].stop();
    }

  }, [characterState])


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
            castShadow
          >
            <meshStandardMaterial color="snow" />
            {/* <MeshDistortMaterial distort={0.5} speed={5} /> */}
            <Outlines thickness={10} />
          </skinnedMesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/manga-style-man/manga-style-man.gltf");
