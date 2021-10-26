import React from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { style } from "./Modal.styles";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactElement;
  onClose(): void;
}

const ModalComponent: React.FC<ModalProps> = ({ children, isOpen, onClose }) => (
  <Modal open={isOpen} onClose={onClose}>
    <Box sx={{ position: "absolute", ...style }}>{children}</Box>
  </Modal>
);

export default ModalComponent;
