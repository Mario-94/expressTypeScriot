import { Schema } from "mongoose";
import { avatarUser } from "../../../interface/avatar.user.interface";

export const avatarUserSchema = new Schema<avatarUser>(
  {
    nameUser: { type: String, required: true },
    imgAvatar: { type: String, required: true },
  },
  {
    timestamps:
      false /*TODO: crea  la fecha de creacion y de actualizacion createdAt,updateAt*/,
    versionKey: false,
    _id: false,
  }
);
