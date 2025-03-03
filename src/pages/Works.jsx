import {
  useRef,
  useMemo,
  useState,
  useEffect,
  useLayoutEffect,
  Suspense,
} from "react";
import { useNavigate } from "react-router-dom";

import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Sphere,
  Text,
  Image,
  Scroll,
  useScroll,
  ScrollControls,
  MeshTransmissionMaterial,
  useGLTF,
  useProgress,
  Html,
} from "@react-three/drei";

import { Perf } from "r3f-perf";
import { Gradient, LayerMaterial } from "lamina";

import gsap from "gsap";

import { easing } from "maath";

import { isMobile, isBrowser } from "react-device-detect";

import { gameStates, useGameStore, useGlassLensStore } from "../store/store.js";

import Header from "../components/header/Header.jsx";
import LoadingScreen from "../components/loadingScreen/LoadingScreen.jsx";
import GlassLens from "../components/models/glassLens/GlassLens.jsx";

import PortfolioWebsiteThumbnail from "../../public/images/app-developments/__thumbnail-images/thumbnail-portfolio-website-w-badge-ribbon.jpg";
import OBJECRotterdam2024Thumbnail from "../../public/images/app-developments/__thumbnail-images/thumbnail-object-rotterdam-2024.jpg";
import NulZesCraftedDeMarktThumbnail from "../../public/images/app-developments/__thumbnail-images/thumbnail-nul-zes-crafted-de-markt.jpg";
import WeatherCerealThumbnail from "../../public/images/app-developments/__thumbnail-images/thumbnail-weather-cereal.jpg";
import DonutsUniverseThumbnail from "../../public/images/app-developments/__thumbnail-images/thumbnail-donuts-universe.jpg";
import MarbleOnARollThumbnail from "../../public/images/app-developments/__thumbnail-images/thumbnail-marble-on-a-roll.jpg";

import ThreeDVisualThumbnail from "../../public/images/app-developments/__thumbnail-images/thumbnail-3-d-visuals.jpg";

import BeautyOfTimePassingThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-beauty-of-time-passing.jpg";
import AmbienceOfLightThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-ambience-of-light.jpg";
import InterventionInOurDisconnectionThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-intervention-in-our-disconnection.jpg";
import MasuTypoThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-masu-typo.jpg";
import ComfortingDinnerThumbnail from "../../public/images/design-projects/__thumbnail-images/thumbnail-comforting-dinner.jpg";

import FocusFrameImage from "../../public/images/ui/select-frame-cross-soft.png";
import IcosahedronIcon from "../../public/images/icons/glass-lens/icosahedron.svg";
import CircleIcon from "../../public/images/icons/glass-lens/circle.svg";
import VerticalStripesIcon from "../../public/images/icons/glass-lens/vertical-stripes.svg";
import HoneyCombIcon from "../../public/images/icons/glass-lens/honeycomb.svg";

/**
 * SCROLL VALUES
 */
const SCROLL_PAGES = isBrowser ? 15 : 6.0;
const SCROLL_DAMPING = 0.325; // the lower, the slower animation gets
const SCROLL_DISTANCE = 0.4; // the higher, the slower animation gets

/**
 * PROJECT THUMBNAIL IMAGE VALUES
 */
const IMAGE_DIST_STRENGTH = isBrowser ? 1.25 : 0.45;

/**
 * PROJECTS LIST ARRAY
 */
const PROJECTS_LIST_ARRAY = [
  // 3D Web Applications
  {
    id: "webapp01",
    title: "Portfolio Website",
    tagLine: "Explore a designer’s world in a game-like experience",
    hashTags: "#Three.js #Rapier #WebGL #Shader #React #Blender",
    imageUrl: PortfolioWebsiteThumbnail,
    projectPageUrl: "/portfolio-website",
  },
  {
    id: "webapp02",
    title: "OBJECT Rotterdam 2024",
    tagLine: "Seamless exhibition planning and documentation in a 3D space",
    hashTags: "#Three.js #WebGL #React #Blender",
    imageUrl: OBJECRotterdam2024Thumbnail,
    projectPageUrl: "/object-rotterdam-2024",
  },
  {
    id: "webapp03",
    title: "Crafted De Markt",
    tagLine: "A Playful 3D Flyer Showcasing Creative Products",
    hashTags: "#Three.js #WebGL #Shader #Blender",
    imageUrl: NulZesCraftedDeMarktThumbnail,
    projectPageUrl: "/nul-zes-crafted-de-markt",
  },
  {
    id: "webapp04",
    title: "Weather Cereal",
    tagLine: "A 7-day forecast with a spoonful of humor",
    hashTags: "#Three.js #Rapier #WebGL #React #Blender",
    imageUrl: WeatherCerealThumbnail,
    projectPageUrl: "/weather-cereal",
  },
  {
    id: "webapp05",
    title: "Donuts Universe",
    tagLine: "Simplicity meets immersion in 3D",
    hashTags: "#Three.js #WebGL #React",
    imageUrl: DonutsUniverseThumbnail,
    projectPageUrl: "/donuts-universe",
  },
  {
    id: "webapp06",
    title: "Marble's on a Roll",
    tagLine: "Roll fast, finish first!",
    hashTags: "#Three.js #Rapier #WebGL #React",
    imageUrl: MarbleOnARollThumbnail,
    projectPageUrl: "/marble-race",
  },

  // Design Projects
  {
    id: "design01",
    title: "3D Visuals",
    tagLine: "Motion research inspired by nature",
    hashTags: "#Blender #UE5 #Houdini",
    imageUrl: ThreeDVisualThumbnail,
    projectPageUrl: "/three-d-visuals",
  },
  {
    id: "design02",
    title: "Beauty of Time Passing",
    tagLine: "A living canvas of digital nature",
    hashTags: "#Wood #Glass #Houdini #Three.js #WebGL #React",
    imageUrl: BeautyOfTimePassingThumbnail,
    projectPageUrl: "/beauty-of-time-passing",
  },
  {
    id: "design03",
    title: "Ambience of Light",
    tagLine: "Daylight-inspired ambiance with industrial glass bricks",
    hashTags: "#Wood #Glass",
    imageUrl: AmbienceOfLightThumbnail,
    projectPageUrl: "/ambience-of-light",
  },

  {
    id: "design04",
    title: "Intervention in our Disconnection",
    tagLine: "Industrial scraps reimagined with Japanese craftsmanship",
    hashTags: "#Wood #Marble",
    imageUrl: InterventionInOurDisconnectionThumbnail,
    projectPageUrl: "/intervention-in-our-disconnection",
  },
  {
    id: "design05",
    title: "Masu Typo",
    tagLine: "Versatile mono grid typeface for creative typography and design",
    hashTags: "#Typography #Silkscreen #Arduino #P5.js",
    imageUrl: MasuTypoThumbnail,
    projectPageUrl: "/masu-typo",
  },
  {
    id: "design06",
    title: "Comforting Dinner",
    tagLine: "Elevating dining with sensory-driven tableware design",
    hashTags: "#Ceramic",
    imageUrl: ComfortingDinnerThumbnail,
    projectPageUrl: "/comforting-dinner",
  },
];

/**
 * P A G E ======================================================
 */
export default function WorksPage() {
  /**
   * GAME STORE
   */
  const { gameState } = useGameStore((state) => ({
    gameState: state.gameState,
  }));

  /**
   * LOADING SCREEN - BROWSER, MOBILE
   */
  const loadingScreenComponent = isBrowser ? (
    <LoadingScreen />
  ) : (
    <LoadingScreenMobile />
  );

  /**
   * SCROLL ICON ANIMATION
   */
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3.5 });

    if (document.querySelector("#mouseWheel") !== null) {
      tl.to("#mouseWheel", {
        y: 25,
        ease: "none",
        duration: 1.5,
      });
      tl.to("#mouseWheel", {
        y: 0,
        ease: "none",
        duration: 1.5,
      });
    }
  }, [gameState]);

  return (
    <div id="worksPage">
      <Header home about contact />

      {gameState === gameStates.MENU && (
        <div className="fixed bottom-14 w-[100vw] z-50">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center w-[45px] h-[85px] border-solid border-4 border-[#FFFFFF]/65 rounded-full">
              <div
                id="mouseWheel"
                className="mt-2 w-[25px] h-[25px] border-solid border-4 border-[#FFFFFF]/65 bg-[#FFFFFF]/35 rounded-full"
              />
            </div>
          </div>
        </div>
      )}

      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={loadingScreenComponent}>
          <ScrollControls
            pages={SCROLL_PAGES}
            damping={SCROLL_DAMPING}
            distance={SCROLL_DISTANCE}
          >
            <Experience />
          </ScrollControls>
        </Suspense>
      </Canvas>

      {!!isBrowser && <GlassLensUI />}
    </div>
  );
}

/**
 * E X P E R I E N C E ======================================================
 */

function Experience() {
  /**
   * GLASS LENS STORE
   */
  const { glassObjectIndex } = useGlassLensStore((state) => ({
    glassObjectIndex: state.glassObjectIndex,
  }));

  /**
   * GLASS MATERIAL
   */
  const GLASS_MATERIAL = useMemo(() => {
    return <MeshTransmissionMaterial backside={false} thickness={2} />;
  }, []);

  /**
   * SCROLL REF
   */
  const scroll = useScroll();

  /**
   * GRADIENT ANIMATION
   */
  const tl = useRef();
  const backgroundColors = useRef({
    colorA: "#0F2540",
    colorB: "#1C1C1C",
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 1.0,
      colorA: "#3C2F41",
      colorB: "#1C1C1C",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1.0,
      colorA: "#26453D",
      colorB: "#1C1C1C",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1.0,
      colorA: "#CC543A",
      colorB: "#1C1C1C",
    });

    tl.current.pause();
  }, []);

  useFrame((state, delta) => {
    const scrollOffset = Math.max(0, scroll.offset);
    tl.current.seek(scrollOffset * tl.current.duration());
  });

  return (
    <>
      {/* <Perf position="top-left" /> */}
      {/* <axesHelper /> */}
      {/* <OrbitControls enableZoom={false} /> */}

      <Background backgroundColors={backgroundColors} />

      {!!isMobile && <GlassFocusTorus material={GLASS_MATERIAL} />}

      {!!isBrowser && (
        <GlassLens objectIndex={glassObjectIndex} material={GLASS_MATERIAL} />
      )}

      <Scroll>
        <Projects rotation={isBrowser ? [0, -Math.PI * 0.025, 0] : [0, 0, 0]} />
      </Scroll>
    </>
  );
}

/**
 * B A C K G R O U N D ======================================================
 */

function Background({ backgroundColors }) {
  const start = 0.2;
  const end = -0.5;

  const gradientRef = useRef();
  const gradientEnvRef = useRef();

  useFrame((state, delta) => {
    gradientRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    );
    gradientRef.current.colorB = new THREE.Color(
      backgroundColors.current.colorB
    );
    gradientEnvRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    );
    gradientEnvRef.current.colorB = new THREE.Color(
      backgroundColors.current.colorB
    );
  });

  return (
    <>
      <Sphere scale={[500, 500, 500]} rotation={[0, Math.PI / 2, 0]}>
        <LayerMaterial color="#ffffff" side={THREE.BackSide}>
          <Gradient ref={gradientRef} axes="y" start={start} end={end} />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256} frames={Infinity}>
        <Sphere scale={[100, 100, 100]} rotation={[Math.PI, Math.PI / 2, 0]}>
          <LayerMaterial color="#ffffff" side={THREE.BackSide}>
            <Gradient ref={gradientEnvRef} axes="y" start={start} end={end} />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  );
}

/**
 * P R O J E C T S ======================================================
 */

function Projects({ ...props }) {
  /**
   * NAVIGATE
   */
  const navigate = useNavigate();

  /**
   * VIEW PORT WIDTH
   */
  const { height, width } = useThree((state) => state.viewport);

  /**
   * REF ARRAYS
   */
  const imageGroups = useRef([]);
  const images = useRef([]);
  const focusFrames = useRef([]);

  /**
   * MOUSE POINTER SET UP ON HOVER STATE
   */
  const [hovered, setHovered] = useState(false);

  /**
   * ANIMATION - HOVER ANIMATION
   */
  const pointerOverImageGroupAnimationHandler = (index) => {
    gsap.to(images.current[index].position, {
      z: images.current[index].position.z - 0.3,
      duration: 1.0,
      ease: "power2.out",
    });

    gsap.to(images.current[index].material, {
      opacity: 0.65,
      duration: 1.0,
      ease: "power2.out",
    });

    gsap.to(focusFrames.current[index].material, {
      opacity: 1.0,
      duration: 1.0,
      ease: "power2.out",
    });
  };
  const pointerOutImageGroupAnimationHandler = (index) => {
    gsap.to(images.current[index].position, {
      z: images.current[index].position.z + 0.3,
      duration: 1.0,
      ease: "power2.out",
    });

    gsap.to(images.current[index].material, {
      opacity: 1.0,
      duration: 1.0,
      ease: "power2.out",
    });

    gsap.to(focusFrames.current[index].material, {
      opacity: 0.0,
      duration: 1.0,
      ease: "power2.out",
    });
  };

  return (
    <group {...props}>
      {PROJECTS_LIST_ARRAY.map((project, index) => (
        <group
          ref={(element) => (imageGroups.current[index] = element)}
          key={project.id}
          position={[0, -index * height * IMAGE_DIST_STRENGTH, 0]}
        >
          <group position={isBrowser ? [-width * 0.275, 0, 2] : [0, 0, 2]}>
            {!!isBrowser && (
              <Text
                position={[0.01, width * 0.02, 0]}
                fontSize={width * 0.0075}
                textAlign="left"
                anchorX="left"
                anchorY="middle"
              >
                <meshBasicMaterial
                  color="#FFFFFF"
                  toneMapped={false}
                  opacity={0.8}
                  transparent
                />
                {project.tagLine}
              </Text>
            )}

            <Text
              font="./fonts/dm-serif-display-v15-latin-regular.woff"
              fontSize={isBrowser ? width * 0.03 : width * 0.05}
              textAlign={isBrowser ? "left" : "center"}
              anchorX={isBrowser ? "left" : "center"}
              anchorY="middle"
              maxWidth={isBrowser ? width : width * 0.275}
            >
              <meshBasicMaterial color="#FFFFFF" toneMapped={false} />
              {project.title}
            </Text>

            {!!isBrowser && (
              <Text
                position={[0, -width * 0.0275, 0]}
                fontSize={width * 0.006}
                textAlign="left"
                anchorX="left"
                anchorY="middle"
                letterSpacing={0.125}
              >
                <meshBasicMaterial color="#C1C1C1" toneMapped={false} />
                {project.hashTags}
              </Text>
            )}
          </group>

          <group position={isBrowser ? [width * 0.05, 0, -1] : [0, 0, -1]}>
            <Image
              ref={(element) => (images.current[index] = element)}
              url={project.imageUrl}
              scale={
                isBrowser
                  ? [width * 0.75, (width * 0.75 * 9.6) / 14.4, 1]
                  : [width * 0.975, (width * 0.975 * 9.6) / 14.4, 1]
              }
              onPointerOver={(event) => {
                event.stopPropagation();
                setHovered(true);
                pointerOverImageGroupAnimationHandler(index);
              }}
              onPointerOut={() => {
                setHovered(false);
                pointerOutImageGroupAnimationHandler(index);
              }}
              onClick={() => {
                setHovered(false);
                navigate(project.projectPageUrl);
              }}
              transparent={true}
            />
            {!!isBrowser && (
              <Image
                ref={(element) => (focusFrames.current[index] = element)}
                url={FocusFrameImage}
                scale={[width * 0.775, (width * 0.775 * 9.6) / 14.4, 1]}
                opacity={0.0}
                transparent={true}
              />
            )}
          </group>
        </group>
      ))}
    </group>
  );
}

/**
 * G L A S S T O R U S ======================================================
 */

function GlassFocusTorus({ material }) {
  const { width, height } = useThree((state) => state.viewport);

  const { nodes, materials } = useGLTF(
    "/models/torus-lens-plane/torus-lens-plane.glb"
  );

  return (
    <group>
      <mesh scale={[height * 0.12, height * 0.12, 1]} position={[0, 0, 2]}>
        <torusGeometry args={[2, 0.5]} />
        {material}
      </mesh>

      <group dispose={null}>
        <mesh
          scale={[height * 0.3, height * 0.3, 1]}
          position={[0, 0, 2]}
          geometry={nodes["torus-lens-plane"].geometry}
        >
          <meshStandardMaterial
            color="#1C1C1C"
            transparent={true}
            opacity={0.85}
          />
        </mesh>
      </group>
    </group>
  );
}

/**
 * L O A D I N G | M O B I L E ======================================================
 */
function LoadingScreenMobile() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <Html
      center
      className="w-[100vw] h-[100vh] bg-[#050505] flex flex-col items-end justify-end"
    >
      <div>
        <p className="w-full h-full bottom-0 right-0 m-4 text-[#C1C1C1] text-[80px] font-pinyon-script">
          {progress.toFixed(0)} %
        </p>
      </div>
    </Html>
  );
}

useGLTF.preload("/models/torus-lens-plane/torus-lens-plane.glb");

/**
 * G L A S S L E N S | U I ======================================================
 */
function GlassLensUI() {
  /**
   * GLASS LENS STORE
   */
  const { glassObjectIndex, setGlassObjectIndex } = useGlassLensStore(
    (state) => ({
      glassObjectIndex: state.glassObjectIndex,
      setGlassObjectIndex: state.setGlassObjectIndex,
    })
  );

  return (
    <div className="fixed bottom-[6vh] right-[4vw] z-50">
      <ul className="flex flex-col items-center justify-center gap-2">
        <div className="font-extrabold text-white flex flex-col items-center text-[20px] mb-4">
          <p>L</p>
          <p>E</p>
          <p>N</p>
          <p>S</p>
        </div>
        <li>
          <button
            onClick={() => {
              setGlassObjectIndex(1);
            }}
          >
            <img
              className={`w-8 h-8  ${
                glassObjectIndex === 1 ? "opacity-100" : "opacity-55"
              }`}
              src={IcosahedronIcon}
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setGlassObjectIndex(2);
            }}
          >
            <img
              className={`w-8 h-8  ${
                glassObjectIndex === 2 ? "opacity-100" : "opacity-55"
              }`}
              src={CircleIcon}
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setGlassObjectIndex(3);
            }}
          >
            <img
              className={`w-8 h-8  ${
                glassObjectIndex === 3 ? "opacity-100" : "opacity-55"
              }`}
              src={VerticalStripesIcon}
            />
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setGlassObjectIndex(4);
            }}
          >
            <img
              className={`w-8 h-8  ${
                glassObjectIndex === 4 ? "opacity-100" : "opacity-55"
              }`}
              src={HoneyCombIcon}
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
