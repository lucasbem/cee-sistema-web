import { StatusEnum } from './Status';
import { IContact, IPhone } from "./Contact";
import { IProfile } from "./Profile";
import { ENV } from 'src/environments/environment';

export interface IUser {
  "id"?: string;
  "name": string;
  "cpf": number;
  "rg"?: IRg;
  "gender"?: GenderEnum; //enum [masculino, feminino]
  "maritalStatus"?: MaritalStatusEnum; //enum [solteiro(a), casado(a), ...]
  "status": StatusEnum; //enum [0, 1]
  "contact"?: IContact;
  "loginInfo"?: ILoginInfo;
  "dataAccess": IDataAccess;
  "description"?: string;
}

export enum GenderEnum {
  FEMININO = "Feminino",
  MASCULINO = "Masculino",
}

export enum MaritalStatusEnum {
  SOLTEIRO = "Solteiro(a)",
  CASADO = "Casado(a)",
  DIVORCIADO = "Divorciado(a)",
  VIUVO = "Viúvo(a)",
}

export interface IRg {
  number: number;
  expeditionDate: Date;
  dispatcherAgency: string;
  uf: string;
}


export interface ILoginInfo {
  "token": string;
  "providerId": string;
  "providerKey": string;
}

export interface IDataAccess {
  "username"?: string;
  "password": string;
  "profiles"?: IProfile[];
}

export class User implements IUser {

  status: StatusEnum.INACTIVE
  name: string;
  cpf: number;

  dataAccess = {
    username: (new Date().getTime()).toString(),
    password: ENV.user.defaultPassword,
    profiles: [] as Array<IProfile>
  };

  contact: IContact = {
    email: [],
    phone: [{
      ddi: ENV.contact.phone.ddi,
      ddd: ENV.contact.phone.ddd
    }],
    address: []
  }
  "description": string;

  constructor() {
    // token.generate(new Date).then((data)=>{
    //   this.dataAccess.username = data;
    // });
  }

}


