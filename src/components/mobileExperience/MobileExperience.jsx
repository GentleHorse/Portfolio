import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress, Html } from "@react-three/drei";
import { gameStates, useGameStore } from "../../store/store.js";
import MobileScene from "./MobileScene.jsx";
import Header from "../header/Header.jsx";
import Modal from "../UI/Modal.jsx";
import gsap from "gsap";

import tiltIcon from "../../../public/images/icons/tilt.svg";

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
    let beta = (event.beta + 180) / 360; // x-axis 0 ~ 360 ---> 0 ~ 1
    let gamma = (event.gamma + 90) / 180; // y-axis 0 ~ 180 ---> 0 ~ 1

    setMobileOrientation({
      alpha,
      beta,
      gamma,
    });
  }

  /**
   * TILT ICON ROTATION
   */
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    if (document.querySelector("#tilt-icon") !== null) {
      tl.to("#tilt-icon", {
        rotation: -20,
        transformOrigin: "right",
        ease: "none",
        duration: 1,
      });
      tl.to("#tilt-icon", {
        rotation: 0,
        transformOrigin: "right",
        ease: "none",
        duration: 1,
      });
    }
  }, [gameState]);

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
              <p className="m-6 text-2xl text-stone-300 font-permanent-marker">
                Get tired of clicking, scrolling?
              </p>
              <p className="m-6 text-2xl text-stone-300 font-permanent-marker">
                Then, let's pause for a while!
              </p>
            </div>

            <button
              className="px-5 py-5 mb-10 flex items-center w-[250px] h-[150px] rounded-full bg-[#09090985] text-slate-50 uppercase font-serif font-extrabold text-2xl"
              onClick={() => {
                requestDeviceOrientation();
                setIsModalOpen(false);
              }}
            >
              <img src={tiltIcon} id="tilt-icon" className="mx-4 w-20 h-20" />
              <p>T i l t ?</p>
            </button>
          </section>
        </Modal>
      )}

      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 10],
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
   * WHEN THE COMP DESTROYED, CHANGE STATE & CALL REQUEST ORIENTATION
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
