import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Scroll,
  ScrollControls,
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { isBrowser } from "react-device-detect";
import { useNavigate } from "react-router-dom";

import Header from "../components/header/Header.jsx";
import MaleHead from "../components/models/maleHead/MaleHead.jsx";
import LoadingScreen from "../components/loadingScreen/LoadingScreen.jsx";

/**
 * INITIAL PARAM VALUES
 */
const SCROLL_PAGES = 6;
const SCROLL_DAMPING = 0.35;
const SCROLL_DISTANCE = 0.5;
const CAMERA_FOV = isBrowser ? 15 : 40;
const CAMERA_POSITION = isBrowser ? [0, 0, 20] : [0, 0, 8];
const HEAD_POSITION = isBrowser ? [1.2, -3, 0] : [0.7, -3.5, 0.2];
const MALEHEAD_ROTATION = isBrowser
  ? [0, 0, 0]
  : [0, -Math.PI * 0.1, Math.PI * 0.025];

export default function AboutPage() {
  /**
   * LOADING SCREEN
   */
  const loadingScreenComponent = isBrowser ? (
    <LoadingScreen />
  ) : (
    <LoadingScreenMobile />
  );

  /**
   * NAVIGATE
   */
  const navigate = useNavigate();

  return (
    <>
      <Header home works contact />

      <Canvas camera={{ position: CAMERA_POSITION, fov: CAMERA_FOV }}>
        <Suspense fallback={loadingScreenComponent}>
          <ScrollControls
            pages={SCROLL_PAGES}
            damping={SCROLL_DAMPING}
            distance={SCROLL_DISTANCE}
          >
            {/* Canvas contents in here will *not* scroll, but receive useScroll! */}

            <group rotation={MALEHEAD_ROTATION}>
              <MaleHead
                scale={0.47}
                position={HEAD_POSITION}
                rotation={[Math.PI * -0.1, Math.PI * 0.1, 0]}
              />
            </group>

            {/* <OrbitControls /> */}

            <Environment preset="city" />

            <Scroll>{/* Canvas contents in here will scroll along */}</Scroll>

            <Scroll html>
              {/* DOM contents in here will scroll along */}

              {/* --- PAGE 01 --------------------------------------- */}
              <section className="h-[100vh]">
                <h1 className="h-full mt-[50vh] ml-10 xl:ml-20 font-serif text-[80px] xl:text-[120px] text-[#ffffff]">
                  Hello, <br />
                  it's Me, Toshi !
                </h1>
              </section>

              {/* --- PAGE 02 --------------------------------------- */}
              <section className="h-[100vh] w-[100vw] xl:w-[60vw]">
                <article className="py-[5%] px-[6%] xl:px-[12%]">
                  <h1 className="mb-10 font-serif text-[30px] xl:text-[40px] text-[#ffffff]">
                    Designer with developer’s perspective <br />
                    Developer with designer’s experience
                  </h1>

                  <p className="font-light text-[20px] xl:text-[25px] text-[#ffffff]">
                    I was born and raised in Japan. I pursued my passion for
                    design at Design Academy Eindhoven in the Netherlands
                    studying product and 3D design, and through my graduation
                    project,{" "}
                    <a
                      className="font-bold hover:cursor-pointer"
                      onClick={() => navigate("/beauty-of-time-passing")}
                    >
                      "Beauty of Time Passing"
                    </a>
                    , I discovered my interest in web development. This journey
                    led me to further explore the digital realm. In 2024, I
                    participated in the OBJECT Rotterdam exhibition as a
                    designer, where I created a{" "}
                    <a
                      className="font-bold hover:cursor-pointer"
                      onClick={() => navigate("/object-rotterdam-2024")}
                    >
                      "3D interactive tool"
                    </a>{" "}
                    for fellow designers sharing the space. This experience
                    transformed my perspective, blending my design expertise
                    with web development, and opened up new possibilities for me
                    as both a designer and developer.
                  </p>
                </article>
              </section>

              {/* --- PAGE 03 --------------------------------------- */}
              <section className="h-[100vh] w-[100vw] xl:w-[60vw]">
                <article className="py-[5%] px-[6%] xl:px-[12%]">
                  <h1 className="mb-10 font-serif text-[30px] xl:text-[40px] text-[#ffffff]">
                    Design to stimulate curiosity
                  </h1>

                  <p className="font-light text-[20px] xl:text-[25px] text-[#ffffff]">
                    Before moving to the Netherlands to study design, I gained
                    several years of experience in Japan’s finance and
                    accounting industry. Analysing costs and expenses with
                    curiosity was essential in producing insightful financial
                    reports. This same approach still guides me in my design
                    work today. I believe that curiosity is fundamental to
                    design, helping to create products and services that
                    genuinely connect with users. By stimulating curiosity,
                    designers can invite people into deeper engagement,
                    transforming ordinary interactions into more meaningful
                    experiences that resonate on both emotional and practical
                    levels.
                  </p>
                </article>
              </section>

              {/* --- PAGE 04 --------------------------------------- */}
              <section className="h-[100vh] w-[100vw] xl:w-[60vw]">
                <article className="py-[5%] px-[6%] xl:px-[12%]">
                  <h1 className="mb-10 font-serif text-[30px] xl:text-[40px] text-[#ffffff]">
                    Gratifying interactions like physical products
                  </h1>

                  <p className="font-light text-[20px] xl:text-[25px] text-[#ffffff]">
                    Most of my design work centres on creating interactions that
                    evoke emotions and shift perspectives in meaningful ways.
                    These interactions frequently occur in physical spaces,
                    where attention to subtle details can greatly enhance the
                    overall experience. When working on digital products, I stay
                    true to my design approach, ensuring that even the smallest
                    yet significant elements are not overlooked. By focusing on
                    these details, I aim to create digital experiences that feel
                    as gratifying and emotionally rich as those in the physical
                    world, maintaining a high level of engagement and
                    connection.
                  </p>
                </article>
              </section>

              {/* --- PAGE 05 --------------------------------------- */}
              <section className="h-[100vh] w-[100vw] xl:w-[60vw]">
                <article className="py-[5%] px-[6%] xl:px-[12%]">
                  <h1 className="mb-10 font-serif text-[30px] xl:text-[40px] text-[#ffffff]">
                    Skills
                  </h1>

                  <div className="flex flex-col">
                    <div className="mb-4 flex flex-row">
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        Blender
                      </p>
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        Houdini
                      </p>
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        Unreal Engine 5
                      </p>
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        Rhinoceros 3d
                      </p>
                    </div>

                    <div className="mb-4 flex flex-row">
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        Adobe Creative Suite
                      </p>
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        Figma
                      </p>
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        Webflow
                      </p>
                    </div>

                    <div className="mb-4 flex flex-row">
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        HTML
                      </p>
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        CSS
                      </p>
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        JavaScript
                      </p>
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        C++
                      </p>
                    </div>

                    <div className="mb-4 flex flex-row">
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        three.js
                      </p>
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        React
                      </p>
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        React Three Fiber
                      </p>
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        GSAP
                      </p>
                      <p className="inline mx-1 px-2 xl:px-4 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[20px] text-[#ffffff] border-2 rounded-full">
                        Tailwind CSS
                      </p>
                    </div>
                  </div>
                </article>
              </section>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
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
