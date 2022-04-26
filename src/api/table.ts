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

export const updateFoodStatus = async (_id:string | undefined,status:string | undefined) => {
  try {
    const res = await api(`${config.apiURL}updateFoodStatus/`, {
      headers: {},
      data: {_id:_id , foodStatus:status},
      method: "PUT",
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log("updateFoodStatus by API seeItembyOrderID");
  }
};

export const updateOrderStatus = async (_id:string | undefined,status:string | undefined) => {
  try {
    const res = await api(`${config.apiURL}updateOrderStatus/`, {
      headers: {},
      data: {_id:_id , orderStatus:status},
      method: "PUT",
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log("getItemsByOrder by API seeItembyOrderID");
  }
};

export const getBill = async (tablenumber: string | undefined) => {
  try {
    const res = await api(`${config.apiURL}cashOutTable/${tablenumber}`, {
      headers: {},
      data: {},
      method: "GET",
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log("getBill by API cashOutTable");
  }
};

export const confirmBill = async (tablenumber: string | undefined) => {
  try {
    const res = await api(`${config.apiURL}confirmCashOut/${tablenumber}`, {
      headers: {},
      data: {},
      method: "GET",
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log("getBill by API confirmCashOut");
  }
};
