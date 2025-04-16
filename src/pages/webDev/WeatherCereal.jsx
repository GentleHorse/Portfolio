import { Suspense, useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import SectionIndicator from "../../components/sectionIndicator/SectionIndicator.jsx";

import "lenis/dist/lenis.css";

import WeatherCerealHeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-weather-cereal.jpg";
import NulZesCraftedDeMarktHeroImage from "../../../public/images/app-developments/nul-zes-crafted-de-markt/nul-zes-crafted-de-markt-image-07.jpg";

import ObjectRotterdamImage01 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-01.jpg";
import ObjectRotterdamImage02 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-02.jpg";
import ObjectRotterdamImage03 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-03.jpg";
import ObjectRotterdamImage04 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-04.jpg";
import ObjectRotterdamImage05 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-05.jpg";
import ObjectRotterdamImage06 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-06.jpg";
import ObjectRotterdamImage07 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-07.jpg";
import ObjectRotterdamImage08 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-08.jpg";
import ObjectRotterdamImage09 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-09.jpg";
import ObjectRotterdamImage10 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-10.jpg";
import ObjectRotterdamImage11 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-11.jpg";
import ObjectRotterdamImage12 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-12.jpg";
import ObjectRotterdamImage13 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-13.jpg";
import ObjectRotterdamImage14 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-14.jpg";
import ObjectRotterdamImage15 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-15.jpg";
import ObjectRotterdamImage16 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-16.jpg";
import ObjectRotterdamImage17 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-17.jpg";
import ObjectRotterdamImage18 from "../../../public/images/app-developments/object-rotterdam/object-rotterdam-image-18.jpg";

import ObjectRotterdamVideo01 from "../../../public/videos/object-rotterdam/object-rotterdam-01.mp4";
import ObjectRotterdamVideo02 from "../../../public/videos/object-rotterdam/object-rotterdam-02.mp4";

const IMAGES_ARRAY = [
  ObjectRotterdamImage01,
  ObjectRotterdamImage02,
  ObjectRotterdamImage03,
  ObjectRotterdamImage04,
  ObjectRotterdamImage05,
  ObjectRotterdamImage06,
  ObjectRotterdamImage07,
  ObjectRotterdamImage08,
  ObjectRotterdamImage09,
  ObjectRotterdamImage10,
  ObjectRotterdamImage11,
  ObjectRotterdamImage12,
  ObjectRotterdamImage13,
  ObjectRotterdamImage14,
  ObjectRotterdamImage15,
  ObjectRotterdamImage16,
  ObjectRotterdamImage17,
  ObjectRotterdamImage18,
];

const VIDEOS_ARRAY = [ObjectRotterdamVideo01, ObjectRotterdamVideo02];

export default function WeatherCerealPage() {
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

    // if (imagesArray.length === 18 && videosArray.length === 2) {
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
    };
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

          <section className="py-[76px] xl:pt-[148px] mx-[10vw] xl:mx-[240px]">
            <h1 className="project-title mb-[21px] xl:mb-[42px] font-serif text-[36px] xl:text-[72px] text-[#C1C1C1]">
              Weather Cereal
            </h1>
            <img
              src={WeatherCerealHeroImage}
              alt="Weather Cereal Hero Image"
              className="mb-[25px] xl:mb-[70px] w-full h-[200px] xl:h-[500px] object-cover"
            />
            <div className="flex flex-col xl:flex-row">
              <div className="flex-none w-auto xl:w-[350px]">
                <p className="mb-[4px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                  2025
                </p>
                <div>
                  <p className="mb-[20px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                    UX/UI Design
                    <br /> + 3D Modeling
                    <br /> + Web Development
                  </p>
                  <button
                    className="mt-0 xl:mt-10 mb-10 xl:mb-16 border-2 rounded-xl hover:bg-[#C1C1C1]"
                    onClick={() =>
                      window.open("https://weather-cereal.vercel.app/")
                    }
                  >
                    <p className="text-center mx-4 my-2 xl:px-2 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#C1C1C1] hover:text-[#ffffff]">
                      Launch Project
                    </p>
                  </button>
                </div>
              </div>

              <p className="mb-[36px] xl:mb-[72px] xl:grow text-[18px] xl:text-[28px] text-[#C1C1C1]">
                "Weather Cereal" is a 3D web application that presents a 7-day
                weather forecast in the style of a morning newspaper, complete
                with an animated cereal bowl beside it, recreating a familiar
                breakfast scene with a bit of joke.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">
              <p className="text-[14px] text-[#C1C1C1]">#weather forecast</p>
              <p className="text-[14px] text-[#C1C1C1]">
                #nostalgia of old style
              </p>
              <p className="text-[14px] text-[#C1C1C1]">#a joke to spark</p>
            </div>
          </section>

          <section className="mt-[87px]">
            <img
              src={ObjectRotterdamImage01}
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
              3D scene for "sitting, thinking, and working together"
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              The designer consistently notices a gap between off-site planning
              and the on-site experience of exhibitions and commercial events.
              While reproducing spaces using 3D software is a common solution,
              it can often feel overwhelming and discourage usage. By utilising
              WebGL and web-based technologies, he envisions creating 3D scenes
              that are more interactive, engaging, and accessible. This approach
              not only bridges the gap between virtual and real spaces but also
              fosters remote collaboration, encouraging people to "sit, think,
              and work together" easily, whether with or without 3D backgrounds.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <div className="mx-auto w-[70%]">
              <video
                className="hidden-element grid-images w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={ObjectRotterdamVideo01} type="video/mp4" />
              </video>
            </div>
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
              Detailed but optimised reproduction
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              This 3D application was developed to aid in planning a shared
              exhibition space for participants, including the designer. It
              needed to be tangible and precise to provide a “sense of the
              actual site.” The exhibition space and participants' artworks were
              faithfully recreated using 3D software, with item dimensions
              accurately reflecting real-world measurements. Afterward, the
              models were optimised for the web environment to ensure smooth
              performance without compromising visual fidelity, allowing
              participants to experience a realistic and detailed preview of the
              exhibition.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px] flex flex-col gap-10">
            <img
              src={ObjectRotterdamImage02}
              className="hidden-element w-full h-auto object-cover"
            />
            <img
              src={ObjectRotterdamImage03}
              className="hidden-element w-full h-auto object-cover"
            />
            <img
              src={ObjectRotterdamImage04}
              className="hidden-element w-full h-auto object-cover"
            />
            <img
              src={ObjectRotterdamImage05}
              className="hidden-element w-full h-auto object-cover"
            />
            <img
              src={ObjectRotterdamImage06}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Speed up communication, involve participants
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              One drawback of relying solely on 3D-rendered images for planning
              is the time it takes to communicate between 3D visualizers and
              those less familiar with creating 3D spaces. To address this, the
              web application allows participants to freely adjust compositions
              and layouts of art and design items, enabling them to test floor
              plans in real-time. This approach streamlines the process while
              preserving the “sense of the actual site,” encouraging interactive
              and collaborative experimentation.
            </p>
          </section>

          <section className="mt-[80px] mb-[240px] mx-[10vw] xl:mx-[240px]">
            <div className="mx-auto w-[70%]">
              <video
                className="hidden-element grid-images w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={ObjectRotterdamVideo02} type="video/mp4" />
              </video>
            </div>
          </section>

          <section className="mt-[120px] mx-[10vw] xl:mx-[240px] flex flex-col gap-32">
            <img
              src={ObjectRotterdamImage07}
              className="hidden-element w-full h-auto object-cover"
            />
            <img
              src={ObjectRotterdamImage08}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Immersive 3D digital documentation
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Each time he participates in exhibitions, he captures images and
              videos to document the experience. This serves two purposes:
              sharing the event with those unable to attend and gathering
              inspiration for future projects. However, he often finds that
              traditional documentation lacks the depth, mood, and atmosphere of
              the actual space. This realisation motivated him to develop a 3D
              explorable digital reproduction, allowing for a more immersive and
              accurate representation of the exhibition space, based on his
              visual records.
            </p>
          </section>

          <section className="mt-[120px] mb-[120px] w-[100vw]">
            <div className="grid grid-cols-2 grid-rows-3 gap-0">
              <img
                src={ObjectRotterdamImage09}
                className="hidden-element grid-images object-cover h-[140px] xl:h-full"
              />
              <img
                src={ObjectRotterdamImage10}
                className="hidden-element grid-images object-cover h-[140px] xl:h-full"
              />
              <img
                src={ObjectRotterdamImage11}
                className="hidden-element grid-images object-cover h-[140px] xl:h-full"
              />
              <img
                src={ObjectRotterdamImage12}
                className="hidden-element grid-images object-cover h-[140px] xl:h-full"
              />
              <img
                src={ObjectRotterdamImage13}
                className="hidden-element grid-images object-cover h-[140px] xl:h-full"
              />
              <img
                src={ObjectRotterdamImage14}
                className="hidden-element grid-images object-cover h-[140px] xl:h-full"
              />
            </div>
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
              One for floor planning, one for digital archiving
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              The designer ended up creating two applications. One facilitates
              collaboration with two other designers, enabling discussions on
              sharing and designing the exhibition space. The second app serves
              to archive the exhibition in 3D, capturing its layout while adding
              mood and atmosphere, preserving the experience beyond the event
              itself.
            </p>

            <div className="mt-10 xl:mt-0 mb-16 xl:mb-24 mr-10 flex flex-col xl:flex-row items-start gap-10 xl:gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://object-rotterdam-2024-floor-plan.vercel.app/"
                  )
                }
              >
                <p className="inline border-2 rounded-xl hover:bg-[#C1C1C1] text-center mr-4 my-2 px-6 py-4 font-light font-roboto text-[10px] xl:text-[15px] text-[#C1C1C1] hover:text-[#ffffff]">
                  Launch "Floor Planning"
                </p>
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://object-rotterdam-2024-digital-archive.vercel.app/"
                  )
                }
              >
                <p className="inline border-2 rounded-xl hover:bg-[#C1C1C1] text-center mr-4 my-2 px-6 py-4 font-light font-roboto text-[10px] xl:text-[15px] text-[#C1C1C1] hover:text-[#ffffff]">
                  Launch "Digital Archive"
                </p>
              </button>
            </div>
          </section>

          {!!isBrowser && (
            <section className="mt-[87px] w-[100vw]">
              <img
                src={ObjectRotterdamImage15}
                className="sticky top-0 w-full h-auto object-cover"
              />
              <img
                src={ObjectRotterdamImage16}
                className="sticky top-0 w-full h-auto object-cover"
              />
              <img
                src={ObjectRotterdamImage17}
                className="sticky top-0 w-full h-auto object-cover"
              />
              <img
                src={ObjectRotterdamImage18}
                className="sticky top-0 w-full h-auto object-cover"
              />
            </section>
          )}

          {!!isMobile && (
            <>
              <section className="mt-[87px] mx-[10vw] flex flex-col gap-12">
                <img
                  src={ObjectRotterdamImage15}
                  className="hidden-element w-full h-auto object-cover"
                />
                <img
                  src={ObjectRotterdamImage16}
                  className="hidden-element w-full h-auto object-cover"
                />
                <img
                  src={ObjectRotterdamImage17}
                  className="hidden-element w-full h-auto object-cover"
                />
                <img
                  src={ObjectRotterdamImage18}
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
              to="/nul-zes-crafted-de-markt"
              className="relative w-full flex flex-col items-center"
              reloadDocument={true}
            >
              <img
                src={NulZesCraftedDeMarktHeroImage}
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
