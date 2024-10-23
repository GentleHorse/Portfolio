import { Suspense, useEffect, useRef } from "react";
import { gameStates, useGameStore } from "../../store/store.js";
import { useProgress, Html, Environment } from "@react-three/drei";

import LoadingRing from "../models/loadingRing/LoadingRing.jsx";
import SilkySphere from "../models/silky-sphere/SilkySphere.jsx";
import { useFrame } from "@react-three/fiber";

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

  /**
   * Loading rotation animation
   */
  const loadingRing01 = useRef();
  const loadingRing02 = useRef();
  const loadingRing03 = useRef();
  const glassSphere = useRef();
  
  useFrame((state, delta) => {
    loadingRing01.current.rotation.x = state.clock.getElapsedTime() * -0.3;
    loadingRing01.current.rotation.z = state.clock.getElapsedTime() * -0.4;

    loadingRing02.current.rotation.x = state.clock.getElapsedTime() * 0.4;
    loadingRing02.current.rotation.y = state.clock.getElapsedTime() * -0.5;
    loadingRing02.current.rotation.z = state.clock.getElapsedTime() * 0.3;

    loadingRing03.current.rotation.x = state.clock.getElapsedTime() * -0.2;
    loadingRing03.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    loadingRing03.current.rotation.z = state.clock.getElapsedTime() * -0.3;

    glassSphere.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    glassSphere.current.rotation.x = state.clock.getElapsedTime() * -0.55;
  })

  return (
    <>
      <Environment
        background={false}
        files={"./textures/envMap/kloppenheim_07_puresky_1k_small.hdr"}
      />

      <group scale={2.0}>
        <group ref={loadingRing01}>
          <LoadingRing />
        </group>

        <group ref={loadingRing02} scale={1.2}>
          <LoadingRing />
        </group>

        <group ref={loadingRing03} scale={1.4}>
          <LoadingRing />
        </group>

        <group ref={glassSphere} scale={0.75}>
          <SilkySphere />
        </group>
      </group>

      <Html center className="w-[100vw] h-[100vh]">
        <div className="w-full h-full flex flex-col items-end justify-end">
          <p className="bottom-0 right-0 m-4 text-[#C1C1C1] text-[170px] font-pinyon-script">
            {progress.toFixed(2)} %
          </p>
        </div>
      </Html>
    </>
  );
}
