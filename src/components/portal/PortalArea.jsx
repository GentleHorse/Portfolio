import * as THREE from "three";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Root, Text, Image, Container } from "@react-three/uikit";
import { gameStates, useGameStore } from "../../store/store";
import { Image as DreiImage, useKeyboardControls } from "@react-three/drei";

export default function PortalArea({
  scale,
  position,
  rotation,
  projectUrl,
  message,
  text = "Go to the project page"
}) {
  /**
   * GAME STORE
   */
  const { gameState, setGameState } = useGameStore((state) => ({
    gameState: state.gameState,
    setGameState: state.setGameState,
  }));

  /**
   * NAVIGATE
   */
  const navigate = useNavigate();

  /**
   * KEYBOARD CONTROLS
   */
  const [subscribeKeys, getKeys] = useKeyboardControls();

  /**
   * PROJECT-URL STATE
   */
  const [curProjectUrl, setCurProjectUrl] = useState(null);

  /**
   * ENTER KEY ICON STATE
   */
  const [showEnterKey, setShowEnterKey] = useState(false);

  /**
   * REDIRECT TO INDIVIDUAL PROJECT PAGES
   */
  useEffect(() => {
    const unsubscribeEnter = subscribeKeys(
      (state) => state.enter,
      (value) => {
        if (value) {
          redirectHandler();
        }
      }
    );

    return () => {
      unsubscribeEnter();
    };
  }, [curProjectUrl]);

  const redirectHandler = () => {
    if (curProjectUrl !== null) {
      // Chage state from "PLAY" to "MENU"
      setGameState(gameStates.MENU);

      // Exit Pointer Lock API
      document.exitPointerLock();

      // Redirect
      navigate(curProjectUrl);

      // Reset the current project url
      setCurProjectUrl(null);
      console.log("reset proj url");

      // Reset the enter key state
      setShowEnterKey(false);
      console.log("hide enter key icon");
    }
  };

  return (
    <>
      <group scale={scale} position={position} rotation={rotation}>
        {/* ENTER KEY */}
        {!!showEnterKey && (
          <group position={[0, 4, 0]}>
            <Root>
              <Container flexDirection="column" gap={15} alignItems="center">
                <Text fontWeight="extra-bold" fontSize={60} color="white">
                  {text}
                </Text>
                <Image
                  src="./images/icons/enter-key.svg"
                  width={250}
                  marginTop={50}
                />
              </Container>
            </Root>
          </group>
        )}

        {/* COLLISION */}
        <group position={[0, 0, 7]}>
          <RigidBody
            type="fixed"
            colliders={false}
            onIntersectionEnter={() => {
              setCurProjectUrl(projectUrl);
              console.log(message);

              setShowEnterKey(true);
            }}
            onIntersectionExit={() => {
              setCurProjectUrl(null);
              console.log("Reset the curProjectUrl");

              setShowEnterKey(false);
            }}
          >
            <CuboidCollider args={[10.0, 1.5, 10.0]} sensor />
          </RigidBody>
        </group>
      </group>
    </>
  );
}
