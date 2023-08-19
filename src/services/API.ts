import axios from "axios";
import { baseURL } from "../app/constants";
function getApiKeyFromStorage() {
  return localStorage.getItem("AUTH_ACCESS_TOKEN");
}
export const axiosAuth = axios.create({
  baseURL,
});
axiosAuth.interceptors.request.use(
  (config) => {
    const apiKey = getApiKeyFromStorage();
    if (apiKey) {
      config.headers["Authorization"] = `${apiKey}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject({ error });
  }
);
export const axiosNoAuth = axios.create({
  baseURL,
});
