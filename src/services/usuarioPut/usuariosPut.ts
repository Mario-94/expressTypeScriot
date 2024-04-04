import { addressUser } from "../../interface/address.user.interface";
import { avatarUser } from "../../interface/avatar.user.interface";
import { dataUser } from "../../interface/data.user.interface";

import UserModel from "../../models/users/user";

/* Put para agregar la data del usuario como name last name mother name email password 
Este insert se utiliza ademas para actualizar el número telefonico*/
const updateUser = async (id: string, userData: dataUser) => {
  try {
    const responseInsertData = await UserModel.findByIdAndUpdate(
      { _id: id },
      { $set: { "User.dataUser": userData } },
      /* NOTE: el new sirve para que nos retorne el valor nuevo despues de actualilzar la data */
      { new: true }
    );
    return responseInsertData;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
const insertAddressUser = async (id: string, userAddress: addressUser) => {
  try {
    const resposeInsertAddress = await UserModel.findByIdAndUpdate(
      { _id: id },
      { $set: { "User.addressUser": userAddress } },
      { new: true }
    );
    return resposeInsertAddress;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const insertAvatarUser = async (id: string, userAvatar: avatarUser) => {
  try {
    const responseInsertAvatar = await UserModel.findOneAndUpdate(
      { _id: id },
      { $set: { "User.avatarUser": userAvatar } },
      { new: true }
    );
    return responseInsertAvatar;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { insertAddressUser, insertAvatarUser, updateUser };
