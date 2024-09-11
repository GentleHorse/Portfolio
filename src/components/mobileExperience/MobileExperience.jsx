import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import MobileScene from "./MobileScene.jsx";
import Header from "../header/Header.jsx";

export default function MobileExperience() {
  // THE USER START EXPERIENCING STATE
  const [isExperiencing, setIsExperiencing] = useState(false);

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
    let beta = event.beta / 180; // x-axis -180 ~ 180 ---> -1 ~ 1
    let gamma = event.gamma / 90; // y-axis -90 ~ 90 ---> -1 ~ 1

    setMobileOrientation({
      alpha,
      beta,
      gamma,
    });
  }

  return (
    <>
      <section className="fixed z-30 w-[100vw] h-[100vh]">
        <Header about works contact />

        <div className="w-[80vw] h-full flex flex-col justify-center">
          <p className="ml-5 text-stone-300">
            Opps, you seem to visit with a small screen resolution device ....
          </p>
          <p className="ml-5 text-stone-300">
            Please try on a device with a higher screen resolution to enjoy full
            experience!
          </p>

          <button
            className="mt-10 bg-stone-300"
            onClick={() => {
              requestDeviceOrientation();
              setIsExperiencing(true);
            }}
          >
            Test initiating the device control
          </button>
        </div>
      </section>

      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 1.5, 8],
        }}
      >
        <MobileScene
          isExperiencing={isExperiencing}
          mobileOrientation={mobileOrientation}
        />
      </Canvas>
    </>
  );
}
