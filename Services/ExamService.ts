import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class ExamService {
  static async GetAllCourses(programId?: string, eduYearId?: string): Promise<ApiResponse> {
    const listUrl = process.env.LIST_EXAM_COURSE_URL as string;
    console.clear();
    console.log(`${listUrl}?program_id=${programId}&edu_year_id=${eduYearId}`);
    return await apiConnector
      .get(`${listUrl}?program_id=${programId}&edu_year_id=${eduYearId}`)
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
  static async GetAllPlans(programId?: string, eduYearId?: string,
    eduCourseId?: string, methodId?: string): Promise<ApiResponse> {
    const listUrl = process.env.LIST_EXAM_URL as string;
    console.log(`${listUrl}/plan?program_id=${programId}&edu_year_id=
    ${eduYearId}&edu_course_id=${eduCourseId}&method_id=${methodId}`);
    return await apiConnector
      .get(`${listUrl}/plan?program_id=${programId}&edu_year_id=
            ${eduYearId}&edu_course_id=${eduCourseId}&method_id=${methodId}`)
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
  static async Add(payload): Promise<ApiResponse> {
    const createUrl = process.env.CREATE_COURSE_URL as string;
    console.log(createUrl);
    return await apiConnector
      .post(createUrl, payload)
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
