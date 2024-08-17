import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { RigidBody } from "@react-three/rapier";
import { Root, Text, Image, Container } from "@react-three/uikit";
import { gameStates, useGameStore } from "../../store/store";

import portalVertexShader from "../../shaders/portal/vertex.glsl";
import portalFragmentShader from "../../shaders/portal/fragment.glsl";

export default function PortalArea({ redirectWatingSeconds, url, ...props }) {
  const navigate = useNavigate();

  const portalWall = useRef();

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
    uniforms: {
      uTime: new THREE.Uniform(0.0),
      uColorStart: new THREE.Uniform(new THREE.Color("#027a00")),
      uColorEnd: new THREE.Uniform(new THREE.Color("#1b9dee")),
    },
    side: THREE.DoubleSide,
    wireframe: false,
    depthWrite: false,
    transparent: true,
  });

  useFrame((state, delta) => {
    portalWall.current.material.uniforms.uTime.value += delta;
  });

  return (
    <group {...props}>
      <group position={[0, 3, 0]} rotation={[0, 0, 0]}>
        <Root>
          <Container flexDirection="column" gap={15}>
            <Text fontWeight="extra-bold" fontSize={40} color="snow">
              Go to the project page
            </Text>
          </Container>
        </Root>
      </group>

      <RigidBody
        type="fixed"
        scale={4.0}
        position={[0, 0.1, 0]}
        rotation={[-Math.PI * 0.5, 0, 0]}
        onCollisionEnter={() => {
          // Chage state from "PLAY" to "MENU"
          setGameState(gameStates.MENU);

          setTimeout(() => {
            // Exit Pointer Lock API
            document.exitPointerLock();

            navigate(url);
          }, redirectWatingSeconds * 1000);
        }}
      >
        <mesh scale={0.9}>
          <planeGeometry />
          <meshNormalMaterial transparent opacity={0.0} />
        </mesh>
      </RigidBody>

      <mesh
        ref={portalWall}
        scale={3.0}
        position={[0, 3.2, 0]}
        rotation={[0, Math.PI, 0]}
        material={portalMaterial}
      >
        <cylinderGeometry args={[1, 1, 2.5, 16, 1, true]} />
      </mesh>
    </group>
  );
}
