import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

// /**
//  * INITIAL CHARACTER / CAMERA POSITION
//  */
// export const INITIAL_POSITION = [-5, 1, 15];

/**
 * GAME STATES
 */
export const gameStates = {
  MENU: "MENU",
  PLAY: "PLAY",
  RESTART: "RESTART"
}

/**
 * GAME STORE
 */
export const useGameStore = create(
  subscribeWithSelector((set, get) => ({
    /**
     * GAME PHASE - GAME, GAME_OVER
     */
    gameState: gameStates.MENU,
    setGameState: (gameState) => {
      set({ gameState: gameState });
    },

    /**
     * CHARACTER ANIMATION CONTROLLER
     */
    characterState: "Idle",

    setCharacterState: (characterState) => {
      set({ characterState: characterState });
    },

    /**
     * INTERFACE
     */
    interfaceState: {
      left: false,
      right: false,
      run: false,
      jump: false,
    },

    setActivateInterfaceState: (identifier) => {
      set((prevState) => {
        return {
          interfaceState: {
            ...prevState.interfaceState,
            [identifier]: true,
          },
        };
      });
    },

    setDeactivateInterfaceState: (identifier) => {
      set((prevState) => {
        return {
          interfaceState: {
            ...prevState.interfaceState,
            [identifier]: false,
          },
        };
      });
    },
  }))
);
