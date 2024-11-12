import { Suspense, useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import SectionIndicator from "../../components/sectionIndicator/SectionIndicator.jsx";

import "lenis/dist/lenis.css";

import BeautyOfTimePassingHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";
import InterventionInOurDisconnectionHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-intervention-in-our-disconnection.jpg";

import BeautyOfTimePassingImage01 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-01.jpg";
import BeautyOfTimePassingImage03 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-03.jpg";
import BeautyOfTimePassingImage13 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-13.jpg";
import BeautyOfTimePassingImage14 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-14.jpg";
import BeautyOfTimePassingImage15 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-15.jpg";
import BeautyOfTimePassingImage16 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-16.jpg";
import BeautyOfTimePassingImage17 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-17.jpg";
import BeautyOfTimePassingImage18 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-18.jpg";
import BeautyOfTimePassingImage19 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-19.jpg";
import BeautyOfTimePassingImage20 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-20.jpg";
import BeautyOfTimePassingImage21 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-21.jpg";
import BeautyOfTimePassingImage22 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-22.jpg";
import BeautyOfTimePassingImage23 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-23.jpg";
import BeautyOfTimePassingImage24 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-24.jpg";

import BeautyOfTimePassingVideo01 from "../../../public/videos/beauty-of-time-passing/beauty-of-time-passing-01.mp4";
import BeautyOfTimePassingVideo02 from "../../../public/videos/beauty-of-time-passing/beauty-of-time-passing-02.mp4";
import BeautyOfTimePassingVideo03 from "../../../public/videos/beauty-of-time-passing/beauty-of-time-passing-03.mp4";
import BeautyOfTimePassingVideo04 from "../../../public/videos/beauty-of-time-passing/beauty-of-time-passing-04.mp4";
import BeautyOfTimePassingVideo05 from "../../../public/videos/beauty-of-time-passing/beauty-of-time-passing-05.mp4";
import BeautyOfTimePassingVideo06 from "../../../public/videos/beauty-of-time-passing/beauty-of-time-passing-06.mp4";
import BeautyOfTimePassingVideo07 from "../../../public/videos/beauty-of-time-passing/beauty-of-time-passing-07.mp4";
import BeautyOfTimePassingVideo08 from "../../../public/videos/beauty-of-time-passing/beauty-of-time-passing-08.mp4";

const IMAGES_ARRAY = [
  BeautyOfTimePassingImage01,
  BeautyOfTimePassingImage03,
  BeautyOfTimePassingImage13,
  BeautyOfTimePassingImage14,
  BeautyOfTimePassingImage15,
  BeautyOfTimePassingImage16,
  BeautyOfTimePassingImage17,
  BeautyOfTimePassingImage18,
  BeautyOfTimePassingImage19,
  BeautyOfTimePassingImage20,
  BeautyOfTimePassingImage21,
  BeautyOfTimePassingImage22,
  BeautyOfTimePassingImage23,
  BeautyOfTimePassingImage24,
];

const VIDEOS_ARRAY = [
  BeautyOfTimePassingVideo01,
  BeautyOfTimePassingVideo02,
  BeautyOfTimePassingVideo03,
  BeautyOfTimePassingVideo04,
  BeautyOfTimePassingVideo05,
  BeautyOfTimePassingVideo06,
  BeautyOfTimePassingVideo07,
  BeautyOfTimePassingVideo08,
];

export default function BeautyOfTimePassingPage() {
  /**
   * IMAGES ARRAY
   */
  const [imagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    setImagesArray((prevImagesArray) => {
      const newImagesArray = [...prevImagesArray];
      IMAGES_ARRAY.forEach((image) => {
        newImagesArray.push(image);
      });

      return newImagesArray;
    });
  }, []);

  /**
   * VIDEOS ARRAY
   */
  const [videosArray, setVideosArray] = useState([]);

  useEffect(() => {
    setVideosArray((prevVideosArray) => {
      const newVideosArray = [...prevVideosArray];
      VIDEOS_ARRAY.forEach((video) => {
        newVideosArray.push(video);
      });

      return newVideosArray;
    });
  }, []);

  /**
   * MOMENTUM SMOOTH SCROLLING - LENIS SETUP
   */
  const [loadedStatus, setLoadedStatus] = useState(false);

  useEffect(() => {
    setLoadedStatus(document.readyState === "complete");
    console.log("LoadedStauts: ", loadedStatus);

    // if (imagesArray.length === 14 && videosArray.length === 8) {
      // Initialize Lenis
      const lenis = new Lenis();

      // Use requestAnimationFrame to continuously update the scroll
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      console.log(`Set Lenis`);
    // }

    return () => {
      lenis.scrollTo(100);
      lenis.destroy();

      console.log("Reset and destroy Lenis");
    }
  }, [imagesArray, videosArray]);

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

  /**
   * Hover state
   */
  const [hover, setHover] = useState(false);

  return (
    <>
      <Header home about works contact />

      {!!isBrowser && <SectionIndicator />}

      <Suspense>
        <div id="page">
          {/* ----- INTRO ----- */}

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
                "Beauty of Time Passing" is a light installation that brings
                people closer to nature by displaying dynamically changing,
                digitally reproduced abstracted natural scenes. These scenes
                reflect unpredictable weather conditions, creating a visually
                pleasing, ever-evolving experience that mirrors nature’s
                constant change.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">
              <p className="text-[14px] text-[#C1C1C1]">
                #embrace unpredictability of nature
              </p>
              <p className="text-[14px] text-[#C1C1C1]">
                #touch point to nature
              </p>
              <p className="text-[14px] text-[#C1C1C1]">
                #lighting through sceneries
              </p>
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
              relentless, making our lives increasingly convenient and leading
              to more time spent in front of digital screens. As a result, our
              connection to nature diminishes, creating a disconnect between our
              modern lives and the natural environment. This reliance on
              technology can create a barrier to experiencing the beauty of the
              natural world. However, technology has the potential to bridge
              this gap. By drawing inspiration from how ancient Japanese
              cultures harmonised with nature within their architectural spaces,
              we can leverage modern innovations to foster a deeper connection
              to the natural environment, enriching our lives and well-being.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={BeautyOfTimePassingImage14}
              className="hidden-element mx-auto w-2/3 xl:w-1/2 h-auto object-cover"
            />
          </section>

          {/* ----- APPROACH ----- */}

          <section
            name="approach"
            className="pt-[124px] mx-[10vw] xl:mx-[240px]"
          >
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
              ambiance. As a Japanese designer residing in the Western world,
              the designer recognized that the light reflections created by
              window glass bricks can serve a similar purpose. Inspired by the
              role of traditional picture windows, glass bricks foster a sense
              of connection to nature, enhancing the overall ambiance of
              contemporary spaces.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={BeautyOfTimePassingImage15}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={BeautyOfTimePassingImage16}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="my-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Projecting 3D rendered digital sceneries
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              To brighten dim indoor architectural spaces while simultaneously
              integrating natural landscapes, 3D-rendered animations of nature
              are continuously displayed and projected onto the glass bricks.
              This technique enhances the environment by creating a dynamic
              interplay of light and imagery, fostering a connection with
              nature.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <div className="grid grid-cols-3 gap-6">
              <img
                src={BeautyOfTimePassingImage17}
                className="hidden-element grid-images object-cover h-[250px] xl:h-full"
              />
              <img
                src={BeautyOfTimePassingImage18}
                className="hidden-element grid-images object-cover h-[250px] xl:h-full"
              />
              <img
                src={BeautyOfTimePassingImage01}
                className="hidden-element grid-images object-cover h-[250px] xl:h-full"
              />
            </div>
          </section>

          <section className="my-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              “Realistic” moving visuals and dynamic changes
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Various stimuli, including scent and tactile sensations, can evoke
              a "sense of nature" in people, but moving visuals are among the
              most powerful elements in creating this connection. To achieve
              realistic moving visuals, 3D nature scenes were developed using
              Houdini, the industry-standard software for visual effects and
              physics simulations. These scenes are enhanced by transitioning
              through the seasons, from spring to winter, captured in
              approximately 30-second looping animations. This technique adds
              dynamism to the visuals, allowing viewers to experience the beauty
              of nature's cycles in a captivating way, fostering a deeper
              emotional connection to the natural world.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <video
              className="hidden-element mx-auto h-[70vh] xl:h-[85vh] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={BeautyOfTimePassingVideo01} type="video/mp4" />
            </video>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[200px]">
            <div className="grid grid-cols-4 gap-4">
              <img
                src={BeautyOfTimePassingImage19}
                className="hidden-element grid-images object-cover h-[250px] xl:h-full"
              />
              <img
                src={BeautyOfTimePassingImage20}
                className="hidden-element grid-images object-cover h-[250px] xl:h-full"
              />
              <img
                src={BeautyOfTimePassingImage21}
                className="hidden-element grid-images object-cover h-[250px] xl:h-full"
              />
              <img
                src={BeautyOfTimePassingImage22}
                className="hidden-element grid-images object-cover h-[250px] xl:h-full"
              />
            </div>
          </section>

          <section className="my-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Embracing unpredictable aspects of nature
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Getting closer to nature involves acknowledging its uncontrollable
              elements and incorporating them into our daily lives. For
              instance, sudden rain showers are often seen as annoying
              inconveniences in many cultures, but Japanese ukiyo-e artists,
              like Hiroshige Utagawa, embraced them as atmospheric,
              character-filled themes for their prints. Similarly, "The Beauty
              of Time Passing" adopts this perspective through technology. The
              3D nature scenes in this installation respond to real weather
              data, allowing elements like humidity to influence their
              appearance. On highly humid days, for example, the visuals become
              blurred, mirroring the natural world and fostering a deeper
              connection to its unpredictable beauty.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={BeautyOfTimePassingImage23}
              className="hidden-element mx-auto w-1/2 xl:w-1/3 h-auto object-cover"
            />
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <video
              className="hidden-element mx-auto h-[60vh] xl:h-[75vh] object-fit"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={BeautyOfTimePassingVideo02} type="video/mp4" />
            </video>
          </section>

          {/* ----- OUTCOME ----- */}

          <section
            name="outcome"
            className="pt-[124px] mx-[10vw] xl:mx-[240px]"
          >
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
              engaging visual momentum experience. The web application,
              developed using React and WebGL (three.js), enables dynamic
              interactions with the natural visuals based on real weather data.
              This innovative project was showcased at the Design Academy
              Eindhoven Graduation Show during Dutch Design Week (DDW) from
              October 21 to 29, 2023, at Heuvel Galerie, located in Eindhoven.
            </p>
          </section>

          <section className="mt-[120px] mb-[240px] mx-[10vw] xl:mx-[240px]">
            <video
              className="hidden-element mx-auto h-[70vh] xl:h-[90vh] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={BeautyOfTimePassingVideo03} type="video/mp4" />
            </video>
          </section>

          {!!isBrowser && (
            <section className="mt-[240px] mb-[120px] w-[100vw]">
              <div className="grid grid-cols-2 gap-0">
                <img
                  src={BeautyOfTimePassingImage01}
                  className="hidden-element grid-images object-cover h-full"
                />
                <img
                  src={BeautyOfTimePassingImage03}
                  className="hidden-element grid-images object-cover h-full"
                />
              </div>
            </section>
          )}

          {!!isMobile && (
            <>
              <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
                <img
                  src={BeautyOfTimePassingImage01}
                  className="hidden-element w-full h-auto object-cover"
                />
              </section>

              <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
                <img
                  src={BeautyOfTimePassingImage03}
                  className="hidden-element w-full h-auto object-cover"
                />
              </section>
            </>
          )}

          <section className="mt-[240px] mx-[10vw] xl:mx-[200px]">
            <div
              className={`grid ${
                isBrowser ? "grid-cols-2 grid-rows-2" : "grid-rows-4"
              } gap-10`}
            >
              <video
                className="hidden-element grid-images object-cover w-full h-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={BeautyOfTimePassingVideo05} type="video/mp4" />
              </video>
              <video
                className="hidden-element grid-images object-cover w-full h-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={BeautyOfTimePassingVideo06} type="video/mp4" />
              </video>
              <video
                className="hidden-element grid-images object-cover w-full h-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={BeautyOfTimePassingVideo07} type="video/mp4" />
              </video>
              <video
                className="hidden-element grid-images object-cover w-full h-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={BeautyOfTimePassingVideo08} type="video/mp4" />
              </video>
            </div>
          </section>

          <section className="mt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Virtual visit to the project at DDW 2023
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[32px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              With the below app, you can enter this light installation inside
              the 3D environment.
            </p>
          </section>

          <section className="mt-[64px] xl:mt-[18px] mx-[10vw] xl:mx-[240px]">
            <div
              className={`${
                hover ? "cursor-pointer" : ""
              } relative mx-auto w-[70vw] xl:w-[50vw] h-[30vh] xl:h-[65vh]`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() =>
                window.open(
                  "https://beautyoftimepassing-buildup-gs23.vercel.app/",
                  "_blank"
                )
              }
            >
              {!!hover && (
                <div className="absolute top-0 flex justify-center items-center z-20 w-full h-full bg-stone-50/35">
                  <h1 className="text-white text-[20px]">
                    Open the application
                  </h1>
                </div>
              )}
              <video
                className="hidden-element object-cover w-full h-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={BeautyOfTimePassingVideo04} type="video/mp4" />
              </video>
            </div>
          </section>

          <section className="my-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Press
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              The "Beauty of Time Passing" project was featured in Design Milk.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <div
              className={`${
                hover ? "cursor-pointer" : ""
              } relative mx-auto w-2/3 xl:w-1/2 h-auto`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() =>
                window.open(
                  "https://design-milk.com/ddw23-design-academy-eindhoven-graduates-at-the-heart-of-dutch-design/",
                  "_blank"
                )
              }
            >
              {!!hover && (
                <div className="absolute top-0 flex justify-center items-center z-20 w-full h-full bg-stone-950/35">
                  <h1 className="text-white text-[20px]">
                    Visit the Design Milk page
                  </h1>
                </div>
              )}
              <img
                src={BeautyOfTimePassingImage24}
                className="hidden-element  object-cover"
              />
            </div>
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
              reloadDocument={true}
            >
              <img
                src={InterventionInOurDisconnectionHeroImage}
                className="w-3/5 xl:w-2/5 h-auto object-cover opacity-50"
              />

              <p className="absolute top-[45%] text-[12px] xl:text-[18px] text-[#C1C1C1]">
                Explore the next project
              </p>
            </Link>
          </section>

          <section className="mt-[87px] pb-[80px] mx-[5vw] xl:mx-[240px]">
            {isBrowser ? (
              <div className="w-full flex flex-row justify-center gap-12">
                <Link
                  to="/"
                  className="relative flex flex-col items-center"
                  reloadDocument={true}
                >
                  <div className="w-[120px] xl:w-[175px] h-[120px] xl:h-[175px] border hover:bg-[#CC543A] rounded-full text-[#C1C1C1] hover:text-[#FFFFFF]">
                    <p className="absolute w-[120px] xl:w-[175px] text-center font-roboto top-[55px] xl:top-[78px] text-[12px] xl:text-[18px] ">
                      Back to "Atelier"
                    </p>
                  </div>
                </Link>
                <Link
                  to="/works"
                  className="relative flex flex-col items-center"
                  reloadDocument={true}
                >
                  <div className="w-[120px] xl:w-[175px] h-[120px] xl:h-[175px] border hover:bg-[#0F2540] rounded-full text-[#C1C1C1] hover:text-[#FFFFFF]">
                    <p className="absolute w-[120px] xl:w-[175px] text-center font-roboto top-[55px] xl:top-[78px] text-[12px] xl:text-[18px] ">
                      Back to "Works"
                    </p>
                  </div>
                </Link>
              </div>
            ) : (
              <Link
                to="/works"
                className="relative w-full flex flex-col items-center"
                reloadDocument={true}
              >
                <div className="w-[120px] xl:w-[175px] h-[120px] xl:h-[175px] border hover:bg-[#C1C1C1] rounded-full text-[#C1C1C1] hover:text-[#FFFFFF]">
                  <p className="absolute w-[120px] xl:w-[175px] text-center font-roboto top-[55px] xl:top-[78px] text-[12px] xl:text-[18px] ">
                    Back to "Works"
                  </p>
                </div>
              </Link>
            )}
          </section>
        </div>
      </Suspense>
    </>
  );
}
