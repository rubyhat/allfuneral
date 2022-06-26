import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Input from "../Helpers/Components/Input";
import styles from "./styles.module.scss";

const EditContacts = ({ dataSend, setDataSend }: any) => {
  const [name, setName] = useState(dataSend.firstname);
  const [lastName, setLastName] = useState(dataSend.lastname);
  const [patronymic, setPatronymic] = useState(dataSend.patronymic);
  const [phone, setPhone] = useState(dataSend.phone);
  const [email, setEmail] = useState(dataSend.email);

  const cn = classNames.bind(styles);

  useEffect(() => {
    setDataSend({
      lastname: lastName,
      firstname: name,
      patronymic: patronymic,
      phone: phone,
      email: email,
    });
  }, [email, phone, patronymic, name, lastName, setDataSend]);

  return (
    <div>
      <div className={cn("form__input-wrap")}>
        <Input
          placeholder="Имя"
          label="Имя"
          setValue={setName}
          value={name}
          type="text"
        />
      </div>
      <div className={cn("form__input-wrap")}>
        <Input
          placeholder="Фамилия"
          label="Фамилия"
          setValue={setLastName}
          value={lastName}
          type="text"
        />
      </div>
      <div className={cn("form__input-wrap")}>
        <Input
          placeholder="Отчество"
          label="Отчество"
          setValue={setPatronymic}
          value={patronymic}
          type="text"
        />
      </div>
      <div className={cn("form__input-wrap")}>
        <Input
          placeholder="Телефон"
          label="Телефон"
          setValue={setPhone}
          value={phone}
          type="text"
        />
      </div>
      <div className={cn("form__input-wrap")}>
        <Input
          placeholder="Почта"
          label="Почта"
          setValue={setEmail}
          value={email}
          type="text"
        />
      </div>
    </div>
  );
};

export default EditContacts;
