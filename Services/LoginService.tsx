import apiConnector from "./ApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class LoginService {
  static async Login(payload): Promise<any> {
    const _url = process.env.LOGIN_URL as string;
    return await apiConnector
      .post(_url, payload)
      .then((response) => {
        if (response?.data?.success) {
          let result = response.data;
          return result;
        }
        else {
          return response.error ?.message;
        }
      })
      .catch((error) => {
        throw error;
      });
  }
  static async GetYears(): Promise<ApiResponse> {
    return await apiConnector
      .get("/StudentAffairs/GetYears")
      .then((response) => {
        if (response.data.success) {
          let result = response.data;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }
}
