import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gameStates, useGameStore } from "../../store/store.js";
import Modal from "../UI/Modal.jsx";

import escKeyIcon from "../../../public/images/icons/esc-key.svg";
import moveKeysIcon from "../../../public/images/icons/move-keys.svg";
import mouseIcon from "../../../public/images/icons/mouse.svg";

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
        className="w-[800px] h-[80vh] overflow-hidden rounded-2xl backdrop-blur-md bg-[#C1C1C1]/15"
      >
        <section className="w-full h-full flex flex-col items-center justify-evenly">
          <div className="w-full mt-5 px-[150px] text-slate-50 text-md">
            <p className="mb-10 text-center text-slate-50 font-great-vibes text-3xl">
              How to Play
            </p>

            <div className="flex justify-between mb-10 py-10 border rounded-xl">
              <div className="mx-4 flex flex-col items-center justify-center">
                <img src={moveKeysIcon} className="w-20 h-14" />
                <p className="m-1 text-sm text-center">WASD/AQSD/arrow keys to move</p>
              </div>
              <div className="mx-4 flex flex-col items-center justify-center">
                <img src={mouseIcon} className="w-14 h-14" />
                <p className="m-1 text-sm text-center">Mouse to change the camera angle</p>
              </div>
              <div className="mx-4 flex flex-col items-center justify-center">
                <img src={escKeyIcon} className="w-14 h-14" />
                <p className="m-1 text-sm text-center">Esc key to go back to Menu</p>
              </div>
            </div>
          </div>

          <button
            className="px-5 py-5 mb-10 flex justify-evenly items-center w-[200px] h-1/7 rounded-full bg-[#09090985] text-slate-50 uppercase font-serif font-extrabold text-2xl"
            onClick={modalCloseHandler}
          >
            <p>P l a y</p>
            <img src="./images/icons/play-triangle.svg" className="w-[50px]" />
          </button>
          <div className="w-full text-slate-50 text-xl flex justify-center">
            <Link to="/portfolio-website">
              <p className="mx-5 font-serif">About this website</p>
            </Link>

            <Link to="/about">
              <p className="mx-5 font-serif">Author</p>
            </Link>

            <Link to="/works">
              <p className="mx-5 font-serif">Works</p>
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
