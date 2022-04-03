import api from "./apiClient";
import config from "../config.json";

const homeAPI = config.apiURL + "auth";
export const home = async () => {
  try {
    const TOKEN = localStorage.getItem("token") || "";
    //console.log("HOME  ", TOKEN);
    const result = await api(`${homeAPI}`, {
      headers: {
        // "x-access-token": TOKEN,
      },
      data: {},
      method: "POST",
    });

    return result;
  } catch (error) {
    //console.log(error);
  }
};
