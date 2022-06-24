import classNames from "classnames/bind";
import React from "react";

import styles from "./styles.module.scss";
import Title from "./Title";

interface IInfoBlock {
  title: string;
  data: any;
}

interface IDataItem {
  key: string;
  value: string;
}

const InfoBlock = ({ title, data }: IInfoBlock) => {
  const cn = classNames.bind(styles);
  return (
    <div className={cn("info-block")}>
      <Title variant="light" text={title} />
      <ul className={cn("info-block__list")}>
        {data &&
          data.map((item: IDataItem, key: number) => (
            <li key={key} className={cn("info-block__list-item")}>
              <span>{item.key}</span>
              <p>{item.value}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default InfoBlock;
