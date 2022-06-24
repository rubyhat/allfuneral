import React, { ChangeEventHandler, useState } from "react";
import classNames from "classnames/bind";
import axios from "axios";

import { API_URL } from "../../Constants";
import Input from "../Helpers/Components/Input";
import { Button } from "../Helpers/Components";

import styles from "./styles.module.scss";

const Home = () => {
  const cn = classNames.bind(styles);
  const [username, setUsername] = useState("");

  const handleFormSubbmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios({
      method: "GET",
      url: API_URL + "/auth?user=" + username,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1 className={cn("title")}>Главная страница</h1>
      <form
        className={cn("form")}
        onSubmit={(event) => handleFormSubbmit(event)}
      >
        <Input value={username} setValue={setUsername} label="Авторизация" />
        <Button
          text="Авторизация"
          variant="primary"
          type="submit"
          className={cn("form__button")}
        />
      </form>
      <ul className={cn("hints")}>
        <li className={cn("hint")}>
          После заполнения формы, отправляется запрос на /auth, токен
          авторизации добавлен в дефолтные заголовки для всех запросов;
        </li>
        <li className={cn("hint")}>
          Нажмите на вторую иконку в левом меню, для перехода на страницу
          организации;
        </li>
      </ul>
    </div>
  );
};

export default Home;
