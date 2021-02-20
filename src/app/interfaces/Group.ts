import { ModelNameEnum } from './enumerations/ModelNameEnum';
export interface IGroup {
  "_id"?: string;
  "status": boolean;
  "name": string;
  "roleCrud"?: IRoleCrud;
  "description"?: string;
}

interface IRoleCrud {
  "_model": string;
  "_modelName": ModelNameEnum;
  "C": boolean;
  "R": boolean;
  "U": boolean;
  "D": boolean;
}

export class Group implements IGroup {

  status: false;
  name: "";

  constructor(){}
}
