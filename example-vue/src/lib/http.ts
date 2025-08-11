import axios from "axios";
import { toast } from "vue-sonner";

const http = axios.create({
  baseURL: `${import.meta.env.VITE_FAKE_SERVER_JSON}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {
      meta: { message },
    } = error.response.data;

    toast.error(message || "Something went wrong", {
      description: "Please try again",
    });

    return Promise.reject(error);
  },
);

export default http;
