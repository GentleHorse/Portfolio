import { useNavigate } from "react-router-dom";
import { RigidBody } from "@react-three/rapier";
import { gameStates, useGameStore } from "../../store/store";

export default function CollisionEnterJumpPageArea({
  redirectWatingSeconds,
  url,
}) {
  const navigate = useNavigate();

  /**
   * GAME STORE
   */
  const { gameState, setGameState } = useGameStore((state) => ({
    gameState: state.gameState,
    setGameState: state.setGameState,
  }));

  console.log(gameState);

  return (
    <>
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
          <meshNormalMaterial />
        </mesh>
      </RigidBody>
    </>
  );
}
