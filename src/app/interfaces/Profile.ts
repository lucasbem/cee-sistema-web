import { ModelNameEnum } from './enumerations/ModelNameEnum';
export interface IProfile {
  "id"?: string;
  "name": string;
  "roleCrud": IRoleCrud
}

interface IRoleCrud {
  "_model": string;
  "_modelName": ModelNameEnum;
  "C": boolean;
  "R": boolean;
  "U": boolean;
  "D": boolean;
}
