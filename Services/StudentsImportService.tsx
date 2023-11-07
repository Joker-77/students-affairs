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

  static async GetStudentCourses(
    student_id: number,
    edu_year_id: number
  ): Promise<ApiResponse> {
    const listUrl = process.env.LIST_STUDENTS_Courses_URL as string;
    return await apiConnector
      .get(listUrl + `?student_id=${student_id}&edu_year_id=${edu_year_id}`)
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

  static async AddStudentCourss(data): Promise<ApiResponse> {
    const listUrl = process.env.LIST_STUDENTS_Courses_URL as string;
    return await apiConnector
      .post(listUrl + `/add`, data)
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

  static async DeleteStudentCourss(id): Promise<ApiResponse> {
    const listUrl = process.env.LIST_STUDENTS_Courses_URL as string;
    let data = new FormData();
    data.append("id", id);
    return await apiConnector
      .post(listUrl + `/delete`, data)
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

  static async getStudents(yearId, eduYearId): Promise<ApiResponse> {
    const listUrl = `/student?year_id=${yearId}&edu_year_id=${eduYearId}`;
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

  static async getDelay(personalNum, eduYearId): Promise<ApiResponse> {
    const listUrl = `/student/delay?personal_number=${personalNum}&edu_year_id=${eduYearId}`;
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
