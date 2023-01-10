import apiConnector from "./ApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class CertificateService {
  static async GetAll(): Promise<ApiResponse> {
    const listUrl = process.env.LIST_CERTIFICATE_URL as string;
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
  
  static async Add(): Promise<ApiResponse> {
    const addUrl = process.env.ADD_CERTIFICATE_URL as string;
    return await apiConnector
      .get(addUrl)
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

  //   static async Edit(): Promise<ApiResponse> {
  //     const editUrl = process.env.EDIT_CANDIDATE_URL as string;
  //     return await apiConnector
  //       .get(editUrl)
  //       .then((response) => {
  //         if (response.data.success) {
  //           let result = response.data;
  //           return result;
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("Api Error:", error);
  //         throw error;
  //       });
  //   }

  static async Get(): Promise<ApiResponse> {
    const detailUrl = process.env.DETAILS_CERTIFICATE_URL as string;
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
