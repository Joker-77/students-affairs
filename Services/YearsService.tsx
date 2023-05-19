import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class YearsService {
  static async GetWhereSpeciality(specId: string): Promise<ApiResponse> {
    const listUrl = process.env.LIST_YEARS_URL as string;
    return await apiConnector
      .get(listUrl + "?speciality_id=" + specId)
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
