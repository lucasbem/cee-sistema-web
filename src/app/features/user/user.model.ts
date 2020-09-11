export interface IUser {
  "id"?: string;
  "name": string;
  "email"?: string;
  "password"?: string;
  "phone"?: string;
  "address"?: IAddress;
  "status"?: string;
  "level": string;
}

interface IAddress {
  "place"?: string;
  "district"?: string;
  "city"?: string;
  "state"?: string;
  "zipcode"?: number;
  "number"?: number;
  "complement"?: string;}
