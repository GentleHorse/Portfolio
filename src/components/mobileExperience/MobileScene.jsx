import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";

export default function MobileScene() {
  const cube = useRef();

  /**
   * Test - rotate animation
   */
  // useFrame((state, delta) => {
  //   cube.current.rotation.x += delta * 0.2;
  //   cube.current.rotation.y += delta * 0.3;
  //   cube.current.rotation.z += delta * 0.4;
  // });

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

  // CALL THE DEVICE ORIENTATION INITIATE FUNCTION
  useEffect(() => {
    requestDeviceOrientation();
  }, []);

  // FOR DEBUGGING
  useFrame(() => {
    if (mobileOrientation) {
      console.log(mobileOrientation);
    }
  });

  /**
   * MOBILE CONTROL - PLAYING LOGIC
   */
  useFrame(() => {
    if (mobileOrientation) {
      cube.current.rotation.x = mobileOrientation.beta * Math.PI * 2;
      cube.current.rotation.y = mobileOrientation.gamma * Math.PI;
      
    }
  });

  return (
    <>
      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      <axesHelper args={[0.8]} />

      <mesh ref={cube}>
        <boxGeometry />
        <meshNormalMaterial wireframe={false} />
      </mesh>
    </>
  );
}
