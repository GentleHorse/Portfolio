import { useControls } from "leva";

export default function Background() {
    const {color} = useControls('background', {
        color: "#fdfdfd"
    })

  return (
    <>
      <color args={[color]} attach="background" />
    </>
  );
}
