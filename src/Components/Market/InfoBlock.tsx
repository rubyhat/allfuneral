import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import Modal from "../Helpers/Modal";
import EditModalContent from "./EditModalContent";

import styles from "./styles.module.scss";
import Title from "./Title";

import { IInfoBlock, IDataItem } from "./interfaces";

const InfoBlock = ({ title, data, editData }: IInfoBlock) => {
  const cn = classNames.bind(styles);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={cn("info-block")}>
      <Title
        onClick={() => setShowModal(true)}
        variant="light"
        text={title}
        useModal={true}
      />
      <ul className={cn("info-block__list")}>
        {data &&
          data.map((item: IDataItem, key: number) => (
            <li key={key} className={cn("info-block__list-item")}>
              <span>{item.key}</span>
              <p>{item.value}</p>
            </li>
          ))}
      </ul>
      {showModal && (
        <Modal className={cn("edit-modal")}>
          <EditModalContent
            title={title}
            data={data}
            editData={editData}
            hideModal={() => setShowModal(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default InfoBlock;
