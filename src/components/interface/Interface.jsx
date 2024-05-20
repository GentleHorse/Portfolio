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
        <div className="flex justify-around items-center">
          <div className="flex flex-row">
            <div
              className="w-0 h-0 my-20 mx-5
                border-t-[40px] border-t-transparent
                border-r-[55px] border-r-neutral-50/35
                border-b-[40px] border-b-transparent"
              onMouseDown={() => setActivateInterfaceState("left")}
              onMouseUp={() => setDeactivateInterfaceState("left")}
              onTouchStart={(event) => setActivateInterfaceState("left")}
              onTouchEnd={(event) => setDeactivateInterfaceState("left")}
            ></div>
            <div
              className="w-0 h-0 my-20 mx-5
              border-t-[40px] border-t-transparent
              border-l-[55px] border-l-neutral-50/35
              border-b-[40px] border-b-transparent"
              onMouseDown={() => setActivateInterfaceState("right")}
              onMouseUp={() => setDeactivateInterfaceState("right")}
              onTouchStart={() => setActivateInterfaceState("right")}
              onTouchEnd={() => setDeactivateInterfaceState("right")}
            ></div>
          </div>
          <div className="flex flex-row">
            <div
              className="w-[4rem] h-[4rem] my-20 mx-2 rounded-full bg-neutral-50/35"
              onMouseDown={() => console.log("The left green button pressed")}
              onMouseUp={() => console.log("The left green button released")}
              onTouchStart={() => setActivateInterfaceState("run")}
              onTouchEnd={() => setDeactivateInterfaceState("run")}
            ></div>
            <div
              className="w-[4rem] h-[4rem] my-20 mx-2 rounded-full  bg-neutral-50/35"
              onMouseDown={() => {
                console.log("The right green button pressed");
                setActivateInterfaceState("jump");
                setTimeout(() => {
                  setDeactivateInterfaceState("jump");
                }, 500);
              }}
              onMouseUp={() => console.log("The right green button released")}
              onTouchStart={() => {
                setActivateInterfaceState("jump");
                setTimeout(() => {
                  setDeactivateInterfaceState("jump");
                }, 500);
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
