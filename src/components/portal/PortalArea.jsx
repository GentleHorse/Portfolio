import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Root, Text, Image, Container } from "@react-three/uikit";
import { gameStates, useGameStore } from "../../store/store";

import portalVertexShader from "../../shaders/portal/vertex.glsl";
import portalFragmentShader from "../../shaders/portal/fragment.glsl";

export default function PortalArea({
  redirectWatingSeconds,
  url,
  text = "Visit Project Page",
  ...props
}) {
  const navigate = useNavigate();

  /**
   * GAME STORE
   */
  const { gameState, setGameState } = useGameStore((state) => ({
    gameState: state.gameState,
    setGameState: state.setGameState,
  }));

  // Shader material - portal material
  const portalMaterial = new THREE.ShaderMaterial({
    vertexShader: portalVertexShader,
    fragmentShader: portalFragmentShader,
    side: THREE.DoubleSide,
    wireframe: false,
    depthWrite: false,
    transparent: true,
  });

  return (
    <group {...props}>
      <group position={[0, 3, 0]} rotation={[0, 0, 0]}>
        <Root>
          <Container flexDirection="column" gap={15}>
            <Text fontWeight="extra-bold" fontSize={50} color="snow">
              {text}
            </Text>
          </Container>
        </Root>
      </group>

      <RigidBody
        type="fixed"
        scale={1.0}
        position={[0, 0.1, 0]}
        // rotation={[-Math.PI * 0.5, 0, 0]}
        colliders={false}
        onIntersectionEnter={() => {
          // Chage state from "PLAY" to "MENU"
          setGameState(gameStates.MENU);

          setTimeout(() => {
            // Exit Pointer Lock API
            document.exitPointerLock();

            navigate(url);
          }, redirectWatingSeconds * 1000);
        }}
      >
        <CuboidCollider args={[2.5, 1.5, 2.5]} sensor />
      </RigidBody>

      <mesh
        scale={5.0}
        position={[0, 3.2, 0]}
        rotation={[0, Math.PI, 0]}
        material={portalMaterial}
      >
        <cylinderGeometry args={[1, 0.5, 1.5, 16, 1, true]} />
      </mesh>
    </group>
  );
}
