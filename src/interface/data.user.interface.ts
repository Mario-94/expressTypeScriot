import { Auth } from "./auth.interface";

export interface dataUser extends Auth {
  name: string;
  lastName: string;
  motherName: string;
  gender: "male" | "female";
  phone: {
    numberPhone: string;
    lada: string;
  };
}
