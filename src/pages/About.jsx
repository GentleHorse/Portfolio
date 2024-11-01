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
const SCROLL_PAGES = isBrowser ? 8.5 : 7.5;
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

const LANGUAGES_ICONS_ARRAY = [
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
    title: "C++",
    image: CPlusPlusIcon,
  },
];

const LIBRARIES_ICONS_ARRAY = [
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
    title: "GSAP",
    image: GSAPIcon,
  },
  {
    title: "Tailwind CSS",
    image: TailwindCSSIcon,
  },
];

const THREE_D_ICONS_ARRAY = [
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
];

const UI_UX_ICONS_ARRAY = [
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

const EXPERIENCES_ARRAY = [
  {
    when: "Dec 2023 - now",
    entity: "Studio Toshihito Endo (Eindhoven, NL)",
    postition: "Designer, Developer",
    description:
      "As a designer in self-employment, I design objects for exhibitions while applying my skills to developing 3D web applications.",
  },
  {
    when: "Aug 2022",
    entity: "MONO JAPAN (Rotterdam, NL)",
    postition: "Production Manager",
    description:
      "As a production manager, I managed the entire production process for the 5th edition of MONO JAPAN - Japanese Craft & Design Fair (September 2-4, 2022). This involved coordinating closely with the MONO Japan team, external designers, and exhibition participants, including artists, designers, and companies from Japan and managing the entire events during the exhibition days.",
  },
  {
    when: "Feb 2022 - Jul 2022",
    entity: "Random Studio (Amsterdam, NL)",
    postition: "Experience Design Intern",
    description:
      "During the 6 months internship, I was involved in several spatial interactive design projects for luxury brands such as Boucheron and Dom Perignon. I joined in the concept phase of the project to propose design ideas with 3D spatial visualisation, and also joined in the design phase to make physical prototypes for the actual site and helped them make the graphical presentation documents for clients.",
  },
  {
    when: "Jul 2019 - Aug 2019",
    entity: "PLANE co.,ltd (Tokyo, JP)",
    postition: "Product Design Intern",
    description:
      "As a product design intern, I collaborated closely with the designer to assist in creating physical prototypes for industrial products. Additionally, I conducted research and contributed ideas to explore new possibilities for a traditional Japanese washi paper brand, helping to innovate and expand its potential applications in modern design.",
  },
  {
    when: "Jan 2017 - Mar 2017",
    entity: "MOZU co.,ltd (Tokyo, JP)",
    postition: "Assistant Graphic Designer",
    description:
      "As an assistant graphic designer, I worked closely with the designer to assist in designing and creating the graphical elements for product catalogues, advertisement materials.",
  },
  {
    when: "Apr 2016 - Dec 2016",
    entity: "Candeo Hospitality Management,Inc. (Tokyo, JP)",
    postition: "Concierge + Design",
    description:
      "As a hotel concierge, I helped guests by providing personalised services such as booking reservations, arranging transportation, and recommending local attractions. In addition to this, I designed the infographics and local restaurant map.",
  },
];

const EXHIBITIONS_ARRAY = [
  {
    date: "Feb 2024",
    title: "OBJECT Rotterdam 2024 (Rotterdam, NL)",
  },
  {
    date: "Oct 2023",
    title: "Design Academy Graduation show at DDW 2023 (Eindhoven, NL)",
  },
  {
    date: "Jan 2022",
    title: "'Moonshot: Exit Strategy' (Eindhoven, NL)",
  },
  {
    date: "Mar 2021 - Aug 2021",
    title:
      "'Een nieuwe lente, een nieuwe vass' at National Glasmuseum (Leerdam, NL)",
  },
  {
    date: "Oct 2020",
    title: "'Spooning, A Dinner for Two' at DDW 2020 (Eindhoven, NL)",
  },
  {
    date: "Feb 2020",
    title: "Synthmania WORM Expo 2020 (Rotterdam, NL)",
  },
];

const EDUCATION_ARRAY = [
  {
    year: "2018 - 2023",
    institute: "Design Academy Eindhoven, Man & Communication (Eindhoven, NL)",
  },
  {
    year: "2009 - 2013",
    institute: "Keio University, Faculty of Economics (Tokyo, JP)",
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
                  className="font-bold bg-[#000000] hover:bg-[#D0104C] hover:cursor-pointer text-[#FFFFFF]"
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
                  className="font-bold bg-[#000000] hover:bg-[#D0104C] hover:cursor-pointer text-[#FFFFFF]"
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
                  className="font-bold bg-[#000000] hover:bg-[#D0104C] hover:cursor-pointer text-[#FFFFFF]"
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
                  className="font-bold bg-[#000000] hover:bg-[#D0104C] hover:cursor-pointer text-[#FFFFFF]"
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

          {!!isBrowser && (
            <section className="h-[100vh] w-[100vw]">
              <article className="py-[10%] xl:py-[2.5%] backdrop-blur-md bg-[#C1C1C1]/15 divide-y divide-[#C1C1C1]/65">
                {/* LANGUAGES */}
                <div className="ml-5 py-8 flex flex-row">
                  <h1 className="flex-none w-2/5 font-open-sans uppercase text-[75px] text-[#FFFFFF]">
                    languages
                  </h1>
                  <ul className="flex flex-row gap-5 items-start">
                    {LANGUAGES_ICONS_ARRAY.map((language, index) => (
                      <li
                        key={index}
                        className="w-[8.5vw] flex flex-col items-center"
                      >
                        <img
                          src={language.image}
                          className="mx-5 mb-2 w-14 h-14 xl:w-20 xl:h-20"
                        />
                        <p className="font-roboto text-[8px] xl:text-[16px] text-[#FFFFFF]">
                          {language.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* LIBRARIES */}
                <div className="ml-5 py-8 flex flex-row">
                  <h1 className="flex-none w-2/5 font-open-sans uppercase text-[75px] text-[#FFFFFF]">
                    library
                  </h1>
                  <ul className="flex flex-row gap-5 items-start">
                    {LIBRARIES_ICONS_ARRAY.map((library, index) => (
                      <li
                        key={index}
                        className="w-[8.5vw] flex flex-col items-center"
                      >
                        <img
                          src={library.image}
                          className="mx-5 mb-2 w-14 h-14 xl:w-20 xl:h-20"
                        />
                        <p className="font-roboto text-[8px] xl:text-[16px] text-[#FFFFFF]">
                          {library.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3D */}
                <div className="ml-5 py-8 flex flex-row">
                  <h1 className="flex-none w-2/5 font-open-sans uppercase text-[75px] text-[#FFFFFF]">
                    3D
                  </h1>
                  <ul className="flex flex-row gap-5 items-start">
                    {THREE_D_ICONS_ARRAY.map((threeD, index) => (
                      <li
                        key={index}
                        className="w-[8.5vw] flex flex-col items-center"
                      >
                        <img
                          src={threeD.image}
                          className="mx-5 mb-2 w-14 h-14 xl:w-20 xl:h-20"
                        />
                        <p className="font-roboto text-[8px] xl:text-[16px] text-[#FFFFFF]">
                          {threeD.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* UI/UX */}
                <div className="ml-5 py-8 flex flex-row">
                  <h1 className="flex-none w-2/5 font-open-sans uppercase text-[75px] text-[#FFFFFF]">
                    UI / UX
                  </h1>
                  <ul className="flex flex-row gap-5 items-start">
                    {UI_UX_ICONS_ARRAY.map((uiUx, index) => (
                      <li
                        key={index}
                        className="w-[8.5vw] flex flex-col items-center"
                      >
                        <img
                          src={uiUx.image}
                          className="mx-5 mb-2 w-14 h-14 xl:w-20 xl:h-20"
                        />
                        <p className="font-roboto text-[8px] xl:text-[16px] text-[#FFFFFF]">
                          {uiUx.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </section>
          )}

          {!!isMobile && (
            <section className="h-[120vh] xl:h-[100vh] w-[100vw]">
              <article className="px-[3%] xl:px-[6%] py-[10%] xl:py-[5%] mx-[7%] xl:mx-[6%] rounded-2xl backdrop-blur-md bg-[#C1C1C1]/15">
                <div className="w-full grid grid-cols-3 xl:grid-cols-5 gap-3 xl:gap-12">
                  {SKILL_ICONS_ARRAY.map((skill, index) => (
                    <div
                      key={index}
                      className="mb-5 flex flex-col items-center"
                    >
                      <img src={skill.image} className="mx-5 mb-2 w-14 h-14" />
                      <p className="font-roboto text-[10px] text-[#FFFFFF]">
                        {skill.title}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </section>
          )}

          {/* --- PAGE 05, 06 --------------------------------------- */}
          <section className="h-[200vh] w-[100vw]">
            <article className="py-[5%] pl-[0%] xl:pl-[12%]">
              <h1 className="text-center xl:text-left mb-10 font-serif text-[25px] xl:text-[80px] text-[#ffffff]">
                Experiences
              </h1>

              <ul>
                {EXPERIENCES_ARRAY.map((experience, index) => (
                  <li key={index} className="my-6 xl:my-20">
                    <div className="flex flex-col xl:flex-row items-center gap-2 xl:gap-8">
                      <p className="font-bold text-[12px] xl:text-[24px] text-[#ffffff]">
                        {experience.when}
                      </p>
                      <p className="font-open-sans text-[15px] xl:text-[26px] text-[#ffffff]">
                        {experience.postition}
                      </p>
                    </div>

                    <div className="w-[300px] xl:w-[700px] mx-auto xl:mx-0 mt-2 xl:mt-6 px-4 xl:px-6 pt-4 xl:pt-6 pb-6 xl:pb-10 rounded-xl backdrop-blur-md bg-[#C1C1C1]/15 ">
                      <p className="mb-2 xl:mb-4 font-light text-[12.5px] xl:text-[22px] text-[#ffffff]">
                        {experience.entity}
                      </p>

                      <p className="font-light text-[11.5px] xl:text-[18.5px] text-[#ffffff]">
                        {experience.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <article className="py-[5%] pl-[0%] xl:pl-[12%]">
              <h1 className="text-center xl:text-left mb-10 font-serif text-[25px] xl:text-[80px] text-[#ffffff]">
                Exhibitions
              </h1>

              <ul>
                {EXHIBITIONS_ARRAY.map((exhibition, index) => (
                  <li
                    key={index}
                    className="mb-4 xl:mb-2 flex flex-col xl:flex-row items-center xl:items-start"
                  >
                    <p className="text-center xl:text-left  w-[250px] font-light text-[11.5px] xl:text-[20px] text-[#ffffff]">
                      {exhibition.date}
                    </p>
                    <p className="flex-none font-light text-[11.5px] xl:text-[20px] text-[#ffffff]">
                      {exhibition.title}
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="py-[5%] pl-[0%] xl:pl-[12%]">
              <h1 className="text-center xl:text-left mb-10 font-serif text-[25px] xl:text-[80px] text-[#ffffff]">
                Education
              </h1>

              <ul>
                {EDUCATION_ARRAY.map((education, index) => (
                  <li
                    key={index}
                    className="mb-4 xl:mb-2 flex flex-col xl:flex-row items-center xl:items-start"
                  >
                    <p className="text-center xl:text-left  w-[250px] font-light text-[11.5px] xl:text-[20px] text-[#ffffff]">
                      {education.year}
                    </p>
                    <p className="flex-none font-light text-[11.5px] xl:text-[20px] text-[#ffffff]">
                      {education.institute}
                    </p>
                  </li>
                ))}
              </ul>
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
