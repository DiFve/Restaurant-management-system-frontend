import api from "./apiClient";
import config from "../config.json";

export const getTableInfo = async () => {
  try {
    const res = await api(`${config.apiURL}seeTable`, {
      headers: {},
      data: {},
      method: "GET",
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log("get table detail error");
  }
};

export const getTableByID = async (id: string | undefined) => {
  try {
    const res = await api(`${config.apiURL}seeTableByID/${id}`, {
      headers: {},
      data: {},
      method: "GET",
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log("get see tableByID detail error");
  }
};

export const callEmployee = async (tableNumber: number) => {
  try {
    console.log(tableNumber);
    const res = await api(`${config.apiURL}pushEmployeeCall`, {
      headers: {},
      data: { tableNumber: tableNumber },
      method: "PUT",
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log("call employee fail");
  }
};

export const cancelEmployee = async (tableNumber: number) => {
  try {
    console.log(tableNumber);
    const res = await api(`${config.apiURL}cancelEmployeeCall`, {
      headers: {},
      data: { tableNumber: tableNumber },
      method: "PUT",
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log("call employee fail");
  }
};
export const getTableOrder = async (id: string | undefined) => {
  try {
    const res = await api(`${config.apiURL}seeOrderTable/${id}`, {
      headers: {},
      data: {},
      method: "GET",
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log("getTableOrder Error from seeOrderTable API");
  }
};

export const getIncomingOrder = async () => {
  try {
    const res = await api(`${config.apiURL}comingOrder/`, {
      headers: {},
      data: {},
      method: "GET",
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log("getIncomingOrder Error from comingOrder API");
  }
};

export const getItemsByOrder = async (id: string | undefined) => {
  try {
    const res = await api(`${config.apiURL}seeItembyOrderId/${id}`, {
      headers: {},
      data: {},
      method: "GET",
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log("getItemsByOrder by API seeItembyOrderID");
  }
};
