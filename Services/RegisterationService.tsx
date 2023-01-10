import apiConnector from "./ApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class RegisterationService {
  static async Add(): Promise<ApiResponse> {
    const addUrl = process.env.ADD_REGISTERATION_URL as string;
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

  static async Edit(): Promise<ApiResponse> {
    const editUrl = process.env.EDIT_REGISTERATION_URL as string;
    return await apiConnector
      .get(editUrl)
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
    const detailUrl = process.env.DETAILS_REGISTERATION_URL as string;
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

//   static async GetAll(): Promise<ApiResponse> {
//     const listUrl = process.env.LIST_SPECIALITY_URL as string;
//     return await apiConnector
//       .get(listUrl)
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

  static async GetAllDersires(): Promise<ApiResponse> {
    const listUrl = process.env.REG_DESIRES_LIST_URL as string;
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

  static async AddDesire(): Promise<ApiResponse> {
    const addDesireUrl = process.env.ADD_REG_DESIRE_URL as string;
    return await apiConnector
      .get(addDesireUrl)
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

  static async EditDesire(): Promise<ApiResponse> {
    const editDesireUrl = process.env.EDIT_REG_DESIRE_URL as string;
    return await apiConnector
      .get(editDesireUrl)
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
