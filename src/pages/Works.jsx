import { Link } from "react-router-dom";
import Header from "../components/header/Header.jsx";

export default function WorksPage() {
  return (
    <>
      <Header home about contact />
      <section>
        <h1 className="font-permanent-marker mb-[5px] text-[60px] text-[#d0e6efb1]">
          Design
        </h1>

        <Link to="/ambience-of-light" className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
          <p>Ambience of Light</p>
        </Link>

        <Link to="/beauty-of-time-passing" className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
          <p>Beauty of Time Passing</p>
        </Link>

        <Link to="/intervention-in-our-disconnection" className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
          <p>Intervention In Our Disconnection</p>
        </Link>

        <Link to="/masu-typo" className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
          <p>Masu Typo</p>
        </Link>

        <Link to="/comforting-dinner" className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
          <p>Comforting Dinner</p>
        </Link>

        <Link to="/three-d-visuals" className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
          <p>3D Visuals</p>
        </Link>


      </section>
      <section>
        <h1 className="font-permanent-marker mb-[5px] text-[60px] text-[#d0e6efb1]">
          Web Development
        </h1>

        <Link to="/object-rotterdam-2024" className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
          <p>Object Rotterdam 2024</p>
        </Link>

        <Link to="/weather-cereal" className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
          <p>Weather Cereal</p>
        </Link>

        <Link to="/donuts-universe" className="font-roboto mb-[5px] text-[20px] text-[#d0e6efb1]">
          <p>Donuts Universe</p>
        </Link>
      </section>
    </>
  );
}
