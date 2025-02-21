import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gameStates, useGameStore } from "../../store/store.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Modal from "../UI/Modal.jsx";

import escKeyIcon from "../../../public/images/icons/esc-key-grey.svg";
import moveKeysIcon from "../../../public/images/icons/move-keys-grey.svg";
import mouseIcon from "../../../public/images/icons/mouse-grey.svg";
import selfPortraitImage from "../../../public/images/menu/menu-hello-me.png";
import worksIconImage from "../../../public/images/menu/menu-works-06.png";

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
   * HANDLER
   *  - CLOSED THE MENU MODAL
   *  - BY PRESSING THE "PLAY" BUTTON
   */
  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  /**
   * HANDLER
   *  - IT'S CALLED WHEN THE MENU GETS CLOSED
   *  - BY PRESSING THE "PLAY" BUTTON
   *  - OR
   *  - BY PRESSING THE "ESCAPE" KEY
   */
  const gameStartHandler = () => {
    setIsModalOpen(false);
    setGameState(gameStates.PLAY);

    console.log("game state handler called");

    // Wait 0.5sec for avoiding an error
    setTimeout(() => {
      document.body.requestPointerLock();
    }, 500);
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
      title: "Welcome to my atelier!",
      content: (
        <section className="flex flex-col items-center h-full justify-evenly">
          <div className="w-full mt-16">
            <p className="my-5 mx-6 text-[#434343] font-light text-2xl text-justify">
              This is a place where I work on projects. I organise a space with{" "}
              <span className="font-bold">“my work objects”</span> as well as{" "}
              <span className="font-bold">“my identity fragments”</span> to make
              it comfortable and now, I'm glad to have you here! Feel free to
              walk around and will you find me to{" "}
              <span className="font-bold">“say hello”</span>?
            </p>
          </div>

          <button
            className="px-1 py-4 my-10 flex justify-evenly items-center w-[170px] h-1/7 rounded-full text-[#434343] hover:text-[#81C7D4] uppercase font-serif font-extrabold text-xl"
            onClick={contentPageIncrementHandler}
          >
            <p>n e x t</p>
          </button>
        </section>
      ),
    },
    {
      id: "c2",
      title: "How to walk the atelier",
      content: (
        <section className="flex flex-col items-center h-full justify-evenly">
          <div className="flex justify-between mb-10 pt-20">
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

          <div className="flex gap-10">
            <button
              className="px-1 py-4 my-10 flex justify-evenly items-center w-[170px] h-1/7 rounded-full text-[#434343] hover:text-[#81C7D4] uppercase font-serif font-extrabold text-xl"
              onClick={contentPageDecrementHandler}
            >
              <img
                src="./images/icons/play-triangle-reverse.svg"
                className="w-[35px]"
              />
              <p>b a c k</p>
            </button>
            <button
              className="px-1 py-4 my-10 flex justify-evenly items-center w-[170px] h-1/7 rounded-full bg-[#D0104C] hover:bg-[#D0104C60] text-slate-50 uppercase font-serif font-extrabold text-xl"
              onClick={modalCloseHandler}
            >
              <p>P l a y</p>
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
        onClose={gameStartHandler} // Called when the menu modal gets closed
        className="relative w-[90vw] h-[90vh] pt-[5vh] rounded-2xl backdrop-blur-md bg-[#C1C1C1]/15"
      >
        <section className="h-full grid grid-cols-7">
          {/* SOCIAL MEDIA ICONS */}
          <div>
            <ul className="pl-14 flex flex-col items-start justify-start gap-6">
              <li>
                <a href="https://github.com/GentleHorse" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-[40px] text-[#FFFFFF]"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/toshihitoendo/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[40px] text-[#FFFFFF]"
                  />
                </a>
              </li>
              <li>
                <a href="https://x.com/toshihito_endo" target="_blank">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="text-[40px] text-[#FFFFFF]"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/toshihito-endo-a68a82172/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-[40px] text-[#FFFFFF]"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* MAIN SECTION */}
          <div className="col-span-4 h-full flex flex-col">
            <div className="ml-4 mt-16 px-8 py-14 bg-white rounded-2xl">
              <h1 className="w-full text-center text-5xl font-eb-garamond">
                {contentsArray[contentPage].title}
              </h1>
              <div>{contentsArray[contentPage].content}</div>
            </div>
          </div>

          {/* WORKS */}
          <div className="col-span-2 pr-14 flex flex-col items-end justify-start">
            <Link
              to="/works"
              reloadDocument={true}
              className="flex flex-col items-center justify-center"
            >
              <img src={worksIconImage} className="h-[150px]" />
              <p className="mt-2 font-serif uppercase text-[#30d010] text-xl">
                w o r k s
              </p>
            </Link>
          </div>
        </section>

        {/* ABOUT ME */}
        <div className="absolute bottom-16 right-24 w-[250px] h-[250px]">
          <img src={selfPortraitImage} />
        </div>

        <Link
          to="/about"
          reloadDocument={true}
          className="absolute bottom-16 right-24 w-[250px] h-[250px] flex flex-col justify-center hover:bg-[#FFFFFF70] z-10 rounded-full"
        >
          <p className="h-full pt-[105px] font-permanent-marker text-[#D0104C] text-4xl text-center opacity-0 hover:opacity-100 z-20">
            About me?
          </p>
        </Link>
      </Modal>
    </>
  );
}
