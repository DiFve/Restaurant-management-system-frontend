import api from "./apiClient";
import config from "../config.json";

const homeAPI = config.apiURL + "makeTableForCustomer";

export const makeQR = async (tableNumber:number, tableType:string,personAmount:number,buffetPrice:number) => {
  try {
    const result = await api(`${homeAPI}`, {
      headers: {},
      data: { tableNumber:tableNumber, tableType: tableType,personAmount:personAmount,buffetPrice:buffetPrice ,role: "customer" },
      method: "POST",
    });

    return result;
  } catch (error) {
    //console.log(error);
  }
};
