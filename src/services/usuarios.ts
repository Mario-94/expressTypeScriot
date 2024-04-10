import UserModel from "../models/users/user";
import { User } from "../interface/user";

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
  const response = await UserModel.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};

const deleteUser = async (id: string) => {
  const response = await UserModel.findByIdAndDelete(id);
  return response;
};

export { getUsers, getUser, insertUser, updateUser, deleteUser };
