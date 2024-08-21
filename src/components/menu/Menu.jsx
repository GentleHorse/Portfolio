import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gameStates, useGameStore } from "../../store/store.js";
import Modal from "../UI/Modal.jsx";

export default function Menu() {
  /**
   * MODAL STATE
   */
  const [isModalOpen, setIsModalOpen] = useState(true);

  /**
   * GAME STORE
   */
  const { gameState, setGameState } = useGameStore((state) => ({
    gameState: state.gameState,
    setGameState: state.setGameState,
  }));

  /**
   * HANDLER - THE MENU GETS CLOSED WITH THE "PLAY" BUTTON
   */
  const modalCloseHandler = () => {
    setIsModalOpen(false);
    document.body.requestPointerLock();
  };

  /**
   * HANDLER - THE MENU GETS CLOSED WITH THE "ESCAPE" KEY
   */
  const gameStartHandler = () => {
    setIsModalOpen(false);
    setGameState(gameStates.PLAY);
    document.body.requestPointerLock();
  };

  /**
   * HANDLER - POPULATE THE MENU WHEN THE "ESCAPE" KEY PRESSED
   */
  const pointerLockStateChangeHandler = () => {
    if (
      document.pointerLockElement === document.body ||
      document.mozPointerLockElement === document.body
    ) {
      console.log("The pointer is locked");
    } else {
      console.log("The pointer is not locked");
      setIsModalOpen(true);
      setGameState(gameStates.MENU);
    }
  };

  /**
   * USEEFFECT - FOR POINTER LOCK STATE CHANGES
   */
  useEffect(() => {
    document.addEventListener(
      "pointerlockchange",
      pointerLockStateChangeHandler
    );

    return () => {
      document.removeEventListener(
        "pointerlockchange",
        pointerLockStateChangeHandler
      );
    };
  }, []);

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={gameStartHandler}
        className="w-[60vw] h-[60vh] overflow-hidden rounded-2xl bg-[#0B346E75]"
      >
        <section className="w-full h-full flex flex-col items-center justify-between">
          <button
            className="w-full h-4/5 bg-[#F05E1C85] py-10 rounded-t-xl text-slate-50 uppercase font-serif font-extrabold text-4xl"
            onClick={modalCloseHandler}
          >
            P l a y
          </button>
          <div className="w-full text-slate-50 text-2xl uppercase flex justify-center">
            <Link to="/about">
              <p className="mx-5">About</p>
            </Link>

            <Link to="/works">
              <p className="mx-5">WORKS</p>
            </Link>

            <Link to="/contact">
              <p className="mx-5">Contact</p>
            </Link>
          </div>
        </section>
      </Modal>
    </>
  );
}
