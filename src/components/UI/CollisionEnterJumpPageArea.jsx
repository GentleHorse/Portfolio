import { useNavigate } from "react-router-dom";
import { RigidBody } from "@react-three/rapier";
import { Root, Text, Image, Container } from "@react-three/uikit";
import { gameStates, useGameStore } from "../../store/store";

export default function CollisionEnterJumpPageArea({
  redirectWatingSeconds,
  url,
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

  return (
    <group {...props}>

      <group position={[0, 3, 0]} rotation={[0, 0, 0]}>
        <Root>
          <Container flexDirection="column" gap={15}>
            <Text fontWeight="extra-bold" fontSize={40} color="crimson">
              Go to the project page
            </Text>
          </Container>
        </Root>
      </group>

      <mesh scale={[4.0, 6.0, 1.0]} position={[0, 3.1, 0]}>
        <boxGeometry />
        <meshBasicMaterial color="#E8B647" wireframe />
      </mesh>

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
        <mesh>
          <planeGeometry />
          <meshBasicMaterial color="crimson" />
        </mesh>
      </RigidBody>
    </group>
  );
}
