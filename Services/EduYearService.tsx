import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class EduYearService {
  static async GetYears(searchQuery: string): Promise<ApiResponse> {
    const listUrl = process.env.LIST_EDU_YEARS_URL as string;
    return await apiConnector
      .get(listUrl + "?search_query=" + searchQuery)
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
  static async InitYears(entity): Promise<ApiResponse> {
    const listUrl = process.env.INIT_YEAR_URL as string;
    return await apiConnector
      .post(listUrl, entity)
      .then((response) => {
        if (response && response.data.success) {
          let result = response.data;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }
  static async checkYear(entity): Promise<ApiResponse> {
    const listUrl = "/checkyear" as string;
    let data = new FormData();
    data.append('year', entity);
    return await apiConnector
      .post(listUrl, data)
      .then((response) => {
        if (response && response.data.success) {
          let result = response.data;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }
}
