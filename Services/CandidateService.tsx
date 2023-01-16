import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class CandidateService {

  static async GetAll(): Promise<ApiResponse> {
    const listUrl = process.env.LIST_CANDIDATE_URL as string;
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
      const addUrl = process.env.ADD_CANDIDATE_URL as string;
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

  static async Edit(): Promise<ApiResponse> {
    const editUrl = process.env.EDIT_CANDIDATE_URL as string;
    return await apiConnector
      .get(editUrl)
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

  static async Get(): Promise<ApiResponse> {
    const detailUrl = process.env.DETAILS_CANDIDATE_URL as string;
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
