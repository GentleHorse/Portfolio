import { Suspense, useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";

import "lenis/dist/lenis.css";

import WeatherCerealHeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-weather-cereal.jpg";
import DonutsUniverseHeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-donuts-universe.jpg";

import WeatherCerealImage01 from "../../../public/images/app-developments/weather-cereal/weather-cereal-image-01.jpg";
import WeatherCerealImage02 from "../../../public/images/app-developments/weather-cereal/weather-cereal-image-02.jpg";
import WeatherCerealImage03 from "../../../public/images/app-developments/weather-cereal/weather-cereal-image-03.jpg";
import WeatherCerealImage04 from "../../../public/images/app-developments/weather-cereal/weather-cereal-image-04.jpg";

import WeatherCerealVideo01 from "../../../public/videos/weather-cereal/weather-cereal-01.mp4";

const IMAGES_ARRAY = [
  WeatherCerealImage01,
  WeatherCerealImage02,
  WeatherCerealImage03,
  WeatherCerealImage04,
];

const VIDEOS_ARRAY = [WeatherCerealVideo01];

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

    if (imagesArray.length === 4 & videosArray.length === 1) {
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

      <Suspense>
        <div id="page">
          <section className="py-[76px] xl:pt-[148px] mx-[10vw] xl:mx-[240px]">
            <h1 className="project-title mb-[21px] xl:mb-[42px] font-serif text-[36px] xl:text-[72px] text-[#C1C1C1]">
              Weather Cereal
            </h1>
            <img
              src={WeatherCerealHeroImage}
              alt="Ambience of Light Hero Image"
              className="mb-[25px] xl:mb-[70px] w-full h-[200px] xl:h-[500px] object-cover"
            />
            <div className="flex flex-col xl:flex-row">
              <div className="flex-none w-auto xl:w-[350px]">
                <p className="mb-[4px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                  2024
                </p>
                <div>
                  <p className="mb-[20px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                    3D Design
                    <br /> + Web Development
                  </p>
                  <button
                    className="mt-0 xl:mt-10 mb-10 xl:mb-16 border-2 rounded-xl hover:bg-[#C1C1C1]"
                    onClick={() =>
                      window.open("https://weather-3d-forecast.vercel.app/")
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

          <section className="mt-[120px] mb-[240px] mx-[10vw] xl:mx-[240px]">
            <div className="mx-auto w-full xl:w-[70%]">
              <video
                className="hidden-element grid-images w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={WeatherCerealVideo01} type="video/mp4" />
              </video>
            </div>
          </section>

          {!!isBrowser && (
            <section className="mt-[87px] w-[100vw]">
              <img
                src={WeatherCerealImage01}
                className="sticky top-0 w-full h-auto object-cover"
              />
              <img
                src={WeatherCerealImage02}
                className="sticky top-0 w-full h-auto object-cover"
              />
              <img
                src={WeatherCerealImage03}
                className="sticky top-0 w-full h-auto object-cover"
              />
              <img
                src={WeatherCerealImage04}
                className="sticky top-0 w-full h-auto object-cover"
              />
            </section>
          )}

          {!!isMobile && (
            <>
              <section className="mt-[87px] mx-[10vw] flex flex-col gap-12">
                <img
                  src={WeatherCerealImage01}
                  className="hidden-element w-full h-auto object-cover"
                />
                <img
                  src={WeatherCerealImage02}
                  className="hidden-element w-full h-auto object-cover"
                />
                <img
                  src={WeatherCerealImage03}
                  className="hidden-element w-full h-auto object-cover"
                />
                <img
                  src={WeatherCerealImage04}
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
              to="/donuts-universe"
              className="relative w-full flex flex-col items-center"
              reloadDocument={true}
            >
              <img
                src={DonutsUniverseHeroImage}
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
