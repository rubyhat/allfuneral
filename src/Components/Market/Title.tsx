import classNames from "classnames/bind";
import React, { FC, useState } from "react";

import styles from "./styles.module.scss";
import { iconEdit } from "../Helpers/Icons";
import Input from "../Helpers/Components/Input";
import { Button } from "../Helpers/Components";
import Modal from "../Helpers/Modal";

const variants = ["regular", "light"];

interface ITitle {
  variant: "regular" | "light";
  text: string;
  label?: string;
  useModal: boolean;
  onClick?: () => void;
}

const Title: FC<ITitle> = ({ variant, text, label, useModal, onClick }) => {
  const cn = classNames.bind(styles);
  const [value, setValue] = useState(text);
  const [isEditing, setIsEditing] = useState(false);

  const rootClasses = ["title"];
  if (variant) rootClasses.push(`title_${variant}`);

  const handleEditClick = () => {
    useModal ? onClick && onClick() : setIsEditing(true);
  };

  return (
    <div className={cn("title-wrap")}>
      {!isEditing && (
        <h4 className={cn(rootClasses)}>
          {value}
          <button
            className="title__edit-button"
            onClick={() => handleEditClick()}
          >
            <img src={iconEdit} alt="edit" />
          </button>
        </h4>
      )}
      {isEditing && !useModal && (
        <div className={cn("title__edit")}>
          <Input value={value} setValue={setValue} label={label} />
          <Button
            className={cn("title__edit-button")}
            onClick={() => setIsEditing(false)}
            text="Сохранить"
            variant="primary"
            icon="edit"
          />
        </div>
      )}
    </div>
  );
};

export default Title;
