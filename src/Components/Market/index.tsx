import axios from "axios";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { COMPANIES_URL, COMPANIES_CONTACTS_URL } from "../../Constants";
import AddImage from "../AddImage";
import Aside from "./Aside";

import Header from "./Header";
import InfoBlock from "./InfoBlock";

import styles from "./styles.module.scss";
import Title from "./Title";

import { IInfo, IContacts } from "./interfaces";
import RequestService from "../../Services/RequestService";

const Market = () => {
  const cn = classNames.bind(styles);
  const [info, setInfo] = useState<IInfo>();
  const [parsedAbout, setParsedAbout] = useState<object>();
  const [contacts, setContacts] = useState<IContacts>();
  const [parsedContacts, setParsedContacts] = useState<object>();

  useEffect(() => {
    RequestService.getResponse(COMPANIES_URL + "/12", setInfo);
  }, []);

  useEffect(() => {
    if (info) {
      RequestService.getResponse(
        COMPANIES_CONTACTS_URL + "/" + info.contactId,
        setContacts
      );

      const parseDataAbout = [
        { key: "Полное название", value: info.name },
        {
          key: "Договор",
          value: `${info.contract.no} от ${info.contract.issue_date.slice(
            0,
            10
          )}`,
        },

        { key: "Форма", value: info.businessEntity },

        { key: "Тип", value: info.type },
      ];
      setParsedAbout(parseDataAbout);
    }
  }, [info]);

  useEffect(() => {
    if (contacts) {
      const parseDataContacts = [
        {
          key: "ФИО",
          value: `${contacts.lastname} ${contacts.firstname} ${contacts.patronymic}`,
        },
        { key: "Телефон", value: contacts.phone },
        { key: "Эл.почта", value: contacts.email },
      ];
      setParsedContacts(parseDataContacts);
    }
  }, [contacts]);

  return (
    <section className={cn("market")}>
      <Aside />
      <div className={cn("market__content")}>
        <Header />
        <div className={cn("container")}>
          <div className={cn("market__body")}>
            <Title
              variant="regular"
              text="Перспективные захоронения"
              label="Организация"
              useModal={false}
            />
            {!parsedAbout && (
              <p>Loading... Здесь мог бы быть скелетон или спиннер...</p>
            )}
            {parsedAbout && info && (
              <InfoBlock
                title="Общая информация"
                data={parsedAbout}
                editData={info}
              />
            )}
            <hr className={cn("hr")} />
            {!parsedAbout && (
              <p>Loading... Здесь мог бы быть скелетон или спиннер...</p>
            )}
            {parsedContacts && contacts && (
              <InfoBlock
                title="Контактные данные"
                data={parsedContacts}
                editData={contacts}
              />
            )}
            <hr className={cn("hr")} />
            <AddImage />
            <hr className={cn("hr")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
