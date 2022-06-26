export interface IInfoContract {
  no: string;
  issue_date: string;
}

export interface IInfoPhotos {
  name: string;
  filepath: string;
  thumbpath: string;
}

export interface IInfo {
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

export interface IContacts {
  id: string;
  lastname: string;
  firstname: string;
  patronymic: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface IInfoBlock {
  title: string;
  data: any;
  editData: IInfo | IContacts;
}

export interface IDataItem {
  key: string;
  value: string;
}

export interface IEditModal {
  title: string;
  data: any;
  editData: any;
  hideModal: () => void;
}
