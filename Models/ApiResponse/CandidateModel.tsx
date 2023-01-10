import {IPersonModel} from "./PersonModel";

export interface ICandidateModel {
  id: number;
  registeration_number: string;
  person: IPersonModel;
  father: IPersonModel;
  mother: IPersonModel;
  birth_date: string;
  birth_place: string;
  qaid_place: string;
  qaid_number: string;
  military_office: string;
}

export interface ICertificateModel {
  id: number;
  name: string;
  type: string;
}
