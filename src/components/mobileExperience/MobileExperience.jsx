import { Canvas } from "@react-three/fiber";
import MobileScene from "./MobileScene.jsx";
import Header from "../header/Header.jsx";

export default function MobileExperience() {
  return (
    <>
      <section className="fixed z-50 w-[100vw] h-[100vh]">
        <Header about works contact />

        <div className="w-[80vw] h-full flex flex-col justify-center">
          <p className="ml-5 text-stone-300">
            Opps, you seem to visit with a small screen resolution device ....
          </p>
          <p className="ml-5 text-stone-300">
            Please try on a device with a higher screen resolution to enjoy full
            experience!
          </p>
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
        <MobileScene />
      </Canvas>
    </>
  );
}
