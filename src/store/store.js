import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const useGameStore = create(
  subscribeWithSelector((set, get) => ({
    /**
     * GAME PHASE - GAME, GAME_OVER
     */
    gamePhase: "GAME",
    setGamePhase: (gamePhase) => {
      set({ gamePhase: gamePhase });
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
