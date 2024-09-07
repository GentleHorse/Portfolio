import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Root, Text, Image, Container } from "@react-three/uikit";
import { gameStates, useGameStore } from "../../store/store";

import portalVertexShader from "../../shaders/portal/vertex.glsl";
import portalFragmentShader from "../../shaders/portal/fragment.glsl";

const PORTAL_DOOR_WIDTH = 7.0;
const PORTAL_DOOR_HEIGHT = 15.0;

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

  // Geometry
  const portalGeometry = new THREE.PlaneGeometry(1, 1);
  portalGeometry.translate(0, 0.5, 0);

  // Material - shader material
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
      <group position={[0, 5, 0]} rotation={[0, 0, 0]}>
        <Root>
          <Container flexDirection="column" gap={15} alignItems="center">
            <Text fontWeight="extra-bold" fontSize={60} color="snow">
              {text}
            </Text>
          <Image src="./images/icons/external-link.svg" width={200} marginTop={50} />
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
        scale={[PORTAL_DOOR_WIDTH, PORTAL_DOOR_HEIGHT, 1.0]}
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
        geometry={portalGeometry}
        material={portalMaterial}
      />
    </group>
  );
}
