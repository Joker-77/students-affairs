import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class RoleServices {
  static async GetAll(): Promise<ApiResponse> {
    const listUrls = process.env.LIST_ROLES_URL as string;
    return await apiConnector
      .get(listUrls)
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
    const addUrl = process.env.ADD_ROLE_URL as string;
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

  static async Delete(): Promise<ApiResponse> {
    const deleteUrl = process.env.DELETE_ROLE_URL as string;
    return await apiConnector
      .get(deleteUrl)
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

  static async AssignUserToRole(): Promise<ApiResponse> {
    const assignUsrToRoleUrl = process.env.ASSIGN_USER_TO_ROLE_URL as string;
    return await apiConnector
      .get(assignUsrToRoleUrl)
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
