import { useRef, useEffect, useState, Suspense } from "react";
import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";
import SectionIndicator from "../../components/sectionIndicator/SectionIndicator.jsx";

import "lenis/dist/lenis.css";

import MasuTypoHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-masu-typo.jpg";
import ComfortingDinnerHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-comforting-dinner.jpg";

import MasuTypoImage01 from "../../../public/images/design-projects/masu-typo/masu-typo-image-01.jpg";
import MasuTypoImage02 from "../../../public/images/design-projects/masu-typo/masu-typo-image-02.jpg";
import MasuTypoImage03 from "../../../public/images/design-projects/masu-typo/masu-typo-image-03.jpg";
import MasuTypoImage04 from "../../../public/images/design-projects/masu-typo/masu-typo-image-04.jpg";
import MasuTypoImage05 from "../../../public/images/design-projects/masu-typo/masu-typo-image-05.jpg";
import MasuTypoImage06 from "../../../public/images/design-projects/masu-typo/masu-typo-image-06.jpg";
import MasuTypoImage07 from "../../../public/images/design-projects/masu-typo/masu-typo-image-07.jpg";
import MasuTypoImage08 from "../../../public/images/design-projects/masu-typo/masu-typo-image-08.jpg";
import MasuTypoImage09 from "../../../public/images/design-projects/masu-typo/masu-typo-image-09.jpg";
import MasuTypoImage10 from "../../../public/images/design-projects/masu-typo/masu-typo-image-10.jpg";
import MasuTypoImage11 from "../../../public/images/design-projects/masu-typo/masu-typo-image-11.jpg";
import MasuTypoImage12 from "../../../public/images/design-projects/masu-typo/masu-typo-image-12.jpg";
import MasuTypoImage13 from "../../../public/images/design-projects/masu-typo/masu-typo-image-13.jpg";

import MasuTypoVideo01 from "../../../public/videos/masu-typo/masu-typo-01.mp4";
import MasuTypoVideo02 from "../../../public/videos/masu-typo/masu-typo-02.mp4";
import MasuTypoVideo03 from "../../../public/videos/masu-typo/masu-typo-03.mp4";
import MasuTypoVideo04 from "../../../public/videos/masu-typo/masu-typo-04.mp4";
import { SuspendingImage } from "@react-three/uikit";

const IMAGES_ARRAY = [
  MasuTypoImage01,
  MasuTypoImage02,
  MasuTypoImage03,
  MasuTypoImage04,
  MasuTypoImage05,
  MasuTypoImage06,
  MasuTypoImage07,
  MasuTypoImage08,
  MasuTypoImage09,
  MasuTypoImage10,
  MasuTypoImage11,
  MasuTypoImage12,
  MasuTypoImage13,
];

const VIDEOS_ARRAY = [
  MasuTypoVideo01,
  MasuTypoVideo02,
  MasuTypoVideo03,
  MasuTypoVideo04,
];

export default function MasuTypoPage() {
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

    // if (imagesArray.length === 13 && videosArray.length === 4) {
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
              Masu Typo
            </h1>
            <img
              src={MasuTypoHeroImage}
              alt="Ambience of Light Hero Image"
              className="mb-[25px] xl:mb-[70px] w-full h-[200px] xl:h-[500px] object-cover"
            />
            <div className="flex flex-col xl:flex-row">
              <div className="flex-none w-auto xl:w-[350px]">
                <p className="mb-[4px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                  2021
                </p>
                <p className="mb-[20px] xl:mb-[26px] text-[14px] xl:text-[24px] text-[#C1C1C1]">
                  Typography Design <br /> + Graphic Design <br /> + Interaction
                  Reseach
                </p>
              </div>

              <p className="mb-[36px] xl:mb-[72px] xl:grow text-[18px] xl:text-[28px] text-[#C1C1C1]">
                "Masu Typo" is a versatile mono grid typeface that offers
                flexibility in use, enabling users to create custom font
                families, graphic designs, and even interactive animations. Its
                structured design encourages creativity, allowing for both
                artistic expression and innovative typographic applications
                across various mediums.
              </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-4">
              <p className="text-[14px] text-[#C1C1C1]">#Japanese typography</p>
              <p className="text-[14px] text-[#C1C1C1]">
                #versatile typography system
              </p>
              <p className="text-[14px] text-[#C1C1C1]">
                #make digital element more tangible
              </p>
            </div>

            <div className="mt-14 flex flex-col xl:flex-row gap-2 xl:gap-4">
              <p className="text-[14px] xl:text-[20px] text-[#C1C1C1]">
                * <i>Masu</i> is the name of a unit used in a typical Japanese
                manuscript paper for writing which is filled with 200 to 400
                squares.
              </p>
            </div>
          </section>

          <section className="mt-[87px]">
            <img
              src={MasuTypoImage05}
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
              More versatile and playful alphabet
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              As a child, the designer developed a fascination for letters,
              inspired by the Japanese flexible mono grid typography system.
              This unique system allows Japanese characters to be written both
              horizontally and vertically, enabling creative freedom. He enjoyed
              drawing letters, stretching, and modifying their components to
              create new font families and transform them into graphics. This
              experience led him to ponder the possibilities of adapting a mono
              grid system for the alphabet. He envisioned a typography that
              would be more versatile and dynamic, opening up new avenues for
              design and expression.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <div className="grid grid-cols-1 xl:grid-cols-3 grid-rows-2 xl:grid-rows-1 gap-10 xl:gap-5">
              <img
                src={MasuTypoImage01}
                className="hidden-element grid-images xl:col-span-2 my-auto mx-auto xl:h-4/5 object-cover"
              />
              <img
                src={MasuTypoImage02}
                className="hidden-element grid-images mx-auto w-4/5 xl:w-full object-cover"
              />
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
              “Physical 3D to digital 2D” approach
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              The designer began by exploring how alphabet letters could fit
              into a square grid, inspired by the mono grid system that makes
              each Japanese letter fit perfectly within such grids. Instead of
              using digital tools, he worked hands-on with scissors, strips of
              paper, and foam boards to experiment. These physical prototypes
              led him to develop a mono grid alphabet system based on simple
              geometric shapes. His "physical 3D to digital 2D" approach gave
              the typography an organic, natural quality, as it adhered to
              physical principles like paper tension. This method resulted in
              letterforms that feel grounded in the tangible world.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <div className="grid grid-cols-2 grid-rows-1 gap-5">
              <video
                className="hidden-element grid-images object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={MasuTypoVideo01} type="video/mp4" />
              </video>
              <video
                className="hidden-element grid-images object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={MasuTypoVideo02} type="video/mp4" />
              </video>
            </div>
          </section>

          <section className="pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Simple geometric shapes
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Each letter in this typography is built from simple geometric
              shapes, like squares and circles, making it highly versatile. This
              design allows users not only to utilise the typography but also to
              customise it in unique ways. By modifying the positions, sizes,
              and colours of the geometric components, individuals can create
              their own font families, turning letters into personalised
              graphics or even animations. The flexibility of the design
              encourages playful experimentation with letter composition,
              enabling endless possibilities for creative expression, from
              static text to dynamic visual art. This adaptability makes the
              typography both functional and a creative tool for users.
            </p>
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 xl:grid-rows-1 gap-5">
              <img
                src={MasuTypoImage08}
                className="hidden-element grid-images mx-auto w-4/5 xl:w-full object-cover"
              />
              <img
                src={MasuTypoImage09}
                className="hidden-element grid-images mx-auto w-4/5 xl:w-full object-cover"
              />
            </div>
          </section>

          <section className="mt-[60px] xl:mt-[120px] mb-[87px] mx-[10vw] xl:mx-[240px]">
            <video
              className="hidden-element mx-auto w-auto h-[180px] xl:h-[540px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={MasuTypoVideo03} type="video/mp4" />
            </video>
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
              Mono grid typeface and its visual applications
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              Each alphabet letter is designed to fit within square grids,
              allowing writing in both vertical and horizontal directions. This
              structure also enables the creation of unique graphics by
              adjusting letter parts and experimenting with their compositions,
              offering greater flexibility and creativity in design and
              typography.
            </p>
          </section>

          <section className="my-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={MasuTypoImage10}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
            <img
              src={MasuTypoImage11}
              className="hidden-element w-full h-auto object-cover"
            />
          </section>

          {!!isBrowser && (
            <section className="mt-[240px] w-[100vw]">
              <img
                src={MasuTypoHeroImage}
                className="sticky top-0 w-full h-auto object-cover"
              />
              <img
                src={MasuTypoImage12}
                className="sticky top-0 w-full h-auto object-cover"
              />
              <img
                src={MasuTypoImage13}
                className="sticky top-0 w-full h-auto object-cover"
              />
            </section>
          )}

          {!!isMobile && (
            <>
              <section className="mt-[120px] mx-[10vw] xl:mx-[240px]">
                <img
                  src={MasuTypoHeroImage}
                  className="hidden-element w-full h-auto object-cover"
                />
              </section>
              <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
                <img
                  src={MasuTypoImage12}
                  className="hidden-element w-full h-auto object-cover"
                />
              </section>
              <section className="mt-[87px] mx-[10vw] xl:mx-[240px]">
                <img
                  src={MasuTypoImage13}
                  className="hidden-element w-full h-auto object-cover"
                />
              </section>
            </>
          )}

          <section className="pt-[124px] mx-[10vw] xl:mx-[240px]">
            <p className="hidden-element mb-[24px] xl:mb-[45px] font-bold text-[18px] xl:text-[24px] text-[#C1C1C1]">
              Control letters with your own hands via sensors
            </p>
            <p className="hidden-element mb-[18px] xl:mb-[125px] text-[16px] xl:text-[22px] text-[#C1C1C1]">
              The designer's use of letters made from simple geometric shapes
              allows for easy alterations, making it simple to create new font
              families or graphic designs. To showcase the flexibility and
              creative potential of this typography, the designer developed an
              interactive device. Equipped with various sensors, including
              membrane pressure and distance sensors, the device enables users
              to manipulate the typography on-screen. By hovering a hand over
              sensors, rotating knobs, and squeezing pressure points, users can
              control the letters' thickness, position, size, and structure.
              This hands-on approach highlights the dynamic and versatile
              possibilities of the geometric-based typography system.
            </p>
          </section>

          <section className="mt-[180px] mb-[120px] w-[100vw]">
            <div className="grid grid-cols-2 grid-rows-2 gap-0">
              <img
                src={MasuTypoImage03}
                className="hidden-element grid-images object-cover h-[180px] xl:h-full"
              />
              <img
                src={MasuTypoImage04}
                className="hidden-element grid-images object-cover h-[180px] xl:h-full"
              />
              <img
                src={MasuTypoImage05}
                className="hidden-element grid-images object-cover h-[180px] xl:h-full"
              />
              <img
                src={MasuTypoImage06}
                className="hidden-element grid-images object-cover h-[180px] xl:h-full"
              />
            </div>
          </section>

          <section className="mt-[60px] xl:mt-[120px] mb-[87px] mx-[10vw] xl:mx-[240px]">
            <video
              className="hidden-element w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={MasuTypoVideo04} type="video/mp4" />
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
              to="/comforting-dinner"
              className="relative w-full flex flex-col items-center"
              reloadDocument={true}
            >
              <img
                src={ComfortingDinnerHeroImage}
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
