import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

import {
  iconLong,
  iconLinked,
  iconRotation,
  iconDelete,
} from "../Helpers/Icons";
import Modal from "../Helpers/Modal";
import DeleteModalContent from "./DeleteModalContent";

const Header = () => {
  const cn = classNames.bind(styles);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (button: string) => {
    switch (button) {
      case "Delete":
        setShowModal(true);
        break;
      case "Linked":
        alert(`Fire ${button} click!`);
        break;
      case "Rotation":
        alert(`Fire ${button} click!`);
        break;
      default:
        alert(`Ooops! Error`);
        break;
    }
  };

  return (
    <header className={cn("header")}>
      {showModal && (
        <Modal className="modal__delete">
          <DeleteModalContent hideModal={() => setShowModal(false)} />
        </Modal>
      )}
      <Link to="/" className={cn("header__link")}>
        <img src={iconLong} alt="icon" />
        <span>К списику юридических лиц</span>
      </Link>
      <div className={cn("header__icon-bar")}>
        <button
          onClick={() => handleButtonClick("Linked")}
          className={cn("header__icon-button")}
        >
          <img src={iconLinked} alt="link" />
        </button>
        <button
          onClick={() => handleButtonClick("Rotation")}
          className={cn("header__icon-button")}
        >
          <img src={iconRotation} alt="rotate" />
        </button>
        <button
          onClick={() => handleButtonClick("Delete")}
          className={cn("header__icon-button")}
        >
          <img src={iconDelete} alt="delete" />
        </button>
      </div>
    </header>
  );
};

export default Header;
