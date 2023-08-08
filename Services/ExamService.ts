import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class ExamService {
  static async GetAllCourses(
    programId?: string,
    eduYearId?: string
  ): Promise<ApiResponse> {
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
  static async GetAllPlans(
    programId?: string,
    eduYearId?: string,
    eduCourseId?: string,
    methodId?: string
  ): Promise<ApiResponse> {
    const listUrl = process.env.LIST_EXAM_URL as string;
    return await apiConnector
      .get(
        `${listUrl}/plan?program_id=${programId}&edu_year_id=
            ${eduYearId}&edu_course_id=${eduCourseId}&method_id=${methodId}`
      )
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

  static async GetAllHalls(
    date: string,
    edu_year_id: string = "1"
  ): Promise<ApiResponse> {
    const listUrl = process.env.LIST_EXAM_URL as string;
    return await apiConnector
      .get(`${listUrl}halls?edu_year_id=${edu_year_id}&date=${date}`)
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

  static async getExams(plan_id: string): Promise<ApiResponse> {
    const getUrl = process.env.LIST_EXAM_URL as string;
    return await apiConnector
      .get(getUrl + "?plan_id=" + plan_id)
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

  static async getMarks(exam_id: string): Promise<ApiResponse> {
    const getUrl = process.env.MARK_URL as string;
    return await apiConnector
      .get(getUrl + "?exam_id=" + exam_id)
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
