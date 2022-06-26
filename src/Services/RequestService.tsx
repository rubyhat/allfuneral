import axios from "axios";
import { API_TOKEN, API_URL } from "../Constants";

export default class RequestService {
  _apiUrl = API_URL;
  _ApiToken = API_TOKEN;

  static sendRequest = (url: string, method: string, data: any) => {
    console.log(data);
    axios({
      url: url,
      method: method,
      data: data,
    })
      .then((res) => {
        console.log(`Send data to ${url} and got response: `, res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  static editContacts = (data: any, id: string) => {
    return this.sendRequest(API_URL + "/contacts/" + id, "PATCH", data);
  };

  static getResponse = (url: string, setter: (data: any) => void) => {
    axios({
      url: url,
      method: "GET",
    })
      .then((res) => {
        console.log(`Get data from ${url}: `, res);
        setter(res.data);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  static sendDeleteRequest = (url: string, method: string) => {
    axios({
      url: url,
      method: method,
    })
      .then((res) => {
        console.log(`Send data to ${url} and got response: `, res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  static deleteCompany = (id: string) => {
    return this.sendDeleteRequest(API_URL + "/companies/" + id, "DELETE");
  };
}
