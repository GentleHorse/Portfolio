import { useControls } from "leva";

export default function Background() {
    // const {color} = useControls('background', {
    //     color: "#000000"
    // })

  return (
    <>
      <color args={["#1c1c1c"]} attach="background" />
    </>
  );
}
