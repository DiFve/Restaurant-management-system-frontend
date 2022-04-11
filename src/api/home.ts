import api from "./apiClient";
import config from "../config.json";

const homeAPI = config.apiURL + "auth";
export const home = async () => {
  try {
    const result = await api(`${homeAPI}`, {
      headers: {},
      data: {},
      method: "POST",
    });

    return result;
  } catch (error) {
    //console.log(error);
  }
};
