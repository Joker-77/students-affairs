import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class PlanService {
  static async GetAll(): Promise<ApiResponse> {
    const listUrl = process.env.LIST_PROGRAMS_URL as string;
    return await apiConnector
      .get(listUrl)
      .then((response) => {
        if (!!response) {
          let resp: ApiResponse = {
            result: response,
            authorized: true,
            error: null,
            success: true,
            targetUrl: null,
          };
          return resp;
        }
      })
      .catch((error) => {
        console.log("Api Error:", error);
        throw error;
      });
  }

  static async AddCourse(payload): Promise<ApiResponse> {
    const listUrl = process.env.ADD_PROGRAMS_URL as string;
    return await apiConnector
      .post(listUrl, payload)
      .then((response) => {
        if (response && response.data) {
          return response.data;
        }
      })
      .catch((error) => {
        console.log("Api Error:", error);
        throw error;
      });
  }

  static async GetProgramCourses(
    programId: number,
    yearId: number,
    eduYear: number
  ): Promise<ApiResponse> {
    const listUrl = process.env.LIST_PLAN_URL as string;
    return await apiConnector
      .get(
        listUrl +
          `?program_id=${programId}&year_id=${yearId}&edu_year_id=${eduYear}`
      )
      .then((response) => {
        if (response && response.data) {
          return response.data;
        }
      })
      .catch((error) => {
        console.log("Api Error:", error);
        throw error;
      });
  }
}
