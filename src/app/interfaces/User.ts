import { StatusEnum } from './Status';
import { IAddress, IContact, IPhone } from "./Contact";
import { IProfile } from "./Profile";
import { ENV } from 'src/environments/environment';

export interface IUser {
  "_id"?: string;
  "name": string;
  "cpf": number;
  "rg"?: IRg;
  "currentProfile"?: IProfile;
  "gender"?: string; //enum [masculino, feminino]
  "maritalStatus"?: string; //enum [solteiro(a), casado(a), ...]
  "status": string; //enum [0, 1]
  "contact"?: IContact;
  "loginInfo"?: ILoginInfo;
  "dataAccess": IDataAccess;
  "description"?: string;
}

export enum GenderEnum {
  FEMININO = "Feminino",
  MASCULINO = "Masculino",
  UNINFORMED = "Não informado",
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

class Rg {}


export interface ILoginInfo {
  "token": string;
  "providerId": string;
  "providerKey": string;
}

class LoginInfo{}

export interface IDataAccess {
  "username"?: string;
  "password": string;
  "profiles"?: IProfile[];
}

export class User implements IUser {

  name: string = "Visitante";
  cpf: number;
  description: string;

  status = StatusEnum.INACTIVE;
  gender = GenderEnum.UNINFORMED;
  currentProfile = {id:'asdf', name: 'Anônimo', status: true}

  // dataAccess = {} as IDataAccess;
  dataAccess = {
    username: (new Date().getTime()).toString(),
    password: ENV.user.defaultPassword,
    profiles: [{_id:'asdf', name: 'Anônimo'}] as Array<IProfile>
    // profiles: [] as Array<IProfile>
  };

  // contact = {} as IContact;
  contact: IContact = {
    email: [],
    phone: [{
      number: ENV.contact.phone.number
    }],
    address: [] as Array<IAddress>
  }

  constructor() {}

}


