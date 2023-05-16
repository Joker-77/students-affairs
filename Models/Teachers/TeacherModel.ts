import { IPersonModel } from "../ApiResponse/PersonModel";

export interface ITeacherModel {
  id: number;
  activity: string;
  number: string;
  degree: string;
  person_id: string;
  created_at: string;
  updated_at: string;
  internal_phone: string;
  person: IPersonModel;
}
