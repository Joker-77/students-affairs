import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class MarkService {
    static async GetAllExams(eduCourseId: string, eduYearId: string): Promise<ApiResponse> {
        const listUrl = process.env.MARK_URL as string;
        return await apiConnector
            .get(listUrl + `/listExams?edu_course_id=${eduCourseId}&edu_year_id=${eduYearId}`)
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

}
