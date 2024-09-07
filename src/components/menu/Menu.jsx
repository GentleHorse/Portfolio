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
          <p className="my-5 text-slate-50">
            Welcome!
            <br />
            <br />
            You can explore the world with your keyboard & mouse.
            <br />
            <br />
            WASD/AQSD/arrow keys to move <br />
            Mouse to change the camera angle <br />
            Esc key to go back to Menu
          </p>
          <button
            className="w-full h-2/5 bg-[#09090985] py-10 text-slate-50 uppercase font-serif font-extrabold text-4xl"
            onClick={modalCloseHandler}
          >
            P l a y
          </button>
          <div className="w-full text-slate-50 text-2xl flex justify-center">
          <Link to="/about">
              <p className="mx-5 font-serif">About this website</p>
            </Link>

            <Link to="/about">
              <p className="mx-5 font-serif">Author</p>
            </Link>

            <Link to="/works">
              <p className="mx-5 font-serif">Other works</p>
            </Link>

            <Link to="/contact">
              <p className="mx-5 font-serif">Contact</p>
            </Link>
          </div>
        </section>
      </Modal>
    </>
  );
}
