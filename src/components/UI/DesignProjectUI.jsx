import { Root, Text, Image, Container } from "@react-three/uikit";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./uikitComponents/card.tsx";
import { Button } from "./uikitComponents/button.tsx";

import AmbienceOfLightHeroImage from "../../../public/images/design-projects/amibience-of-light/ambience-of-light-image-13.jpg";

const INTRO_TITLE_FONT_SIZE = 90;
const INTRO_TEXTS_FONT_SIZE = 25;
const INTRO_TEXTS_COLOR = "#434343";
const TITLE_FONT_SIZE = 65;
const DESCRIPTION_TEXT_SIZE = 18;

export default function DesignProjectUI() {
  return (
    <>
      {/* DESIGN WORKS INTRO */}
      <group position={[-5.5, 3.5, 5]}>
        <Root>
          <Container flexDirection="row" gap={40}>
            <Text
              margin={30}
              fontWeight="extra-bold"
              fontSize={INTRO_TITLE_FONT_SIZE}
              color="#1C1C1C"
            >
              DESIGN
            </Text>
            <Container flexDirection="column" gap={10}>
              <Text
                marginX={30}
                marginTop={30}
                marginBottom={60}
                fontSize={INTRO_TEXTS_FONT_SIZE}
                color={INTRO_TEXTS_COLOR}
              >
                Space between objects, space around objects.
              </Text>
              <Text
                marginX={30}
                marginY={3}
                fontSize={INTRO_TEXTS_FONT_SIZE}
                color={INTRO_TEXTS_COLOR}
              >
                What's happing there?
              </Text>
              <Text
                marginX={30}
                marginY={3}
                fontSize={INTRO_TEXTS_FONT_SIZE}
                color={INTRO_TEXTS_COLOR}
              >
                What will happen there?
              </Text>
              <Text
                marginX={30}
                marginY={3}
                fontSize={INTRO_TEXTS_FONT_SIZE}
                color={INTRO_TEXTS_COLOR}
              >
                What happened there?
              </Text>
              <Text
                marginX={30}
                marginTop={60}
                fontSize={INTRO_TEXTS_FONT_SIZE}
                color={INTRO_TEXTS_COLOR}
              >
                ...and what can you feel there?
              </Text>
            </Container>
          </Container>
        </Root>
      </group>

      {/* AMBIENCE OF LIGHT */}
      <group position={[-12, 5, 0]} rotation-y={Math.PI / 2}>
        <Root>
          <Container flexDirection="column" gap={15}>
            <Text
              fontWeight="extra-bold"
              fontSize={TITLE_FONT_SIZE}
              color="#1C1C1C"
            >
              Ambience of Light
            </Text>
            <Text fontSize={DESCRIPTION_TEXT_SIZE}>
              Here is the short discription of the project.
            </Text>
            {/* <Button>
              <Text>Go to Project Page</Text>
            </Button> */}
          </Container>
        </Root>
      </group>

      {/* BEAUTY OF TIME PASSING */}
      <group position={[-1, 5.5, -14.5]} rotation-y={Math.PI / 2}>
        <Root>
          <Container flexDirection="column" gap={15}>
            <Text
              fontWeight="extra-bold"
              fontSize={TITLE_FONT_SIZE}
              color="#1C1C1C"
            >
              Beauty of Time Passing
            </Text>
            <Text fontSize={DESCRIPTION_TEXT_SIZE}>
              Here is the short discription of the project.
            </Text>
            {/* <Button>
              <Text>Go to Project Page</Text>
            </Button> */}
          </Container>
        </Root>
      </group>

      {/* INTERVENTION IN OUR DISCONNECTION */}
      <group position={[6, 5, -39.5]}>
        <Root>
          <Container flexDirection="column" gap={15}>
            <Text
              fontWeight="extra-bold"
              fontSize={TITLE_FONT_SIZE}
              color="#1C1C1C"
            >
              Intervention In Our Disconnection
            </Text>
            <Text fontSize={DESCRIPTION_TEXT_SIZE}>
              Here is the short discription of the project.
            </Text>
            {/* <Button>
              <Text>Go to Project Page</Text>
            </Button> */}
          </Container>
        </Root>
      </group>

      {/* COMFORTING DINNER */}
      <group position={[-20, 5, -29]} rotation-y={Math.PI / 2}>
        <Root>
          <Container flexDirection="column" gap={15}>
            <Text
              fontWeight="extra-bold"
              fontSize={TITLE_FONT_SIZE}
              color="#1C1C1C"
            >
              Comforting Dinner
            </Text>
            <Text fontSize={DESCRIPTION_TEXT_SIZE}>
              Here is the short discription of the project.
            </Text>
            {/* <Button>
              <Text>Go to Project Page</Text>
            </Button> */}
          </Container>
        </Root>
      </group>

      {/* MASU TYPO */}
      <group position={[-2, 5, -16]} rotation-y={-Math.PI / 2}>
        <Root>
          <Container flexDirection="column" gap={15}>
            <Text
              fontWeight="extra-bold"
              fontSize={TITLE_FONT_SIZE}
              color="#1C1C1C"
            >
              Masu Typo
            </Text>
            <Text fontSize={DESCRIPTION_TEXT_SIZE}>
              Here is the short discription of the project.
            </Text>
            {/* <Button>
              <Text>Go to Project Page</Text>
            </Button> */}
          </Container>
        </Root>
      </group>
    </>
  );
}
