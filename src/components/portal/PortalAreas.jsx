import PortalArea from "./PortalArea.jsx";

export default function PortalAreas() {
  return (
    <>
      {/* DESIGN - AMBIENCE OF LIGHT */}
      <PortalArea
        redirectWatingSeconds={0.5}
        url="/ambience-of-light"
        text="Light and material and space"
        position={[-15, 0, -35]}
        rotation={[0, Math.PI * 0.2, 0]}
      />

      {/* DESIGN - BEAUTY OF TIME PASSING */}
      <PortalArea
        redirectWatingSeconds={0.5}
        url="/beauty-of-time-passing"
        text="A sense of nature with digital relm"
        position={[10, 0, -45]}
        rotation={[0, 0, 0]}
      />

      {/* DESIGN - INTERVENTION IN OUR DISCONNECTION */}
      <PortalArea
        redirectWatingSeconds={0.5}
        url="/intervention-in-our-disconnection"
        text="Creativity starts from edges"
        position={[45, 0, -20]}
        rotation={[0, -Math.PI * 0.4, 0]}
      />

      {/* DESIGN - MASU TYPO */}
      <PortalArea
        redirectWatingSeconds={0.5}
        url="/masu-typo"
        text="Typography with no fixed faces"
        position={[-60, 0, -110]}
        rotation={[0, 0, 0]}
      />

      {/* DESIGN - COMFORTING DINNER */}
      <PortalArea
        redirectWatingSeconds={0.5}
        url="/comforting-dinner"
        text="Sequencial activation of our sleeping senses"
        position={[50, 0, -80]}
        rotation={[0, -Math.PI * 0.4, 0]}
      />

      {/* 3D VISUALS */}
      <PortalArea
        redirectWatingSeconds={0.5}
        url="/three-d-visuals"
        text="3D VISUALS"
        position={[-30, 0, 0]}
        rotation={[0, Math.PI * 0.5, 0]}
      />


      {/* CONTACT */}
      <PortalArea
        redirectWatingSeconds={0.5}
        url="/contact"
        text="Contact?"
        position={[8, 0, 8]}
        rotation={[0, -Math.PI * 0.5, 0]}
      />

      {/* ABOUT */}
      <PortalArea
        redirectWatingSeconds={0.5}
        url="/about"
        text="Who is this?"
        position={[8, 0, 0]}
        rotation={[0, -Math.PI * 0.5, 0]}
      />
    </>
  );
}
