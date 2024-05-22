import { useControls } from "leva";

export default function Background() {
    const {color} = useControls('background', {
        color: "#ffffff"
    })

  return (
    <>
      <color args={[color]} attach="background" />
    </>
  );
}
