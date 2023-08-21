import {IPersonModel} from "./PersonModel";
import Desire from "../../components/Desire/Desire";

export interface ICandidateModel {
  id: number;
  external: number;
  registeration_number: string;
  person: IPersonModel;
  father: IPersonModel;
  mother: IPersonModel;
  birth_date: string;
  birth_place: string;
  qaid_place: string;
  qaid_number: string;
  military_office: string;
  desires: any[];
}

export interface ICertificateModel {
  id: number;
  name: string;
  type: string;
}
