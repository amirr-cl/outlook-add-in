import axios, { AxiosError } from "axios";

const API_URL = `https://${window.location.host}`;
const API_PREFIX = "api";

const init = () => {
  return axios.create({
    baseURL: API_URL + "/" + API_PREFIX,
    timeout: 31000,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Cache-Control": "no-cache",
    },
  });
};

const http = init();

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export { http };
