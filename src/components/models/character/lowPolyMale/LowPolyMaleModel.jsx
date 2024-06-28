import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useGameStore } from "../../../../store/store.js";

export default function LowPolyMaleModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/low-poly-male/low-poly-male.glb"
  );

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
      actions[characterState].reset().play();
      actions[characterState].setEffectiveTimeScale(1.5); // animation speed
    }

    return () => {
      if (actions[characterState]) {
        actions[characterState].fadeOut(2);
        actions[characterState].stop();
      }
    };
  }, [characterState]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="low-poly-male-full"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="low-poly-male003"
            geometry={nodes["low-poly-male003"].geometry}
            material={materials["low-poly-male.001"]}
            skeleton={nodes["low-poly-male003"].skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/low-poly-male/low-poly-male.glb");
