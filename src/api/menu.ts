import api from "./apiClient";
import config from "../config.json";

const apiURL = config.apiURL;
export const allMenu = async () => {
  try {
    const result = await api(`${apiURL}getAllMenu`, {
      headers: {},
      data: {},
      method: "GET",
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const buffetMenu = async () => {
  try {
    const result = await api(`${apiURL}getBuffetMenu`, {
      headers: {},
      data: {},
      method: "GET",
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const alacarteMenu = async () => {
  try {
    const result = await api(`${apiURL}getAlacarteMenu`, {
      headers: {},
      data: {},
      method: "GET",
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const addMenu = async () => {
  try {
    const result = await api(`${apiURL}addMenu`, {
      headers: {},
      data: {foodName:"",type:[],description:"",Image:"",foodType:"",detail:""},
      method: "POST",
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const MenuType = async () => {
  try {
    const result = await api(`${apiURL}getFoodType`, {
      headers: {},
      data: {},
      method: "GET",
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};
