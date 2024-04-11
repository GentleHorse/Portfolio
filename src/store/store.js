import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const useGameStore = create(
  subscribeWithSelector((set, get) => ({
    /**
     * CHARACTER ANIMATION CONTROLLER
     */
    characterState: "Idle",
    setCharacterState: (characterState) => {
      set({ characterState: characterState });
    },
  }))
);
