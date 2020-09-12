export interface IContact {
    email?: string[];
    phone?: IPhone[];
    address?: IAddress[];
}

export interface IPhone {
  ddi?: number;
  ddd?: number;
  number?: number;
  typePhone?: TypePhoneEnum;
}

export enum TypePhoneEnum {
  CELULAR = "Celular",
  RESIDENCIAL = "Residencial",
  TRABALHO = "Trabalho",
  RURAL = "Rural",
  COMERCIAL = "Comercial",
  RECADO = "Recado"
}

export interface IAddress {
  "country"?: string;
  "state"?: string;
  "city"?: string;
  "district"?: string;
  "place"?: string;
  "number"?: number;
  "zipcode"?: number;
  "complement"?: string;
}
