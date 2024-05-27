import HorizontalScrollTexts from "../../components/HorizontalScrollTexts/HorizontalScrollTexts.jsx";

import AmbienceOfLightImage01 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-01.jpg";
import AmbienceOfLightImage13 from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-13.jpg";

/**
 * HORIZONTAL SCROLL TEXTS
 */
const SCROLL_TEXT = "Create a nature ambience with industrial materials";
const SCROLL_TEXT_REPETITION_NUM = 5;

let SCROLL_TEXTS = "";
for (let i = 0; i < SCROLL_TEXT_REPETITION_NUM; i++) {
  SCROLL_TEXTS += " " + SCROLL_TEXT;
}

export default function AmbienceOfLightPage() {
  return (
    <div className="bg-neutral-900">
      {/* Header */}
      <header className="pt-[5%] px-[12%]">
        <p className="font-open-sans font-bold text-[#e16b8c] uppercase">
          Create a nature ambience with industrial materials
        </p>
        <h1 className="font-playfair-display mb-[5px] text-[60px] text-neutral-50 uppercase">
          Ambience of Light
        </h1>
      </header>
      <section>
        <img
          src={AmbienceOfLightImage13}
          className="w-[100vw] h-[50vh] object-none"
        />
      </section>
      <section>
        <article className="py-[5%] px-[12%]">
          <p className="font-roboto text-[#fcfaf2]">
            In his prior artistic endeavor, "Beauty of Time Passing (2023)," the
            designer undertook the ambitious task of introducing luminosity into
            interior spaces through the integration of data-driven
            meteorological landscapes and the strategic manipulation of light
            dispersion. The intentional use of glass bricks, with their capacity
            for reflective interplay, served as a conduit for cultivating a
            symbiotic relationship between the designed environment and the
            natural world, resulting in a nuanced nature-inspired ambiance
            within the domestic realm.In his current project, aptly titled
            "Ambience of Light," the artist remains dedicated to the same
            overarching goal while adopting a distinct modus operandi. Here, a
            profound exploration of the materiality intrinsic to wood and glass
            bricks takes precedence, as the designer endeavors to distill his
            vision into a more refined yet robust formal language. This
            deliberate departure from the previous methodology reflects a
            commitment to simplicity, underscoring a conscientious effort to
            attain a heightened aesthetic resonance through a judicious
            consideration of materials and their inherent expressive potential.
          </p>
          <br />
          <p className="font-roboto text-[#fcfaf2]">
            This project was presented at OBJECT Rotterdam 2024 (Feb 2 - 4,
            2024, HAKA-gebouw, Vierhavensstraat 40, 3029 BE Rotterdam).
          </p>
        </article>
      </section>

      {/* Horizontal scroll section */}
      <HorizontalScrollTexts>{SCROLL_TEXTS}</HorizontalScrollTexts>

      {/* Images */}
      <section className="flex flex-col">
      <img
          src={AmbienceOfLightImage01}
          className="sticky top-0 h-[100vh] object-none"
        />
      </section>
    </div>
  );
}
