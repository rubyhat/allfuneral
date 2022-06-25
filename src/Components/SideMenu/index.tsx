import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import {
  iconHome,
  iconMarket,
  iconSearch,
  iconSettings,
  iconChat,
  iconExit,
} from "../Helpers/Icons";

const SideMenu = () => {
  const cn = classNames.bind(styles);

  return (
    <aside>
      <nav className={cn("menu")}>
        <div className={cn("menu__block")}>
          <Link className={cn("menu__link")} to="/">
            <img src={iconHome} alt="icon" />
          </Link>
          <Link className={cn("menu__link", "menu__link_active")} to="/market">
            <img src={iconMarket} alt="icon" />
          </Link>
          <Link className={cn("menu__link")} to="/search">
            <img src={iconSearch} alt="icon" />
          </Link>
        </div>
        <div className={cn("menu__block")}>
          <Link className={cn("menu__link")} to="/">
            <img src={iconSettings} alt="icon" />
          </Link>
          <Link className={cn("menu__link")} to="/">
            <img src={iconChat} alt="icon" />
          </Link>
          <Link className={cn("menu__link")} to="/">
            <img src={iconExit} alt="icon" />
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default SideMenu;
