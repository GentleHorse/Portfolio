import * as THREE from "three";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Root, Text, Image, Container } from "@react-three/uikit";
import { gameStates, useGameStore } from "../../store/store";
import { Image as DreiImage, useKeyboardControls } from "@react-three/drei";

export default function PortalArea({
  position,
  rotation,
  collisionObjWidth = 3.0,
  collisionObjHeight = 1.0,
  collisionObjDepth = 3.0,
  isOutsideUrl = false,
  projectUrl,
  message,
  text = "Go to the project page",
  textHeight = 5.0,
  textDistance = 8.0,
  fontSize = 60.0,
  enterIconWidth = 250.0,
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
            <mesh
              position-y={0.05}
              scale={[collisionObjWidth * 2, collisionObjDepth * 2, 1.0]}
              rotation-x={-Math.PI * 0.5}
            >
              <planeGeometry />
              <meshBasicMaterial />
            </mesh>

            <mesh position-y={3} scale={[0.5, 2.0, 1]}>
              <planeGeometry />
              <meshBasicMaterial />
            </mesh>

            <mesh position-y={1.5} scale={[0.5, 0.5, 1]}>
              <planeGeometry />
              <meshBasicMaterial />
            </mesh>
          </>
        )}

        {/* TEXT & ENTER KEY ICON */}
        {!!showEnterKey && (
          <group position={[0, textHeight, -1 * textDistance]}>
            <Root>
              <Container flexDirection="column" gap={15} alignItems="center">
                <Text fontWeight="extra-bold" fontSize={fontSize} color="white">
                  {text}
                </Text>
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
