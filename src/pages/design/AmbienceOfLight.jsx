import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useScroll,
  Text,
  Image,
  Scroll,
  ScrollControls,
} from "@react-three/drei";

import Header from "../../components/header/Header.jsx";

import AmbienceOfLightHeroImage from "../../../public/images/design-projects/__thumbnail-images/thumbnail-ambience-of-light.jpg";

import AmbienceOfLightImage01 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-01.jpg";
import AmbienceOfLightImage02 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-02.jpg";
import AmbienceOfLightImage06 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-06.jpg";
import AmbienceOfLightImage07 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-07.jpg";
import AmbienceOfLightImage11 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-11.jpg";
import AmbienceOfLightImage13 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-13.jpg";

export default function AmbienceOfLightPage() {
  return (
    <>
      <Header home about works contact />

      <section className="mt-[148px] mx-[240px]">
        <h1 className="mb-[42px] font-serif text-[64px] text-[#C1C1C1]">
          Ambience of Light
        </h1>
        <img
          src={AmbienceOfLightHeroImage}
          alt="Ambience of Light Hero Image"
          className="mb-[70px] w-full h-[500px] object-cover"
        />
        <div className="flex">
          <div className="flex-none w-[235px]">
            <p className="mb-[26px] text-[16px] text-[#C1C1C1]">2024</p>
            <p className="text-[16px] text-[#C1C1C1]">Product Design</p>
          </div>

          <p className="mb-[72px] grow text-[20px] text-[#C1C1C1]">
            The "Ambience of Light" is a lighting product that utilises
            industrial glass blocks, originally designed to capture daylight, to
            create a distinctive and atmospheric lighting experience in any
            space.
          </p>
        </div>
        <div className="flex gap-4">
          <p className="text-[14px] text-[#C1C1C1]">#perception of space</p>
          <p className="text-[14px] text-[#C1C1C1]">#in praise of shadows</p>
          <p className="text-[14px] text-[#C1C1C1]">
            #blur boundaries in space
          </p>
        </div>
      </section>

      <section className="mt-[87px]">
        <img
          src={AmbienceOfLightImage01}
          className="w-full h-[540px] object-cover"
        />
      </section>

      <section className="my-[124px] mx-[240px]">
        <p className="mb-[14px] font-montserrat text-[14px] text-[#C1C1C1]">
          CHALLENGE
        </p>
        <p className="mb-[45px] font-bold text-[20px] text-[#C1C1C1]">
          Lack of daylight and limited designs
        </p>
        <p className="mb-[125px] text-[16px] text-[#C1C1C1]">
          Industrial glass blocks were originally invented to bring daylight
          into domestic and commercial spaces comfortably. Their
          light-transmitting and diffusing properties filter sunlight into
          beautiful reflections, creating a unique atmosphere indoors. However,
          their modularity limits architectural applications, and without
          daylight, the desired atmosphere fails to emerge. The challenge then
          became: how can we recreate this atmosphere using glass blocks without
          relying on daylight?
        </p>
      </section>

      <section className="mt-[87px] mx-[240px]">
        <img
          src={AmbienceOfLightHeroImage}
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="my-[124px] mx-[240px]">
        <p className="mb-[14px] font-montserrat text-[14px] text-[#C1C1C1]">
          APPROACH
        </p>
        <p className="mb-[45px] font-bold text-[20px] text-[#C1C1C1]">
          A unique atmosphere with the Japanese traditional lamp
        </p>
        <p className="mb-[125px] text-[16px] text-[#C1C1C1]">
          Before electric lighting, people in Japan used "Andon" lamps, made
          from paper stretched over bamboo, wood, or metal frames, to illuminate
          spaces. The paper gently diffused light from a single source, creating
          a soft, warm glow that fostered a calm and inviting atmosphere.
          Inspired by this traditional design, "Ambience of Light" follows the
          same principle to recreate a similar warmth. By using a single light
          source, it captures the subtle and soothing illumination of Andon
          lamps, blending tradition with modernity to create a cosy, ambient
          glow in contemporary spaces.
        </p>
      </section>

      <section className="mt-[87px] mx-[240px]">
        <img
          src={AmbienceOfLightHeroImage}
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="my-[124px] mx-[240px]">
        <p className="mb-[45px] font-bold text-[20px] text-[#C1C1C1]">
          Reshape our perception of darkness in space
        </p>
        <p className="mb-[125px] text-[16px] text-[#C1C1C1]">
          During the Edo period, people relied on oil lamps and candles as light
          sources for Andon lamps, resulting in typically dark living spaces. In
          his 1933 essay "In Praise of Shadows," Junichiro Tanizaki observed
          that individuals of that era embraced this warm darkness, using it to
          discover their own aesthetics by dissolving the boundaries between
          objects and the surrounding shadows. This blending of light and dark
          created an intimate atmosphere. Inspired by this idea, the product
          features dimmable lighting and carefully selected wood colors,
          allowing users to actively manipulate the interplay of light and
          darkness, enhancing the ambiance of their spaces.
        </p>
      </section>

      <section className="mt-[87px] mx-[240px]">
        <img
          src={AmbienceOfLightHeroImage}
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="my-[124px] mx-[240px]">
        <p className="mb-[14px] font-montserrat text-[14px] text-[#C1C1C1]">
          OUTCOME
        </p>
        <p className="mb-[45px] font-bold text-[20px] text-[#C1C1C1]">
          Modular lighting products with playful compositions
        </p>
        <p className="mb-[125px] text-[16px] text-[#C1C1C1]">
          Daylight varies throughout the day, week, and across seasons,
          influencing the way light interacts with architectural installations.
          Using glass bricks, the same setup can produce a range of light
          reflections, resulting in distinct ambiances within a space. To
          replicate this beautiful effect in the absence of natural light, the
          "Ambience of Light" product is designed with modular components. This
          modularity enables users to create various compositions, allowing them
          to manipulate light reflections and craft different atmospheres. As a
          result, individuals can enjoy a dynamic, ever-changing ambiance that
          mirrors the natural variations of daylight, enriching their indoor
          environments.
        </p>
      </section>

      <section className="mt-[87px] mx-[240px]">
        <img
          src={AmbienceOfLightHeroImage}
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="my-[124px] mx-[240px]">
        <div className="w-full flex">
          <hr className="mb-[60px] mx-56 flex-grow border-[#C1C1C1]" />
        </div>
      </section>

      <section className="mt-[87px] mx-[240px]">
        <div className="relative w-full flex flex-col items-center">
          <img
            src={AmbienceOfLightHeroImage}
            className="w-2/5 h-auto object-cover opacity-50"
          />
          <p className="absolute top-1/2 text-[18px] text-[#C1C1C1]">
            Explore the next project
          </p>
        </div>
      </section>

      <section className="mt-[87px] pb-[80px] mx-[240px]">
        <div className="relative w-full flex flex-col items-center">
          <div className="w-[175px] h-[175px] bg-[#C1C1C1] rounded-full"/>

          <p className="absolute font-roboto top-[80px] text-[14px] text-[#1C1C1C]">
           Back to overview
          </p>
        </div>
      </section>
    </>
  );
}
