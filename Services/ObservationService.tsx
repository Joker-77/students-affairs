import apiConnector from "./ApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class ObservationService {
  static async GetAll(date, employee_id, hall_id): Promise<ApiResponse> {
    const listUrl = process.env.LIST_OBSERVATIONS_URL as string;
    return await apiConnector
      .get(`${listUrl}?date=${date}&employee_id=${employee_id}&hall_id=${hall_id}`)
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

  static async GetAvailableObservers(date, from, to): Promise<ApiResponse> {
    const listUrl = process.env.LIST_AVAILABLE_OBSERVERS_URL as string;
    return await apiConnector
      .get(`${listUrl}?date=${date}&from=${from}&to=${to}`)
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
    const addUrl = process.env.ADD_OBSERVATION_URL as string;
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

  static async Delete(payload): Promise<ApiResponse> {
    const deleteUrl = process.env.DELETE_OBSERVATION_URL as string;
    return await apiConnector
      .post(deleteUrl, payload)
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