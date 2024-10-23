import { Suspense, useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import SectionIndicator from "../../components/sectionIndicator/SectionIndicator.jsx";

import "lenis/dist/lenis.css";

import ObjectRotterdam2024HeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-object-rotterdam-2024.jpg";
import WeatherCerealHeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-weather-cereal.jpg";

export default function ObjectRotterdam2024Page() {
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
              OBJECT Rotterdam 2024
            </h1>
            <img
              src={ObjectRotterdam2024HeroImage}
              alt="Ambience of Light Hero Image"
              className="mb-[25px] xl:mb-[70px] w-full h-[200px] xl:h-[500px] object-cover"
            />
            <div className="flex flex-col xl:flex-row">
              <div className="flex-none w-auto xl:w-[350px]">
                <p className="mb-[4px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                  2024
                </p>
                <p className="mb-[20px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                  UX/UI Design
                  <br /> + 3D Design
                  <br /> + Web Development
                </p>

                <div className="mt-10 xl:mt-20 mb-16 xl:mb-10 mr-10 flex flex-col items-start gap-10 xl:gap-14">
                  <button
                    className=""
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
                    className=""
                    onClick={() =>
                      window.open(
                        "https://object-rotterdam-2024-digital-archive.vercel.app/"
                      )
                    }
                  >
                    <p className="inline border-2 rounded-xl hover:bg-[#C1C1C1] text-center mr-4 my-2 px-6 py-2 py-4 font-light font-roboto text-[10px] xl:text-[15px] text-[#C1C1C1] hover:text-[#ffffff]">
                      Launch "Digital Archive"
                    </p>
                  </button>
                </div>
              </div>

              <p className="mb-[36px] xl:mb-[72px] xl:grow text-[18px] xl:text-[28px] text-[#C1C1C1]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                cursus risus et est rhoncus tincidunt. Sed iaculis mattis enim,
                ac pellentesque est varius at. Phasellus viverra facilisis
                tellus, et dignissim turpis malesuada eu. Nam erat augue,
                tincidunt sed mauris ut, aliquam mattis quam. Aenean tincidunt
                ac risus in porttitor. Etiam.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">
              <p className="text-[14px] text-[#C1C1C1]">#keyword 01</p>
              <p className="text-[14px] text-[#C1C1C1]">#keyword 02</p>
              <p className="text-[14px] text-[#C1C1C1]">#keyword 03</p>
            </div>
          </section>

          <section className="mt-[87px]">
            <img
              src={ObjectRotterdam2024HeroImage}
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
              "CHALLENGE" sentence is here.
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a posuere lacus. Nunc iaculis maximus est sit amet gravida. Duis
              lacinia, risus nec imperdiet porta, eros libero tristique eros,
              quis laoreet dui sem vel velit. Pellentesque finibus efficitur
              facilisis. Duis gravida pellentesque nisl sed ultricies. Sed ac
              erat eget nibh consectetur rutrum a nec turpis. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Maecenas at ligula magna.
              Aenean eu ipsum tempor, tincidunt nisi id, feugiat risus
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={ObjectRotterdam2024HeroImage}
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
              "APPROACH" sentence is here.
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a posuere lacus. Nunc iaculis maximus est sit amet gravida. Duis
              lacinia, risus nec imperdiet porta, eros libero tristique eros,
              quis laoreet dui sem vel velit. Pellentesque finibus efficitur
              facilisis. Duis gravida pellentesque nisl sed ultricies. Sed ac
              erat eget nibh consectetur rutrum a nec turpis. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Maecenas at ligula magna.
              Aenean eu ipsum tempor, tincidunt nisi id, feugiat risus
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={ObjectRotterdam2024HeroImage}
              className="hidden-element w-full h-auto object-cover"
            />
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
              "OUTCOME" sentence is here.
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              a posuere lacus. Nunc iaculis maximus est sit amet gravida. Duis
              lacinia, risus nec imperdiet porta, eros libero tristique eros,
              quis laoreet dui sem vel velit. Pellentesque finibus efficitur
              facilisis. Duis gravida pellentesque nisl sed ultricies. Sed ac
              erat eget nibh consectetur rutrum a nec turpis. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Maecenas at ligula magna.
              Aenean eu ipsum tempor, tincidunt nisi id, feugiat risus
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={ObjectRotterdam2024HeroImage}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          {/* -------------- TO NEXT PROJECT FOOTER PART ------------ */}

          <section className="my-[84px] xl:my-[124px] mx-[5vw] xl:mx-[240px]">
            <div className="w-full flex">
              <hr className="mb-[60px] mx-20 xl:mx-56 flex-grow border-[#C1C1C1]" />
            </div>
          </section>

          <section className="mt-0 xl:mt-[87px] mx-[5vw] xl:mx-[240px]">
            <Link
              to="/weather-cereal"
              className="relative w-full flex flex-col items-center"
              reloadDocument={true}
            >
              <img
                src={WeatherCerealHeroImage}
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
