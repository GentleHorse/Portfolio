import { Suspense, useState, useEffect } from "react";
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

import BeautyOfTimePassingHeroImage from "../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";
import ObjectRotterdam2024HeroImage from "../../public/images/app-developments/__thumbnail-images/thumbnail-object-rotterdam-2024.jpg";

/**
 * INITIAL PARAM VALUES
 */
const SCROLL_PAGES = 6.5;
const SCROLL_DAMPING = 0.35;
const SCROLL_DISTANCE = 0.5;
const CAMERA_FOV = isBrowser ? 15 : 40;
const CAMERA_POSITION = isBrowser ? [0, 0, 20] : [0, 0, 8];
const HEAD_POSITION = isBrowser ? [1.2, -3, 0] : [1.25, -2.7, 1.25];
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
  // const navigate = useNavigate();

  /**
   * Hover state
   */
  const [hoverTextsArray, setHoverTextsArray] = useState([
    {
      id: "beautyOfTimePassing",
      isHover: false,
    },
    {
      id: "objectRotterdam2024",
      isHover: false,
    },
  ]);

  const hoverStartTextsHandler = (text) => {
    setHoverTextsArray((prevHoverTextsArray) => {
      const newHoverTextsArray = [...prevHoverTextsArray];
      const textId = hoverTextsArray.findIndex(
        (textObj) => textObj.id === text
      );
      newHoverTextsArray[textId].isHover = true;

      console.log("hover starts: ", newHoverTextsArray[textId].id);

      return newHoverTextsArray;
    });
  };

  const hoverEndTextsHandler = (text) => {
    setHoverTextsArray((prevHoverTextsArray) => {
      const newHoverTextsArray = [...prevHoverTextsArray];
      const textId = hoverTextsArray.findIndex(
        (textObj) => textObj.id === text
      );
      newHoverTextsArray[textId].isHover = false;

      console.log("hover ends: ", newHoverTextsArray[textId].id);

      return newHoverTextsArray;
    });
  };

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
                <h1 className="h-full mt-[20vh] xl:mt-[50vh] ml-10 xl:ml-20 font-serif text-[80px] xl:text-[120px] text-[#ffffff]">
                  Hello, <br />
                  Call me Toshi !
                </h1>
              </section>

              {/* --- PAGE 02 --------------------------------------- */}
              <section className="h-[100vh] w-[100vw]">
                <article className="relative py-[5%] px-[6%] xl:px-[12%]">
                  <p className="mb-10 font-open-sans text-[20px] xl:text-[45px] text-[#C1C1C1]">
                    I am a Japanese designer and developer, a graduate of Design
                    Academy Eindhoven (Netherlands), where I created the project{" "}
                    <a
                      className="font-bold hover:cursor-pointer text-[#FFFFFF]"
                      onClick={() =>
                        window.open(
                          "https://toshihito-endo.com/beauty-of-time-passing"
                        )
                      }
                      onMouseEnter={() =>
                        hoverStartTextsHandler("beautyOfTimePassing")
                      }
                      onMouseLeave={() =>
                        hoverEndTextsHandler("beautyOfTimePassing")
                      }
                    >
                      "Beauty of Time Passing"
                    </a>
                    . My work focuses on uniting design and development, as seen
                    in projects like{" "}
                    <a
                      className="font-bold hover:cursor-pointer text-[#FFFFFF]"
                      onClick={() =>
                        window.open(
                          "https://toshihito-endo.com/object-rotterdam-2024"
                        )
                      }
                      onMouseEnter={() =>
                        hoverStartTextsHandler("objectRotterdam2024")
                      }
                      onMouseLeave={() =>
                        hoverEndTextsHandler("objectRotterdam2024")
                      }
                    >
                      "OBJECT Rotterdam 2024"
                    </a>{" "}
                    and this website.
                  </p>

                  {!!hoverTextsArray[0].isHover && (
                    <img
                      src={BeautyOfTimePassingHeroImage}
                      className="absolute top-[-10vh] left-[40vw]  w-[450px] h-[300px] object-cover"
                    />
                  )}

                  {!!hoverTextsArray[1].isHover && (
                    <img
                      src={ObjectRotterdam2024HeroImage}
                      className="absolute top-[40vh] left-[10vw]  w-[450px] h-[300px] object-cover"
                    />
                  )}
                </article>
              </section>

              {/* --- PAGE 03 --------------------------------------- */}
              <section className="h-[100vh] w-[100vw] xl:w-[60vw]">
                <article className="py-[5%] px-[6%] xl:px-[12%]">
                  <h1 className="mb-10 font-serif text-[25px] xl:text-[40px] text-[#ffffff]">
                    Design to stimulate curiosity
                  </h1>

                  <p className="font-light text-[12px] xl:text-[25px] text-[#ffffff]">
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
                  <h1 className="mb-10 font-serif text-[25px] xl:text-[40px] text-[#ffffff]">
                    Gratifying interactions like physical products
                  </h1>

                  <p className="font-light text-[12px] xl:text-[25px] text-[#ffffff]">
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
                  <h1 className="mb-10 font-serif text-[25px] xl:text-[40px] text-[#ffffff]">
                    Skills
                  </h1>

                  <div className="grid grid-cols-2 xl:grid-cols-3">
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      Blender
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      Houdini
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      Unreal Engine 5
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      Rhinoceros 3d
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      Adobe Creative Suite
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      Figma
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      Webflow
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      HTML
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      CSS
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      JavaScript
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      C++
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      three.js
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      React
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      React Three Fiber
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      GSAP
                    </p>
                    <p className="inline text-center mx-4 my-2 xl:px-2 py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#ffffff] border-2 rounded-full">
                      Tailwind CSS
                    </p>
                  </div>
                </article>
              </section>

              {/* --- PAGE 06 --------------------------------------- */}
              <section className="h-[100vh] w-[100vw] xl:w-[60vw]">
                <article className="py-[5%] pl-[6%] xl:pl-[12%]">
                  <h1 className="mb-10 font-serif text-[25px] xl:text-[40px] text-[#ffffff]">
                    Experiences
                  </h1>

                  <div className="flex flex-row gap-10">
                    <div>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Dec 2023 - now
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Aug 2022
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Feb 2022 - Jul 2022
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Jul 2019 - Jul 2019
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Jan 2017 - Mar 2017
                      </p>
                    </div>
                    <div>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Designer & developer at Studio Toshihito Endo
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Production assisant at MONO Japan Craft Fair
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Experience design intern at Random Studio
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Assistant product designer at PLANE co.,ltd
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Assistant graphic designer at MOZU co.,ltd
                      </p>
                    </div>
                  </div>
                </article>

                <article className="py-[5%] pl-[6%] xl:pl-[12%]">
                  <h1 className="mb-10 font-serif text-[25px] xl:text-[40px] text-[#ffffff]">
                    Exhibitions
                  </h1>

                  <div className="flex flex-row gap-10">
                    <div>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Feb 2024
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Oct 2023
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Jan 2022
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Mar 2021 - Aug 2021
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Oct 2020
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Feb 2020
                      </p>
                    </div>
                    <div>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        OBJECT Rotterdam 2024 (Rotterdam, NL)
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Design Academy Graduation show at DDW 2023 (Eindhoven,
                        NL)
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        "Moonshot: Exit Strategy" (Eindhoven, NL)
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        "Een nieuwe lente, een nieuwe vass" at National
                        Glasmuseum (Leerdam, NL)
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        "Spooning, A Dinner for Two" at DDW 2020 (Eindhoven, NL)
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Synthmania WORM Expo 2020 (Rotterdam, NL)
                      </p>
                    </div>
                  </div>
                </article>

                <article className="py-[5%] pl-[6%] xl:pl-[12%]">
                  <h1 className="mb-10 font-serif text-[25px] xl:text-[40px] text-[#ffffff]">
                    Educations
                  </h1>

                  <div className="flex flex-row gap-10">
                    <div>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        2018 - 2023
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        2009 - 2013
                      </p>
                    </div>
                    <div>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Design Academy Eindhoven, Man & Communication
                        (Eindhoven, NL)
                      </p>
                      <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                        Keio University, Faculty of Economics (Tokyo, JP)
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
