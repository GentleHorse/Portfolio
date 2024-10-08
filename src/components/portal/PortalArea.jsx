import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Root, Text, Image, Container } from "@react-three/uikit";
import { gameStates, useGameStore } from "../../store/store";
import { Image as DreiImage } from "@react-three/drei";

import PortalGate from "../models/portal-gate/PortalGate.jsx";

import portalVertexShader from "../../shaders/portal/vertex.glsl";
import portalFragmentShader from "../../shaders/portal/fragment.glsl";

const PORTAL_DOOR_WIDTH = 7.0;
const PORTAL_DOOR_HEIGHT = 15.0;

export default function PortalArea({
  redirectWatingSeconds,
  url,
  projectUrl,
  text = "Visit Project Page",
  ...props
}) {
  const navigate = useNavigate();

  /**
   * HANDLER - REDIRECT TO ANOTHER PAGE
   */
  const redirectHandler = () => {
    // Chage state from "PLAY" to "MENU"
    setGameState(gameStates.MENU);

    setTimeout(() => {
      // Exit Pointer Lock API
      document.exitPointerLock();

      navigate(url);
    }, redirectWatingSeconds * 1000);
  };

  /**
   * GAME STORE
   */
  const { gameState, setGameState } = useGameStore((state) => ({
    gameState: state.gameState,
    setGameState: state.setGameState,
  }));

  /**
   * GEOMETRY
   */
  const portalGeometry = new THREE.PlaneGeometry(1, 1);
  portalGeometry.translate(0, 0.5, 0);

  /**
   * MATERIAL - SHADER MATERIAL
   */
  const portalMaterial = new THREE.ShaderMaterial({
    vertexShader: portalVertexShader,
    fragmentShader: portalFragmentShader,
    side: THREE.DoubleSide,
    wireframe: false,
    depthWrite: false,
    transparent: true,
  });

  return (
    <>
      <group {...props}>
        {/* TEXT */}
        <group position={[0, 5, 0]} rotation={[0, 0, 0]}>
          <Root>
            <Container flexDirection="column" gap={15} alignItems="center">
              <Text fontWeight="extra-bold" fontSize={60} color="snow">
                {text}
              </Text>
              <Image
                src="./images/icons/external-link.svg"
                width={200}
                marginTop={50}
              />
            </Container>
          </Root>
        </group>
        <group position={[0, 1.0, 3.5]} rotation={[-Math.PI * 0.5, 0, 0]}>
          <Root>
            <Container flexDirection="column" gap={15} alignItems="center">
              <Image
                src="./images/icons/white-triangle.svg"
                width={400}
                marginTop={0}
              />
              <Text fontWeight="extra-bold" fontSize={80} color="snow">
                ENTER
              </Text>
            </Container>
          </Root>
        </group>

        {/* GATE MESHES */}
        <mesh
          scale={[PORTAL_DOOR_WIDTH, PORTAL_DOOR_HEIGHT, 1.0]}
          position={[0, 0, 0]}
          rotation={[0, Math.PI, 0]}
          geometry={portalGeometry}
          material={portalMaterial}
        />
        {!!projectUrl && (
          <DreiImage
            url={projectUrl}
            position={[0, 4.5, -0.5]}
            scale={[PORTAL_DOOR_WIDTH * 0.995, PORTAL_DOOR_HEIGHT * 0.7, 1]}
            toneMapped={false}
            opacity={0.4}
            transparent={true}
          />
        )}

        <PortalGate scale={[5.5, 5.0, 10.0]} position={[0, 0, -0.25]} />

        {/* COLLISION BODY */}
        <RigidBody
          type="fixed"
          scale={[1.0, 5.0, 1.0]}
          position={[0, 0.1, 0]}
          // rotation={[-Math.PI * 0.5, 0, 0]}
          colliders={false}
          onIntersectionEnter={redirectHandler}
        >
          <CuboidCollider args={[3.0, 1.5, 1.0]} sensor />
        </RigidBody>
      </group>
    </>
  );
}
