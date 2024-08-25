import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { isBrowser, isMobile } from "react-device-detect";
import Menu from "../components/menu/Menu.jsx";
import Experience from "../Experience.jsx";
import MobileExperience from "../components/mobileExperience/MobileExperience.jsx";
import HowToControl from "../components/UI/HowToControl.jsx";
import { useGameStore } from "../store/store.js";

export default function HomePage() {
  /**
   * GAME STORE
   */
  const { gameState } = useGameStore((state) => ({
    gameState: state.gameState,
  }));

  return (
    <>
      {isMobile && <MobileExperience />}

      {isBrowser && (
        <>
          {/* The menu for the player control */}
          {/* <Menu /> */}

          {/* Instruction of how to control the player */}
          {gameState === "PLAY" && <HowToControl />}

          <Leva collapsed={true} />
          <Canvas
            camera={{
              fov: 60,
              near: 0.1,
              far: 200,
              position: [0, 1.5, 8],
            }}
          >
            <Experience />
          </Canvas>
        </>
      )}
    </>
  );
}
