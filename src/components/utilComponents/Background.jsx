import { useControls } from "leva";

export default function Background() {
    // const {color} = useControls('background', {
    //     color: "#000000"
    // })

  return (
    <>
      <color args={["#1C1C1C"]} attach="background" />
    </>
  );
}
