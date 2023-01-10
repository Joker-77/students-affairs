import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class PermissionService {
  static async GetAll(role_id?: number): Promise<ApiResponse> {
    let listUrls = process.env.LIST_PERMISSIONS_URL as string;
    if (role_id) listUrls = listUrls + `?role_id=${role_id}`;
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
    const addUrl = process.env.ADD_PERMISSION_URLS as string;
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

  static async AssignToRole(): Promise<ApiResponse> {
    const assignToRoleUrl = process.env
      .ASSIGN_PERMISSION_TO_ROLE_URLS as string;
    return await apiConnector
      .get(assignToRoleUrl)
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
