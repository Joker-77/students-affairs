import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class PersonServices {
  static async GetAll(): Promise<ApiResponse> {
    const listUrl = process.env.LIST_PERSON_URL as string;
    return await apiConnector
      .get(listUrl)
      .then((response) => {
        console.log("response", response);
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
    const addUrl = process.env.ADD_PERSON_URL as string;
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
    const editUrl = process.env.EDIT_PERSON as string;
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
    const detailUrl = process.env.DETAILS_PERSON_URL as string;
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

  static async AddPhone(): Promise<ApiResponse> {
    const addPhoneUrl = process.env.ADD_PHONE_URL as string;
    return await apiConnector
      .get(addPhoneUrl)
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

  static async EditPhone(): Promise<ApiResponse> {
    const editPhoneUrl = process.env.EDIT_PHONE_URL as string;
    return await apiConnector
      .get(editPhoneUrl)
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

  static async DeletePhone(): Promise<ApiResponse> {
    const deletePhoneUrl = process.env.DELETE_PHONE_URL as string;
    return await apiConnector
      .get(deletePhoneUrl)
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
