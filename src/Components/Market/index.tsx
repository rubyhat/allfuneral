import axios from "axios";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { COMPANIES_URL, COMPANIES_CONTACTS_URL } from "../../Constants";

import Header from "./Header";
import InfoBlock from "./InfoBlock";

import styles from "./styles.module.scss";
import Title from "./Title";

interface IInfoContract {
  no: string;
  issue_date: string;
}

interface IInfoPhotos {
  name: string;
  filepath: string;
  thumbpath: string;
}

interface IInfo {
  id: string;
  contactId: string;
  name: string;
  shortName: string;
  businessEntity: string;
  contract: IInfoContract;
  type: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
  photos: IInfoPhotos[];
}

interface IContacts {
  id: string;
  lastname: string;
  firstname: string;
  patronymic: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

const Market = () => {
  const cn = classNames.bind(styles);
  const [info, setInfo] = useState<IInfo>();
  const [parsedAbout, setParsedAbout] = useState<object>();
  const [contacts, setContacts] = useState<IContacts>();
  const [parsedContacts, setParsedContacts] = useState<object>();

  useEffect(() => {
    axios({
      method: "GET",
      url: COMPANIES_URL + "/12",
    })
      .then((res) => {
        console.log(res);
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (info) {
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
    if (info) {
      axios({
        method: "GET",
        url: COMPANIES_CONTACTS_URL + "/" + info.contactId,
      })
        .then((res) => {
          console.log(res);
          setContacts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [info]);

  useEffect(() => {
    if (contacts) {
      const parseDataContacts = [
        {
          key: "ФИО",
          value: `${contacts.lastname} ${contacts.firstname}`,
        },
        { key: "Телефон", value: contacts.phone },
        { key: "Эл.почта", value: contacts.email },
      ];
      setParsedContacts(parseDataContacts);
    }
  }, [contacts]);

  return (
    <section className={cn("market")}>
      <Header />
      <div className={cn("container")}>
        <div className={cn("market__body")}>
          <Title
            variant="regular"
            text="Перспективные захоронения"
            label="Организация"
          />
          {!parsedAbout && (
            <p>Loading... Здесь мог бы быть скелетон или спиннер...</p>
          )}
          {parsedAbout && (
            <InfoBlock title="Общая информация" data={parsedAbout} />
          )}
          <hr className={cn("hr")} />
          {!parsedAbout && (
            <p>Loading... Здесь мог бы быть скелетон или спиннер...</p>
          )}
          {parsedContacts && (
            <InfoBlock title="Контактные данные" data={parsedContacts} />
          )}
          <hr className={cn("hr")} />
        </div>
      </div>
    </section>
  );
};

export default Market;
