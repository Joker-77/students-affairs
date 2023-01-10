import { IMenuType } from "./Menu";

export interface IMenuAction {
  type: string;
  menu: IMenuType;
}

export interface ITableAction {
  icon: string;
  tooltip: string;
  onClick(rowData: any): any;
}
