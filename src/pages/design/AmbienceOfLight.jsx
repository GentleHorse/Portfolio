import { useRef, useEffect } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import SectionIndicator from "../../components/sectionIndicator/SectionIndicator.jsx";

import AmbienceOfLightHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-ambience-of-light.jpg";
import BeautyOfTimePassingHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";

import AmbienceOfLightImage01 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-01.jpg";
import AmbienceOfLightImage03 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-03.jpg";
import AmbienceOfLightImage06 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-06.jpg";
import AmbienceOfLightImage07 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-07.jpg";
import AmbienceOfLightImage10 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-10.jpg";
import AmbienceOfLightImage11 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-11.jpg";
import AmbienceOfLightImage15 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-15.jpg";
import AmbienceOfLightImage16 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-16.png";
import AmbienceOfLightImage17 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-17.jpg";
import AmbienceOfLightImage19 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-19.jpg";


export default function AmbienceOfLightPage() {
  /**
   * MOMENTUM SMOOTH SCROLLING - LENIS SETUP
   */
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  /**
   * SCROLL ELEMENT APPEAR ANIMATION
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-element");
          } else {
            entry.target.classList.remove("show-element");
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: [0, 0.1, 1],
      }
    );

    const tags = document.querySelectorAll(".hidden-element");
    tags.forEach((tag) => {
      observer.observe(tag);
    });
  }, []);

  return (
    <>
      <Header home about works contact />

      {!!isBrowser && <SectionIndicator />}

      {/* ----- INTRO ----- */}

      <div id="page">
        <section
          name="intro"
          className="pt-[76px] xl:pt-[148px] mx-[10vw] xl:mx-[240px]"
        >
          <h1 className="project-title mb-[21px] xl:mb-[42px] font-serif text-[36px] xl:text-[72px] text-[#C1C1C1]">
            Ambience of Light
          </h1>
          <img
            src={AmbienceOfLightHeroImage}
            alt="Ambience of Light Hero Image"
            className="mb-[25px] xl:mb-[70px] w-full h-[200px] xl:h-[500px] object-cover"
          />
          <div className="flex flex-col xl:flex-row">
            <div className="flex-none w-auto xl:w-[350px]">
              <p className="mb-[4px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                2024
              </p>
              <p className="mb-[20px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                Product Design
              </p>
            </div>

            <p className="mb-[36px] xl:mb-[72px] xl:grow text-[18px] xl:text-[28px] text-[#C1C1C1]">
              The "Ambience of Light" is a lighting product that utilises
              industrial glass blocks, originally designed to capture daylight,
              to create a distinctive and atmospheric lighting experience in any
              space.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">
            <p className="text-[14px] text-[#C1C1C1]">#perception of space</p>
            <p className="text-[14px] text-[#C1C1C1]">#in praise of shadows</p>
            <p className="text-[14px] text-[#C1C1C1]">
              #blur boundaries in space
            </p>
          </div>
        </section>

        <section className="mt-[87px]">
          <img
            src={AmbienceOfLightImage01}
            className="w-full h-[270px] xl:h-[720px] object-cover"
          />
        </section>

        {/* ----- CHALLENGE ----- */}

        <section
          name="challenge"
          className="pt-[124px] mx-[10vw] xl:mx-[240px]"
        >
          <p className="hidden-element mb-[8px] xl:mb-[18px] font-montserrat text-[10px] xl:text-[14px] text-[#C1C1C1]">
            CHALLENGE
          </p>
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            Lack of daylight and limited designs
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            Industrial glass blocks were originally invented to bring daylight
            into domestic and commercial spaces comfortably. Their
            light-transmitting and diffusing properties filter sunlight into
            beautiful reflections, creating a unique atmosphere indoors.
            However, their modularity limits architectural applications, and
            without daylight, the desired atmosphere fails to emerge. The
            challenge then became: how can we recreate this atmosphere using
            glass blocks without relying on daylight?
          </p>
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={AmbienceOfLightImage17}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        {/* ----- APPROACH ----- */}

        <section name="approach" className="pt-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[8px] xl:mb-[18px] font-montserrat text-[10px] xl:text-[14px] text-[#C1C1C1]">
            APPROACH
          </p>
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            A unique atmosphere with the Japanese traditional lamp
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            Before electric lighting, people in Japan used "Andon" lamps, made
            from paper stretched over bamboo, wood, or metal frames, to
            illuminate spaces. The paper gently diffused light from a single
            source, creating a soft, warm glow that fostered a calm and inviting
            atmosphere. Inspired by this traditional design, "Ambience of Light"
            follows the same principle to recreate a similar warmth. By using a
            single light source, it captures the subtle and soothing
            illumination of Andon lamps, blending tradition with modernity to
            create a cosy, ambient glow in contemporary spaces.
          </p>
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={AmbienceOfLightImage19}
            className="hidden-element mx-auto mb-14 xl:mb-56 w-auto h-[240px]  xl:h-[720px] object-cover"
          />
          <img
            src={AmbienceOfLightImage07}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        <section className="my-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            Reshape our perception of darkness in space
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            During the Edo period, people relied on oil lamps and candles as
            light sources for Andon lamps, resulting in typically dark living
            spaces. In his 1933 essay "In Praise of Shadows," Junichiro Tanizaki
            observed that individuals of that era embraced this warm darkness,
            using it to discover their own aesthetics by dissolving the
            boundaries between objects and the surrounding shadows. This
            blending of light and dark created an intimate atmosphere. Inspired
            by this idea, the product features dimmable lighting and carefully
            selected wood colors, allowing users to actively manipulate the
            interplay of light and darkness, enhancing the ambiance of their
            spaces.
          </p>
        </section>

        <section className="my-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={AmbienceOfLightImage15}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        <section className="my-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={AmbienceOfLightImage06}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        {/* ----- OUTCOME ----- */}

        <section name="outcome" className="pt-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[8px] xl:mb-[18px] font-montserrat text-[10px] xl:text-[14px] text-[#C1C1C1]">
            OUTCOME
          </p>
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            Modular lighting products with playful compositions
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            Daylight varies throughout the day, week, and across seasons,
            influencing the way light interacts with architectural
            installations. Using glass bricks, the same setup can produce a
            range of light reflections, resulting in distinct ambiances within a
            space. To replicate this beautiful effect in the absence of natural
            light, the "Ambience of Light" product is designed with modular
            components. This modularity enables users to create various
            compositions, allowing them to manipulate light reflections and
            craft different atmospheres. As a result, individuals can enjoy a
            dynamic, ever-changing ambiance that mirrors the natural variations
            of daylight, enriching their indoor environments.
          </p>
        </section>

        <section className="my-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={AmbienceOfLightImage16}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={AmbienceOfLightImage10}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={AmbienceOfLightImage11}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        <section className="my-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            OBJECT Rotterdam 2024
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            This project "Ambience of Light" was presented at presented at {""}
            <a
              href="https://objectrotterdam.com/"
              target="_blank"
              className="hidden-element font-bold text-white"
            >
              OBJECT Rotterdam 2024
            </a>
            {""} (Feb 2 - 4, 2024, HAKA-gebouw, Vierhavensstraat 40, 3029 BE
            Rotterdam).
          </p>
        </section>

        {!!isBrowser && (
          <section className="mt-[87px] w-[100vw]">
            <img
              src={AmbienceOfLightImage01}
              className="sticky top-0 w-full h-auto object-cover"
            />
            <img
              src={AmbienceOfLightImage03}
              className="sticky top-0 w-full h-auto object-cover"
            />
          </section>
        )}

        {!!isMobile && (
          <>
            <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
              <img
                src={AmbienceOfLightImage01}
                className="hidden-element w-full h-auto object-cover"
              />
            </section>
            <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
              <img
                src={AmbienceOfLightImage03}
                className="hidden-element w-full h-auto object-cover"
              />
            </section>
          </>
        )}

        {/* -------------- TO NEXT PROJECT FOOTER PART ------------ */}

        <section className="my-[84px] xl:my-[124px] mx-[5vw] xl:mx-[240px]">
          <div className="w-full flex">
            <hr className="mb-[60px] mx-20 xl:mx-56 flex-grow border-[#C1C1C1]" />
          </div>
        </section>

        <section className="mt-0 xl:mt-[87px] mx-[5vw] xl:mx-[240px]">
          <Link
            to="/beauty-of-time-passing"
            className="relative w-full flex flex-col items-center"
            reloadDocument={true}
          >
            <img
              src={BeautyOfTimePassingHeroImage}
              className="w-3/5 xl:w-2/5 h-auto object-cover opacity-50"
            />

            <p className="absolute top-1/2 text-[12px] xl:text-[18px] text-[#C1C1C1]">
              Explore the next project
            </p>
          </Link>
        </section>

        <section className="mt-[87px] pb-[80px] mx-[5vw] xl:mx-[240px]">
          <Link
            to="/works"
            className="relative w-full flex flex-col items-center"
            reloadDocument={true}
          >
            <div className="w-[120px] xl:w-[175px] h-[100px] xl:h-[175px] bg-[#C1C1C1] rounded-full" />

            <p className="absolute font-roboto top-[44px] xl:top-[80px] text-[10px] xl:text-[14px] text-[#1C1C1C]">
              Back to overview
            </p>
          </Link>
        </section>
      </div>
    </>
  );
}
