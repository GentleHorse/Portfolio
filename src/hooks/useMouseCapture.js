import { useMemo, useEffect } from "react";
import { gameStates, useGameStore } from "../store/store.js";

/**
 * NOTE (10th, July, 2024): 
 * 
 * This component is reusable except the logic of "requestPointerLock()".
 * It's conditionally called due to implementation of the menu modal component.
 * If it's not the case, just remove the conditional statement.
 * 
 */

export function useMouseCapture() {
  /**
   * GAME STORE
   */
  const { gameState, setGameState } = useGameStore((state) => ({
    gameState: state.gameState,
    setGameState: state.setGameState,
  }));

  /**
   * STORE MOUSE COORDINATES
   */
  const mouse = useMemo(() => ({ x: 0, y: 0 }), []);

  /**
   * HANDLER - MOUSE MOVEMENT
   */
  const mouseMovementHandler = (event) => {
    // Check if the pointer is locked to the body (mouse captured)
    if (
      document.pointerLockElement === document.body ||
      document.mozPointerLockElement === document.body
    ) {
      mouse.x += event.movementX * 0.45;
      mouse.y += event.movementY * 0.45;
    } 
  };

  /**
   * FUNCTION - REQUEST POINTER LOCK
   */
  const capture = () => {
    // Ask the browser to lock the pointer
    document.body.requestPointerLock =
      document.body.requestPointerLock ||
      document.body.mozRequestPointerLock ||
      document.body.webkitRequestPointerLock;

    // Only while playing, activate the pointer lock
    if (gameState === gameStates.PLAY) {
      document.body.requestPointerLock();
    }
  };

  /**
   * USEEFFECT
   */
  useEffect(() => {
    // Add event listeners for mouse movement and click
    document.addEventListener("mousemove", mouseMovementHandler);
    document.addEventListener("click", capture);

    // Clean up listeners
    return () => {
      document.removeEventListener("mousemove", mouseMovementHandler);
      document.removeEventListener("click", capture);
    };
  }, []);

  /**
   * RETURN
   */
  return mouse; // The mouse obj with current mouse coordinates
}
