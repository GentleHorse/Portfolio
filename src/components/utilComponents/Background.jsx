import { useControls } from "leva";

export default function Background() {
    const {color} = useControls('background', {
        color: "#5b87a6"
    })

  return (
    <>
      <color args={[color]} attach="background" />
    </>
  );
}
