export interface IPersonModel {
  id: number;
  first_name: string;
  last_name: string;
  passport_first_name: string;
  passport_last_name: string;
  sex: string;
  nationality: string;
  national_number: string;
  passport_number: string;
  phones: IPhoneModel[]
}

export interface IPhoneModel {
  id: number;
  phone: string;
  type: string;
}
