import classNames from "classnames/bind";
import React from "react";

import styles from "./styles.module.scss";
import Title from "./Title";

interface IInfoBlock {
  title: string;
}
const InfoBlock = ({ title }: IInfoBlock) => {
  const cn = classNames.bind(styles);
  return (
    <div className={cn("info-block")}>
      <Title variant="light" text={title} />
      <ul className={cn("info-block__list")}>
        <li className={cn("info-block__list-item")}>
          <span>Полное название:</span>
          <p>ООО Фирма “Перспективные захоронения”</p>
        </li>
        <li className={cn("info-block__list-item")}>
          <span>Полное название:</span>
          <p>ООО Фирма “Перспективные захоронения”</p>
        </li>
        <li className={cn("info-block__list-item")}>
          <span>Полное название:</span>
          <p>ООО Фирма “Перспективные захоронения”</p>
        </li>
      </ul>
    </div>
  );
};

export default InfoBlock;
