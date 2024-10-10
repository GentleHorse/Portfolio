import Lenis from "lenis";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import SectionIndicator from "../../components/sectionIndicator/SectionIndicator.jsx";

import AmbienceOfLightHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-ambience-of-light.jpg";
import BeautyOfTimePassingHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";
import InterventionInOurDisconnectionHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-intervention-in-our-disconnection.jpg";

import BeautyOfTimePassingImage11 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-11.jpg";
import BeautyOfTimePassingImage12 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-12.jpg";
import BeautyOfTimePassingImage13 from "../../../public/images/design-projects/beauty-of-time-passing/beauty-of-time-passing-image-13.jpg";

export default function BeautyOfTimePassingPage() {
  /**
   * MOMENTUM SMOOTH SCROLLING - LENIS SETUP
   */

  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  

  return (
    <>
      <Header home about works contact />

      <SectionIndicator />

      <div id="page">
        <section id="intro" className="pt-[148px] mx-[240px]">
          <h1 className="mb-[42px] font-serif text-[72px] text-[#C1C1C1]">
            Beauty of Time Passing
          </h1>
          <img
            src={BeautyOfTimePassingHeroImage}
            alt="Ambience of Light Hero Image"
            className="mb-[70px] w-full h-[500px] object-cover"
          />
          <div className="flex">
            <div className="flex-none w-[350px]">
              <p className="mb-[26px] text-[24px] text-[#C1C1C1]">2023</p>
              <p className="text-[24px] text-[#C1C1C1]">Installation</p>
            </div>

            <p className="mb-[72px] grow text-[28px] text-[#C1C1C1]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempus ante eget lacus lobortis tempor. Quisque nisi ante,
              suscipit id lorem sed, posuere posuere leo. Nullam nulla ligula,
              euismod non dapibus quis, aliquet ac quam. Nullam sed auctor eros.
              Pellentesque scelerisque, lectus sed tristique rutrum, augue risus
              cursus nulla, sed.
            </p>
          </div>
          <div className="flex gap-4">
            <p className="text-[20px] text-[#C1C1C1]">#keyword 01</p>
            <p className="text-[20px] text-[#C1C1C1]">#keyword 02</p>
            <p className="text-[20px] text-[#C1C1C1]">#keyword 03</p>
          </div>
        </section>

        <section className="mt-[87px]">
          <img
            src={BeautyOfTimePassingImage13}
            className="w-full h-[540px] object-cover"
          />
        </section>

        <section id="challenge" className="py-[124px] mx-[240px]">
          <p className="mb-[18x] font-montserrat text-[14px] text-[#C1C1C1]">
            CHALLENGE
          </p>
          <p className="mb-[45px] font-bold text-[24px] text-[#C1C1C1]">
            Challenge topic summary sentence
          </p>
          <p className="mb-[125px] text-[22px] text-[#C1C1C1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            mauris felis, vehicula sed mauris non, luctus vehicula enim. Proin
            eget blandit ex. Ut at malesuada mauris, sit amet faucibus lacus.
            Sed lacinia, eros tincidunt bibendum vehicula, nisl sapien varius
            enim, eu blandit augue lectus vel justo. Nulla rutrum volutpat ante
            sed tincidunt. Praesent a mi ultrices magna vestibulum sagittis non
            ac diam. Pellentesque vitae bibendum magna. Vivamus libero diam,
            semper et auctor quis, interdum eget magna. Nam ut odio eu sapien
            pellentesque viverra sed a risus. Morbi at metus sed nunc luctus
            vulputate nec id arcu. Vivamus imperdiet commodo est
          </p>
        </section>

        <section className="mt-[87px] mx-[240px]">
          <img
            src={BeautyOfTimePassingHeroImage}
            className="w-full h-auto object-cover"
          />
        </section>

        <section id="approach" className="py-[124px] mx-[240px]">
          <p className="mb-[18x] font-montserrat text-[14px] text-[#C1C1C1]">
            APPROACH
          </p>
          <p className="mb-[45px] font-bold text-[24px] text-[#C1C1C1]">
            Approach topic summary sentence 01
          </p>
          <p className="mb-[125px] text-[22px] text-[#C1C1C1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            mauris felis, vehicula sed mauris non, luctus vehicula enim. Proin
            eget blandit ex. Ut at malesuada mauris, sit amet faucibus lacus.
            Sed lacinia, eros tincidunt bibendum vehicula, nisl sapien varius
            enim, eu blandit augue lectus vel justo. Nulla rutrum volutpat ante
            sed tincidunt. Praesent a mi ultrices magna vestibulum sagittis non
            ac diam. Pellentesque vitae bibendum magna. Vivamus libero diam,
            semper et auctor quis, interdum eget magna. Nam ut odio eu sapien
            pellentesque viverra sed a risus. Morbi at metus sed nunc luctus
            vulputate nec id arcu. Vivamus imperdiet commodo est
          </p>
        </section>

        <section className="mt-[87px] mx-[240px]">
          <img
            src={BeautyOfTimePassingHeroImage}
            className="w-full h-auto object-cover"
          />
        </section>

        <section className="my-[124px] mx-[240px]">
          <p className="mb-[45px] font-bold text-[24px] text-[#C1C1C1]">
            Approach topic summary sentence 02
          </p>
          <p className="mb-[125px] text-[22px] text-[#C1C1C1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            mauris felis, vehicula sed mauris non, luctus vehicula enim. Proin
            eget blandit ex. Ut at malesuada mauris, sit amet faucibus lacus.
            Sed lacinia, eros tincidunt bibendum vehicula, nisl sapien varius
            enim, eu blandit augue lectus vel justo. Nulla rutrum volutpat ante
            sed tincidunt. Praesent a mi ultrices magna vestibulum sagittis non
            ac diam. Pellentesque vitae bibendum magna. Vivamus libero diam,
            semper et auctor quis, interdum eget magna. Nam ut odio eu sapien
            pellentesque viverra sed a risus. Morbi at metus sed nunc luctus
            vulputate nec id arcu. Vivamus imperdiet commodo est
          </p>
        </section>

        <section className="mt-[87px] mx-[240px]">
          <div className="grid grid-cols-3 gap-6">
            <img
              src={BeautyOfTimePassingHeroImage}
              className="col-span-2 object-cover h-full"
            />
            <img
              src={BeautyOfTimePassingHeroImage}
              className="object-cover h-full"
            />
          </div>
        </section>

        <section id="outcome" className="py-[124px] mx-[240px]">
          <p className="mb-[18x] font-montserrat text-[14px] text-[#C1C1C1]">
            OUTCOME
          </p>
          <p className="mb-[45px] font-bold text-[24px] text-[#C1C1C1]">
            Outcome topic summary sentence 01
          </p>
          <p className="mb-[125px] text-[22px] text-[#C1C1C1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            mauris felis, vehicula sed mauris non, luctus vehicula enim. Proin
            eget blandit ex. Ut at malesuada mauris, sit amet faucibus lacus.
            Sed lacinia, eros tincidunt bibendum vehicula, nisl sapien varius
            enim, eu blandit augue lectus vel justo. Nulla rutrum volutpat ante
            sed tincidunt. Praesent a mi ultrices magna vestibulum sagittis non
            ac diam. Pellentesque vitae bibendum magna. Vivamus libero diam,
            semper et auctor quis, interdum eget magna. Nam ut odio eu sapien
            pellentesque viverra sed a risus. Morbi at metus sed nunc luctus
            vulputate nec id arcu. Vivamus imperdiet commodo est
          </p>
        </section>

        <section className="mt-[87px] mx-[240px]">
          <img
            src={BeautyOfTimePassingHeroImage}
            className="w-full h-auto object-cover"
          />
        </section>

        <section className="mt-[87px] mx-[240px]">
          <img
            src={AmbienceOfLightHeroImage}
            className="w-full h-auto object-cover"
          />
        </section>

        <section className="my-[124px] mx-[240px]">
          <p className="mb-[45px] font-bold text-[24px] text-[#C1C1C1]">
            Outcome topic summary sentence 01
          </p>
          <p className="mb-[125px] text-[22px] text-[#C1C1C1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            mauris felis, vehicula sed mauris non, luctus vehicula enim. Proin
            eget blandit ex. Ut at malesuada mauris, sit amet faucibus lacus.
            Sed lacinia, eros tincidunt bibendum vehicula, nisl sapien varius
            enim, eu blandit augue lectus vel justo. Nulla rutrum volutpat ante
            sed tincidunt. Praesent a mi ultrices magna vestibulum sagittis non
            ac diam. Pellentesque vitae bibendum magna. Vivamus libero diam,
            semper et auctor quis, interdum eget magna. Nam ut odio eu sapien
            pellentesque viverra sed a risus. Morbi at metus sed nunc luctus
            vulputate nec id arcu. Vivamus imperdiet commodo est
          </p>
        </section>

        <section className="mt-[87px] w-[100vw]">
          <img
            src={BeautyOfTimePassingHeroImage}
            className="sticky top-0 w-full h-auto object-cover"
          />
          <img
            src={BeautyOfTimePassingHeroImage}
            className="sticky top-0 w-full h-auto object-cover"
          />
          <img
            src={BeautyOfTimePassingHeroImage}
            className="sticky top-0 w-full h-auto object-cover"
          />
          <img
            src={BeautyOfTimePassingHeroImage}
            className="sticky top-0 w-full h-auto object-cover"
          />
        </section>

        {/* -------------- TO NEXT PROJECT FOOTER PART ------------ */}

        <section className="my-[124px] mx-[240px]">
          <div className="w-full flex">
            <hr className="mb-[60px] mx-56 flex-grow border-[#C1C1C1]" />
          </div>
        </section>

        <section className="mt-[87px] mx-[240px]">
          <Link
            to="/intervention-in-our-disconnection"
            className="relative w-full flex flex-col items-center"
          >
            <img
              src={InterventionInOurDisconnectionHeroImage}
              className="w-2/5 h-auto object-cover opacity-50"
            />

            <p className="absolute top-1/2 text-[18px] text-[#C1C1C1]">
              Explore the next project
            </p>
          </Link>
        </section>

        <section className="mt-[87px] pb-[80px] mx-[240px]">
          <Link
            to="/works"
            className="relative w-full flex flex-col items-center"
            reloadDocument={true}
          >
            <div className="w-[175px] h-[175px] bg-[#C1C1C1] rounded-full" />

            <p className="absolute font-roboto top-[80px] text-[14px] text-[#1C1C1C]">
              Back to overview
            </p>
          </Link>
        </section>
      </div>
    </>
  );
}
