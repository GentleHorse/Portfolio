import PortalArea from "./PortalArea.jsx";

export default function PortalAreas() {
  return (
    <>
      {/* DESIGN - AMBIENCE OF LIGHT */}
      <PortalArea
        redirectWatingSeconds={0.1}
        url="/ambience-of-light"
        // text="Light and material and space"
        position={[-40, 0, -40]}
        rotation={[0, Math.PI * 0.2, 0]}
      />

      {/* DESIGN - BEAUTY OF TIME PASSING */}
      <PortalArea
        redirectWatingSeconds={0.1}
        url="/beauty-of-time-passing"
        // text="A sense of nature with digital realm"
        position={[15, 0, -65]}
        rotation={[0, 0, 0]}
      />

      {/* DESIGN - INTERVENTION IN OUR DISCONNECTION */}
      <PortalArea
        redirectWatingSeconds={0.1}
        url="/intervention-in-our-disconnection"
        // text="Creativity starts from edges"
        position={[65, 0, -47.5]}
        rotation={[0, -Math.PI * 0.4, 0]}
      />

      {/* DESIGN - MASU TYPO */}
      <PortalArea
        redirectWatingSeconds={0.1}
        url="/masu-typo"
        // text="Typography with no fixed faces"
        position={[-60, 0, -110]}
        rotation={[0, Math.PI * 0.15, 0]}
      />

      {/* DESIGN - COMFORTING DINNER */}
      <PortalArea
        redirectWatingSeconds={0.5}
        url="/comforting-dinner"
        // text="Sequencial activation of our sleeping senses"
        position={[55, 0, -120]}
        rotation={[0, -Math.PI * 0.15, 0]}
      />

      {/* 3D VISUALS */}
      <PortalArea
        redirectWatingSeconds={0.1}
        url="/three-d-visuals"
        text="3D VISUALS"
        position={[-32, 0, 20]}
        rotation={[0, Math.PI * 0.5, 0]}
      />

      {/* 3D APP DEV - MARBLE RACE */}
      <PortalArea
        redirectWatingSeconds={0.1}
        url="/marble-race"
        position={[10, 0, 28]}
        rotation={[0, -Math.PI * 0.5, 0]}
      />

      {/* 3D APP DEV - OBJECT ROTTERDAM 2024 */}
      <PortalArea
        redirectWatingSeconds={0.1}
        url="/object-rotterdam-2024"
        position={[6, 0, 52]}
        rotation={[0, -Math.PI * 0.5, 0]}
      />

       {/* 3D APP DEV - WEATHER CEREAL */}
       <PortalArea
        redirectWatingSeconds={0.1}
        url="/weather-cereal"
        position={[25, 0, 52]}
        rotation={[0, -Math.PI * 0.5, 0]}
      />

      {/* 3D APP DEV - DONUTS UNIVERSE */}
      <PortalArea
        redirectWatingSeconds={0.1}
        url="/donuts-universe"
        position={[32, 0, 32]}
        rotation={[0, -Math.PI * 0.5, 0]}
      />

      {/* CONTACT */}
      <PortalArea
        redirectWatingSeconds={0.1}
        url="/contact"
        text="Contact"
        scale={0.8}
        position={[1.5, 0, 15]}
        rotation={[0, -Math.PI, 0]}
      />

      {/* ABOUT */}
      <PortalArea
        redirectWatingSeconds={0.1}
        url="/about"
        text="Who made this?"
        scale={0.8}
        position={[21.5, 0, -9.25]}
        rotation={[0, 0, 0]}
      />

      {/* PORTFOLIO WEBSITE DESCRIPTION PAGE */}
      <PortalArea
        redirectWatingSeconds={0.1}
        url="/portfolio-website"
        text="About this website"
        scale={0.8}
        position={[13.5, 0, 12.5]}
        rotation={[0, -Math.PI * 0.8, 0]}
      />
    </>
  );
}
