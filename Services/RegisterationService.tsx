import apiConnector from "./ApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class RegisterationService {
  static async Add(payload): Promise<ApiResponse> {
    const addUrl = process.env.ADD_REGISTERATION_URL as string;
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

  static async Edit(payload): Promise<ApiResponse> {
    const editUrl = process.env.EDIT_REGISTERATION_URL as string;
    return await apiConnector
      .post(editUrl, payload)
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

  static async Get(): Promise<ApiResponse> {
    const detailUrl = process.env.DETAILS_REGISTERATION_URL as string;
    return await apiConnector
      .get(detailUrl)
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

  static async GetAll(): Promise<ApiResponse> {
    const listUrl = process.env.LIST_REGISTERATION_URL as string;
    return await apiConnector
      .get(listUrl)
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
