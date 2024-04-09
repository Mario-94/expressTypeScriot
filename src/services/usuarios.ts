import { dataUser } from "../interface/data.user.interface";
import UserModel from "../models/users/user";

const getUsers = async () => {
  const responseGets = await UserModel.find({});
  return responseGets;
};

const getUser = async (id: string) => {
  const responseGet = await UserModel.findById({ _id: id });
  return responseGet;
};

const insertUser = async (item: dataUser) => {
  /*NOTE:Por default dejamos typeUser como user,const defaultTypeUser = { typeUser: "user" }; */
  const responseInsert = await UserModel.create({
    User: { dataUser: item },
  });
  return responseInsert;
};

const deleteUser = async (id: string) => {
  const response = await UserModel.findByIdAndDelete({ _id: id });
  return response;
};

export { getUsers, insertUser, getUser, deleteUser };
