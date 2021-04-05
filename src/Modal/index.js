import  { useEffect } from "react";
import ReactDOM from "react-dom";

import { ModalContainer, ModalWrapper } from "./Modal.elements";

const modalRoot = document.getElementById("modal-root");

export const Modal = ({ children, onClick }) => {
  const el = document.createElement('div');
  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  });

  return ReactDOM.createPortal(<ModalWrapper onClick={onClick}>{children}</ModalWrapper>, el);
};

