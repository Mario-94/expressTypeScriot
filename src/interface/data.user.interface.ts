export interface dataUser {
  name: string;
  lastName: string;
  motherName: string;
  gender: "male" | "female";
  email: string;
  password: string;
  phone: {
    numberPhone: string;
    lada: string;
  };
}
