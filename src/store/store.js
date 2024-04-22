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
  }))
);
