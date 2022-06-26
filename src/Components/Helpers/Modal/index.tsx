import classNames from "classnames/bind";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.scss";

const modalRoot = document.getElementById("modal-root");

interface ModalProps {
  children: ReactNode;
  className: string;
}

const Modal = ({ children, className }: ModalProps) => {
  const el = useRef(document.createElement("div"));
  const modal = useRef(document.createElement("div"));

  useEffect(() => {
    const cn = classNames.bind(styles);
    const current = el.current;
    const currentModal = modal.current;
    const classArr = className.split(" ");
    classArr.push(cn("modal"));
    currentModal.classList.add(...classArr);
    current.classList.add(cn("modal-wrap"));
    current.dataset.modal = "wrap";
    current.appendChild(currentModal);

    modalRoot!.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, [className]);
  return createPortal(children, modal.current);
};

export default Modal;
