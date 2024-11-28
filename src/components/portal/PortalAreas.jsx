import PortalArea from "./PortalArea.jsx";

const GATE_POSITION_Y = -0.5;

export default function PortalAreas() {
  return (
    <>
      <group position-y={GATE_POSITION_Y}>
        <group position-y={1.5}>
          {/* DESIGN - AMBIENCE OF LIGHT */}
          <PortalArea
            scale={[1.0, 1.0, 1.0]}
            position={[-30, 0, -40]}
            rotation={[0, Math.PI * 0.2, 0]}
            projectUrl={"/ambience-of-light"}
            message={"Set URL: Ambience of Light"}
          />

          {/* DESIGN - BEAUTY OF TIME PASSING */}
          <PortalArea
            scale={[1.0, 1.0, 1.0]}
            position={[2.5, 0, -65]}
            rotation={[0, 0, 0]}
            projectUrl={"/beauty-of-time-passing"}
            message={"Set URL: Beauty of Time Passing"}
          />

          {/* DESIGN - INTERVENTION IN OUR DISCONNECTION */}
          <PortalArea
            scale={[2.0, 2.0, 2.0]}
            position={[65, 0, -70]}
            rotation={[0, -Math.PI * 0.4, 0]}
            projectUrl={"/intervention-in-our-disconnection"}
            message={"Set URL: Intervention in our Disconnection"}
          />

          {/* DESIGN - MASU TYPO */}
          <PortalArea
            scale={[2.0, 2.0, 2.0]}
            position={[-60, 0, -120]}
            rotation={[0, Math.PI * 0.15, 0]}
            projectUrl={"/masu-typo"}
            message={"Set URL: Masu Typo"}
          />

          {/* DESIGN - COMFORTING DINNER */}
          <PortalArea
            scale={[4.0, 4.0, 2.0]}
            position={[55, 0, -140]}
            rotation={[0, -Math.PI * 0.15, 0]}
            projectUrl={"/comforting-dinner"}
            message={"Set URL: Comforting Dinner"}
          />
        </group>

        <group position-y={1.5}>
          {/* 3D VISUALS */}
          <PortalArea
            scale={[0.5, 0.5, 0.5]}
            position={[-20, 0, 47.5]}
            rotation={[0, -Math.PI, 0]}
            projectUrl={"/three-d-visuals"}
            message={"Set URL: 3D Visuals"}
          />

          {/* 3D APP DEV - MARBLE RACE */}
          <PortalArea
            scale={[0.5, 0.5, 0.5]}
            position={[5, 0, 30]}
            rotation={[0, -Math.PI * 0.5, 0]}
            projectUrl={"/marble-race"}
            message={"Set URL: Marble's on a Roll"}
          />

          {/* 3D APP DEV - OBJECT ROTTERDAM 2024 */}
          <PortalArea
            scale={[0.5, 0.5, 0.5]}
            position={[-5, 0, 45]}
            rotation={[0, -Math.PI * 0.75, 0]}
            projectUrl={"/object-rotterdam-2024"}
            message={"Set URL: OBJECT Rotterdam 2024"}
          />

          {/* 3D APP DEV - WEATHER CEREAL */}
          <PortalArea
            scale={[0.5, 0.5, 0.5]}
            position={[15, 0, 50]}
            rotation={[0, -Math.PI * 0.5, 0]}
            projectUrl={"/weather-cereal"}
            message={"Set URL: Weather Cereal"}
          />

          {/* 3D APP DEV - DONUTS UNIVERSE */}
          <PortalArea
            scale={[0.5, 0.5, 0.5]}
            position={[25, 0, 35]}
            rotation={[0, -Math.PI * 0.5, 0]}
            projectUrl={"/donuts-universe"}
            message={"Set URL: Donuts Universe"}
          />
        </group>

        <group position-y={1.5}>
          {/* ABOUT */}
          <PortalArea
            scale={[0.5, 0.5, 0.5]}
            position={[15, 0, -8.5]}
            rotation={[0, 0, 0]}
            projectUrl={"/about"}
            message={"Set URL: About"}
            text="Who made this?"
          />

          {/* PORTFOLIO WEBSITE DESCRIPTION PAGE */}
          <PortalArea
            scale={[0.5, 0.5, 0.5]}
            position={[15, 1.5, 12.5]}
            rotation={[0, -Math.PI * 0.8, 0]}
            projectUrl={"/portfolio-website"}
            message={"Set URL: Portfolio Website"}
            text="About this 'atelier'"
          />
        </group>
      </group>
    </>
  );
}
