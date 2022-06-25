import classNames from "classnames/bind";

import styles from "./styles.module.scss";
import { iconBuilding } from "../Helpers/Icons";

const AsideList = () => {
  const cn = classNames.bind(styles);
  return (
    <ul className={cn("aside__list")}>
      <li className={cn("aside__list-item")}>
        <img src={iconBuilding} alt="menu-icon-building" />
        Организации
      </li>
    </ul>
  );
};

export default AsideList;
