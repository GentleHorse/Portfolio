import { useRef, useEffect } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import SectionIndicator from "../../components/sectionIndicator/SectionIndicator.jsx";

import ComfortingDinnerHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-comforting-dinner.jpg";
import ThreeDVisualsHeroImage from "../../../public/images/app-developments/__thumbnail-images/thumbnail-3-d-visuals.jpg";

export default function ComfortingDinnerPage() {
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
            Intervention in our Disconnection
          </h1>
          <img
            src={ComfortingDinnerHeroImage}
            alt="Ambience of Light Hero Image"
            className="mb-[25px] xl:mb-[70px] w-full h-[200px] xl:h-[500px] object-cover"
          />
          <div className="flex flex-col xl:flex-row">
            <div className="flex-none w-auto xl:w-[350px]">
              <p className="mb-[4px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                yyyy
              </p>
              <p className="mb-[20px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                Category Name
              </p>
            </div>

            <p className="mb-[36px] xl:mb-[72px] xl:grow text-[18px] xl:text-[28px] text-[#C1C1C1]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
              turpis ut quam semper tincidunt non eget erat. Quisque lobortis
              blandit felis nec venenatis. Aenean ac ornare justo. Morbi eget
              massa ornare, sodales augue nec, molestie diam. Nullam et mattis
              purus. Aliquam eu erat quis massa suscipit sodales nec in.
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
            src={ComfortingDinnerHeroImage}
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
            Here's the "challenge" title sentence
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            ipsum id mi congue viverra. Nunc velit magna, pulvinar quis porta
            et, ullamcorper in metus. Vestibulum molestie consequat ante, in
            euismod lacus tristique scelerisque. Phasellus vel finibus odio, sit
            amet rutrum risus. Nunc sit amet venenatis mauris. Nulla congue a
            nibh aliquam pretium. Cras eu velit ut ex condimentum lacinia. Etiam
            interdum sem id ligula dignissim, sed accumsan elit egestas. Vivamus
            non lacus ante. Praesent tempor dignissim lobortis. Aliquam sed leo
            justo. Nunc lectus nibh, mollis scelerisque eleifend volutpat,
            feugiat vitae elit. Proin fringilla diam id ipsum aliquet, quis
            scelerisque.
          </p>
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={ComfortingDinnerHeroImage}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        {/* ----- APPROACH ----- */}

        <section name="approach" className="pt-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[8px] xl:mb-[18px] font-montserrat text-[10px] xl:text-[14px] text-[#C1C1C1]">
            APPROACH
          </p>
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            Here's the "approach" title sentence
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            ipsum id mi congue viverra. Nunc velit magna, pulvinar quis porta
            et, ullamcorper in metus. Vestibulum molestie consequat ante, in
            euismod lacus tristique scelerisque. Phasellus vel finibus odio, sit
            amet rutrum risus. Nunc sit amet venenatis mauris. Nulla congue a
            nibh aliquam pretium. Cras eu velit ut ex condimentum lacinia. Etiam
            interdum sem id ligula dignissim, sed accumsan elit egestas. Vivamus
            non lacus ante. Praesent tempor dignissim lobortis. Aliquam sed leo
            justo. Nunc lectus nibh, mollis scelerisque eleifend volutpat,
            feugiat vitae elit. Proin fringilla diam id ipsum aliquet, quis
            scelerisque.
          </p>
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={ComfortingDinnerHeroImage}
            className="hidden-element mx-auto mb-14 xl:mb-56 w-auto h-[240px]  xl:h-[720px] object-cover"
          />
          <img
            src={ComfortingDinnerHeroImage}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        {/* ----- OUTCOME ----- */}

        <section name="outcome" className="pt-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[8px] xl:mb-[18px] font-montserrat text-[10px] xl:text-[14px] text-[#C1C1C1]">
            OUTCOME
          </p>
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            Here's the "outcome" title sentence
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            ipsum id mi congue viverra. Nunc velit magna, pulvinar quis porta
            et, ullamcorper in metus. Vestibulum molestie consequat ante, in
            euismod lacus tristique scelerisque. Phasellus vel finibus odio, sit
            amet rutrum risus. Nunc sit amet venenatis mauris. Nulla congue a
            nibh aliquam pretium. Cras eu velit ut ex condimentum lacinia. Etiam
            interdum sem id ligula dignissim, sed accumsan elit egestas. Vivamus
            non lacus ante. Praesent tempor dignissim lobortis. Aliquam sed leo
            justo. Nunc lectus nibh, mollis scelerisque eleifend volutpat,
            feugiat vitae elit. Proin fringilla diam id ipsum aliquet, quis
            scelerisque.
          </p>
        </section>

        <section className="my-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={ComfortingDinnerHeroImage}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={ComfortingDinnerHeroImage}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={ComfortingDinnerHeroImage}
            className="hidden-element w-full h-auto object-cover"
          />
        </section>

        {!!isBrowser && (
          <section className="mt-[87px] w-[100vw]">
            <img
              src={ComfortingDinnerHeroImage}
              className="sticky top-0 w-full h-auto object-cover"
            />
            <img
              src={ComfortingDinnerHeroImage}
              className="sticky top-0 w-full h-auto object-cover"
            />
          </section>
        )}

        {!!isMobile && (
          <>
            <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
              <img
                src={ComfortingDinnerHeroImage}
                className="hidden-element w-full h-auto object-cover"
              />
            </section>
            <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
              <img
                src={ComfortingDinnerHeroImage}
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
            to="/three-d-visuals"
            className="relative w-full flex flex-col items-center"
            reloadDocument={true}
          >
            <img
              src={ThreeDVisualsHeroImage}
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

