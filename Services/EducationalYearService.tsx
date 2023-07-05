import apiConnector from "./ApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";
import { IEducationalYearModel } from "../Models/EducationalYearModel";

export default class EducationalYearService {
  static async GetAll(): Promise<ApiResponse> {
    const listUrl = process.env.LIST_EDU_YEARS_URL as string;
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
