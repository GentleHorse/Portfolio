import { events } from "@react-three/fiber";
import { useGameStore } from "../../store/store.js";

export default function Interface() {
  const {
    interfaceState,
    setActivateInterfaceState,
    setDeactivateInterfaceState,
  } = useGameStore((state) => ({
    interfaceState: state.interfaceState,
    setActivateInterfaceState: state.setActivateInterfaceState,
    setDeactivateInterfaceState: state.setDeactivateInterfaceState,
  }));

  return (
    <div
      className="fixed z-10 h-screen w-screen"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="flex h-full flex-col justify-end">
        <div className="flex justify-around">
          <div className="flex flex-row">
            <div
              className="w-10 h-10 my-20 mx-5 rounded-xl bg-orange-500"
              onMouseDown={() => setActivateInterfaceState("left")}
              onMouseUp={() => setDeactivateInterfaceState("left")}
              onTouchStart={(event) => {
                setActivateInterfaceState("left");
              }}
              onTouchEnd={(event) => {
                setDeactivateInterfaceState("left");
              }}
              onTouchMove={(event) => event.preventDefault()}
            ></div>
            <div
              className="w-10 h-10 my-20 mx-5 rounded-xl bg-orange-500"
              onMouseDown={() => setActivateInterfaceState("right")}
              onMouseUp={() => setDeactivateInterfaceState("right")}
              onTouchStart={(event) => {
                setActivateInterfaceState("right");
              }}
              onTouchEnd={(event) => {
                setDeactivateInterfaceState("right");
              }}
              onTouchMove={(event) => event.preventDefault()}
            ></div>
          </div>
          <div className="flex flex-row">
            <div
              className="w-10 h-10 my-20 mx-5 rounded-xl bg-green-500"
              onMouseDown={() => console.log("The left green button pressed")}
              onMouseUp={() => console.log("The left green button released")}
            ></div>
            <div
              className="w-10 h-10 my-20 mx-5 rounded-xl bg-green-500"
              onMouseDown={() => console.log("The right green button pressed")}
              onMouseUp={() => console.log("The right green button released")}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
