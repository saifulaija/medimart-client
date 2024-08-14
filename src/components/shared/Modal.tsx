// components/Modal.tsx
"use client";

import { ModalProps } from "@/types";
import { useEffect, FC } from "react";
import { createPortal } from "react-dom";

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Add event listener and lock body scroll only when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEsc);
    }

    // Clean up event listener and restore body scroll
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Ensure that the modal-root exists before attempting to use it
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md mx-4 my-8 bg-white rounded-lg shadow-lg md:mx-0 max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="p-6">{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
