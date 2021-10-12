import React from "react";
import { createPortal } from "react-dom";

import "./Modal.scss";

interface ModalProps {
  message: string;
  isOpen: boolean;
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal">
      <span>{message}</span>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>,
    document.body
  );
};

export default Modal;
