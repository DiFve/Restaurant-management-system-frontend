import api from "./apiClient";
import config from "../config.json";

const homeAPI = config.apiURL + "makeTableForCustomer";

export const makeQR = async () => {
  try {
    const result = await api(`${homeAPI}`, {
      headers: {},
      data: { tableNumber: 69, tableType: "buffet", role: "customer" },
      method: "POST",
    });

    return result;
  } catch (error) {
    //console.log(error);
  }
};
