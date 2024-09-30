import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress, Html } from "@react-three/drei";
import { gameStates, useGameStore } from "../../store/store.js";
import MobileScene from "./MobileScene.jsx";
import Header from "../header/Header.jsx";
import Modal from "../UI/Modal.jsx";

export default function MobileExperience() {
  /**
   * GAME STORE
   */
  const { gameState } = useGameStore((state) => ({
    gameState: state.gameState,
  }));

  /**
   * MODAL STATE
   */
  const [isModalOpen, setIsModalOpen] = useState(true);

  /**
   * MOBILE CONTROL - SETUP
   */
  // THE DEVICE ORIENTATION STATE
  const [mobileOrientation, setMobileOrientation] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  // THE DEVICE ORIENTATION INITIATE FUNCTION
  async function requestDeviceOrientation() {
    if (
      typeof DeviceOrientationEvent != "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      // iOS 13+
      try {
        const permissionState =
          await DeviceOrientationEvent.requestPermission();

        if (permissionState === "granted") {
          window.addEventListener("deviceorientation", handleOrientation);
        }
      } catch (error) {
        console.log(error);
      }
    } else if ("DeviceOrientationEvent" in window) {
      // not iOS 13+
      window.addEventListener("deviceorientation", handleOrientation);
    } else {
      // device orientation is not supported
      alert("not supported");
    }
  }

  function handleOrientation(event) {
    let alpha = event.alpha; // z-axis 0 ~ 360
    let beta = (event.beta - 45) / 180; // x-axis -180 ~ 180 ---> -1 ~ 1
    let gamma = event.gamma / 90; // y-axis -90 ~ 90 ---> -1 ~ 1

    setMobileOrientation({
      alpha,
      beta,
      gamma,
    });
  }

  return (
    <>
      {/* HEADER */}
      <Header about works contact />

      {/* MOBILE MENU MODAL */}
      {gameState !== gameStates.LOADING && (
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          className="w-[90vw] h-[80vh] overflow-hidden rounded-2xl backdrop-blur-md bg-[#C1C1C1]/15"
        >
          <section className="w-full h-full flex flex-col items-center justify-evenly">
            <div>
              <p className="mt-3 text-xl text-stone-300">
                Get tired of touching, scrolling?
              </p>
              <p className="mt-3 text-xl text-stone-300">Let be lazy and "tilt"!</p>
            </div>

            <button
              className="px-5 py-5 mb-10 flex justify-evenly items-center w-[250px] h-1/5 rounded-full bg-[#09090985] text-slate-50 uppercase font-serif font-extrabold text-3xl"
              onClick={() => {
                requestDeviceOrientation();
                setIsModalOpen(false);
              }}
            >
              <p>T i l t</p>
              <img
                src="./images/icons/play-triangle.svg"
                className="w-[50px]"
              />
            </button>
          </section>
        </Modal>
      )}

      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 1.5, 8],
        }}
      >
        <Suspense fallback={<LoadingScreenMobile />}>
          <MobileScene mobileOrientation={mobileOrientation} />
        </Suspense>
      </Canvas>
    </>
  );
}

function LoadingScreenMobile() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  const { setGameState } = useGameStore((state) => ({
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
    <Html
      center
      className="w-[100vw] h-[100vh] bg-[#050505] flex flex-col items-end justify-end"
    >
      <div>
        <p className="w-full h-full bottom-0 right-0 m-4 text-[#C1C1C1] text-[80px] font-pinyon-script">
          {progress.toFixed(0)} %
        </p>
      </div>
    </Html>
  );
}
