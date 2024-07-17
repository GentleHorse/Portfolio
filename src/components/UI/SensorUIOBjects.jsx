import SensorUIObject from "./SensorUIObject.jsx";
import { useGameStore } from "../../store/store.js";

export default function SensorUIObjects() {
  return (
    <>
      {/* LINK TO "AMBIENCE OF LIGHT" PAGE */}
      <SensorUIObject
        projectName="Ambience of Light"
        scale={4.0}
        position={[0, 0, -7]}
      >
        <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
          <planeGeometry />
          <meshNormalMaterial />
        </mesh>
      </SensorUIObject>

      {/* LINK TO "BEAUTY OF TIME PASSING" PAGE */}
      <SensorUIObject
        projectName="Beauty of Time Passing"
        scale={4.0}
        position={[10, 0, -15]}
        rotation-y={-Math.PI * 0.5}
      >
        <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
          <planeGeometry />
          <meshNormalMaterial />
        </mesh>
      </SensorUIObject>

      {/* LINK TO "INTERVENTION IN OUR DISCONNECTION" PAGE */}
      <SensorUIObject
        projectName="Intervention In Our Disconnection"
        scale={4.0}
        position={[5, 0, -35]}
      >
        <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
          <planeGeometry />
          <meshNormalMaterial />
        </mesh>
      </SensorUIObject>

      {/* LINK TO "MASU TYPO" PAGE */}
      <SensorUIObject
        projectName="Masu Typo"
        scale={4.0}
        position={[-8, 0, -18]}
        rotation-y={-Math.PI * 0.5}
      >
        <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
          <planeGeometry />
          <meshNormalMaterial />
        </mesh>
      </SensorUIObject>

      {/* LINK TO "COMFORTING DINNER" PAGE */}
      <SensorUIObject
        projectName="Comforting Dinner"
        scale={4.0}
        position={[-15, 0, -30]}
        rotation-y={Math.PI * 0.5}
      >
        <mesh rotation={[-Math.PI * 0.5, 0, 0]}>
          <planeGeometry />
          <meshNormalMaterial />
        </mesh>
      </SensorUIObject>
    </>
  );
}
