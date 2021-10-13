import React from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

import clickAwayListener from "../../hooks/clickAwayListener";

import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  successBtn?: string;
  className?: string;
  onClose(): void;
}

const defaultProps = {
  successBtn: "Close",
  className: "",
};

const Modal: React.FC<ModalProps> = ({ successBtn, children, isOpen, className, onClose }) => {
  if (!isOpen) return null;

  const modalRef = React.useRef(null);

  clickAwayListener(modalRef, () => onClose());

  return createPortal(
    <div className="modal" ref={modalRef}>
      <button type="button" onClick={onClose} className="modal__close_btn">
        +
      </button>
      {children}
      <button type="button" onClick={onClose} className={clsx("modal__btn", className)}>
        {successBtn}
      </button>
    </div>,
    document.body
  );
};

Modal.defaultProps = defaultProps;

export default Modal;
