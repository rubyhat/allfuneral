import React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

import {
  iconLong,
  iconLinked,
  iconRotation,
  iconDelete,
} from "../Helpers/Icons";

const Header = () => {
  const cn = classNames.bind(styles);

  const handleButtonClick = (button: string) => {
    alert(`Fire ${button} click!`);
  };

  return (
    <header className={cn("header")}>
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
