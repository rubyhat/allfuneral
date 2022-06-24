import classNames from "classnames/bind";
import React from "react";
import { API_URL } from "../../Constants";

import { iconEdit } from "../Helpers/Icons";
import Header from "./Header";
import InfoBlock from "./InfoBlock";

import styles from "./styles.module.scss";
import Title from "./Title";

const Market = () => {
  const cn = classNames.bind(styles);
  console.log(API_URL);
  return (
    <section className={cn("market")}>
      <Header />
      <div className={cn("container")}>
        <div className={cn("market__body")}>
          <Title
            variant="regular"
            text="Перспективные захоронения"
            label="Организация"
          />
          <InfoBlock title="Общая информация" />
          <hr className={cn("hr")} />
          <InfoBlock title="Контактные данные" />
          <hr className={cn("hr")} />
        </div>
      </div>
    </section>
  );
};

export default Market;
