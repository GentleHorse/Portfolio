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
import { isBrowser, isMobile } from "react-device-detect";

import Header from "../components/header/Header.jsx";
import MaleHead from "../components/models/maleHead/MaleHead.jsx";
import LoadingScreen from "../components/loadingScreen/LoadingScreen.jsx";

import BeautyOfTimePassingHeroImage from "../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";
import ObjectRotterdam2024HeroImage from "../../public/images/app-developments/__thumbnail-images/thumbnail-object-rotterdam-2024.jpg";
import ComfortingDinnerHeroImage from "../../public/images/design-projects/__thumbnail-images/thumbnail-comforting-dinner.jpg";
import PortfolioWebsiteHeroImage from "../../public/images/app-developments/__thumbnail-images/thumbnail-portfolio-website.jpg";

// -------------------------------------

import HtmlIcon from "../../public/images/icons/skills/html-5.svg";
import CSSIcon from "../../public/images/icons/skills/css3.svg";
import JavaScriptIcon from "../../public/images/icons/skills/javascript.svg";
import ReactIcon from "../../public/images/icons/skills/react.svg";
import ThreeJsIcon from "../../public/images/icons/skills/three-js.svg";
import PmndrsIcon from "../../public/images/icons/skills/pmndrs.svg";
import TailwindCSSIcon from "../../public/images/icons/skills/tailwind-css-2.svg";
import GSAPIcon from "../../public/images/icons/skills/gsap.svg";
import CPlusPlusIcon from "../../public/images/icons/skills/c-plus-plus.svg";
import BlenderIcon from "../../public/images/icons/skills/blender-icon.svg";
import HoudiniIcon from "../../public/images/icons/skills/houdini.svg";
import UnrealEngineIcon from "../../public/images/icons/skills/unreal-engine.svg";
import RhinocerosIcon from "../../public/images/icons/skills/rhinoceros.svg";
import AdobeCreativeCloudIcon from "../../public/images/icons/skills/adobe-creative-cloud.svg";
import FigmaIcon from "../../public/images/icons/skills/figma.svg";
import WebflowIcon from "../../public/images/icons/skills/webflow.svg";

/**
 * INITIAL PARAM VALUES
 */
const SCROLL_PAGES = 5.5;
const SCROLL_DAMPING = 0.285;
const SCROLL_DISTANCE = 0.5;
const CAMERA_FOV = isBrowser ? 15 : 40;
const CAMERA_POSITION = isBrowser ? [0, 0, 20] : [0, 0, 8];
const HEAD_POSITION = isBrowser ? [1.2, -3, 0] : [1.25, -2.7, 1.25];
const MALEHEAD_ROTATION = isBrowser
  ? [0, 0, 0]
  : [0, -Math.PI * 0.1, Math.PI * 0.025];

/**
 * SKILL ICON ARRAY
 */
const SKILL_ICONS_ARRAY = [
  {
    title: "HTML",
    image: HtmlIcon,
  },
  {
    title: "CSS",
    image: CSSIcon,
  },
  {
    title: "JavaScript",
    image: JavaScriptIcon,
  },
  {
    title: "React",
    image: ReactIcon,
  },
  {
    title: "Three.js",
    image: ThreeJsIcon,
  },
  {
    title: "React Three Fiber",
    image: PmndrsIcon,
  },
  {
    title: "Tailwind CSS",
    image: TailwindCSSIcon,
  },
  {
    title: "GSAP",
    image: GSAPIcon,
  },
  {
    title: "C++",
    image: CPlusPlusIcon,
  },
  {
    title: "Blender",
    image: BlenderIcon,
  },
  {
    title: "Houdini",
    image: HoudiniIcon,
  },
  {
    title: "Unreal Engine",
    image: UnrealEngineIcon,
  },
  {
    title: "Rhinoceros 3D",
    image: RhinocerosIcon,
  },
  {
    title: "Figma",
    image: FigmaIcon,
  },
  {
    title: "Webflow",
    image: WebflowIcon,
  },
  {
    title: "Adobe CC",
    image: AdobeCreativeCloudIcon,
  },
];

export default function AboutPage() {
  /**
   * LOADING SCREEN
   */
  const loadingScreenComponent = isBrowser ? (
    <LoadingScreen />
  ) : (
    <LoadingScreenMobile />
  );

  return (
    <>
      <Header home works contact />

      <Canvas camera={{ position: CAMERA_POSITION, fov: CAMERA_FOV }}>
        <Suspense fallback={loadingScreenComponent}>
          <AboutPageExperience />
        </Suspense>
      </Canvas>
    </>
  );
}

function AboutPageExperience() {
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
    {
      id: "comfortingDinner",
      isHover: false,
    },
    {
      id: "portfolioWebsite",
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

          {/* --- PAGE 02 - 03 --------------------------------------- */}
          <section className="h-[160vh] xl:h-[200vh] w-[100vw]">
            <article className="relative py-[15%] xl:py-[10%] px-[10%] xl:px-[12%] backdrop-blur-md bg-[#C1C1C1]/15">
              <p className="mb-10 font-open-sans text-[20px] xl:text-[55px] text-[#C1C1C1]">
                I am a Japanese designer and developer, a graduate of Design
                Academy Eindhoven (Netherlands), where I created the project{" "}
                <a
                  className="font-bold hover:font-open-sans bg-[#000000] hover:bg-[#D0104C] hover:cursor-pointer text-[#FFFFFF]"
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
                . My work focuses on uniting design and development, as seen in
                projects like{" "}
                <a
                  className="font-bold hover:font-open-sans bg-[#000000] hover:bg-[#D0104C] hover:cursor-pointer text-[#FFFFFF]"
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
                and{" "}
                <a
                  className="font-bold hover:font-open-sans bg-[#000000] hover:bg-[#D0104C] hover:cursor-pointer text-[#FFFFFF]"
                  onClick={() =>
                    window.open("https://toshihito-endo.com/portfolio-website")
                  }
                  onMouseEnter={() =>
                    hoverStartTextsHandler("portfolioWebsite")
                  }
                  onMouseLeave={() => hoverEndTextsHandler("portfolioWebsite")}
                >
                  this portfolio website
                </a>
                .
              </p>

              <img
                src={BeautyOfTimePassingHeroImage}
                className={`${
                  hoverTextsArray[0].isHover
                    ? "show-thumbnail"
                    : "hidden-thumbnail"
                } absolute top-[3%] left-[20%] w-[450px] h-[300px] object-cover`}
              />

              <img
                src={ObjectRotterdam2024HeroImage}
                className={`${
                  hoverTextsArray[1].isHover
                    ? "show-thumbnail"
                    : "hidden-thumbnail"
                } absolute top-[45%] right-[10%] w-[450px] h-[300px] object-cover`}
              />

              <img
                src={PortfolioWebsiteHeroImage}
                className={`${
                  hoverTextsArray[3].isHover
                    ? "show-thumbnail"
                    : "hidden-thumbnail"
                } absolute top-[50%] left-[15%] w-[450px] h-[300px] object-cover`}
              />

              <p className="mb-10 font-open-sans text-[20px] xl:text-[55px] text-[#C1C1C1]">
                In my product design education, I’ve become passionate about how
                subtle details in products can create emotionally resonant
                interactions, as demonstrated in{" "}
                <a
                  className="font-bold hover:font-open-sans bg-[#000000] hover:bg-[#D0104C] hover:cursor-pointer text-[#FFFFFF]"
                  onClick={() =>
                    window.open("https://toshihito-endo.com/comforting-dinner")
                  }
                  onMouseEnter={() =>
                    hoverStartTextsHandler("comfortingDinner")
                  }
                  onMouseLeave={() => hoverEndTextsHandler("comfortingDinner")}
                >
                  "Comforting Dinner"
                </a>
                . I believe these nuances have an even more significant impact
                within digital environments.
              </p>

              <img
                src={ComfortingDinnerHeroImage}
                className={`${
                  hoverTextsArray[2].isHover
                    ? "show-thumbnail"
                    : "hidden-thumbnail"
                } absolute top-[75%] right-[15%] w-[450px] h-[300px] object-cover`}
              />
            </article>
          </section>

          {/* --- PAGE 04 --------------------------------------- */}
          <section className="h-[120vh] xl:h-[100vh] w-[100vw]">
            <article className="px-[3%] xl:px-[6%] py-[10%] xl:py-[5%]  mx-[7%] xl:mx-[6%] rounded-2xl backdrop-blur-md bg-[#C1C1C1]/15">
              <div className="w-full grid grid-cols-3 xl:grid-cols-5 gap-3 xl:gap-12">
                {SKILL_ICONS_ARRAY.map((skill, index) => (
                  <div key={index} className="mb-5 flex flex-col items-center">
                    <img
                      src={skill.image}
                      className="mx-5 mb-2 w-14 h-14 xl:w-20 xl:h-20"
                    />
                    <p className="font-roboto text-[8px] xl:text-xl text-[#FFFFFF]">
                      {skill.title}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          {/* --- PAGE 05 --------------------------------------- */}
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
                    Design Academy Graduation show at DDW 2023 (Eindhoven, NL)
                  </p>
                  <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                    "Moonshot: Exit Strategy" (Eindhoven, NL)
                  </p>
                  <p className="font-light text-[8.5px] xl:text-[17px] text-[#ffffff]">
                    "Een nieuwe lente, een nieuwe vass" at National Glasmuseum
                    (Leerdam, NL)
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
                    Design Academy Eindhoven, Man & Communication (Eindhoven,
                    NL)
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
