import { Suspense, useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import SectionIndicator from "../../components/sectionIndicator/SectionIndicator.jsx";

import "lenis/dist/lenis.css";

import PortfolioWebsiteHeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-portfolio-website.jpg";
import ObjectRotterdam2024HeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-object-rotterdam-2024.jpg";

import PortfolioWebsiteImage01 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-01.jpg";
import PortfolioWebsiteImage02 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-02.jpg";
import PortfolioWebsiteImage03 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-03.jpg";
import PortfolioWebsiteImage04 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-04.jpg";
import PortfolioWebsiteImage05 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-05.jpg";
import PortfolioWebsiteImage06 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-06.jpg";
import PortfolioWebsiteImage07 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-07.jpg";

import PortfolioWebsiteVideo01 from "../../../public/videos/portfolio-website/portfolio-website-01.mp4";
import PortfolioWebsiteVideo02 from "../../../public/videos/portfolio-website/portfolio-website-02.mp4";
import PortfolioWebsiteVideo03 from "../../../public/videos/portfolio-website/portfolio-website-03.mp4";
import PortfolioWebsiteVideo04 from "../../../public/videos/portfolio-website/portfolio-website-04.mp4";
import PortfolioWebsiteVideo05 from "../../../public/videos/portfolio-website/portfolio-website-05.mp4";
import PortfolioWebsiteVideo06 from "../../../public/videos/portfolio-website/portfolio-website-06.mp4";
import PortfolioWebsiteVideo07 from "../../../public/videos/portfolio-website/portfolio-website-07.mp4";
import PortfolioWebsiteVideo08 from "../../../public/videos/portfolio-website/portfolio-website-08.mp4";

export default function PortfolioWebsitePage() {
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
              Portfolio Website
            </h1>
            <img
              src={PortfolioWebsiteHeroImage}
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
                    UX/UI Design
                    <br /> + 3D Design
                    <br /> + Web Development
                  </p>
                  <button
                    className="mt-0 xl:mt-10 mb-10 xl:mb-16 border-2 rounded-xl hover:bg-[#C1C1C1]"
                    onClick={() =>
                      window.location.replace("https://toshihito-endo.com/")
                    }
                  >
                    <p className="text-center mx-4 my-2 xl:px-2 py-1 xl:py-2 font-light font-roboto text-[10px] xl:text-[15px] text-[#C1C1C1] hover:text-[#ffffff]">
                      Launch Project
                    </p>
                  </button>
                </div>
              </div>

              <p className="mb-[36px] xl:mb-[72px] xl:grow text-[18px] xl:text-[28px] text-[#C1C1C1]">
                Toshihito Endo’s portfolio website is a 3D interactive website
                that reveals his personality, taste, and passions, which are
                often hidden behind his art and design. The site is designed to
                spark curiosity, encouraging visitors to engage with the content
                and actively explore his creative identity and work.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">
              <p className="text-[14px] text-[#C1C1C1]">
                #first person view game style
              </p>
              <p className="text-[14px] text-[#C1C1C1]">
                #playful and gratifying interaction
              </p>
              <p className="text-[14px] text-[#C1C1C1]">
                #embrace incomplete aspects
              </p>
            </div>
          </section>

          <section className="mt-[87px]">
            <img
              src={PortfolioWebsiteImage01}
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
              Stimulate curiosity through playful interactions
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              When creating the portfolio website, the designer aimed to go
              beyond simply displaying his projects. The main goal was to
              "stimulate curiosity" through playful interactions, as curiosity
              keeps viewers engaged and eager to explore further. By
              incorporating interactive and dynamic elements, the website
              fosters excitement and emotional connection. It not only showcases
              his work but also reflects his cohesive identity as a designer
              while embracing a variety of expressive styles.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px] grid grid-cols-2 xl:grid-cols-4 grid-rows-2 xl:grid-rows-1 gap-2">
            <video
              className="hidden-element grid-images w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={PortfolioWebsiteVideo01} type="video/mp4" />
            </video>
            <video
              className="hidden-element grid-images w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={PortfolioWebsiteVideo02} type="video/mp4" />
            </video>
            <video
              className="hidden-element grid-images w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={PortfolioWebsiteVideo03} type="video/mp4" />
            </video>
            <video
              className="hidden-element grid-images w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={PortfolioWebsiteVideo04} type="video/mp4" />
            </video>
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
              Let metaphors drive to form spaces
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              The designer finds inspiration in classic still life oil
              paintings, which sparked the idea of creating metaphor-driven
              spaces. Similar to how these paintings use carefully chosen
              symbolic objects arranged with purpose, the designer believes that
              a thoughtfully composed space can convey deeper meaning. By
              selecting and positioning items intentionally, the overall scene
              communicates much more than the individual objects themselves.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={PortfolioWebsiteImage02}
              className="hidden-element mx-auto w-2/3 xl:w-1/2 h-auto object-cover"
            />
            <p className="mt-2 text-center w-full z-20 text-[#C1C1C1] text-[12px] xl:text-[14px]">
              Pieter Claesz. {""}
              <i>Still Life with a Skull and a Writing Quill.</i>
              {""} 1628, The Metropolitan Museum of Art, New York.
            </p>
          </section>

          <section className="mt-[124px] pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Space for Design Objects
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[60px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Design projects are showcased within art painting frames,
              suggesting they should be viewed holistically, like scenes in
              paintings. However, you can pass through the frame into an open
              world where design objects stand freely. This symbolises that the
              frame invites exploration beyond comprehension, encouraging a
              shift in perspective and discovery of new possibilities.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={PortfolioWebsiteImage03}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="mt-[120px] mx-[10vw] xl:mx-[240px]">
            <div className="w-[80%] mx-auto my-32">
              <video
                className="hidden-element grid-images w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={PortfolioWebsiteVideo05} type="video/mp4" />
              </video>
            </div>
          </section>

          <section className="mt-[124px] pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Space for Digital Works
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[60px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Unfinished clay sculptures sit on worktables, a photo studio
              stands near analog TVs looping 3D animations, and foam board
              architectural models rest alongside a metal ruler, Stanley knife,
              and cutting mat. These objects embody the designer's mindset,
              reflecting his deep connection to digital elements as though they
              were physically tangible.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={PortfolioWebsiteImage04}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={PortfolioWebsiteImage05}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="mt-[120px] mx-[10vw] xl:mx-[240px]">
            <div className="w-[80%] mx-auto my-32">
              <video
                className="hidden-element grid-images w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={PortfolioWebsiteVideo06} type="video/mp4" />
              </video>
            </div>
          </section>

          <section className="mt-[124px] pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Make use of devices’ sensory features
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[60px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              People use electronic devices like laptops and smartphones daily,
              yet the potential of their subtle, sensory features is often
              overlooked due to their familiarity. The mouse, touchpad, or a
              smartphone’s gyroscope can be utilised to dynamically control
              camera angles in a 3D immersive scene, creating an engaging and
              exciting experience.
            </p>
          </section>

          <section className="mt-[120px] mb-[120px] mx-[10vw] xl:mx-[240px] grid grid-cols-2">
            <img
              src={PortfolioWebsiteImage06}
              className="hidden-element grid-images w-[70%] mx-auto my-auto object-cover"
            />
            <img
              src={PortfolioWebsiteImage07}
              className="hidden-element grid-images w-[70%] mx-auto my-auto object-cover"
            />
          </section>

          <section className="my-[240px] mx-[10vw] xl:mx-[240px]">
            <div className="w-[80%] mx-auto my-32">
              <video
                className="hidden-element grid-images w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={PortfolioWebsiteVideo07} type="video/mp4" />
              </video>
            </div>
          </section>

          <section className="my-[240px] mx-[10vw] xl:mx-[240px]">
            <video
              className="hidden-element grid-images mx-auto h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={PortfolioWebsiteVideo08} type="video/mp4" />
            </video>
          </section>

          <section className="mt-[124px] pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Design language for expressing the consistent identity
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[60px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Designing and developing a multi-page website with varied visuals,
              content, and interactions can easily lead to a lack of consistency
              and a disjointed identity. To avoid this, the website’s colour
              palette, interaction complexity, and 3D model materials were
              carefully coordinated, ensuring a uniform tone and cohesive
              quality throughout the entire design.
            </p>
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
              src={PortfolioWebsiteHeroImage}
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
              to="/object-rotterdam-2024"
              className="relative w-full flex flex-col items-center"
              reloadDocument={true}
            >
              <img
                src={ObjectRotterdam2024HeroImage}
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
