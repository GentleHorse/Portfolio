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
        className="w-[60vw] h-[75vh] overflow-hidden rounded-2xl backdrop-blur-md bg-[#C1C1C1]/15"
      >
        <section className="w-full h-full flex flex-col items-center justify-evenly">
          <p className="mt-5 text-slate-50 text-md">
            Welcome!
            <br />
            <br />
            You can explore the world with your keyboard & mouse.
            <br />
            <br />
            &gt;&gt; WASD/AQSD/arrow keys to move <br />
            &gt;&gt; Mouse to change the camera angle <br />
            &gt;&gt; Esc key to go back to Menu
            <br />
            <br />
            Enjoy !
          </p>
          <p className="w-[50%] mb-5 text-right text-slate-50 font-great-vibes text-3xl">
            Toshihito Endo
          </p>
          <button
            className="px-5 py-5 mb-10 flex justify-evenly items-center w-[250px] h-1/5 rounded-full bg-[#09090985] text-slate-50 uppercase font-serif font-extrabold text-3xl"
            onClick={modalCloseHandler}
          >
            <p>P l a y</p>
            <img src="./images/icons/play-triangle.svg" className="w-[50px]" />
          </button>
          <div className="w-full text-slate-50 text-xl flex justify-center">
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
