import { useEffect } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import SectionIndicator from "../../components/sectionIndicator/SectionIndicator.jsx";

import AmbienceOfLightHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-ambience-of-light.jpg";
import BeautyOfTimePassingHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";
import InterventionInOurDisconnectionHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-intervention-in-our-disconnection.jpg";

import BeautyOfTimePassingImage11 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-11.jpg";
import BeautyOfTimePassingImage12 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-12.jpg";
import BeautyOfTimePassingImage13 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-13.jpg";

export default function BeautyOfTimePassingPage() {
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
            Beauty of Time Passing
          </h1>
          <img
            src={BeautyOfTimePassingHeroImage}
            alt="Ambience of Light Hero Image"
            className="mb-[25px] xl:mb-[70px] w-full h-[200px] xl:h-[500px] object-cover"
          />
          <div className="flex flex-col xl:flex-row">
            <div className="flex-none w-auto xl:w-[350px]">
              <p className="mb-[4px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                2023
              </p>
              <p className="mb-[20px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                Light Installation <br /> + Web Application
              </p>
            </div>

            <p className="mb-[36px] xl:mb-[72px] xl:grow text-[18px] xl:text-[28px] text-[#C1C1C1]">
              "The Beauty of Time Passing" is a light installation that brings
              people closer to nature by displaying dynamically changing,
              digitally reproduced abstracted natural scenes. These scenes
              reflect unpredictable weather conditions, creating a visually
              pleasing, ever-evolving experience that mirrors nature’s constant
              change.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">
            <p className="text-[12px] text-[#C1C1C1]">
              #embrace unpredictability of nature
            </p>
            <p className="text-[12px] text-[#C1C1C1]">#touch point to nature</p>
            <p className="text-[12px] text-[#C1C1C1]">#painting with lights</p>
          </div>
        </section>

        <section className="mt-[87px]">
          <img
            src={BeautyOfTimePassingImage13}
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
            Technology gets us closer to nature
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            In today's fast-paced world, technological advancements are
            relentless, making our lives increasingly convenient and leading to
            more time spent in front of digital screens. As a result, our
            connection to nature diminishes, creating a disconnect between our
            modern lives and the natural environment. This reliance on
            technology can create a barrier to experiencing the beauty of the
            natural world. However, technology has the potential to bridge this
            gap. By drawing inspiration from how ancient Japanese cultures
            harmonised with nature within their architectural spaces, we can
            leverage modern innovations to foster a deeper connection to the
            natural environment, enriching our lives and well-being.
          </p>
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={BeautyOfTimePassingHeroImage}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        {/* ----- APPROACH ----- */}

        <section name="approach" className="pt-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[8px] xl:mb-[18px] font-montserrat text-[10px] xl:text-[14px] text-[#C1C1C1]">
            APPROACH
          </p>
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            The “window” where nature’s magnificence merges with interiors
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            In traditional Japanese temples, windows often frame outdoor
            scenery, allowing natural light to illuminate dark interiors while
            reflecting a deep respect for nature. These windows symbolise the
            belief that humans are an integral part of the natural world, not
            separate from it. This seamless connection between outdoor
            environments and indoor spaces creates an inviting, natural
            ambiance. As a Japanese designer residing in the Western world, the
            designer recognized that the light reflections created by window
            glass bricks can serve a similar purpose. By mimicking the role of
            traditional picture windows, glass bricks foster a sense of
            connection to nature, enhancing the overall ambiance of contemporary
            spaces.
          </p>
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={BeautyOfTimePassingHeroImage}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        <section className="my-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            Projecting 3D rendered digital sceneries
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            To brighten dim indoor architectural spaces while simultaneously
            integrating natural landscapes, 3D-rendered animations of nature are
            continuously displayed and projected onto the glass bricks. This
            technique enhances the environment by creating a dynamic interplay
            of light and imagery, fostering a connection with nature.
          </p>
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <div className="grid grid-cols-3 gap-6">
            <img
              src={BeautyOfTimePassingHeroImage}
              className="hidden-element grid-images col-span-2 object-cover h-full"
            />
            <img
              src={BeautyOfTimePassingHeroImage}
              className="hidden-element grid-images object-cover h-full"
            />
          </div>
        </section>

        <section className="my-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            “Realistic” moving visuals and dynamic changes
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            Various stimuli, including scent and tactile sensations, can evoke a
            "sense of nature" in people, but moving visuals are among the most
            powerful elements in creating this connection. To achieve realistic
            moving visuals, 3D nature scenes were developed using Houdini, the
            industry-standard software for visual effects and physics
            simulations. These scenes are enhanced by transitioning through the
            seasons, from spring to winter, captured in approximately 30-second
            looping animations. This technique adds dynamism to the visuals,
            allowing viewers to experience the beauty of nature's cycles in a
            captivating way, fostering a deeper emotional connection to the
            natural world.
          </p>
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={BeautyOfTimePassingHeroImage}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        <section className="my-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            Embracing unpredictable aspects of nature
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            Getting closer to nature involves acknowledging its uncontrollable
            elements and incorporating them into our daily lives. For instance,
            sudden rain showers are often seen as annoying inconveniences in
            many cultures, but Japanese ukiyo-e artists, like Hiroshige Utagawa,
            embraced them as atmospheric, character-filled themes for their
            prints. Similarly, "The Beauty of Time Passing" adopts this
            perspective through technology. The 3D nature scenes in this
            installation respond to real weather data, allowing elements like
            humidity to influence their appearance. On highly humid days, for
            example, the visuals become blurred, mirroring the natural world and
            fostering a deeper connection to its unpredictable beauty.
          </p>
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={BeautyOfTimePassingHeroImage}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        {/* ----- OUTCOME ----- */}

        <section name="outcome" className="pt-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[8px] xl:mb-[18px] font-montserrat text-[10px] xl:text-[14px] text-[#C1C1C1]">
            OUTCOME
          </p>
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            Light installation worked with the web application
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            The "Beauty of Time Passing" project comprises two distinct
            components: a web application that displays weather-reflected 3D
            nature scenes and a physical installation designed to create an
            engaging visual momentum experience. The web application, developed
            using React and WebGL (three.js), enables dynamic interactions with
            the natural visuals based on real weather data. This innovative
            project was showcased at the Design Academy Eindhoven Graduation
            Show during Dutch Design Week (DDW) from October 21 to 29, 2023, at
            Heuvel Galerie, located in Eindhoven.
          </p>
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={BeautyOfTimePassingHeroImage}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={AmbienceOfLightHeroImage}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        {!!isBrowser && (
          <section className="mt-[87px] w-[100vw]">
            <img
              src={BeautyOfTimePassingHeroImage}
              className="sticky top-0 w-full h-auto object-cover"
            />
            <img
              src={BeautyOfTimePassingHeroImage}
              className="sticky top-0 w-full h-auto object-cover"
            />
            <img
              src={BeautyOfTimePassingHeroImage}
              className="sticky top-0 w-full h-auto object-cover"
            />
            <img
              src={BeautyOfTimePassingHeroImage}
              className="sticky top-0 w-full h-auto object-cover"
            />
          </section>
        )}

        {!!isMobile && (
          <>
            <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
              <img
                src={BeautyOfTimePassingHeroImage}
                className="hidden-element w-full h-auto object-cover"
              />
            </section>
            <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
              <img
                src={BeautyOfTimePassingHeroImage}
                className="hidden-element w-full h-auto object-cover"
              />
            </section>
          </>
        )}

        <section className="my-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            Press
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            The "Beauty of Time Passing" project was featured in Design Milk.
          </p>
        </section>

        {/* -------------- TO NEXT PROJECT FOOTER PART ------------ */}

        <section className="my-[84px] xl:my-[124px] mx-[5vw] xl:mx-[240px]">
          <div className="w-full flex">
            <hr className="mb-[60px] mx-20 xl:mx-56 flex-grow border-[#C1C1C1]" />
          </div>
        </section>

        <section className="mt-0 xl:mt-[87px] mx-[5vw] xl:mx-[240px]">
          <Link
            to="/intervention-in-our-disconnection"
            className="relative w-full flex flex-col items-center"
          >
            <img
              src={InterventionInOurDisconnectionHeroImage}
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
