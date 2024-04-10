import UserModel from "../models/users/user";
import { User } from "../interface/user";
import { encrypt } from "../utils/bcrypt.handle";

const getUsers = async () => {
  const response = await UserModel.find({});
  return response;
};

const getUser = async (id: string) => {
  const response = await UserModel.findById(id);
  return response;
};

const insertUser = async (item: User) => {
  const response = await UserModel.create(item);
  return response;
};

const updateUser = async (id: string, data: User) => {
  const { dataUser, phone, addressUser } = data;
  const { email, password, name, lastName, motherName, gender } = dataUser;
  const { lada, numberPhone } = phone;
  const { zipCode, nationality, country, city } = addressUser;
  const passHas = await encrypt(password);
  const response = await UserModel.findByIdAndUpdate(
    { _id: id },
    {
      dataUser: {
        email,
        password: passHas,
        name,
        lastName,
        motherName,
        gender,
      },
      phone: { lada, numberPhone },
      addressUser: { zipCode, nationality, city, country },
    },
    {
      new: true,
    }
  );
  return response;
};

const deleteUser = async (id: string) => {
  const response = await UserModel.findByIdAndDelete(id);
  return response;
};

export { getUsers, getUser, insertUser, updateUser, deleteUser };
