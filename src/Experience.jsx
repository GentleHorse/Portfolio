import { useState, useEffect, Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import TestFloor from "./components/test/TestFloor.jsx";
import CharacterControl from "./components/character/CharacterControl.jsx";
import PostProcessingEffects from "./components/postprocessing/PostProcessingEffects.jsx";
import TestGeometriesEmission from "./components/test/TestGeometriesEmission.jsx";
import Background from "./components/utilComponents/Background.jsx";
import Lights from "./components/utilComponents/Lights.jsx";
import { useKeyboardControls } from "@react-three/drei";
import AmbienceOfLight from "./components/designWorks/ambienceOfLight/AmbienceOfLight.jsx";

export default function Experience() {
  const [isCharacterStartMove, setIsCharacterStartMove] = useState(false);
  const [subscribeKeys, getKeys] = useKeyboardControls();

  useEffect(() => {
    const unsubscribeAny = subscribeKeys(() => setIsCharacterStartMove(true));

    return () => {
      return unsubscribeAny();
    };
  }, []);

  return (
    <>
      <OrbitControls makeDefault />

      {/* <Environment preset="city" /> */}

      <Lights />

      <Background />

      {/* DEBUG TOOLS */}
      <Perf position="top-left" />
      <axesHelper />

      {/* POSTRPROCESSING: needs to find a way for optimizing GPU, CPU */}
      {/* {isCharacterStartMove && <PostProcessingEffects />} */}

      <Physics debug={false}>
          <CharacterControl />

        <AmbienceOfLight />
      </Physics>
    </>
  );
}
