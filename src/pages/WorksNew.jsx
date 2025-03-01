import {
  useRef,
  useMemo,
  useState,
  useEffect,
  useLayoutEffect,
  Suspense,
} from "react";
import { useNavigate, Link } from "react-router-dom";

import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Sphere,
  Text,
  Image as ImageImpl,
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
import { isMobile, isBrowser } from "react-device-detect";

import { gameStates, useGameStore } from "../store/store.js";

import Lenis from "lenis";
import "lenis/dist/lenis.css";

import Header from "../components/header/Header.jsx";
import LoadingScreen from "../components/loadingScreen/LoadingScreen.jsx";

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

/**
 * THUMBNAIL_IMAGE_ARRAY
 */
const THUMBNAIL_IMAGES_ARRAY = [
  PortfolioWebsiteThumbnail,
  OBJECRotterdam2024Thumbnail,
  NulZesCraftedDeMarktThumbnail,
  WeatherCerealThumbnail,
  DonutsUniverseThumbnail,
  MarbleOnARollThumbnail,
  ThreeDVisualThumbnail,
  BeautyOfTimePassingThumbnail,
  AmbienceOfLightThumbnail,
  InterventionInOurDisconnectionThumbnail,
  MasuTypoThumbnail,
  ComfortingDinnerThumbnail,
];

/**
 * SCROLL VALUES
 */
const SCROLL_PAGES = isBrowser ? 8.25 : 6.0;
const SCROLL_DAMPING = 0.325; // the lower, the slower animation gets
const SCROLL_DISTANCE = 0.4; // the higher, the slower animation gets

/**
 * PROJECT THUMBNAIL IMAGE VALUES
 */
const IMAGE_DIST_STRENGTH = isBrowser ? 0.65 : 0.45;

/**
 * PROJECTS LIST ARRAY
 */
const PROJECTS_LIST_ARRAY = [
  // 3D Web Applications
  {
    id: "a01",
    title: "Portfolio Website",
    imageUrl: PortfolioWebsiteThumbnail,
    projectPageUrl: "/portfolio-website",
    zPos: 0,
  },
  {
    id: "a02",
    title: "OBJECT Rotterdam 2024",
    imageUrl: OBJECRotterdam2024Thumbnail,
    projectPageUrl: "/object-rotterdam-2024",
    zPos: 0,
  },
  {
    id: "a03",
    title: "Crafted De Markt",
    imageUrl: NulZesCraftedDeMarktThumbnail,
    projectPageUrl: "/nul-zes-crafted-de-markt",
    zPos: 0,
  },
  {
    id: "a04",
    title: "Weather Cereal",
    imageUrl: WeatherCerealThumbnail,
    projectPageUrl: "/weather-cereal",
    zPos: 0,
  },
  {
    id: "a05",
    title: "Donuts Universe",
    imageUrl: DonutsUniverseThumbnail,
    projectPageUrl: "/donuts-universe",
    zPos: 0,
  },
  {
    id: "a06",
    title: "Marble's on a Roll",
    imageUrl: MarbleOnARollThumbnail,
    projectPageUrl: "/marble-race",
    zPos: 0,
  },

  // Design Projects
  {
    id: "d06",
    title: "3D Visuals",
    imageUrl: ThreeDVisualThumbnail,
    projectPageUrl: "/three-d-visuals",
    zPos: 0,
  },

  {
    id: "d01",
    title: "Ambience of Light",
    imageUrl: AmbienceOfLightThumbnail,
    projectPageUrl: "/ambience-of-light",
    zPos: 0,
  },
  {
    id: "d02",
    title: "Beauty of Time Passing",
    imageUrl: BeautyOfTimePassingThumbnail,
    projectPageUrl: "/beauty-of-time-passing",
    zPos: 0,
  },
  {
    id: "d03",
    title: "Intervention in our Disconnection",
    imageUrl: InterventionInOurDisconnectionThumbnail,
    projectPageUrl: "/intervention-in-our-disconnection",
    zPos: 0,
  },
  {
    id: "d04",
    title: "Masu Typo",
    imageUrl: MasuTypoThumbnail,
    projectPageUrl: "/masu-typo",
    zPos: 0,
  },
  {
    id: "d05",
    title: "Comforting Dinner",
    imageUrl: ComfortingDinnerThumbnail,
    projectPageUrl: "/comforting-dinner",
    zPos: 0,
  },
];

/**
 * COMPONENTS ======================================================
 */
export default function WorksPage() {
  /**
   * MOMENTUM SMOOTH SCROLLING - LENIS SETUP
   */
  const [loadedStatus, setLoadedStatus] = useState(false);

  useEffect(() => {
    setLoadedStatus(document.readyState === "complete");
    console.log("LoadedStauts: ", loadedStatus);

    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    console.log(`Set Lenis`);

    return () => {
      lenis.scrollTo(100);
      lenis.destroy();

      console.log("Reset and destroy Lenis");
    };
  }, [THUMBNAIL_IMAGES_ARRAY]);

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
    <>
      <Header home about contact />

      {gameState === gameStates.MENU && (
        <div className="fixed bottom-14 w-[100vw] z-10">
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

      {!!isMobile && (
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
          <Suspense fallback={loadingScreenComponent}>
            <ScrollControls
              pages={SCROLL_PAGES}
              damping={SCROLL_DAMPING}
              distance={SCROLL_DISTANCE}
            >
              <MobileExperience />
            </ScrollControls>
          </Suspense>
        </Canvas>
      )}

      {!!isBrowser && (
        <Suspense fallback={<Canvas>{loadingScreenComponent}</Canvas>}>
          <section className="w-screen h-screen bg-slate-500">
            <div className="pl-[260px] pr-[100px] h-full flex flex-col justify-center">
              <Link to="/portfolio-website">
                <img src={PortfolioWebsiteThumbnail} className="w-[1080px]" />
              </Link>
            </div>
          </section>
        </Suspense>
      )}
    </>
  );
}

function MobileExperience() {
  /**
   * GLASS GEOMETRY & MATERIAL
   */
  const GLASS_GEOMETRY = useMemo(() => {
    return <torusGeometry args={[2, 0.45]} />;
  }, []);

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

      <GlassFocusTorus geometry={GLASS_GEOMETRY} material={GLASS_MATERIAL} />

      <Scroll>
        <ProjectThumbnails />
      </Scroll>
    </>
  );
}

function ProjectThumbnails({ m = 0.4, ...props }) {
  /**
   * IMAGE GROUP REF
   */
  const imageGroups = useRef([]);

  /**
   * NAVIGATE
   */
  const navigate = useNavigate();

  /**
   * IMAGE GROUP POSITION SET UP
   */
  const { height, width } = useThree((state) => state.viewport);
  const h = height < 10 ? 1.5 / 3 : 1 / 3;
  const w = width < 10 ? 1.5 / 3 : 1 / 3;

  /**
   * PROJECT TITLE PROPS
   */
  const textProps = {
    position: [-2.0, 0.0, 3.0],
    fontSize: 0.4,
    font: "./fonts/DMSerifDisplay-Regular.ttf",
    maxWidth: 3.5,
    anchorX: "left",
  };

  /**
   * MOUSE POINTER SET UP ON HOVER STATE
   */
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  /**
   * ANIMATION - HOVER ANIMATION
   */
  const pointerOverImageGroupAnimationHandler = (index) => {
    gsap.to(imageGroups.current[index].position, {
      z: imageGroups.current[index].position.z - 0.5,
      duration: 1.0,
      ease: "power2.out",
    });
  };
  const pointerOutImageGroupAnimationHandler = (index) => {
    gsap.to(imageGroups.current[index].position, {
      z: imageGroups.current[index].position.z + 0.5,
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
          position={[0, -index * height * IMAGE_DIST_STRENGTH, project.zPos]}
          onClick={() => {
            setHovered(false);
            navigate(project.projectPageUrl);
          }}
          onPointerOver={(event) => {
            event.stopPropagation();
            setHovered(true);
            pointerOverImageGroupAnimationHandler(index);
          }}
          onPointerOut={() => {
            setHovered(false);
            pointerOutImageGroupAnimationHandler(index);
          }}
        >
          <Image
            scale={
              isBrowser
                ? [7.5, height * h * 1.5 - m * 3.0, 1]
                : [5, height * h - m * 1.5, 1]
            }
            url={project.imageUrl}
          />
          <Text
            position={isBrowser ? textProps.position : [-1.5, 0.6, 0.25]}
            fontSize={isBrowser ? textProps.fontSize : 0.35}
            font={textProps.font}
            maxWidth={isBrowser ? textProps.maxWidth : 2.0}
            anchorX={textProps.anchorX}
          >
            {project.title}
            <meshBasicMaterial color="#ffffff" toneMapped={false} />
          </Text>
        </group>
      ))}
    </group>
  );
}

function Image({ ...props }) {
  const ref = useRef();
  const group = useRef();
  const data = useScroll();

  useFrame((state, delta) => {
    group.current.position.z = THREE.MathUtils.damp(
      group.current.position.z,
      Math.max(0, data.delta * 50),
      4,
      delta
    );
  });
  return (
    <group ref={group}>
      <ImageImpl
        ref={ref}
        {...props}
        toneMapped={false}
        opacity={0.85}
        transparent={true}
      />
    </group>
  );
}

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

function GlassFocusTorus({ geometry, material }) {
  const { width, height } = useThree((state) => state.viewport);

  const { nodes, materials } = useGLTF(
    "/models/torus-lens-plane/torus-lens-plane.glb"
  );

  return (
    <group>
      <mesh
        scale={
          isBrowser
            ? [height * 0.16, height * 0.16, 1]
            : [height * 0.12, height * 0.12, 1]
        }
        position={[0, 0, 2]}
      >
        {geometry}
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
