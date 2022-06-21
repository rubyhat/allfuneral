import { FC } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

import { iconAdd, iconDelete, iconEdit } from "../../Icons";

interface IButton {
  text: string;
  variant: string;
  icon?: keyof typeof icons;
}

const icons = {
  add: {
    src: iconAdd,
    alt: "icon-add",
  },
  delete: {
    src: iconDelete,
    alt: "icon-delete",
  },
  edit: {
    src: iconEdit,
    alt: "icon-edit",
  },
};

const Button: FC<IButton> = (props) => {
  const { text, variant, icon } = props;
  const cn = classNames.bind(styles);

  const rootClasses = ["button"];
  if (variant) rootClasses.push(`button_${variant}`);

  return (
    <button className={cn(rootClasses)}>
      {icon && (
        <img
          className={cn("button__icon")}
          src={icons[icon].src}
          alt={icons[icon].alt}
        />
      )}
      <span>{text}</span>
    </button>
  );
};

export default Button;
