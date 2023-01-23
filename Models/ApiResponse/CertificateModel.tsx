import {ICertificateMarkModel} from "./CertificateMarkModel";

export interface ICertificateModel {
  id: number;
  type: string;
  year: string;
  result: string;
  city: string;
  candidate_id: number,
  details: ICertificateMarkModel[],
  round: string,
  subscription_number: string,
}
