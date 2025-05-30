import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current; // Lock-in the value (recommended way)

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);


  return createPortal(
    <dialog
      ref={dialog}
      onClose={onClose}
      className={className}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
