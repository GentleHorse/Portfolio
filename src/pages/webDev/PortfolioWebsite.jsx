import { Suspense, useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import SectionIndicator from "../../components/sectionIndicator/SectionIndicator.jsx";

import "lenis/dist/lenis.css";

import PortfolioWebsiteHeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-portfolio-website.jpg";
import WeatherCerealHeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-weather-cereal.jpg";

import PortfolioWebsiteImage01 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-01.jpg";
import PortfolioWebsiteImage02 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-02.jpg";
import PortfolioWebsiteImage03 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-03.jpg";
import PortfolioWebsiteImage04 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-04.jpg";
import PortfolioWebsiteImage05 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-05.jpg";
import PortfolioWebsiteImage06 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-06.jpg";
import PortfolioWebsiteImage07 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-07.jpg";
import PortfolioWebsiteImage08 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-08.jpg";
import PortfolioWebsiteImage09 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-09.jpg";
import PortfolioWebsiteImage10 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-10.jpg";
import PortfolioWebsiteImage11 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-11.jpg";
import PortfolioWebsiteImage12 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-12.jpg";
import PortfolioWebsiteImage13 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-13.jpg";
import PortfolioWebsiteImage14 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-14.jpg";
import PortfolioWebsiteImage15 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-15.jpg";
import PortfolioWebsiteImage16 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-16.jpg";
import PortfolioWebsiteImage17 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-17.jpg";
import PortfolioWebsiteImage18 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-18.jpg";
import PortfolioWebsiteImage19 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-19.jpg";
import PortfolioWebsiteImage20 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-20.jpg";
import PortfolioWebsiteImage21 from "../../../public/images/app-developments/portfolio-website/portfolio-website-image-21.jpg";

import PortfolioWebsiteVideo01 from "../../../public/videos/portfolio-website/portfolio-website-01.mp4";
import PortfolioWebsiteVideo02 from "../../../public/videos/portfolio-website/portfolio-website-02.mp4";
import PortfolioWebsiteVideo03 from "../../../public/videos/portfolio-website/portfolio-website-03.mp4";
import PortfolioWebsiteVideo04 from "../../../public/videos/portfolio-website/portfolio-website-04.mp4";
import PortfolioWebsiteVideo05 from "../../../public/videos/portfolio-website/portfolio-website-05.mp4";
import PortfolioWebsiteVideo06 from "../../../public/videos/portfolio-website/portfolio-website-06.mp4";
import PortfolioWebsiteVideo09 from "../../../public/videos/portfolio-website/portfolio-website-09.mp4";
import PortfolioWebsiteVideo10 from "../../../public/videos/portfolio-website/portfolio-website-10.mp4";

const IMAGES_ARRAY = [
  PortfolioWebsiteImage01,
  PortfolioWebsiteImage02,
  PortfolioWebsiteImage03,
  PortfolioWebsiteImage04,
  PortfolioWebsiteImage05,
  PortfolioWebsiteImage06,
  PortfolioWebsiteImage07,
  PortfolioWebsiteImage08,
  PortfolioWebsiteImage09,
  PortfolioWebsiteImage10,
  PortfolioWebsiteImage11,
  PortfolioWebsiteImage12,
  PortfolioWebsiteImage13,
  PortfolioWebsiteImage14,
  PortfolioWebsiteImage15,
  PortfolioWebsiteImage16,
  PortfolioWebsiteImage17,
  PortfolioWebsiteImage18,
  PortfolioWebsiteImage19,
  PortfolioWebsiteImage20,
  PortfolioWebsiteImage21,
];

const VIDEOS_ARRAY = [
  PortfolioWebsiteVideo01,
  PortfolioWebsiteVideo02,
  PortfolioWebsiteVideo03,
  PortfolioWebsiteVideo04,
  PortfolioWebsiteVideo05,
  PortfolioWebsiteVideo06,
  PortfolioWebsiteVideo09,
  PortfolioWebsiteVideo10,
];

export default function PortfolioWebsitePage() {
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

    // if (imagesArray.length === 16 && videosArray.length === 10) {
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

          <section
            name="intro"
            className="pt-[76px] xl:pt-[148px] mx-[10vw] xl:mx-[240px]"
          >
            <h1 className="project-title mb-[21px] xl:mb-[42px] font-serif text-[36px] xl:text-[72px] text-[#C1C1C1]">
              Portfolio Website
            </h1>
            <img
              src={PortfolioWebsiteHeroImage}
              alt="Portfolio Website Hero Image"
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
                    <br /> + Spatial Design
                    <br /> + 3D Modeling
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
                The portfolio website offers an interactive, game-like
                experience, unveiling the designer’s workspace and identity
                beyond his projects. It sparks curiosity, immersing visitors in
                his creative world while evoking a "sense of wonder" that
                encourages deeper exploration of his design journey and
                inspirations.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">
              <p className="text-[14px] text-[#C1C1C1]">#game-like portfolio</p>
              <p className="text-[14px] text-[#C1C1C1]">#sense of wonder</p>
              <p className="text-[14px] text-[#C1C1C1]">
                #behind the designer’s works
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
              Showing skills, passions through “game-feel” experience
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Traditional portfolios rely on text, images, and videos to
              showcase skills but fall short in conveying a designer’s expertise
              in spatial design, 3D visualization, and interactive web
              animations. A game format offers a more immersive alternative,
              allowing visitors to explore a carefully designed 3D space while
              engaging with dynamic web-based effects. This interactive approach
              not only highlights technical skills but also provides an engaging
              experience that reflects the designer’s creative vision and
              passion for digital environments. By blending exploration with
              interactivity, a game-based portfolio effectively communicates
              spatial storytelling and design capabilities in a way traditional
              formats cannot.
            </p>
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
                <source src={PortfolioWebsiteVideo01} type="video/mp4" />
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
              An ideal game format to evoke a "sense of wonder"
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Game design focuses on shaping a specific user experience. To
              create a "sense of wonder" in a calm, cozy, and relaxed way, the
              designer selected a 3D, first-person perspective. This format
              enhances immersion, allowing players to explore freely. The
              low-poly aesthetic further reinforces the serene atmosphere,
              offering a visually pleasing and soothing experience that aligns
              with the intended mood of the game.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={PortfolioWebsiteImage02}
              className="hidden-element mx-auto w-2/3 xl:w-1/2 h-auto object-cover"
            />
          </section>

          <section className="mt-[124px] pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Four different areas, four different “vibes”
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[60px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              In a 3D first-person game, the perception of space and atmosphere
              plays a key role in shaping user engagement and emotional
              response. Since each of the four areas has a unique theme, their
              design must be carefully crafted to enhance user interaction and
              immersion. The elements like object count, spatial density, size,
              form, and lighting should work together to effectively communicate
              each theme. By tailoring these elements, each area creates a
              distinct atmosphere designed to evoke specific emotions, ensuring
              a meaningful and immersive experience for players as they navigate
              through the game’s world.
            </p>
          </section>

          <section className="mt-[32px] pt-[32px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element underline mb-[10px] xl:mb-[18px] font-bold text-[12px] xl:text-[18px] text-[#C1C1C1]">
              Work Area
            </p>
            <div className="mb-[10px] xl:mb-[20px] text-[10.5px] xl:text-[18px] text-[#C1C1C1]">
              <p className="hidden-element">
                <span className="font-bold">Theme: </span>work environment with
                tools
              </p>
              <p className="hidden-element">
                <span className="font-bold">Atmosphere: </span>cozy, neat,
                organized, focused
              </p>
              <p className="hidden-element">
                <span className="font-bold">Space: </span>dense, roughly
                organized objects, small spacing between objects
              </p>
            </div>
          </section>

          <section className="mt-[40px] mx-[10vw] xl:mx-[240px]">
            <img
              src={PortfolioWebsiteImage03}
              className="hidden-element w-full h-auto object-cover mb-10"
            />
            <img
              src={PortfolioWebsiteImage04}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="mt-[32px] pt-[32px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element underline mb-[10px] xl:mb-[18px] font-bold text-[12px] xl:text-[18px] text-[#C1C1C1]">
              Virtual Area
            </p>
            <div className="mb-[10px] xl:mb-[25px] text-[10.5px] xl:text-[18px] text-[#C1C1C1]">
              <p className="hidden-element">
                <span className="font-bold">Theme: </span>3D web applications,
                3D motion visuals
              </p>
              <p className="hidden-element">
                <span className="font-bold">Atmosphere: </span>open, mysterious,
                virtual, dark, calculated, imaginative
              </p>
              <p className="hidden-element">
                <span className="font-bold">Space: </span>spacious, grid to
                emphasize the continuity of the area, fog to hide the room edges
                and the room form, big spacing between objects, spotlighted
                objects
              </p>
            </div>
          </section>

          <section className="mt-[40px] mx-[10vw] xl:mx-[240px]">
            <img
              src={PortfolioWebsiteImage05}
              className="hidden-element w-full h-auto object-cover mb-10"
            />
            <img
              src={PortfolioWebsiteImage06}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="mt-[32px] pt-[32px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element underline mb-[10px] xl:mb-[18px] font-bold text-[12px] xl:text-[18px] text-[#C1C1C1]">
              Museum Area
            </p>
            <div className="mb-[10px] xl:mb-[25px] text-[10.5px] xl:text-[18px] text-[#C1C1C1]">
              <p className="hidden-element">
                <span className="font-bold">Theme: </span>the designer’s origin
                and identity
              </p>
              <p className="hidden-element">
                <span className="font-bold">Atmosphere: </span>open, clean,
                museum-like, gallery-like, relaxed, calm, slow, tranquil
              </p>
              <p className="hidden-element">
                <span className="font-bold">Space: </span>spacious, big spacing
                between objects, spotlighted objects, kinetic wall sculpture
                animation for slow, dynamic ‘breathing’ vibe in space, grid
                frame for emphasizing the sculpture movements
              </p>
            </div>
          </section>

          <section className="mt-[40px] mx-[10vw] xl:mx-[240px]">
            <img
              src={PortfolioWebsiteImage07}
              className="hidden-element w-full h-auto object-cover mb-10"
            />
            <img
              src={PortfolioWebsiteImage08}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="mt-[32px] pt-[32px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element underline mb-[10px] xl:mb-[18px] font-bold text-[12px] xl:text-[18px] text-[#C1C1C1]">
              Garden Area
            </p>
            <div className="mb-[10px] xl:mb-[25px] text-[10.5px] xl:text-[18px] text-[#C1C1C1]">
              <p className="hidden-element">
                <span className="font-bold">Theme: </span>design products and
                art installation
              </p>
              <p className="hidden-element">
                <span className="font-bold">Atmosphere: </span>open, mysterious,
                dark, imaginative, surreal, dreamlike, floating
              </p>
              <p className="hidden-element">
                <span className="font-bold">Space: </span>spacious, uniform
                colored ground and sky for sense of floating, big spacing
                between objects, spotlighted objects, unrealistic scaled objects
              </p>
            </div>
          </section>

          <section className="mt-[40px] mx-[10vw] xl:mx-[240px]">
            <img
              src={PortfolioWebsiteImage09}
              className="hidden-element w-full h-auto object-cover mb-10"
            />
            <img
              src={PortfolioWebsiteImage10}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="mt-[124px] pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Provide details at the right moment and place
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[60px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              To create a sense of wonder properly, users should feel a sense of
              achievement as they uncover information step by step on their own.
              This gradual discovery process enhances engagement and curiosity.
              To achieve this, detailed information is only revealed when users
              approach target objects closely.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <div className="grid grid-cols-3 gap-6">
              <img
                src={PortfolioWebsiteImage11}
                className="hidden-element grid-images object-cover h-[120px] xl:h-full"
              />
              <img
                src={PortfolioWebsiteImage12}
                className="hidden-element grid-images object-cover h-[120px] xl:h-full"
              />
              <img
                src={PortfolioWebsiteImage13}
                className="hidden-element grid-images object-cover h-[120px] xl:h-full"
              />
            </div>
          </section>

          <section className="mt-[124px] pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Device-specific controls define different experiences
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[60px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Responsive design is widely used to ensure a consistent user
              experience across devices, but interactions differ significantly
              based on whether someone is using a laptop, tablet, or smartphone.
              We often prioritize uniform content across all platforms,
              overlooking the unique sensory features each device offers. By
              designing distinct experiences for different devices and making
              use of their specific controls, we can explore new creative
              possibilities and enhance user engagement in a more natural and
              intuitive way.
            </p>
          </section>

          <section className="mt-[32px] pt-[32px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element underline mb-[10px] xl:mb-[18px] font-bold text-[12px] xl:text-[18px] text-[#C1C1C1]">
              Laptop, desktop computer
            </p>
            <div className="mb-[10px] xl:mb-[25px] text-[10.5px] xl:text-[18px] text-[#C1C1C1]">
              <p className="hidden-element">
                <span className="font-bold">Device: </span>touchpad, mouse
              </p>
              <p className="hidden-element">
                <span className="font-bold">Control: </span> moving the device
                positions on 2D plane
              </p>
              <p className="hidden-element">
                <span className="font-bold">Application Response: </span>
                changing the camera angle
              </p>
              <p className="hidden-element">
                <span className="font-bold">Effects: </span>
                looking around to explore the surroundings, similar to
                real-world perception
              </p>
            </div>
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
                <source src={PortfolioWebsiteVideo02} type="video/mp4" />
              </video>
            </div>
          </section>

          <section className="mt-[32px] pt-[32px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element underline mb-[10px] xl:mb-[18px] font-bold text-[12px] xl:text-[18px] text-[#C1C1C1]">
              Tablet, smartphone
            </p>
            <div className="mb-[10px] xl:mb-[25px] text-[10.5px] xl:text-[18px] text-[#C1C1C1]">
              <p className="hidden-element">
                <span className="font-bold">Device: </span>built-in gyroscope
              </p>
              <p className="hidden-element">
                <span className="font-bold">Control: </span> rotating the device
              </p>
              <p className="hidden-element">
                <span className="font-bold">Application Response: </span>
                rotating the camera and the object
              </p>
              <p className="hidden-element">
                <span className="font-bold">Effects: </span>
                rotating the entire digital environment as though the player is
                in charge
              </p>
            </div>
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
                <source src={PortfolioWebsiteVideo03} type="video/mp4" />
              </video>
            </div>
          </section>

          <section className="mt-[124px] pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Other ways of showing skills, passions for web-based interactive
              animations
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[60px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              This portfolio website is a multi-page web app, perfect for
              showing off the designer’s passion for web-based interactive
              creations in multiple ways. Each page features subtle interactive
              animations that enhance the overall vibe without overshadowing the
              main content. It shows how web animations can be used creatively
              to add atmosphere and elevate user experience, without being
              distracting.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <div className="grid grid-cols-3 gap-6">
              <video
                className="hidden-element grid-images object-cover h-[120px] xl:h-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={PortfolioWebsiteVideo04} type="video/mp4" />
              </video>
              <video
                className="hidden-element grid-images object-cover h-[120px] xl:h-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={PortfolioWebsiteVideo05} type="video/mp4" />
              </video>
              <video
                className="hidden-element grid-images object-cover h-[120px] xl:h-full"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={PortfolioWebsiteVideo06} type="video/mp4" />
              </video>
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
              Fully crafted 3D objects and space models
            </p>
            <p className="hidden-element mb-[20px] xl:mb-[40px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              This portfolio website showcases the designer's love for 3D space
              design, with almost all the 3D models created from scratch in
              Blender 4.3. He also added touches inspired by Japanese culture
              and traditional architecture, using a classic Japanese color
              palette to subtly reflect his roots. This blend of modern design
              with cultural elements creates a unique and personal touch, giving
              the site an extra layer of meaning while still focusing on his
              skills and creativity in 3D design.
            </p>
          </section>

          <section className="mt-[40px] mx-[10vw] xl:mx-[240px]">
            <img
              src={PortfolioWebsiteImage14}
              className="hidden-element w-full h-auto object-cover mb-10"
            />
            <img
              src={PortfolioWebsiteImage15}
              className="hidden-element w-full h-auto object-cover mb-10"
            />
            <img
              src={PortfolioWebsiteImage16}
              className="hidden-element w-full h-auto object-cover mb-10"
            />
            <img
              src={PortfolioWebsiteImage17}
              className="hidden-element w-full h-auto object-cover mb-10"
            />
          </section>

          <section className="pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Optimization and integration strategies for web environments
            </p>
            <p className="hidden-element mb-[20px] xl:mb-[40px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              This website focuses on delivering the best user experience, so
              optimizing performance while keeping 3D visuals sharp is key. To
              make that happen, a few steps are crucial: reducing the polygons
              of each 3D model in Blender, exporting them without materials,
              then baking all the materials into one big texture image.
              Afterward, the models are imported into the 3D web environment. To
              keep things running smoothly, expensive performance elements like
              transmission materials or heavy post-processing effects should be
              avoided. The goal is a smooth, high-quality experience for users.
            </p>
          </section>

          <section className="mt-[40px] mx-[10vw] xl:mx-[240px]">
            <img
              src={PortfolioWebsiteImage18}
              className="hidden-element w-full h-auto object-cover mb-10"
            />
            <img
              src={PortfolioWebsiteImage19}
              className="hidden-element w-full h-auto object-cover mb-10"
            />
            <img
              src={PortfolioWebsiteImage20}
              className="hidden-element w-full h-auto object-cover mb-10"
            />
          </section>

          <section className="pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              3D physics engine for “game-feel” experience
            </p>
            <p className="hidden-element mb-[20px] xl:mb-[40px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              The designer used the Rapier physics engine to set up collision
              objects that create walkable paths, define areas to explore, and
              trigger info text pop-ups. Getting the collision objects just
              right was crucial for the overall user experience, so the designer
              took extra care, testing each one to make sure everything worked
              smoothly and felt natural.
            </p>
          </section>

          <section className="mt-[40px] mx-[10vw] xl:mx-[240px]">
            <img
              src={PortfolioWebsiteImage21}
              className="hidden-element w-full h-auto object-cover mb-10"
            />
          </section>

          <section className="pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Using shaders for dynamic animations
            </p>
            <p className="hidden-element mb-[20px] xl:mb-[40px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              A big advantage of animating on the web is that you can create
              dynamic animations with simple steps. It’s much trickier to pull
              off in 3D software while keeping smooth frame rates, making web
              animation a more flexible option for certain projects.
            </p>
          </section>

          <section className="mt-[120px] mx-[10vw] xl:mx-[240px]">
            <div className="w-[80%] mx-auto my-32">
              <video
                className="hidden-element grid-images w-full object-cover mb-10"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={PortfolioWebsiteVideo09} type="video/mp4" />
              </video>
              <video
                className="hidden-element grid-images w-full object-cover mb-10"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={PortfolioWebsiteVideo10} type="video/mp4" />
              </video>
            </div>
          </section>

          {/* ----- PROJECT LAUNCH BUTTON ----- */}

          <section className="pt-[124px] mx-[10vw] xl:mx-[240px] flex flex-col">
            <button
              className="hidden-element mx-[10vw] xl:mx-[320px] mb-10 xl:mb-16 border-2 rounded-xl hover:bg-[#C1C1C1]"
              onClick={() =>
                window.location.replace("https://toshihito-endo.com/")
              }
            >
              <p className="text-center mx-4 my-2 xl:px-2 py-1 xl:py-2 font-light font-roboto text-[14px] xl:text-[20px] text-[#C1C1C1] hover:text-[#ffffff]">
                Launch Project
              </p>
            </button>
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
