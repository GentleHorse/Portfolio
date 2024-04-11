import ProductOfAmbienceOfLight from "./ProductOfAmbienceOfLight";
import { MeshReflectorMaterial } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const PRODUCTS = [
  {
    scale: 0.5,
    position: { x: 0, y: -0.1, z: 0 },
    rotation: { x: 0, y: Math.PI * 0.2, z: 0 },
  },
  {
    scale: 0.3,
    position: { x: -1, y: 1.5, z: 0.5 },
    rotation: { x: 0, y: Math.PI * 0.4, z: 0 },
  },
  {
    scale: 0.4,
    position: { x: 1.5, y: 0.5, z: 0 },
    rotation: { x: 0, y: Math.PI * 0.9, z: 0 },
  },
  {
    scale: 0.6,
    position: { x: 3.5, y: 0.5, z: 0 },
    rotation: { x: 0, y: Math.PI * 0.7, z: 0 },
  },
  {
    scale: 0.4,
    position: { x: -2.5, y: 0.45, z: 0 },
    rotation: { x: 0, y: Math.PI * 0.7, z: 0 },
  },
];

export default function AmbienceOfLight() {
  return (
    <>
      {PRODUCTS.map((product, index) => (
        <ProductOfAmbienceOfLight
          key={index}
          scale={product.scale}
          position={[product.position.x, product.position.y, product.position.z]}
          rotation={[product.rotation.x, product.rotation.y, product.rotation.z]}
        />
      ))}

      <RigidBody type="fixed" restitution={0.5} friction={0.6}>
        <mesh scale={[20, 0.1, 20]} position={[0, -0.2, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#000000" roughness={0.1} />
          {/* <MeshReflectorMaterial
            resolution={512}
            blur={[400, 400]}
            mixBlur={0.5}
            mirror={[0.85]}
            color="#E0E0E0"
            mixStrength={2}
            depthScale={1}
            minDepthThreshold={0.85}
            metalness={0.5}
            roughness={0.8}
          /> */}
        </mesh>
      </RigidBody>
    </>
  );
}
