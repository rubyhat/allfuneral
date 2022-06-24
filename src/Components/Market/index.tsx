import classNames from "classnames/bind";
import React from "react";

import { iconEdit } from "../Helpers/Icons";
import Header from "./Header";

import styles from "./styles.module.scss";
import Title from "./Title";

const Market = () => {
  const cn = classNames.bind(styles);
  return (
    <section className={cn("market")}>
      <Header />
      <div className={cn("container")}>
        <div className={cn("market__body")}>
          <Title variant="regular" text="Перспективные захоронения" />
        </div>
      </div>
    </section>
  );
};

export default Market;
