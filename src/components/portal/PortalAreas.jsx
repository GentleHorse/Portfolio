import PortalArea from "./PortalArea.jsx";

export default function PortalAreas() {
  return (
    <>
      <PortalArea
        redirectWatingSeconds={0.5}
        url="/beauty-of-time-passing"
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </>
  );
}
