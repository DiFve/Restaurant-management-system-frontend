import api from "./apiClient";
import config from "../config.json";

export const cashOut = async (tableNumber: string | undefined) => {
  try {
    const res = await api(`${config.apiURL}cashOutTable/${tableNumber}`, {
      headers: {},
      data: {},
      method: "GET",
    });

    return res;
  } catch (error) {
    console.log("get item in cart error");
  }
};
