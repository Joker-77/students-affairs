export interface IUserModel {
  id?: number;
  email: string;
  password: string;
  roles?: IRoleModel[];
}

export interface IRoleModel {
  id: number;
  name: string;
}

