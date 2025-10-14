import { IAddress } from "./address.model";
import { ICompany } from "./company.model";


export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}