import PortalArea from "./PortalArea.jsx";
import CollisionObject from "../utilComponents/CollisionObject.jsx";

export default function PortalAreas() {

  return (
    <group>
      {/* DEBUG - POSITION, ROTATION */}
      {/* <CollisionObject /> */}

      {/* DESIGN - AMBIENCE OF LIGHT */}
      <PortalArea
        position={[36.5, 0, 15]}
        rotation={[0, -Math.PI * 0.5, 0]}
        projectUrl={"/ambience-of-light"}
        title="Ambience of Light"
        titleHeight={3.5}
        titleDistance={7.0}
        text="Modular lamp, presented at OBJECT Rotterdam 2024"
        textFontSize={20}
        message={"Set URL: Ambience of Light"}
      />

      {/* DESIGN - BEAUTY OF TIME PASSING */}
      <PortalArea
        position={[29, 0, 42.5]}
        rotation={[0, -Math.PI * 0.35, 0]}
        projectUrl={"/beauty-of-time-passing"}
        title="Beauty of Time Passing"
        titleHeight={3.5}
        titleDistance={7.0}
        text="Interactiive spatial light installation, presented at Dutch Design Week 2023"
        textFontSize={20}
        message={"Set URL: Beauty of Time Passing"}
      />

      {/* DESIGN - INTERVENTION IN OUR DISCONNECTION */}
      <PortalArea
        position={[45, 0, 49]}
        rotation={[0, -Math.PI * 0.5, 0]}
        projectUrl={"/intervention-in-our-disconnection"}
        title="Intervention in our Disconnection"
        titleHeight={3.5}
        titleDistance={7.0}
        text="Marble stone upcylcing project, collaborated with the local company"
        textFontSize={20}
        message={"Set URL: Intervention in our Disconnection"}
      />

      {/* DESIGN - MASU TYPO */}
      <PortalArea
        position={[72.5, 0, 36.0]}
        rotation={[0, -Math.PI * 0.5, 0]}
        projectUrl={"/masu-typo"}
        title="Masu Typo"
        titleHeight={3.5}
        titleDistance={7.0}
        text="Alphabet typeface inspired by Japanese mono letters"
        textFontSize={20}
        message={"Set URL: Masu Typo"}
      />

      {/* DESIGN - COMFORTING DINNER */}
      <PortalArea
        position={[63.5, 0, 8.75]}
        rotation={[0, -Math.PI * 0.25, 0]}
        projectUrl={"/comforting-dinner"}
        title="Comforting Dinner"
        titleHeight={3.5}
        titleDistance={7.0}
        text="Multisensory ceramic dinner set, presented at Dutch Design Week 2020"
        textFontSize={20}
        message={"Set URL: Comforting Dinner"}
      />

      {/* 3D VISUALS */}
      <PortalArea
        position={[-33.0, 0, 2.5]}
        rotation={[0, Math.PI * 0.65, 0]}
        projectUrl={"/three-d-visuals"}
        title="3D Motion Visuals"
        titleHeight={4.0}
        titleDistance={7.0}
        text="Blender, Unreal Engine, Houdini"
        message={"Set URL: 3D Visuals"}
      />

      {/* 3D APP DEV - OBJECT ROTTERDAM 2024 */}
      <PortalArea
        position={[-57.0, 0, 14.0]}
        rotation={[0, Math.PI * 0.5, 0]}
        projectUrl={"/object-rotterdam-2024"}
        title="OBJECT Rotterdam 2024"
        titleHeight={4.0}
        titleDistance={7.0}
        text="3D interactive floor planning tool"
        message={"Set URL: OBJECT Rotterdam 2024"}
      />

      {/* 3D APP DEV - PORTFOLIO WEBSITE */}
      <PortalArea
        position={[-57.0, 0, 5.0]}
        rotation={[0, Math.PI * 0.5, 0]}
        projectUrl={"/portfolio-website"}
        title="Portfolio Website"
        titleHeight={4.0}
        titleDistance={7.0}
        text="'Game Feel' multi-page portfolio"
        message={"Set URL: Portfolio Website"}
      />

      {/* 3D APP DEV - NUL ZES CRAFT DE MARKT */}
      <PortalArea
        position={[-57.0, 0, -3.5]}
        rotation={[0, Math.PI * 0.5, 0]}
        isOutsideUrl={true}
        projectUrl={"https://nul-zes-crafted-de-markt-promo.vercel.app/"}
        title="Nul Zes Crafted de Markt"
        titleHeight={4.0}
        titleDistance={7.0}
        text="3D digital flyer for local design market"
        message={"Set URL: Outside URL - Nul Zes Crafted de Markt"}
      />

      {/* 3D APP DEV - WEATHER CEREAL */}
      <PortalArea
        position={[-57.0, 0, -9.0]}
        rotation={[0, Math.PI * 0.5, 0]}
        projectUrl={"/weather-cereal"}
        title="Weather Cereal"
        titleHeight={4.0}
        titleDistance={7.0}
        text="3D interactive 7-day forcast"
        message={"Set URL: Weather Cereal"}
      />

      {/* 3D APP DEV - MARBLE ON A ROLL */}
      <PortalArea
        position={[-57.0, 0, -15.0]}
        rotation={[0, Math.PI * 0.5, 0]}
        projectUrl={"/marble-race"}
        title="Marble's on a Roll"
        titleHeight={4.0}
        titleDistance={7.0}
        text="3D time attack game"
        message={"Set URL: Marble's on a Roll"}
      />

      {/* ABOUT ME */}
      <PortalArea
        position={[4.5, 0.1, 46.75]}
        rotation={[0, Math.PI * 1.15, 0]}
        projectUrl={"/about"}
        title="Hello! You got me!"
        titleHeight={3.5}
        titleDistance={3.5}
        titleFontSize={35}
        textFontSize={15}
        enterIconWidth={120}
        message={"Set URL: About"}
      />

      {/* SOCIAL MEDIA ICON - GITHUB */}
      <PortalArea
        position={[81.75, 0, 61.0]}
        rotation={[0, -Math.PI * 0.75, 0]}
        isOutsideUrl={true}
        projectUrl={"https://github.com/GentleHorse"}
        title="GitHub"
        titleHeight={3.5}
        titleDistance={2.0}
        titleFontSize={30}
        enterIconWidth={100}
        message={"Set URL: Outside URL - GitHub"}
      />

      {/* SOCIAL MEDIA ICON - X */}
      <PortalArea
        position={[76.5, 0, 66.5]}
        rotation={[0, -Math.PI * 0.70, 0]}
        isOutsideUrl={true}
        projectUrl={"https://x.com/toshihito_endo"}
        title="X"
        titleHeight={3.5}
        titleDistance={2.0}
        titleFontSize={30}
        enterIconWidth={100}
        message={"Set URL: Outside URL - X"}
      />

      {/* SOCIAL MEDIA ICON - INSTAGRAM */}
      <PortalArea
        position={[73.0, 0, 71.5]}
        rotation={[0, -Math.PI * 0.725, 0]}
        isOutsideUrl={true}
        projectUrl={"https://www.instagram.com/toshihitoendo/"}
        title="Instagram"
        titleHeight={3.5}
        titleDistance={2.0}
        titleFontSize={30}
        enterIconWidth={100}
        message={"Set URL: Outside URL - Instagram"}
      />

      {/* SOCIAL MEDIA ICON - LINKEDIN */}
      <PortalArea
        position={[69.5, 0, 76.0]}
        rotation={[0, -Math.PI * 0.75, 0]}
        isOutsideUrl={true}
        projectUrl={"https://www.linkedin.com/in/toshihito-endo-a68a82172/"}
        title="LinkedIn"
        titleHeight={3.5}
        titleDistance={2.0}
        titleFontSize={30}
        enterIconWidth={100}
        message={"Set URL: Outside URL - LinkedIn"}
      />
    </group>
  );
}
