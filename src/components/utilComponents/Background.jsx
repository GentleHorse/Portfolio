import { useControls } from "leva";

export default function Background() {
    const {color} = useControls('background', {
        color: "#1C1C1C"
    })

  return (
    <>
      <color args={[color]} attach="background" />
    </>
  );
}
