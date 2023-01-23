import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class CertificateService {
  static async GetAll(id): Promise<ApiResponse> {
    const listUrl = process.env.LIST_CERTIFICATE_URL as string;
    return await apiConnector
      .get(`${listUrl}?candidate_id=${id}`)
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

  static async Add(payload): Promise<ApiResponse> {
    const addUrl = process.env.ADD_CERTIFICATE_URL as string;
    return await apiConnector
      .post(addUrl, payload)
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

    static async Edit(payload): Promise<ApiResponse> {
      const editUrl = process.env.EDIT_CERTIFICATE_URL as string;
      return await apiConnector
        .post(editUrl, payload)
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
