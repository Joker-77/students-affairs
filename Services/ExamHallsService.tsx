import apiConnector from "./ApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class ExamHallsService {
  static async GetAll(edu_year_id, date): Promise<ApiResponse> {
    const listUrl = process.env.LIST_EXAM_HALLS_URL as string;
    return await apiConnector
      .get(`${listUrl}?edu_year_id=${edu_year_id}&date=${date}`)
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