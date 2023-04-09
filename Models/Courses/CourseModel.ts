export interface ICourseModel {
  id: number;
  en_name: string;
  ar_name: string;
  fr_name: string;
  code: string;
  created_at: string;
  updated_at: string;
  current_description: ICourseDescriptionModel;
}

export interface IEvaluationMethod {
  id: number;
  name: string;
  percentage: number;
}
export interface ICourseDescriptionModel {
  id: number;
  course_id: number;
  credit: number;
  created_at: string;
  updated_at: string;
  attachement: any;
  total_hours: number;
  evaluation_methods: IEvaluationMethod[];
  hours: IHourModel[];
}

export interface IHourModel {
  id: number;
  course_desc_id: number;
  direct_or_personal: string;
  type: string;
  hours: number;
  created_at: string;
  updated_at: string;
}
