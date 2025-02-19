import * as THREE from "three";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Root, Text, Image, Container } from "@react-three/uikit";
import { gameStates, useGameStore } from "../../store/store";
import { Image as DreiImage, useKeyboardControls } from "@react-three/drei";

export default function PortalArea({
  position,
  rotation,
  collisionObjWidth = 2.0,
  collisionObjHeight = 1.0,
  collisionObjDepth = 2.0,
  isOutsideUrl = false,
  projectUrl,
  message,
  containerWidth = 800,
  title = "Go to the project page",
  titleHeight = 1.5,
  titleDistance = 8.0,
  titleFontSize = 60.0,
  text,
  textFontSize = 40.0,
  enterIconWidth = 150.0,
  infoIconWidth = 150.0,
  infoIconDistance = 2.0,
  infoIconHeight = 2.5,
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
      if (!isOutsideUrl) {
        navigate(curProjectUrl);
      }
      if (isOutsideUrl) {
        window.open(curProjectUrl);
      }

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
      <group position={position} rotation={rotation}>
        {/* INFO ICON */}
        {!showEnterKey && (
          <>
            <group position={[0, infoIconHeight, -1.0 * infoIconDistance]}>
              <Root>
                <Image
                  src="./images/icons/info.svg"
                  width={infoIconWidth}
                  marginTop={0}
                  opacity={0.75}
                />
              </Root>
            </group>
          </>
        )}

        {/* TEXT & ENTER KEY ICON */}
        {!!showEnterKey && (
          <group position={[0, titleHeight, -1 * titleDistance]}>
            <Root>
              <Container
                flexDirection="column"
                gap={15}
                alignItems="center"
                width={containerWidth}
              >
                <Text
                  fontWeight="extra-bold"
                  fontSize={titleFontSize}
                  color="white"
                >
                  {title}
                </Text>
                {!!text && (
                  <Text
                    fontWeight="normal"
                    fontSize={textFontSize}
                    color="white"
                  >
                    {text}
                  </Text>
                )}

                <Image
                  src="./images/icons/enter-key.svg"
                  width={enterIconWidth}
                  marginTop={50}
                />
              </Container>
            </Root>
          </group>
        )}

        {/* COLLISION */}
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
          <CuboidCollider
            position={[0, collisionObjHeight, 0]}
            args={[collisionObjWidth, collisionObjHeight, collisionObjDepth]}
            sensor
          />
        </RigidBody>
      </group>
    </>
  );
}
