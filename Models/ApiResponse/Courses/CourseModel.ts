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

export interface ICourseDescriptionModel {
  id: 2;
  course_id: 1;
  credit: 9;
  created_at: string;
  updated_at: string;
  attachement: any;
  total_hours: number;
  evaluation_methods: [];
  hours: [];
}
