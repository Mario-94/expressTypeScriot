export interface user {
  dataUser: {
    name: string;
    lastName: string;
    motherName: string;
    email: string;
    password: string;
    gender: string;
    role: string;
  };
  phone: {
    numberPhone: string;
    lada: string;
  };

  addressUser: {
    zipCode: string;
    nationality: string;
    city: string;
    country: string;
  };
  avatar: {
    nameUser: string;
    imgAvatar: string;
  };
}
