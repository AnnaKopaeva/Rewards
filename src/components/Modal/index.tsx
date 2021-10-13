import React from "react";
import { createPortal } from "react-dom";

import clickAwayListener from "../../hooks/clickAwayListener";

import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  const modalRef = React.useRef(null);

  clickAwayListener(modalRef, () => onClose());

  return createPortal(
    <div className="modal" ref={modalRef}>
      <button type="button" onClick={onClose} className="modal__close_btn">
        +
      </button>
      {children}
    </div>,
    document.body
  );
};

export default Modal;
