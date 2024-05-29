import {ReactNode} from "react";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string;
  website: string;
  company: IUserCompany;
  children:ReactNode;
}

interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IUserGeo

}

interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string
}

interface IUserGeo {
  lat: number;
  lng: number;
}