import classNames from "classnames/bind";
import React, { FC } from "react";

import styles from "./styles.module.scss";
import { iconEdit } from "../Helpers/Icons";

const variants = ["regular", "semi-bold"];
interface ITitle {
  variant: "regular" | "semi-bold";
  text: string;
}

console.log();

const Title: FC<ITitle> = ({ variant, text }) => {
  const cn = classNames.bind(styles);

  const rootClasses = ["title"];
  if (variant) rootClasses.push(`title_${variant}`);

  const handleEditClick = () => {};

  return (
    <h4 className={cn(rootClasses)}>
      {text}
      <button onClick={() => handleEditClick()}>
        <img src={iconEdit} alt="edit" />
      </button>
    </h4>
  );
};

export default Title;
