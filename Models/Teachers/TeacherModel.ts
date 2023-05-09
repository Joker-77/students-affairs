import { IPersonModel } from "../ApiResponse/PersonModel";

import { StringLocale } from "yup/lib/locale";

export interface ITeacherModel {
  id: number;
  //first_name: string;
  //last_name: string;
  father_name: string;
  //national_number: string;
  //gender: string;
  work_field: string;
  activity: string;
  number: string;
  degree: string;
  person_id: string;
  created_at: string;
  updated_at: string;
  person: IPersonModel;
  prefix_name: string;
  //primary_number: string;
  //secondary_number: string;
  //office_number: string;
  //mobile_1: string;
  //mobile_2: string;
  hiast_graduate: number;
  status: string;
  attachements: ITeacherAttachement[];
}

export interface ITeacherAttachement {
  id: number;
  name: string;
  url: string;
}

export interface ICreateTeacherModel {
  //id: number;
  first_name: string;
  last_name: string;
  father_name: string;
  national_number: string;
  gender: string;
  work_field: string;
  activity: string;
  number: string;
  degree: string;
  //person_id: string;
  //created_at: string;
  //updated_at: string;
  //person: IPersonModel;
  prefix_name: string;
  primary_number: string;
  secondary_number: string;
  office_number: string;
  mobile_1: string;
  mobile_2: string;
  hiast_graduate: number;
  status: string;
  attachement?: string;
  attachement_name?: string;
}

export interface IEditTeacherModel {
  id: number;
  first_name: string;
  last_name: string;
  father_name: string;
  national_number: string;
  gender: string;
  work_field: string;
  activity: string;
  number: string;
  degree: string;
  //person_id: string;
  //created_at: string;
  //updated_at: string;
  //person: IPersonModel;
  prefix_name: string;
  primary_number: string;
  secondary_number: string;
  office_number: string;
  mobile_1: string;
  mobile_2: string;
  hiast_graduate: number;
  status: string;
  attachement?: string;
  attachement_name?: string;
}
