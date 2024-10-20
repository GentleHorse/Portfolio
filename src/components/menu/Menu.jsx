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

  /**
   * CONTENT PAGE STATE, HANDLERS, ARRAY
   */
  const [contentPage, setContentPage] = useState(0);
  const contentPageIncrementHandler = () => {
    setContentPage((prevContentPageNum) => {
      if (prevContentPageNum === 2) {
        prevContentPageNum = 0;
      } else {
        prevContentPageNum += 1;
      }

      return prevContentPageNum;
    });
  };
  const contentPageDecrementHandler = () => {
    setContentPage((prevContentPageNum) => {
      prevContentPageNum -= 1;
      return prevContentPageNum;
    });
  };
  const contentsArray = [
    {
      id: "c1",
      content: (
        <section className="flex flex-col items-center h-full justify-evenly">
          <div className="w-full mt-16 px-[80px] text-slate-50">
            <p className="mb-20 text-center text-slate-50 font-serif text-4xl">
              Welcome to my "unshaped" portfolio!
            </p>

            <div className="mb-10">
              <p className="my-5 text-slate-50 font-light text-2xl">
                Design is communication, and while organization and clarity are
                essential for understanding, I often enjoy the curiosity sparked
                by a bit of chaos.
              </p>

              <p className="my-5 text-slate-50 font-light text-2xl">
                In this virtual world, some projects may appear disorganized or
                altered, without descriptions, inviting you to explore and feel
                them rather than simply understand them.
              </p>
            </div>
          </div>

          <button
            className="px-1 py-4 my-10 flex justify-evenly items-center w-[170px] h-1/7 rounded-full bg-[#09090985] hover:bg-[#565d7595] text-slate-50 uppercase font-serif font-extrabold text-xl"
            onClick={contentPageIncrementHandler}
          >
            <p>n e x t</p>
            <img src="./images/icons/play-triangle.svg" className="w-[35px]" />
          </button>
        </section>
      ),
    },
    {
      id: "c2",
      content: (
        <section className="flex flex-col items-center h-full justify-evenly">
          <div className="w-full mt-16 px-[120px] text-slate-50 text-md">
            <p className="mb-20 text-center text-slate-50 font-serif text-4xl">
              How to play
            </p>

            <div className="flex justify-between mb-10 py-20 border rounded-xl">
              <div className="mx-4 flex flex-col items-center justify-center">
                <img src={moveKeysIcon} className="w-20 h-16" />
                <p className="m-1 font-montserrat text-md text-center">
                  WASD/AQSD/arrow keys to move
                </p>
              </div>
              <div className="mx-4 flex flex-col items-center justify-center">
                <img src={mouseIcon} className="w-16 h-16" />
                <p className="m-1 font-montserrat text-md text-center">
                  Mouse to change the camera angle
                </p>
              </div>
              <div className="mx-4 flex flex-col items-center justify-center">
                <img src={escKeyIcon} className="w-16 h-16" />
                <p className="m-1 font-montserrat text-md text-center">
                  Esc key to go back to Menu
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-10">
            <button
              className="px-1 py-4 my-10 flex justify-evenly items-center w-[170px] h-1/7 rounded-full bg-[#09090985] hover:bg-[#565d7595] text-slate-50 uppercase font-serif font-extrabold text-xl"
              onClick={contentPageDecrementHandler}
            >
              <img
                src="./images/icons/play-triangle-reverse.svg"
                className="w-[35px]"
              />
              <p>b a c k</p>
            </button>
            <button
              className="px-1 py-4 my-10 flex justify-evenly items-center w-[170px] h-1/7 rounded-full bg-[#09090985] hover:bg-[#565d7595] text-slate-50 uppercase font-serif font-extrabold text-xl"
              onClick={contentPageIncrementHandler}
            >
              <p>n e x t</p>
              <img
                src="./images/icons/play-triangle.svg"
                className="w-[35px]"
              />
            </button>
          </div>
        </section>
      ),
    },
    {
      id: "c3",
      content: (
        <section className="flex flex-col items-center h-full justify-evenly">
          <div className="w-full mt-10 px-[120px] text-slate-50 text-md">
            <p className="my-10 text-center text-slate-50 font-serif text-4xl">
              Enter "portal" to explore more
            </p>

            <div className="flex justify-between gap-12 mb-10 pt-10">
              <div>
                <p className="mb-5 font-light text-2xl">
                  There are "portals" in this space.
                </p>
                <p className="mb-24 font-light text-2xl">
                  If you feel like knowing more about the project, you can visit
                  individual project pages by entering this "portal" gate.
                </p>
                <p className="font-great-vibes text-4xl">E n j o y !</p>
              </div>

              <img src="./images/menu/portal-gate.jpg" className="h-[300px]" />
            </div>
          </div>

          <div className="flex gap-10">
            <button
              className="px-1 py-4 my-10 flex justify-evenly items-center w-[170px] h-1/7 rounded-full bg-[#09090985] hover:bg-[#565d7595] text-slate-50 uppercase font-serif font-extrabold text-xl"
              onClick={contentPageDecrementHandler}
            >
              <img
                src="./images/icons/play-triangle-reverse.svg"
                className="w-[35px]"
              />
              <p>b a c k</p>
            </button>
            <button
              className="px-1 py-4 my-10 flex justify-evenly items-center w-[170px] h-1/7 rounded-full bg-[#09090985] hover:bg-[#565d7595] text-slate-50 uppercase font-serif font-extrabold text-xl"
              onClick={modalCloseHandler}
            >
              <p>P l a y</p>
              <img
                src="./images/icons/play-triangle.svg"
                className="w-[35px]"
              />
            </button>
          </div>
        </section>
      ),
    },
  ];

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={gameStartHandler}
        className="w-[1000px] h-[80vh] overflow-hidden rounded-2xl backdrop-blur-md bg-[#C1C1C1]/15"
      >
        <section className="w-auto h-full grid grid-cols-6 items-start">
          {/* MAIN SECTION */}
          <div className="h-full col-span-5">{contentsArray[contentPage].content}</div>

          {/* LINKS FOOTER */}
          <div className="mt-[200px] text-slate-50 text-xl flex flex-col gap-10 justify-start">
            <Link to="/about" reloadDocument={true}>
              <p className="mx-5 font-serif">About</p>
            </Link>

            <Link to="/works" reloadDocument={true}>
              <p className="mx-5 font-serif">Works</p>
            </Link>

            <Link to="/contact" reloadDocument={true}>
              <p className="mx-5 font-serif">Contact</p>
            </Link>
          </div>
        </section>
      </Modal>
    </>
  );
}
