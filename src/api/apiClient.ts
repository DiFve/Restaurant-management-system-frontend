import axios, { AxiosRequestConfig } from "axios";

const buildAuthHeader = (config: AxiosRequestConfig<any>) => {
  return {
    ...config.headers,
    "x-access-token": localStorage.getItem("token") || "",
  };
};

axios.interceptors.request.use(
  function (config) {
    //config.headers["x-access-token"] = localStorage.getItem("token") || "";
    //console.log(config);
    const nHeader = buildAuthHeader(config);
    config = {
      ...config,
      url: config.url,
      headers: {
        ...nHeader,
      },
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.setItem("token", "");
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

const api = axios;

export default api;
