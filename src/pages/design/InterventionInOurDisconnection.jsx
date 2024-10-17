import { useRef, useEffect } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import SectionIndicator from "../../components/sectionIndicator/SectionIndicator.jsx";

import InterventionInOurDisconnectionHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-intervention-in-our-disconnection.jpg";
import MasuTypoHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-masu-typo.jpg";

import InterventionInOurDisconnectionImage01 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-01.jpg";
import InterventionInOurDisconnectionImage02 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-02.jpg";
import InterventionInOurDisconnectionImage03 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-03.jpg";
import InterventionInOurDisconnectionImage04 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-04.jpg";
import InterventionInOurDisconnectionImage05 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-05.jpg";
import InterventionInOurDisconnectionImage06 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-06.jpg";
import InterventionInOurDisconnectionImage07 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-07.jpg";
import InterventionInOurDisconnectionImage08 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-08.jpg";
import InterventionInOurDisconnectionImage09 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-09.jpg";
import InterventionInOurDisconnectionImage10 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-10.jpg";
import InterventionInOurDisconnectionImage11 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-11.jpg";
import InterventionInOurDisconnectionImage12 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-12.jpg";
import InterventionInOurDisconnectionImage13 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-13.jpg";
import InterventionInOurDisconnectionImage14 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-14.jpg";
import InterventionInOurDisconnectionImage15 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-15.jpg";
import InterventionInOurDisconnectionImage16 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-16.jpg";
import InterventionInOurDisconnectionImage17 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-17.jpg";
import InterventionInOurDisconnectionImage18 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-18.jpg";
import InterventionInOurDisconnectionImage19 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-19.jpg";
import InterventionInOurDisconnectionImage20 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-20.jpg";
import InterventionInOurDisconnectionImage21 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-21.jpg";
import InterventionInOurDisconnectionImage22 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-22.jpg";
import InterventionInOurDisconnectionImage23 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-23.jpg";
import InterventionInOurDisconnectionImage24 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-24.jpg";
import InterventionInOurDisconnectionImage25 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-25.jpg";
import InterventionInOurDisconnectionImage26 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-26.jpg";
import InterventionInOurDisconnectionImage27 from "../../../public/images/design-projects/intervention-in-our-disconnection/intervention-in-our-disconnection-image-27.jpg";

import InterventionInOurDisconnectionVideo01 from "../../../public/videos/intervention-in-our-disconnection/intervention-in-our-disconnection-01.mp4";

export default function InterventionInOurDisconnectionPage() {
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
            src={InterventionInOurDisconnectionHeroImage}
            alt="Ambience of Light Hero Image"
            className="mb-[25px] xl:mb-[70px] w-full h-[200px] xl:h-[500px] object-cover"
          />
          <div className="flex flex-col xl:flex-row">
            <div className="flex-none w-auto xl:w-[350px]">
              <p className="mb-[4px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                2021
              </p>
              <p className="mb-[20px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                Product Design
              </p>
            </div>

            <p className="mb-[36px] xl:mb-[72px] xl:grow text-[18px] xl:text-[28px] text-[#C1C1C1]">
              “Intervention in our Disconnection” is a unique book holder
              that celebrates the beauty of discarded industrial materials.
              Inspired by traditional Japanese craftsmanship, it encourages
              individuals to reconnect with raw materials, highlighting their
              potential and inviting a deeper appreciation for sustainability
              and creative reuse in everyday objects.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">
            <p className="text-[14px] text-[#C1C1C1]">#harmony in materials</p>
            <p className="text-[14px] text-[#C1C1C1]">
              #beauty of discarded industrial waste
            </p>
            <p className="text-[14px] text-[#C1C1C1]">
              #Japanese craftsmanship
            </p>
          </div>

          <div className="mt-14 flex flex-col xl:flex-row gap-2 xl:gap-4">
            <p className="text-[14px] xl:text-[20px] text-[#C1C1C1]">
              This project was in collaboration with the stone company in
              Eindhoven,{" "}
              <a
                href="https://galante.nl/"
                target="_blank"
                className="font-bold"
              >
                Mario Galante Natuursteen Eindhoven
              </a>
              .
            </p>
          </div>
        </section>

        <section className="mt-[87px]">
          <img
            src={InterventionInOurDisconnectionImage01}
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
            Untapped potential of discarded materials
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            The rapid pace of technological and industrial advancements has made
            production processes increasingly complex, distancing us from direct
            interaction with raw materials. This disconnect not only reduces
            opportunities to engage with these materials but also limits our
            ability to appreciate their inherent qualities. Industrial waste is
            a byproduct of this system. However, these discarded materials, with
            their unintended and unique shapes, possess untapped potential.
            Their irregular forms reveal a richness and beauty that can inspire
            creativity, offering a chance to reimagine waste as a valuable
            resource rather than something to be discarded.
          </p>
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={InterventionInOurDisconnectionImage02}
            className="hidden-element mx-auto w-2/3 xl:w-1/2 h-auto object-cover"
          />
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <div className="grid grid-cols-2 xl:grid-cols-4 grid-rows-6 xl:grid-rows-3 gap-6">
            <img
              src={InterventionInOurDisconnectionImage03}
              className="hidden-element grid-images object-cover h-[120px] xl:h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage04}
              className="hidden-element grid-images object-cover h-[120px] xl:h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage05}
              className="hidden-element grid-images object-cover h-[120px] xl:h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage06}
              className="hidden-element grid-images object-cover h-[120px] xl:h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage07}
              className="hidden-element grid-images object-cover h-[120px] xl:h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage08}
              className="hidden-element grid-images object-cover h-[120px] xl:h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage09}
              className="hidden-element grid-images object-cover h-[120px] xl:h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage10}
              className="hidden-element grid-images object-cover h-[120px] xl:h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage11}
              className="hidden-element grid-images object-cover h-[120px] xl:h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage12}
              className="hidden-element grid-images object-cover h-[120px] xl:h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage13}
              className="hidden-element grid-images object-cover h-[120px] xl:h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage14}
              className="hidden-element grid-images object-cover h-[120px] xl:h-full"
            />
          </div>
        </section>

        {/* ----- APPROACH ----- */}

        <section name="approach" className="pt-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[8px] xl:mb-[18px] font-montserrat text-[10px] xl:text-[14px] text-[#C1C1C1]">
            APPROACH
          </p>
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            Refer to Japanese traditional architecture technique
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            Each piece of marble stone waste has a distinct shape, with its most
            unique feature often found at the edges. To highlight this aspect,
            the designer made these edges the focal point of the product's
            connection, drawing inspiration from the traditional Japanese
            technique "<i>Hikaritsuke (光付け)</i> ." This method involves
            seamlessly joining two materials without gaps, preventing light from
            passing through. Historically, Hikaritsuke was used in temple and
            shrine foundations, where stone supported entire wooden structures.
            Craftsmen would precisely carve the edges of wooden beams to fit the
            stone's irregular surface, ensuring a perfect, gapless connection
            that emphasised strength and craftsmanship.
          </p>
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <img
            src={InterventionInOurDisconnectionImage15}
            className="hidden-element mx-auto w-2/3 xl:w-1/2 h-auto object-cover"
          />
          <p className="mt-2 text-center w-full z-20 text-[#C1C1C1]">
            https://www.dougukan.jp/
          </p>
        </section>

        <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <img
              src={InterventionInOurDisconnectionImage16}
              className="hidden-element grid-images object-cover h-auto xl:h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage17}
              className="hidden-element grid-images object-cover h-auto xl:h-full"
            />
          </div>
        </section>

        <section className="pt-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            Harmonise by addressing material qualities
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            Each piece of marble stone waste possesses a distinct, strong
            character. To preserve harmony when combining it with other
            materials, these materials must share a similar level of quality
            without overwhelming the design. The overall structure must remain
            balanced and not overly complex, ensuring a clean, unified
            appearance. As a result, the product design is intentionally simple,
            using only two materials: marble and wood. The wood surfaces are
            carefully scraped to emphasise their natural grain, complementing
            the marble's unique qualities. This minimalistic approach ensures
            that the rich textures of both materials shine without competing for
            attention.
          </p>
        </section>

        <section className="mt-[180px] mb-[120px] w-[100vw]">
          <div className="grid grid-cols-2 grid-rows-4 gap-0">
            <img
              src={InterventionInOurDisconnectionImage01}
              className="hidden-element grid-images object-cover h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage24}
              className="hidden-element grid-images object-cover h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage19}
              className="hidden-element grid-images object-cover h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage18}
              className="hidden-element grid-images object-cover h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage21}
              className="hidden-element grid-images object-cover h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage20}
              className="hidden-element grid-images object-cover h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage22}
              className="hidden-element grid-images object-cover h-full"
            />
            <img
              src={InterventionInOurDisconnectionImage23}
              className="hidden-element grid-images object-cover h-full"
            />
          </div>
        </section>

        {/* ----- OUTCOME ----- */}

        <section name="outcome" className="pt-[124px] mx-[10vw] xl:mx-[240px]">
          <p className="hidden-element mb-[8px] xl:mb-[18px] font-montserrat text-[10px] xl:text-[14px] text-[#C1C1C1]">
            OUTCOME
          </p>
          <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
            Easily constructed, non-glued book holders
          </p>
          <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
            To maintain harmony in the product's design, the designer created a
            series of book holders with minimal material alteration. Each
            component is unglued, allowing for easy assembly and disassembly.
            This approach invites users to engage directly with the raw
            materials, offering tactile experiences that reveal the natural
            beauty of the wood and stone. By encouraging interaction, the design
            fosters a deeper appreciation for the materials' unique qualities
            while providing practical functionality in a simple, elegant form.
          </p>
        </section>

        <section className="mt-[64px] xl:mb-[180px] mx-[10vw] xl:mx-[240px]">
          <video
            className="hidden-element mx-auto w-2/3 h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src={InterventionInOurDisconnectionVideo01}
              type="video/mp4"
            />
          </video>
        </section>

        {!!isBrowser && (
          <section className="mt-[87px] w-[100vw]">
            <img
              src={InterventionInOurDisconnectionHeroImage}
              className="sticky top-0 w-full h-auto object-cover"
            />
            <img
              src={InterventionInOurDisconnectionImage25}
              className="sticky top-0 w-full h-auto object-cover"
            />
            <img
              src={InterventionInOurDisconnectionImage26}
              className="sticky top-0 w-full h-auto object-cover"
            />
            <img
              src={InterventionInOurDisconnectionImage27}
              className="sticky top-0 w-full h-auto object-cover"
            />
          </section>
        )}

        {!!isMobile && (
          <>
            <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
              <img
                src={InterventionInOurDisconnectionHeroImage}
                className="hidden-element w-full h-auto object-cover"
              />
            </section>
            <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
              <img
                src={InterventionInOurDisconnectionImage25}
                className="hidden-element w-full h-auto object-cover"
              />
            </section>
            <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
              <img
                src={InterventionInOurDisconnectionImage26}
                className="hidden-element w-full h-auto object-cover"
              />
            </section>
            <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
              <img
                src={InterventionInOurDisconnectionImage27}
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
            to="/masu-typo"
            className="relative w-full flex flex-col items-center"
            reloadDocument={true}
          >
            <img
              src={MasuTypoHeroImage}
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
