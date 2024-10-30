import { useEffect, useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Sphere,
  ScrollControls,
  Html,
  useProgress,
} from "@react-three/drei";
import * as THREE from "three";
import { Gradient, LayerMaterial } from "lamina";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { isMobile, isBrowser } from "react-device-detect";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";

import Header from "../components/header/Header.jsx";
import Mails from "../components/models/mail/Mails.jsx";
import LoadingScreen from "../components/loadingScreen/LoadingScreen.jsx";

const LERPED_STRENGTH = {
  X: 0.5,
  Y: 0.5,
};

let LERPED_MOUSE_MOVEMENTS = {
  X: 0,
  Y: 0,
};

export default function ContactPage() {
  const loadingScreenComponent = isBrowser ? (
    <LoadingScreen />
  ) : (
    <LoadingScreenMobile />
  );

  return (
    <>
      <Header home about works />

      <Canvas
        camera={{
          fov: 15,
          position: [0, 0, 20],
        }}
      >
        <Suspense fallback={loadingScreenComponent}>
          <ContactExperience />
        </Suspense>
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
      {/* <Environment preset="city" /> */}
      <Background />

      <EffectComposer disableNormalPass>
        <DepthOfField
          focusDistance={0.025}
          focalLength={0.025}
          bokehScale={12}
        />
      </EffectComposer>

      <Html zIndexRange={[10, 0]} center className="mt-[30vh] h-[100vh]">
        <section>
          <h1
            className={`ml-[10vw] w-[80vw] font-permanent-marker ${
              isBrowser ? "text-[120px]" : "text-[40px]"
            } text-[#ffffff]`}
          >
            Get in touch !
          </h1>
          <div className="mt-10 ml-[15vw] w-[80vw]">
            <p
              className={`mb-7 font-serif ${
                isBrowser ? "text-[60px]" : "text-[20px]"
              } text-[#ffffff]`}
            >
              toshihito.endo@gmail.com
            </p>
            <div className="flex gap-5">
              <a href="https://www.instagram.com/toshihitoendo/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={`font-roboto mt-[20px] mr-[10px] mb-[5px] ${
                    isBrowser ? "text-[80px]" : "text-[40px]"
                  } text-[#FFFFFF]`}
                />
              </a>

              <a href="https://github.com/GentleHorse" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`font-roboto mt-[20px] mr-[10px] mb-[5px] ${
                    isBrowser ? "text-[80px]" : "text-[40px]"
                  } text-[#FFFFFF]`}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/toshihito-endo-a68a82172/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={`font-roboto mt-[20px] mr-[10px] mb-[5px] ${
                    isBrowser ? "text-[80px]" : "text-[40px]"
                  } text-[#FFFFFF]`}
                />
              </a>

              <a href="https://x.com/toshihito_endo" target="_blank">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className={`font-roboto mt-[20px] mr-[10px] mb-[5px] ${
                    isBrowser ? "text-[80px]" : "text-[40px]"
                  } text-[#FFFFFF]`}
                />
              </a>
            </div>
          </div>
        </section>
      </Html>

      <group ref={mails}>
        <Mails />
      </group>
    </>
  );
}

function Background() {
  return (
    <>
      <Sphere scale={[50, 50, 50]} rotation={[0, Math.PI / 2, 0]}>
        <LayerMaterial color="#ffffff" side={THREE.BackSide}>
          <Gradient
            colorA={"#1C1C1C"}
            colorB={"#91989F"}
            axes="y"
            start={0.2}
            end={-0.5}
          />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256} frames={Infinity}>
        <Sphere scale={[10, 10, 10]} rotation={[Math.PI, Math.PI / 2, 0]}>
          <LayerMaterial color="#ffffff" side={THREE.BackSide}>
            <Gradient
              colorA={"#C1C1C1"}
              colorB={"#1C1C1C"}
              axes="y"
              start={0.2}
              end={-0.5}
            />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  );
}

function LoadingScreenMobile() {
  const { active, progress, errors, item, loaded, total } = useProgress();

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
