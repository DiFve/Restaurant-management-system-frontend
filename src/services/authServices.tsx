import jwtDecode from "jwt-decode";
import axios, { AxiosError } from "axios";
import { sha256 } from "js-sha256";
import config from "../config.json";

const loginAPI = config.apiURL + "login";
const registerAPI = config.apiURL + "registerEmployee";

export const login = async (email: string, password: string) => {
  const enc = new TextEncoder();
  const hashPW = sha256(enc.encode(password));
  //console.log(hashPW);
  try {
    const { data: res } = await axios.post(loginAPI, {
      email: email,
      password: hashPW,
    });
    localStorage.setItem("token", res.token);
    return res.token;
  } catch (error) {
    //console.error(error);
    return error;
  }
};

export const register = async (name:string, surname:string, nickname: string,email: string, password: string) => {
  const enc = new TextEncoder();
  const hashPW = sha256(enc.encode(password));
  //console.log(hashPW);
  try {
    const { data: res } = await axios.post(registerAPI, {
      name: name,
      surname: surname,
      nickname: nickname,
      email: email,
      password: hashPW,
    });
    localStorage.setItem("token", res.token);
    return res.token;
  } catch (error) {
    //console.error(error);
    return error;
  }
};


export const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem("token") || "";
    const data: Object = jwtDecode(jwt);
    return jwt;
  } catch (err) {
    return null;
  }
};
