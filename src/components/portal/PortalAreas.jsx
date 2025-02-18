import PortalArea from "./PortalArea.jsx";
import CollisionObject from "../utilComponents/CollisionObject.jsx";

export default function PortalAreas() {

  return (
    <group>
      {/* DEBUG - POSITION, ROTATION */}
      {/* <CollisionObject /> */}

      {/* DESIGN - AMBIENCE OF LIGHT */}
      <PortalArea
        position={[38, 0, 15]}
        rotation={[0, -Math.PI * 0.5, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        projectUrl={"/ambience-of-light"}
        text="Ambience of Light"
        textHeight={5.0}
        textDistance={8.0}
        message={"Set URL: Ambience of Light"}
      />

      {/* DESIGN - BEAUTY OF TIME PASSING */}
      <PortalArea
        position={[32, 0, 40]}
        rotation={[0, -Math.PI * 0.35, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        projectUrl={"/beauty-of-time-passing"}
        text="Beauty of Time Passing"
        textHeight={5.0}
        textDistance={8.0}
        message={"Set URL: Beauty of Time Passing"}
      />

      {/* DESIGN - INTERVENTION IN OUR DISCONNECTION */}
      <PortalArea
        position={[48, 0, 52.5]}
        rotation={[0, -Math.PI * 0.5, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        projectUrl={"/intervention-in-our-disconnection"}
        text="Intervention in our Disconnection"
        textHeight={5.0}
        textDistance={8.0}
        message={"Set URL: Intervention in our Disconnection"}
      />

      {/* DESIGN - MASU TYPO */}
      <PortalArea
        position={[75, 0, 37.5]}
        rotation={[0, -Math.PI * 0.5, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        projectUrl={"/masu-typo"}
        text="Masu Typo"
        textHeight={5.0}
        textDistance={8.0}
        message={"Set URL: Masu Typo"}
      />

      {/* DESIGN - COMFORTING DINNER */}
      <PortalArea
        position={[65, 0, 6.25]}
        rotation={[0, -Math.PI * 0.25, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        projectUrl={"/comforting-dinner"}
        text="Comforting Dinner"
        textHeight={5.0}
        textDistance={8.0}
        message={"Set URL: Comforting Dinner"}
      />

      {/* 3D VISUALS */}
      <PortalArea
        position={[-35.0, 0, 3.75]}
        rotation={[0, Math.PI * 0.65, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        projectUrl={"/three-d-visuals"}
        text="3D Motion Visuals"
        textHeight={4.0}
        textDistance={7.0}
        message={"Set URL: 3D Visuals"}
      />

      {/* 3D APP DEV - OBJECT ROTTERDAM 2024 */}
      <PortalArea
        position={[-60.0, 0, 14.0]}
        rotation={[0, Math.PI * 0.5, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        projectUrl={"/object-rotterdam-2024"}
        text="OBJECT Rotterdam 2024"
        textHeight={4.0}
        textDistance={7.0}
        message={"Set URL: OBJECT Rotterdam 2024"}
      />

      {/* 3D APP DEV - PORTFOLIO WEBSITE */}
      <PortalArea
        position={[-60.0, 0, 5.0]}
        rotation={[0, Math.PI * 0.5, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        projectUrl={"/portfolio-website"}
        text="Portfolio Website"
        textHeight={4.0}
        textDistance={7.0}
        message={"Set URL: Portfolio Website"}
      />

      {/* 3D APP DEV - NUL ZES CRAFT DE MARKT */}
      <PortalArea
        position={[-60.0, 0, -3.5]}
        rotation={[0, Math.PI * 0.5, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        isOutsideUrl={true}
        projectUrl={"https://nul-zes-crafted-de-markt-promo.vercel.app/"}
        text="Nul Zes Crafted de Markt"
        textHeight={4.0}
        textDistance={7.0}
        message={"Set URL: Outside URL - Nul Zes Crafted de Markt"}
      />

      {/* 3D APP DEV - WEATHER CEREAL */}
      <PortalArea
        position={[-60.0, 0, -9.0]}
        rotation={[0, Math.PI * 0.5, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        projectUrl={"/weather-cereal"}
        text="Weather Cereal"
        textHeight={4.0}
        textDistance={7.0}
        message={"Set URL: Weather Cereal"}
      />

      {/* 3D APP DEV - MARBLE ON A ROLL */}
      <PortalArea
        position={[-60.0, 0, -15.0]}
        rotation={[0, Math.PI * 0.5, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        projectUrl={"/marble-race"}
        text="Marble's on a Roll"
        textHeight={4.0}
        textDistance={7.0}
        message={"Set URL: Marble's on a Roll"}
      />

      {/* ABOUT ME */}
      <PortalArea
        position={[5.5, 0.1, 48.0]}
        rotation={[0, Math.PI * 1.15, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        projectUrl={"/about"}
        text="Who made this?"
        textHeight={3.5}
        textDistance={2.0}
        fontSize={30}
        enterIconWidth={100}
        message={"Set URL: About"}
      />

      {/* SOCIAL MEDIA ICON - GITHUB */}
      <PortalArea
        position={[82.5, 0, 62.5]}
        rotation={[0, -Math.PI * 0.75, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        isOutsideUrl={true}
        projectUrl={"https://github.com/GentleHorse"}
        text="GitHub"
        textHeight={3.5}
        textDistance={2.0}
        fontSize={30}
        enterIconWidth={100}
        message={"Set URL: Outside URL - GitHub"}
      />

      {/* SOCIAL MEDIA ICON - X */}
      <PortalArea
        position={[78.0, 0, 67.5]}
        rotation={[0, -Math.PI * 0.70, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        isOutsideUrl={true}
        projectUrl={"https://x.com/toshihito_endo"}
        text="X"
        textHeight={3.5}
        textDistance={2.0}
        fontSize={30}
        enterIconWidth={100}
        message={"Set URL: Outside URL - X"}
      />

      {/* SOCIAL MEDIA ICON - INSTAGRAM */}
      <PortalArea
        position={[75.0, 0, 72.5]}
        rotation={[0, -Math.PI * 0.725, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        isOutsideUrl={true}
        projectUrl={"https://www.instagram.com/toshihitoendo/"}
        text="Instagram"
        textHeight={3.5}
        textDistance={2.0}
        fontSize={30}
        enterIconWidth={100}
        message={"Set URL: Outside URL - Instagram"}
      />

      {/* SOCIAL MEDIA ICON - LINKEDIN */}
      <PortalArea
        position={[71.5, 0, 77.5]}
        rotation={[0, -Math.PI * 0.75, 0]}
        collisionObjWidth={1.0}
        collisionObjDepth={1.0}
        isOutsideUrl={true}
        projectUrl={"https://www.linkedin.com/in/toshihito-endo-a68a82172/"}
        text="LinkedIn"
        textHeight={3.5}
        textDistance={2.0}
        fontSize={30}
        enterIconWidth={100}
        message={"Set URL: Outside URL - LinkedIn"}
      />
    </group>
  );
}
