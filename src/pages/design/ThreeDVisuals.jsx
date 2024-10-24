import { Suspense, useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";

import "lenis/dist/lenis.css";

import PortfolioWebsiteHeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-portfolio-website.jpg";

import ThreeDVisualVideo01 from "../../../public/videos/three-d-visuals/project-page/three-d-visuals-01.mp4";
import ThreeDVisualVideo02 from "../../../public/videos/three-d-visuals/project-page/three-d-visuals-02.mp4";
import ThreeDVisualVideo03 from "../../../public/videos/three-d-visuals/project-page/three-d-visuals-03.mp4";
import ThreeDVisualVideo04 from "../../../public/videos/three-d-visuals/project-page/three-d-visuals-04.mp4";
import ThreeDVisualVideo05 from "../../../public/videos/three-d-visuals/project-page/three-d-visuals-05.mp4";
import ThreeDVisualVideo06 from "../../../public/videos/three-d-visuals/project-page/three-d-visuals-06.mp4";
import ThreeDVisualVideo07 from "../../../public/videos/three-d-visuals/project-page/three-d-visuals-07.mp4";
import ThreeDVisualVideo08 from "../../../public/videos/three-d-visuals/project-page/three-d-visuals-08.mp4";
import ThreeDVisualVideo09 from "../../../public/videos/three-d-visuals/project-page/three-d-visuals-09.mp4";

const VIDEOS_ARRAY = [
  ThreeDVisualVideo01,
  ThreeDVisualVideo02,
  ThreeDVisualVideo03,
  ThreeDVisualVideo04,
  ThreeDVisualVideo05,
  ThreeDVisualVideo06,
  ThreeDVisualVideo07,
  ThreeDVisualVideo08,
  ThreeDVisualVideo09,
];

export default function ThreeDVisualsPage() {
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

    if (videosArray.length === 9) {
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
              3D Visuals
            </h1>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">
              <p className="text-[14px] text-[#C1C1C1]">#Blender</p>
              <p className="text-[14px] text-[#C1C1C1]">#Houdini</p>
              <p className="text-[14px] text-[#C1C1C1]">#Unreal Engine 5</p>
            </div>
          </section>

          <section>
            <video
              className="mx-auto w-full h-auto object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={ThreeDVisualVideo01} type="video/mp4" />
            </video>
            <video
              className="mx-auto w-full h-auto object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={ThreeDVisualVideo02} type="video/mp4" />
            </video>
          </section>

          <section className="grid grid-rows-3 grid-flow-col">
            <video className="w-[50vw] h-auto object-cover" autoPlay loop muted playsInline>
              <source src={ThreeDVisualVideo03} type="video/mp4" />
            </video>
            <video className="w-[50vw] h-auto object-cover" autoPlay loop muted playsInline>
              <source src={ThreeDVisualVideo04} type="video/mp4" />
            </video>
            <video className="w-[50vw] h-auto object-cover" autoPlay loop muted playsInline>
              <source src={ThreeDVisualVideo05} type="video/mp4" />
            </video>
            <video
              className="row-span-3 w-[50vw] h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={ThreeDVisualVideo06} type="video/mp4" />
            </video>
          </section>

          <section className="grid grid-cols-3">
            <video className="object-cover" autoPlay loop muted playsInline>
              <source src={ThreeDVisualVideo07} type="video/mp4" />
            </video>
            <video className="object-cover" autoPlay loop muted playsInline>
              <source src={ThreeDVisualVideo08} type="video/mp4" />
            </video>
            <video className="object-cover" autoPlay loop muted playsInline>
              <source src={ThreeDVisualVideo09} type="video/mp4" />
            </video>
          </section>

          {/* -------------- TO NEXT PROJECT FOOTER PART ------------ */}

          <section className="my-[84px] xl:my-[124px] mx-[5vw] xl:mx-[240px]">
            <div className="w-full flex">
              <hr className="mb-[60px] mx-20 xl:mx-56 flex-grow border-[#C1C1C1]" />
            </div>
          </section>

          <section className="mt-0 xl:mt-[87px] mx-[5vw] xl:mx-[240px]">
            <Link
              to="/portfolio-website"
              className="relative w-full flex flex-col items-center"
              reloadDocument={true}
            >
              <img
                src={PortfolioWebsiteHeroImage}
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
