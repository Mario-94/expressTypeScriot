import UserModel from "../models/users/schemas/user";
import { user } from "../interface/user";

const getUsers = async () => {
  const response = await UserModel.find({});
  return response;
};

const getUser = async (id: string) => {
  const response = await UserModel.findById({ id });
  return response;
};

const insertUser = async (item: user) => {
  const response = await UserModel.create({ item });
  return response;
};

const updateUser = async (id: string, data: user) => {
  const response = await UserModel.findByIdAndUpdate({
    id,
    data,
  });
  return response;
};

const deleteUser = async (id: string) => {
  const response = await UserModel.findByIdAndDelete({ id });
};

export { getUsers, getUser, insertUser, updateUser, deleteUser };
