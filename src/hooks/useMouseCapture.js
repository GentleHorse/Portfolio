import { useMemo, useEffect } from "react";

export function useMouseCapture() {
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
      mouse.x += event.movementX;
      mouse.y += event.movementY;
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

    document.body.requestPointerLock();
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
  });

  /**
   * RETURN
   */
  return mouse;     // The mouse obj with current mouse coordinates
}
