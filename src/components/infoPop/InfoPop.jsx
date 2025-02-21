import { useState } from "react";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Root, Text, Image, Container } from "@react-three/uikit";

export default function InfoPop({
  position,
  rotation,
  collisionObjWidth = 1.5,
  collisionObjHeight = 1.0,
  collisionObjDepth = 1.5,
  containerWidth = 800,
  title = "TITLE",
  titleHeight = 5.0,
  titleDistance = 4.5,
  titleFontSize = 60.0,
  text,
  textFontSize = 40.0,
  infoIconWidth = 150.0,
  infoIconDistance = 2.0,
  infoIconHeight = 2.5,
  sound,
}) {
  // Info state
  const [showInfo, setShowInfo] = useState(false);

  // Collision sound
  const collisionSound = new Audio(sound);

  return (
    <>
      <group position={position} rotation={rotation}>
        {/* INFO ICON */}
        {!showInfo && (
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
        {!!showInfo && (
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
              </Container>
            </Root>
          </group>
        )}

        {/* COLLISION */}
        <RigidBody
          type="fixed"
          colliders={false}
          onIntersectionEnter={() => {
            setShowInfo(true);
            collisionSound.play();
          }}
          onIntersectionExit={() => {
            setShowInfo(false);
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
