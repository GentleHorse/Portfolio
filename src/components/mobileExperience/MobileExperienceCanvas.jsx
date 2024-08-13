import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";

export default function MobileExperienceCanvas() {
  const cube = useRef();

  useFrame((state, delta) => {
    cube.current.rotation.x += delta * 0.2;
    cube.current.rotation.y += delta * 0.3;
    cube.current.rotation.z += delta * 0.4;
  });

  return (
    <>
        {/* DEBUG TOOLS */}
        {/* <Perf position="top-left" /> */}

        <mesh ref={cube}>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
    </>
  );
}
