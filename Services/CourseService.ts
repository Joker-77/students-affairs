import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class CourseService {
  static async GetAll(): Promise<ApiResponse> {
    const listUrl = process.env.LIST_COURSE_URL as string;
    console.log(listUrl);
    return await apiConnector
      .get(listUrl)
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
  static async Edit(payload): Promise<ApiResponse> {
    const editUrl = process.env.EDIT_COURSE_URL as string;
    return await apiConnector
      .post(editUrl, payload)
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

  static async Get(id: string): Promise<ApiResponse> {
    const detailUrl = (process.env.LIST_COURSE_URL as string) + `/${id}`;
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
}
