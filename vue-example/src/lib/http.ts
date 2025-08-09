import axios from "axios";

export const http = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function onFullfilled(response) {
    return response;
  },
  function onRejected(error) {
    return Promise.reject(error);
  },
);
