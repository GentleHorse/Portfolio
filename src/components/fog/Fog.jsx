import { useControls } from "leva";

export default function Fog() {
  const fog = useControls("fog", {
    color: "#51A8DD",
    near: {
      value: -3.0,
      min: -50,
      max: 50,
      step: 0.1,
    },
    far: {
      value: 20.5,
      min: -50,
      max: 50,
      step: 0.1,
    },
  });

  return <fog attach="fog" args={[fog.color, fog.near, fog.far]} />;
}
