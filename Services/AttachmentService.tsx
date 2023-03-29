import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class RegistrationDesireService {
  static async Add(payload): Promise<ApiResponse> {
    const addUrl = process.env.ADD_ATTACHMENT_URL as string;
    return await apiConnector
      .post(addUrl, payload)
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

  static async Delete(payload): Promise<ApiResponse> {
    const deleteUrl = process.env.DELETE_ATTACHMENT_URL as string;
    return await apiConnector
      .post(deleteUrl, payload)
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
