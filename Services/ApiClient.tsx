import axios from "axios";
import https from "https";
import { AxiosRequestConfig } from "axios/index";
import { toast } from "react-toastify";
import { error } from "console";
const configs: AxiosRequestConfig = {
  baseURL: process.env.BASE_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
};
const instance = axios.create(configs);
instance.defaults.headers.common["Content-Type"] = "application/json";
// instance.defaults.timeout = 2500;

instance.interceptors.response.use(
  response => {
      if (!response.data.success) {
          let result = response.data;
          return result;
      }
      return response;
  },
  error => {
    if (error.response.status === 401) {
      toast('You\'re unauthorized to do this!', {type: 'error'})
    } else if (error.response.status === 403) {
        toast('Session expired! Please login again.', {type: 'error'})
    }
    else {
        if (!error.response.data.success) {
            let result = error.response.data;
            toast(result.error.message, {type: 'error'})
        }
    }
  });

export default instance;
