import { Suspense, useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";

import "lenis/dist/lenis.css";

import DonutsUniverseHeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-donuts-universe.jpg";
import MarbleOnARollHeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-marble-on-a-roll.jpg";


export default function DonutsUniversePage() {
  /**
   * MOMENTUM SMOOTH SCROLLING - LENIS SETUP
   */
  const [loadedStatus, setLoadedStatus] = useState(false);

  useEffect(() => {
    setLoadedStatus(document.readyState === "complete");
    console.log("LoadedStauts: ", loadedStatus);

    // if (videosArray.length === 9) {
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

  return (
    <>
      <Header home about works contact />

      <Suspense>
        <div id="page">
          <section className="py-[76px] xl:pt-[148px] mx-[10vw] xl:mx-[240px]">
            <h1 className="project-title mb-[21px] xl:mb-[42px] font-serif text-[36px] xl:text-[72px] text-[#C1C1C1]">
              Donuts Universe
            </h1>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">
              <p className="text-[14px] text-[#C1C1C1]">#software01</p>
              <p className="text-[14px] text-[#C1C1C1]">#software02</p>
              <p className="text-[14px] text-[#C1C1C1]">#software03</p>
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
              to="/marble-race"
              className="relative w-full flex flex-col items-center"
              reloadDocument={true}
            >
              <img
                src={MarbleOnARollHeroImage}
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
              <div className="w-[120px] xl:w-[175px] h-[120px] xl:h-[175px] border hover:bg-[#C1C1C1] rounded-full text-[#C1C1C1] hover:text-[#FFFFFF]">
                <p className="absolute w-[120px] xl:w-[175px] text-center font-roboto top-[55px] xl:top-[78px] text-[12px] xl:text-[18px] ">
                  Back to "Works"
                </p>
              </div>
            </Link>
          </section>
        </div>
      </Suspense>
    </>
  );
}
