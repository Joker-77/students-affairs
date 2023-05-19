import { IPersonModel } from "../ApiResponse/PersonModel";

export interface IObserverModel {
  id: number;
  authority: string;
  activity: string;
  number: string;
  person_id: string;
  created_at: string;
  updated_at: string;
  person: IPersonModel;
  office_number: string;
  mobile: string;
  status: string;
  excluded: number;
}

export interface ICreateObserverModel {
  number: string;
  first_name: string;
  last_name: string;
  gender: string;
  authority: string;
  activity: string;
  office_number: string;
  mobile: string;
  excluded: number;
  status: string;
}

export interface IEditObserverModel {
  id: number;
  number: string;
  first_name: string;
  last_name: string;
  gender: string;
  authority: string;
  activity: string;
  office_number: string;
  mobile: string;
  excluded: number;
  status: string;
}
