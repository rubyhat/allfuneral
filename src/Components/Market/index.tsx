import classNames from "classnames/bind";
import React from "react";

import { iconEdit } from "../Helpers/Icons";
import Header from "./Header";

import styles from "./styles.module.scss";
import Title from "./Title";

const Market = () => {
  const cn = classNames.bind(styles);
  return (
    <section>
      <Header />
      <div className={cn("container")}>
        <Title variant="semi-bold" text="Перспективные захоронения" />
      </div>
    </section>
  );
};

export default Market;
