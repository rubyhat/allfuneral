import classNames from "classnames/bind";
import styles from "./styles.module.scss";

import RequestService from "../../Services/RequestService";

const DeleteModalContent = ({ hideModal }: any) => {
  const cn = classNames.bind(styles);

  const handleSubmitModal = () => {
    RequestService.deleteCompany("12");
    hideModal();
  };

  return (
    <div className={cn("form")}>
      <div className={cn("form__header")}>
        <h5 className={cn("form__title")}>Удалить карточку</h5>
      </div>
      <div className={cn("form__body")}>
        <p className={cn("form__text")}>
          Отправить карточку организации в архив?
        </p>
      </div>
      <div className={cn("form__footer")}>
        <button className={cn("form__button")} onClick={() => hideModal()}>
          Отмена
        </button>
        <button
          onClick={handleSubmitModal}
          className={cn("form__button", "form__button_active")}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default DeleteModalContent;
