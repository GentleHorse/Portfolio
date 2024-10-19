import { useRef, useEffect, useState, Suspense } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import SectionIndicator from "../../components/sectionIndicator/SectionIndicator.jsx";

import "lenis/dist/lenis.css";

import ComfortingDinnerHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-comforting-dinner.jpg";
import ThreeDVisualsHeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-3-d-visuals.jpg";

import ComfortingDinnerImage01 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-01.jpg";
import ComfortingDinnerImage02 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-02.jpg";
import ComfortingDinnerImage03 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-03.jpg";
import ComfortingDinnerImage04 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-04.jpg";
import ComfortingDinnerImage05 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-05.jpg";
import ComfortingDinnerImage06 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-06.jpg";
import ComfortingDinnerImage07 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-07.jpg";
import ComfortingDinnerImage08 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-08.jpg";
import ComfortingDinnerImage09 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-09.jpg";
import ComfortingDinnerImage10 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-10.jpg";
import ComfortingDinnerImage11 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-11.jpg";
import ComfortingDinnerImage12 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-12.jpg";
import ComfortingDinnerImage13 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-13.jpg";
import ComfortingDinnerImage14 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-14.jpg";
import ComfortingDinnerImage15 from "../../../public/images/design-projects/comforting-dinner/comforting-dinner-image-15.jpg";

const IMAGES_ARRAY = [
  ComfortingDinnerImage01,
  ComfortingDinnerImage02,
  ComfortingDinnerImage03,
  ComfortingDinnerImage04,
  ComfortingDinnerImage05,
  ComfortingDinnerImage06,
  ComfortingDinnerImage07,
  ComfortingDinnerImage08,
  ComfortingDinnerImage09,
  ComfortingDinnerImage10,
  ComfortingDinnerImage11,
  ComfortingDinnerImage12,
  ComfortingDinnerImage13,
  ComfortingDinnerImage14,
  ComfortingDinnerImage15,
];

export default function ComfortingDinnerPage() {
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
   * MOMENTUM SMOOTH SCROLLING - LENIS SETUP
   */
  const [loadedStatus, setLoadedStatus] = useState(false);

  useEffect(() => {
    setLoadedStatus(document.readyState === "complete");
    console.log("LoadedStauts: ", loadedStatus);

    if (imagesArray.length === 15) {
      // Initialize Lenis
      const lenis = new Lenis();

      // Use requestAnimationFrame to continuously update the scroll
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      console.log(`Set Lenis`);
    }
  });

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

      <Suspense>
        <div id="page">
          {/* ----- INTRO ----- */}

          <section
            name="intro"
            className="pt-[76px] xl:pt-[148px] mx-[10vw] xl:mx-[240px]"
          >
            <h1 className="project-title mb-[21px] xl:mb-[42px] font-serif text-[36px] xl:text-[72px] text-[#C1C1C1]">
              Comforting Dinner
            </h1>
            <img
              src={ComfortingDinnerHeroImage}
              alt="Ambience of Light Hero Image"
              className="mb-[25px] xl:mb-[70px] w-full h-[200px] xl:h-[500px] object-cover"
            />
            <div className="flex flex-col xl:flex-row">
              <div className="flex-none w-auto xl:w-[350px]">
                <p className="mb-[4px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                  2020
                </p>
                <p className="mb-[20px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                  Product Design
                </p>
              </div>

              <p className="mb-[36px] xl:mb-[72px] xl:grow text-[18px] xl:text-[28px] text-[#C1C1C1]">
                Designed to engage the senses and enhance dining ambiance,
                "Comforting Dinner" is a unique tableware collection. In
                collaboration with Korean designer{" "}
                <a
                  href="https://studiokyungmilee.com/"
                  target="_blank"
                  className="font-bold"
                >
                  Kyungmi Lee
                </a>
                , the project seeks to create a comfortable, enriched food
                experience through atmosphere and thoughtful design.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">
              <p className="text-[14px] text-[#C1C1C1]">#tactile tableware</p>
              <p className="text-[14px] text-[#C1C1C1]">
                #multi-sensory experience
              </p>
              <p className="text-[14px] text-[#C1C1C1]">
                #cosy asian dining culture
              </p>
            </div>
          </section>

          <section className="mt-[87px]">
            <img
              src={ComfortingDinnerImage01}
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
              Multi-sensory tableware for a comforting atmosphere
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Having a meal engages all the senses—touch, sound, smell, sight,
              and taste—creating a rich, comforting atmosphere that enhances the
              dining experience. These sensory interactions often evoke personal
              memories and emotions, making the moment feel even more special.
              Tableware designed to stimulate the senses gradually, tailored to
              specific dishes, further enhances this experience. By thoughtfully
              opening up each sense through its form and function, such
              tableware can create warm, inviting dinner settings. It transforms
              an ordinary meal into a multi-sensory, memorable experience,
              fostering connection and comfort around the dining table.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={ComfortingDinnerImage02}
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
              Specially crafted for fusion dishes
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              While designing tableware, the designers realised that their food
              experiences shared similar atmospheres, rooted in their respective
              cultural dishes, which also showed notable similarities. Inspired
              by this, they decided to create fusion dishes, each paired with
              custom-designed tableware. The first fusion dish combined Japan’s
              savoury egg custard (<i>Chawan-mushi</i>) with Korea’s (
              <i>Gyeran-jjim</i>). The second merged Japan’s soybean paste soup
              (<i>Miso soup</i>) with Korea’s (<i>Jjigae</i>), and the third
              fused Japan’s savoury pancake (<i>Okonomiyaki</i>) with Korea’s (
              <i>Jeon</i>). Each piece of tableware was crafted specifically for
              these fusion dishes, enhancing both the culinary and cultural
              experience at the table.
            </p>
          </section>

          {!!isBrowser && (
            <section className="mt-[87px] w-[100vw]">
              <img
                src={ComfortingDinnerImage03}
                className="sticky top-0 w-full h-auto object-cover"
              />
              <img
                src={ComfortingDinnerImage04}
                className="sticky top-0 w-full h-auto object-cover"
              />
              <img
                src={ComfortingDinnerImage05}
                className="sticky top-0 w-full h-auto object-cover"
              />
            </section>
          )}

          {!!isMobile && (
            <>
              <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
                <img
                  src={ComfortingDinnerImage03}
                  className="hidden-element w-full h-auto object-cover"
                />
              </section>
              <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
                <img
                  src={ComfortingDinnerImage04}
                  className="hidden-element w-full h-auto object-cover"
                />
              </section>
              <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
                <img
                  src={ComfortingDinnerImage05}
                  className="hidden-element w-full h-auto object-cover"
                />
              </section>
            </>
          )}

          <section className="pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Stimulate senses one by one thought interactions
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Their ceramic pieces convey personal stories in an inviting way,
              designed to engage users’ senses individually—touch, smell, and
              sound. By doing so, the designers create a welcoming environment,
              turning ordinary moments into memorable food experiences,
              encouraging users to embrace and savour each element of the
              interaction.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <div className="grid grid-cols-3 gap-6">
              <img
                src={ComfortingDinnerImage06}
                className="hidden-element grid-images object-cover h-[120px] xl:h-full"
              />
              <img
                src={ComfortingDinnerImage07}
                className="hidden-element grid-images object-cover h-[120px] xl:h-full"
              />
              <img
                src={ComfortingDinnerImage08}
                className="hidden-element grid-images object-cover h-[120px] xl:h-full"
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
              Tactile tableware
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Designed for tactile interaction, each piece of tableware is
              carefully shaped to fit comfortably in the hand, encouraging users
              to connect with the objects in a more active, intentional way.{" "}
              <br /> <br />
              This project was exhibited at Dutch Design Week 2020.
            </p>
          </section>

          <section className="mt-[87px]">
            <div className="grid grid-cols-3 gap-0">
              <img
                src={ComfortingDinnerImage09}
                className="hidden-element grid-images object-cover h-[320px] xl:h-full"
              />
              <img
                src={ComfortingDinnerImage10}
                className="hidden-element grid-images object-cover h-[320px] xl:h-full"
              />
              <img
                src={ComfortingDinnerImage11}
                className="hidden-element grid-images object-cover h-[320px] xl:h-full"
              />
            </div>
          </section>

          <section>
            <div className="grid grid-cols-2 gap-0">
              <img
                src={ComfortingDinnerImage12}
                className="hidden-element grid-images object-cover h-[320px] xl:h-full"
              />
              <img
                src={ComfortingDinnerImage13}
                className="hidden-element grid-images object-cover h-[320px] xl:h-full"
              />
            </div>
          </section>

          <section className="mb-[180px]">
            <img
              src={ComfortingDinnerImage15}
              className="hidden-element w-full h-auto object-cover"
            />
            <img
              src={ComfortingDinnerImage14}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section>
            {/* <iframe
            src="https://player.vimeo.com/video/471709121?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="1280"
            height="720"
            allow="fullscreen"
            allowFullScreen
            className="mx-auto"
          /> */}
            {isBrowser ? (
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/471709121?h=b8610a8d47"
                width="1280"
                height="720"
                allowFullScreen
                className="mx-auto"
              ></iframe>
            ) : (
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/471709121?h=b8610a8d47"
                width="320"
                height="180"
                allowFullScreen
                className="mx-auto"
              ></iframe>
            )}
          </section>

          {/* -------------- TO NEXT PROJECT FOOTER PART ------------ */}

          <section className="my-[84px] xl:my-[124px] mx-[5vw] xl:mx-[240px]">
            <div className="w-full flex">
              <hr className="mb-[60px] mx-20 xl:mx-56 flex-grow border-[#C1C1C1]" />
            </div>
          </section>

          <section className="mt-0 xl:mt-[87px] mx-[5vw] xl:mx-[240px]">
            <Link
              to="/three-d-visuals"
              className="relative w-full flex flex-col items-center"
              reloadDocument={true}
            >
              <img
                src={ThreeDVisualsHeroImage}
                className="w-3/5 xl:w-2/5 h-auto object-cover opacity-50"
              />

              <p className="absolute top-[45%] text-[12px] xl:text-[18px] text-[#C1C1C1]">
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
      </Suspense>
    </>
  );
}
