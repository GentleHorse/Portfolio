import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

/**
 * GAME STATES
 */
export const gameStates = {
  LOADING: "LOADING",
  MENU: "MENU",
  PLAY: "PLAY",
  RESTART: "RESTART",
};

/**
 * GAME STORE
 */
export const useGameStore = create(
  subscribeWithSelector((set, get) => ({
    /**
     * GAME STATE - PLAY, MENU
     */
    gameState: gameStates.LOADING,
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
