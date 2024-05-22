import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import {
  useGLTF,
  useAnimations,
  MeshDistortMaterial,
  Outlines,
} from "@react-three/drei";
import { useGameStore } from "../../../store/store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Joe({ isCharacterFaceForward }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/joe/joe.gltf");

  /**
   * ANIMATIONS
   *
   * * Idle, Walk, Run, Jump_Start, Jump_Idle, Jump_Land, Climbing
   * * Attack, Cheer, Dance, Wave
   *
   */
  const { actions } = useAnimations(animations, group);

  // Import the character state
  const characterState = useGameStore((state) => state.characterState);

  // Switch character animations
  // Several animations should play once
  useEffect(() => {
    if (
      characterState === "Jump_Start" ||
      characterState === "Jump_Land" ||
      characterState === "Attack" ||
      characterState === "Cheer" ||
      characterState === "Dance" ||
      characterState === "Wave"
    ) {
      actions[characterState]
        .reset()
        .fadeIn(0.2)
        .setLoop(THREE.LoopOnce, undefined)
        .play();
      actions[characterState].clampWhenFinished = true;
    } else {
      actions[characterState].reset().fadeIn(0.2).play();
      actions[characterState].setEffectiveTimeScale(1.5); // animation speed
    }

    return () => {
      actions[characterState].fadeOut(2);
      actions[characterState].stop();
    };
  }, [characterState]);

  /**
   * ROTATIONS
   */
  useGSAP(() => {
    if (isCharacterFaceForward) {
      // Right
      gsap.to(group.current.rotation, {
        y: Math.PI * 0.5,
        duration: 0.4,
        ease: "expo.inOut",
      });
    } else {
      // Left
      gsap.to(group.current.rotation, {
        y: Math.PI * -0.5,
        duration: 0.4,
        ease: "expo.inOut",
      });
    }
  }, [isCharacterFaceForward]);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group
          name="joeLowPoly"
          position={[0, -0.6, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.0075}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="joe001"
            geometry={nodes.joe001.geometry}
            material={nodes.joe001.material}
            skeleton={nodes.joe001.skeleton}
          >
            <meshBasicMaterial color="snow" />
          </skinnedMesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/joe/joe.gltf");
