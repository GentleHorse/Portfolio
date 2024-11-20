import PortalArea from "./PortalArea.jsx";

import AmbienceOfLightThumbnail from "../../../public/images/design-projects/__thumbnail-images/thumbnail-ambience-of-light.jpg";
import BeautyOfTimePassingThumbnail from "../../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";
import InterventionInOurDisconnectionThumbnail from "../../../public/images/design-projects/__thumbnail-images/thumbnail-intervention-in-our-disconnection.jpg";
import MasuTypoThumbnail from "../../../public/images/design-projects/__thumbnail-images/thumbnail-masu-typo.jpg";
import ComfortingDinnerThumbnail from "../../../public/images/design-projects/__thumbnail-images/thumbnail-comforting-dinner.jpg";
import ThreeDVisualThumbnail from "../../../public/images/app-developments/__thumbnail-images/thumbnail-3-d-visuals.jpg";
import PortfolioWebsiteThumbnail from "../../../public/images/app-developments/__thumbnail-images/thumbnail-portfolio-website.jpg";
import OBJECRotterdam2024Thumbnail from "../../../public/images/app-developments/__thumbnail-images/thumbnail-object-rotterdam-2024.jpg";
import WeatherCerealThumbnail from "../../../public/images/app-developments/__thumbnail-images/thumbnail-weather-cereal.jpg";
import DonutsUniverseThumbnail from "../../../public/images/app-developments/__thumbnail-images/thumbnail-donuts-universe.jpg";
import MarbleOnARollThumbnail from "../../../public/images/app-developments/__thumbnail-images/thumbnail-marble-on-a-roll.jpg";

const GATE_POSITION_Y = -0.5;

export default function PortalAreas() {
  return (
    <>
      <group position-y={GATE_POSITION_Y}>
        <group position-y={-1.0}>
          {/* DESIGN - AMBIENCE OF LIGHT */}
          <PortalArea
            redirectWatingSeconds={0.1}
            url="/ambience-of-light"
            projectUrl={AmbienceOfLightThumbnail}
            position={[-40, 0, -40]}
            rotation={[0, Math.PI * 0.2, 0]}
          />

          {/* DESIGN - BEAUTY OF TIME PASSING */}
          <PortalArea
            redirectWatingSeconds={0.1}
            url="/beauty-of-time-passing"
            projectUrl={BeautyOfTimePassingThumbnail}
            position={[15, 0, -65]}
            rotation={[0, 0, 0]}
          />

          {/* DESIGN - INTERVENTION IN OUR DISCONNECTION */}
          <PortalArea
            redirectWatingSeconds={0.1}
            url="/intervention-in-our-disconnection"
            projectUrl={InterventionInOurDisconnectionThumbnail}
            position={[65, 0, -47.5]}
            rotation={[0, -Math.PI * 0.4, 0]}
          />

          {/* DESIGN - MASU TYPO */}
          <PortalArea
            redirectWatingSeconds={0.1}
            url="/masu-typo"
            projectUrl={MasuTypoThumbnail}
            position={[-60, 0, -110]}
            rotation={[0, Math.PI * 0.15, 0]}
          />

          {/* DESIGN - COMFORTING DINNER */}
          <PortalArea
            redirectWatingSeconds={0.5}
            url="/comforting-dinner"
            projectUrl={ComfortingDinnerThumbnail}
            position={[55, 0, -120]}
            rotation={[0, -Math.PI * 0.15, 0]}
          />
        </group>

        <group position-y={1.5}>
          {/* 3D VISUALS */}
          <PortalArea
            redirectWatingSeconds={0.1}
            url="/three-d-visuals"
            projectUrl={ThreeDVisualThumbnail}
            text="3D VISUALS"
            position={[-32, 0, 20]}
            rotation={[0, Math.PI * 0.5, 0]}
          />

          {/* 3D APP DEV - MARBLE RACE */}
          <PortalArea
            redirectWatingSeconds={0.1}
            url="/marble-race"
            projectUrl={MarbleOnARollThumbnail}
            position={[10, 0, 28]}
            rotation={[0, -Math.PI * 0.5, 0]}
          />

          {/* 3D APP DEV - OBJECT ROTTERDAM 2024 */}
          <PortalArea
            redirectWatingSeconds={0.1}
            url="/object-rotterdam-2024"
            projectUrl={OBJECRotterdam2024Thumbnail}
            position={[6, 0, 52]}
            rotation={[0, -Math.PI * 0.5, 0]}
          />

          {/* 3D APP DEV - WEATHER CEREAL */}
          <PortalArea
            redirectWatingSeconds={0.1}
            url="/weather-cereal"
            projectUrl={WeatherCerealThumbnail}
            position={[25, 0, 52]}
            rotation={[0, -Math.PI * 0.5, 0]}
          />

          {/* 3D APP DEV - DONUTS UNIVERSE */}
          <PortalArea
            redirectWatingSeconds={0.1}
            url="/donuts-universe"
            projectUrl={DonutsUniverseThumbnail}
            position={[32, 0, 32]}
            rotation={[0, -Math.PI * 0.5, 0]}
          />
        </group>

        {/* CONTACT */}
        <PortalArea
          redirectWatingSeconds={0.1}
          url="/contact"
          text="Contact"
          isDoorFrame={false}
          isDoorGradient={false}
          scale={0.8}
          position={[1.5, 0, 15]}
          rotation={[0, -Math.PI, 0]}
        />

        {/* ABOUT */}
        <PortalArea
          redirectWatingSeconds={0.1}
          url="/about"
          text="Who made this?"
          isDoorFrame={false}
          isDoorGradient={false}
          scale={0.8}
          position={[21.5, 0, -8.5]}
          rotation={[0, 0, 0]}
        />

        {/* PORTFOLIO WEBSITE DESCRIPTION PAGE */}
        <PortalArea
          redirectWatingSeconds={0.1}
          url="/portfolio-website"
          text="About this website"
          isDoorFrame={false}
          isDoorGradient={false}
          scale={0.8}
          position={[13.5, 0, 12.5]}
          rotation={[0, -Math.PI * 0.8, 0]}
        />
      </group>
    </>
  );
}
