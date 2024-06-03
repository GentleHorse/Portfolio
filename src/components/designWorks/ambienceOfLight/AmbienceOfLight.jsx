import { RigidBody } from "@react-three/rapier";
import ProductOfAmbienceOfLight from "./ProductOfAmbienceOfLight.jsx";
import GlassBrick from "./GlassBrick.jsx";

const PRODUCTS = [
  {
    scale: 0.5,
    position: { x: 0, y: -0.1, z: 0 },
    rotation: { x: 0, y: Math.PI * 0.2, z: 0 },
    minEmissionStrength: 0.1,
    emissionStrength: 3.5,
    blinkSpeed: 0.9,
    blinkDelay: 2,
  },
  {
    scale: 0.3,
    position: { x: -1, y: 1.5, z: 0.5 },
    rotation: { x: 0, y: Math.PI * 0.4, z: 0 },
    minEmissionStrength: 0.1,
    emissionStrength: 3.5,
    blinkSpeed: 0.9,
    blinkDelay: 8,
  },
  {
    scale: 0.4,
    position: { x: 1.5, y: 0.5, z: 0 },
    rotation: { x: 0, y: Math.PI * 0.9, z: 0 },
    minEmissionStrength: 0.1,
    emissionStrength: 3.5,
    blinkSpeed: 0.9,
    blinkDelay: -6,
  },
  {
    scale: 0.6,
    position: { x: 3.5, y: 0.5, z: 0 },
    rotation: { x: 0, y: Math.PI * 0.7, z: 0 },
    minEmissionStrength: 0.1,
    emissionStrength: 3.5,
    blinkSpeed: 0.9,
    blinkDelay: 15,
  },
  {
    scale: 0.4,
    position: { x: -2.5, y: 0.45, z: 0 },
    rotation: { x: 0, y: Math.PI * 0.7, z: 0 },
    minEmissionStrength: 0.1,
    emissionStrength: 3.5,
    blinkSpeed: 0.9,
    blinkDelay: -10,
  },
];

export default function AmbienceOfLight() {
  return (
    <>
      {PRODUCTS.map((product, index) => (
        <ProductOfAmbienceOfLight
          key={index}
          scale={product.scale}
          position={[
            product.position.x,
            product.position.y,
            product.position.z,
          ]}
          rotation={[
            product.rotation.x,
            product.rotation.y,
            product.rotation.z,
          ]}
          minEmissionStrength={product.minEmissionStrength}
          emissionStrength={product.emissionStrength}
          blinkSpeed={product.blinkSpeed}
          blinkDelay={product.blinkDelay}
        />
      ))}

      {/* <GlassBrick position={[0, 0.5, 0]} />
      <GlassBrick position={[0, 1.5, 0]} /> */}

      {/* <pointLight intensity={50} position={[0, 1, 0]} />

      <RigidBody type="fixed" restitution={0.5} friction={0.6}>
        <mesh scale={[20, 0.1, 20]} position={[0, -0.2, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#000000" roughness={0.6} />
        </mesh>
      </RigidBody> */}
    </>
  );
}
