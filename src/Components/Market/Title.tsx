import classNames from "classnames/bind";
import React, { FC, useState } from "react";

import styles from "./styles.module.scss";
import { iconEdit } from "../Helpers/Icons";
import Input from "../Helpers/Components/Input";
import { Button } from "../Helpers/Components";

const variants = ["regular", "light"];

interface ITitle {
  variant: "regular" | "light";
  text: string;
  label?: string;
}

const Title: FC<ITitle> = ({ variant, text, label }) => {
  const cn = classNames.bind(styles);
  const [value, setValue] = useState(text);
  const [isEditing, setIsEditing] = useState(false);

  const rootClasses = ["title"];
  if (variant) rootClasses.push(`title_${variant}`);

  const handleEditClick = () => {
    setIsEditing(true);
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
      {isEditing && (
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
