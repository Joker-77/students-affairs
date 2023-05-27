import { ISpecialityModel } from "../Specialities/SpecialityModel";

export interface IStudentYear {
  id: number;
  en_name: string;
  ar_name: string;
  code: string;
}

export interface ISpecYear {
  id: number;
  en_name: string;
  ar_name: string;
  speciality_id: number;
  speciality: ISpecialityModel;
}
