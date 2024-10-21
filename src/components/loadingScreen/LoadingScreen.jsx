import { Suspense, useEffect } from "react";
import { gameStates, useGameStore } from "../../store/store.js";
import { useProgress, Html} from "@react-three/drei";

export default function LoadingScreen(props) {
  const { active, progress, errors, item, loaded, total } = useProgress();

  /**
   * GAME STORE
   */
  const { gameState, setGameState } = useGameStore((state) => ({
    gameState: state.gameState,
    setGameState: state.setGameState,
  }));

  /**
   * SHOW MANU AFTER THE COMPONENT IS DESTROYED
   */
  useEffect(() => {
    return () => {
      setGameState(gameStates.MENU);
    };
  }, []);

  return (
    <>
      <Html
        center
        className="w-[100vw] h-[100vh] bg-[#050505] flex flex-col items-end justify-end"
      >
        <div>
          <p className="w-full h-full bottom-0 right-0 m-4 text-[#C1C1C1] text-[170px] font-pinyon-script">
            {progress.toFixed(2)} %
          </p>
        </div>
      </Html>
    </>
  );
}
