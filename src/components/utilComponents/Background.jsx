import { useControls } from "leva";

export default function Background({ color = "#1C1C1C" }) {
  // const {color} = useControls('background', {
  //     color: "#000000"
  // })

  return (
    <>
      <color args={[color]} attach="background" />
    </>
  );
}
