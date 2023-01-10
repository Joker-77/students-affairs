import { IPermissionModel } from "./PermissionModel";

export interface IRoleModel {
  id: number;
  name: string;
  status: number;
}

export interface IAddRole {
  name: string;
}

export interface IUpdateRole {
  id: number;
  name: string;
}

export interface RolePermissionModel {
  permissions: IPermissionModel[];
  roleId?: number;
}
