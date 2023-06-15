import { IPersonModel } from "../ApiResponse/PersonModel";

export interface IObserverModel {
  id: number;
  first_name: string;
  last_name: string;
  level_id: number;
  activity_id: number;
  number: string;
  created_at: string;
  updated_at: string;
  office_number: string;
  mobile_number: string;
  status: string;
  excluded: number;
  bulding: string;
  nick_name: string;
  printing_name: string;
}

export interface ICreateObserverModel {
  number: string;
  first_name: string;
  last_name: string;
  bulding: string;
  level_id: number;
  activity_id: number;
  office_number: string;
  mobile_number: string;
  excluded: number;
  status: string;
  nick_name: string;
  printing_name: string;
}

export interface IEditObserverModel {
  id: number;
  number: string;
  first_name: string;
  last_name: string;
  bulding: string;
  level_id: number;
  activity_id: number;
  office_number: string;
  mobile_number: string;
  excluded: number;
  status: string;
  nick_name: string;
  printing_name: string;
}

export interface ILevelModel {
  id: number;
  name: string;
}

export interface IActivityModel {
  id: number;
  name: string;
}