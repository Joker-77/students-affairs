import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class StudentsImportService {
  static async Import(payload): Promise<ApiResponse> {
    const importUrl = process.env.IMPORT_STUDENTS_URL as string;
    return await apiConnector
      .post(importUrl, payload)
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

  static async GetAllImported(
    year_id: number,
    edu_year_id: number
  ): Promise<ApiResponse> {
    const listUrl = process.env.LIST_IMPORTED_STUDENTS_URL as string;
    return await apiConnector
      .get(listUrl + `?year_id=${year_id}&edu_year_id=${edu_year_id}`)
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
