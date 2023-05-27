import { ICourseModel } from "../Courses/CourseModel";
import { IEduYearModel } from "../EduYear/EduYearModel";
import { ISpecYear } from "../StudentsYear/IStudentYear";

export interface IProgramModel {
  id: number;
  name: string;
}

export interface IEduCourseModel {
  id: number;
  edu_year_id: number;
  course_desc_id: number;
  course_id: number;
  course: ICourseModel;
}
export interface IProgramCourseModel {
  id: number;
  program_id: number;
  year_id: number;
  edu_year_id: number;
  edu_course_id: number;
  semester: number;
  new_students_num: number;
  old_students_num: number;
  program: IProgramModel;
  year: ISpecYear;
  eduYear: IEduYearModel;
  course: IEduCourseModel;
}
