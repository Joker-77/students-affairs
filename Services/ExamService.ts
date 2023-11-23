import apiConnector from "./TokenizedApiClient";
import { ApiResponse } from "../Models/ApiResponse/ApiResponse";

export default class ExamService {
  static async GetAllCourses(
    programId?: string,
    eduYearId?: string
  ): Promise<ApiResponse> {
    const listUrl = process.env.LIST_EXAM_COURSE_URL as string;
    console.clear();
    console.log(`${listUrl}?program_id=${programId}&edu_year_id=${eduYearId}`);
    return await apiConnector
      .get(`${listUrl}?program_id=${programId}&edu_year_id=${eduYearId}`)
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
  static async GetAllPlans(
    programId?: string,
    eduYearId?: string,
    eduCourseId?: string,
    methodId?: string
  ): Promise<ApiResponse> {
    const listUrl = process.env.LIST_EXAM_URL as string;
    return await apiConnector
      .get(
        `${listUrl}/plan?program_id=${programId}&edu_year_id=
            ${eduYearId}&edu_course_id=${eduCourseId}&method_id=${methodId}`
      )
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

  static async GetAllExams(
    programId?: string,
    eduYearId?: string,
    eduCourseId?: string,
    methodId?: string
  ): Promise<ApiResponse> {
    return await apiConnector
      .get(
        `/exam/details?program_id=${programId}&edu_year_id=
            ${eduYearId}&method_id=${methodId}&edu_course_id=${eduCourseId}`
      )
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

  static async GetAllHalls(
    date: string,
    edu_year_id: string = "1"
  ): Promise<ApiResponse> {
    const listUrl = process.env.LIST_EXAM_URL as string;
    return await apiConnector
      .get(`${listUrl}halls?edu_year_id=${edu_year_id}&date=${date}`)
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
    const createUrl = "/exam/add";
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
    const createUrl = "/exam/edit";
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

  static async getExams(plan_id: string): Promise<ApiResponse> {
    const getUrl = process.env.LIST_EXAM_URL as string;
    return await apiConnector
      .get(getUrl + "?plan_id=" + plan_id)
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

  static async getMarks(exam_id: string): Promise<ApiResponse> {
    const getUrl = process.env.MARK_URL as string;
    return await apiConnector
      .get(getUrl + "?exam_id=" + exam_id)
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

  static async getHalls(): Promise<ApiResponse> {
    const getUrl = "/halls";
    return await apiConnector
      .get(getUrl)
      .then((response) => {
        if (response.data.success) {
          let result = response.data.result;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  static async schedule(
    pId,
    eduYearId,
    evalId,
    yearId,
    sem
  ): Promise<ApiResponse> {
    const getUrl = `/exam/schedule?program_id=${pId}&edu_year_id=${eduYearId}
    &evaluation_method=${evalId}&year_id=${yearId}&semester=${sem}`;
    return await apiConnector
      .get(getUrl)
      .then((response) => {
        if (response.data.success) {
          let result = response.data.result;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  static async scheduleBetweenDates(
    pId,
    eduYearId,
    start_date,
    end_date
  ): Promise<ApiResponse> {
    const getUrl = `/exam/schedule2?program_id=${pId}&edu_year_id=${eduYearId}
    &start_date=${start_date}&end_date=${end_date}`;
    return await apiConnector
      .get(getUrl)
      .then((response) => {
        if (response.data.success) {
          let result = response.data.result;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  static async addExamHalls(payload): Promise<ApiResponse> {
    const createUrl = "/exam/add_exam_halls";
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
  static async teacherAssignReport(
    eduYearId,
    start_date,
    end_date
  ): Promise<ApiResponse> {
    const getUrl = `/exam/teacher-assign?edu_year_id=${eduYearId}
    &start_date=${start_date}&end_date=${end_date}`;
    return await apiConnector
      .get(getUrl)
      .then((response) => {
        if (response.data.success) {
          let result = response.data.result;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  static async DepartmentTeacherAssign(dept, st, en): Promise<ApiResponse> {
    const getUrl = `/exam/department-teacher-assign?department=${dept}&start_date=${st}&end_date=${en}`;
    return await apiConnector
      .get(getUrl)
      .then((response) => {
        if (response.data.success) {
          let result = response.data.result;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  static async DepartmentObservAssign(dept, st, en): Promise<ApiResponse> {
    const getUrl = `/exam/activity-observation-assign?department=${dept}&start_date=${st}&end_date=${en}`;
    return await apiConnector
      .get(getUrl)
      .then((response) => {
        if (response.data.success) {
          let result = response.data.result;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  static async observations(st, en): Promise<ApiResponse> {
    const getUrl = `/exam/observations?start_date=${st}&end_date=${en}`;
    return await apiConnector
      .get(getUrl)
      .then((response) => {
        if (response.data.success) {
          let result = response.data.result;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  static async delete(_id): promise<ApiResponse> {
    return await apiConnector
      .post("/exam/delete", {
        exam_id: parseInt(_id),
      })
      .then((response) => {
        if (response?.data?.success) {
          return response?.data;
        }
      })
      .catch((error) => {
        throw error;
      });
  }

  static async getObservSchedule(st, en): promise<ApiResponse> {
    const getUrl = `/exam/observation-detailed-schedule?start_date=${st}&end_date=${en}`;
    return await apiConnector
      .get(getUrl)
      .then((response) => {
        if (response.data.success) {
          let result = response.data.result;
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  }
}
