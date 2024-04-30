import { useControls } from "leva";

export default function Background() {
    const {color} = useControls('background', {
        color: "#51A8DD"
    })

  return (
    <>
      <color args={[color]} attach="background" />
    </>
  );
}
