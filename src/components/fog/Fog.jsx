import { useControls } from "leva";

export default function Fog() {
  const fog = useControls("fog", {
    color: "#5b87a6",
    near: {
      value: 0,
      min: -50,
      max: 50,
      step: 0.1,
    },
    far: {
      value: 12.5,
      min: -50,
      max: 50,
      step: 0.1,
    },
  });

  return <fog attach="fog" args={[fog.color, fog.near, fog.far]} />;
}
