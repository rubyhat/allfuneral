import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./styles.module.scss";
import { IEditModal } from "./interfaces";
import EditContacts from "./EditContacts";
import RequestService from "../../Services/RequestService";

const EditModalContent = ({ title, data, hideModal, editData }: IEditModal) => {
  const cn = classNames.bind(styles);
  const [dataSend, setDataSend] = useState(editData);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    hideModal();
    RequestService.editContacts(dataSend, "16");
  };

  return (
    <form onSubmit={(event) => handleFormSubmit(event)} className={cn("form")}>
      <div className={cn("form__header")}>
        <h5 className={cn("form__title")}>{title} - Редактирование</h5>
      </div>
      <div className={cn("form__body")}>
        {title === "Контактные данные" && (
          <EditContacts dataSend={dataSend} setDataSend={setDataSend} />
        )}
      </div>
      <div className={cn("form__footer")}>
        <button className={cn("form__button")} onClick={() => hideModal()}>
          Отмена
        </button>
        <button
          type="submit"
          className={cn("form__button", "form__button_active")}
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};

export default EditModalContent;
