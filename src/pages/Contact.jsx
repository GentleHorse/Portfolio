import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

import Header from "../components/header/Header.jsx";
import Mail from "../components/models/mail/Mail.jsx";
import Mails from "../components/models/mail/Mails.jsx";
import { Perf } from "r3f-perf";

export default function ContactPage() {


  return (
    <>
      <Header home about works />

      <Canvas camera={{ position: [0, 0, 20], fov: 15 }}>
        <OrbitControls />
        <Environment preset="city" />

        <Mails />
      </Canvas>
    </>
  );
}
