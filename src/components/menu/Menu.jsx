import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gameStates, useGameStore } from "../../store/store.js";
import Modal from "../UI/Modal.jsx";

import escKeyIcon from "../../../public/images/icons/esc-key.svg";
import moveKeysIcon from "../../../public/images/icons/move-keys.svg";
import mouseIcon from "../../../public/images/icons/mouse.svg";
import arrowIcon from "../../../public/images/icons/directional-arrow-up.svg";
import whiteLogoicon from "../../../public/images/icons/logo-white.svg";

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
      prevContentPageNum += 1;
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
              Welcome to my atelier!
            </p>

            <div className="mb-10">
              <p className="my-5 text-slate-50 font-light text-2xl">
                I enjoy visiting museums, but I prefer exploring ateliers
                because they allow me to sense the person behind the art and
                design works. In these spaces, I might find unfinished,
                unlabeled, or uncategorized pieces that spark my curiosity and
                reveal more about the creator than completed works alone.
              </p>

              <p className="my-5 text-slate-50 font-light text-2xl">
                Similarly, my atelier embraces a bit of chaos. Some projects may
                seem disorganized or altered, lacking clear descriptions,
                encouraging you to engage with and feel them, rather than just
                comprehend them.
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
              How to walk the atelier
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
              "Portal" to explore more
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
        <section className="relative overflow-hidden w-auto h-full grid grid-cols-7 items-start">
          {/* MAIN SECTION */}
          <div className="h-full col-span-6">
            {contentsArray[contentPage].content}
          </div>

          {/* LINKS FOOTER */}
          <div className="mt-[70px] text-slate-50 text-xl flex flex-col gap-7 justify-end">
            <Link
              to="/about"
              reloadDocument={true}
              className="mr-12 flex flex-row items-center justify-end"
            >
              <p className="font-serif text-xl">About</p>
              <img src={arrowIcon} className="ml-2 w-6 h-6" />
            </Link>

            <Link
              to="/works"
              reloadDocument={true}
              className="mr-12 flex flex-row items-center justify-end"
            >
              <p className="font-serif text-xl">Works</p>
              <img src={arrowIcon} className="ml-2 w-6 h-6" />
            </Link>

            <Link
              to="/contact"
              reloadDocument={true}
              className="mr-12 flex flex-row items-center justify-end"
            >
              <p className="font-serif text-xl">Contact</p>
              <img src={arrowIcon} className="ml-2 w-6 h-6" />
            </Link>
          </div>

          <img
            src={whiteLogoicon}
            className="absolute bottom-10 right-12 w-[50px] h-[50px]"
          />
        </section>
      </Modal>
    </>
  );
}
