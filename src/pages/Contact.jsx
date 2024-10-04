import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import Header from "../components/header/Header.jsx";
import Mails from "../components/models/mail/Mails.jsx";

const LERPED_STRENGTH = {
  X: 0.5,
  Y: 0.5,
};

let LERPED_MOUSE_MOVEMENTS = {
  X: 0,
  Y: 0,
};

export default function ContactPage() {
  return (
    <>
      <Header home about works />

      <Canvas
        camera={{
          fov: 15,
          position: [0, 0, 20],
        }}
      >
        <ContactExperience />
      </Canvas>
    </>
  );
}

function ContactExperience() {
  /**
   * MOUSE POINTER MOVE SETTING
   */
  const mouse = new THREE.Vector2();

  useEffect(() => {
    window.addEventListener("pointermove", (event) => {
      if (event.isPrimary === false) return;

      // Scale half window side into 1% for mouse movements
      mouse.x = (event.clientX - window.innerWidth / 2) * 0.02;
      mouse.y = (event.clientY - window.innerHeight / 2) * 0.02;
    });
  }, []);

  /**
   * MAILS ROTATE ANIMATION
   */
  const mails = useRef();

  // lerp function
  function lerp(a, b, alpha) {
    return a + alpha * (b - a);
  }

  useFrame((state, delta) => {
    LERPED_MOUSE_MOVEMENTS.X = lerp(
      LERPED_MOUSE_MOVEMENTS.X,
      mouse.x * 0.03,
      LERPED_STRENGTH.X * delta
    );
    LERPED_MOUSE_MOVEMENTS.Y = lerp(
      LERPED_MOUSE_MOVEMENTS.Y,
      mouse.y * 0.03,
      LERPED_STRENGTH.Y * delta
    );

    mails.current.rotation.x = LERPED_MOUSE_MOVEMENTS.Y;
    mails.current.rotation.y = LERPED_MOUSE_MOVEMENTS.X;
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <Environment preset="city" />

      <group ref={mails}>
        <Mails />
      </group>
    </>
  );
}
