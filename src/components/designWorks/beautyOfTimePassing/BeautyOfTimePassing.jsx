import { useState } from "react";
import { RigidBody } from "@react-three/rapier";
import clearSceneryVideo from "../../../../public/videos/clear.mp4";

export default function BeautyOfTimePassing() {
  /**
   * SCENERY VIDEO SETUP AT THE INITIAL RENDER
   */
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = clearSceneryVideo;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <>
      {/* VIDEO PLANE */}
      <mesh scale={[3, 5, 1]} position={[0, 3, 0]}>
        <planeGeometry />
        <meshStandardMaterial emissive={"snow"}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>

      {/* FLOOR */}
      <RigidBody type="fixed" restitution={0.5} friction={0.6}>
        <mesh scale={[20, 0.1, 20]} position={[0, -0.2, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#000000" roughness={0.7} />
        </mesh>
      </RigidBody>
    </>
  );
}
