import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class TeacherService {
  static async GetAll(): Promise<ApiResponse> {
    const listUrl = process.env.LIST_TEACHER_URL as string;
    console.clear();
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

  /*static async AddAfterSearch(payload): Promise<ApiResponse> {
    const addUrl = process.env.SEARCH_ADD_CANDIDATE_URL as string;
    return await apiConnector
      .post(addUrl, payload)
      .then((response) => {
        if (response?.data?.success) {
          let result = response?.data;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }*/

  static async Add(payload): Promise<ApiResponse> {
    const addUrl = process.env.ADD_TEACHER_URL as string;
    return await apiConnector
      .post(addUrl, payload)
      .then((response) => {
        if (response?.data?.success) {
          let result = response?.data;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  /*static async Search(payload): Promise<ApiResponse> {
    const searchUrl = process.env.SEARCH_CANDIDATE_URL as string;
    return await apiConnector
      .get(searchUrl, {
        params: payload,
      })
      .then((response) => {
        if (response?.data?.success) {
          let result = response?.data;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }*/

  static async Edit(payload): Promise<ApiResponse> {
    const editUrl = process.env.EDIT_TEACHER_URL as string;
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
    const detailUrl = (process.env.LIST_TEACHER_URL as string) + `/${id}`;
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
