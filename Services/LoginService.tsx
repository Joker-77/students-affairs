import apiConnector from "./ApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class LoginService {
  static async Login(payload): Promise<ApiResponse> {
    const _url = process.env.LOGIN_URL as string;
    return await apiConnector
      .post(_url, payload)
      .then((response) => {
        if (response.data.success) {
          let result = response.data;
          return result;
        }
      })
      .catch((error) => {
        console.log("Api Error:", error);
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
        console.log("Api Error:", error);
        throw error;
      });
  }
}
