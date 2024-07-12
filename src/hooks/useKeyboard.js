import { useMemo, useEffect } from "react";

export function useKeyboard() {
  /**
   * STORE KEYBOARD STATE
   */
  const keyboard = useMemo(() => ({}), []);

  /**
   * EVENT HANDLER - KEY DOWN
   */
  const keydown = (event) => {
    keyboard[event.key] = true;

    if (event.key === "Escape"){
      event.preventDefault();
    }
  }
    

  /**
   * EVENT HANDLER - KEY UP
   */
  const keyup = (event) => (keyboard[event.key] = false);

  /**
   * USEEFFECT
   */
  useEffect(() => {
    // Add event listeners for keydown and keyup events
    document.addEventListener("keydown", keydown);
    document.addEventListener("keyup", keyup);

    // Clean up listeners
    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("keyup", keyup);
    };
  });

  /**
   * RETURN
   */
  return keyboard; // The keyboard obj with the current keyboard state
}
