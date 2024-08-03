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
      {/* AMBIENCE OF LIGHT */}
      <group position={[35, 3, 5]}>
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
      <group position={[5, 5.5, -5]}>
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
      <group position={[40, 5, -40]}>
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
      <group position={[-25, 3, -30]}>
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
      <group position={[-18, 2.5, -75]} >
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
