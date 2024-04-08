import { useControls } from "leva";

export default function Background() {
    const {color} = useControls('background', {
        color: "#2e2d2c"
    })

  return (
    <>
      <color args={[color]} attach="background" />
    </>
  );
}
