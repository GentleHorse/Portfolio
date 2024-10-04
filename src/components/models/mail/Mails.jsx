import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import Mail from "./Mail.jsx";

export default function Mails() {
  /**
   * INSTANCING MAILS, ANIMATING
   */
  const mails = useRef([]);

  useFrame((state, delta) => {
    for (const mail of mails.current) {
      mail.rotation.x += delta * 0.03;
      mail.rotation.y += delta * 0.04;
      mail.rotation.z += delta * 0.05;
    }
  });

  return (
    <>
      {[...Array(100)].map((value, index) => (
        <group
          key={index}
          ref={(element) => (mails.current[index] = element)}
          position={[
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 15,
          ]}
          scale={0.05 + Math.random() * 0.05}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        >
          <Mail />
        </group>
      ))}
    </>
  );
}
