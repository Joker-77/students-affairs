import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class UserService {
  static async GetAll(): Promise<ApiResponse> {
    const listUrl = process.env.LIST_User_URL as string;
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
    const createUrl = process.env.LIST_User_URL + "/create" as string;
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
    const editUrl = process.env.LIST_User_URL + "/edit" as string;
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
    const detailUrl = (process.env.LIST_User_URL + "/details?id=" as string) + `${id}`;
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

  static async GetRoles(): Promise<ApiResponse> {
    const detailUrl = "/roles";
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

  static async AssignUserToRole(payload): Promise<ApiResponse> {
    const detailUrl = "/user/assign-role";
    return await apiConnector
      .post(detailUrl, payload)
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

  static async GetPermissions(roleId: string): Promise<ApiResponse> {
    const detailUrl = "/permissions?role_id=" + roleId;
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

  static async AssignUserToPermission(payload): Promise<ApiResponse> {
    const detailUrl = "/user/assign-permission";
    return await apiConnector
      .post(detailUrl, payload)
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
