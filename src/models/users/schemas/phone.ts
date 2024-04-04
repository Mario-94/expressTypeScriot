import { Schema } from "mongoose";
import { phoneUser } from "../../../interface/phone.user.interface";

export const phoneUserSchema = new Schema<phoneUser>(
  {
    numberPhone: { type: String, required: true },
    lada: { type: String, required: true },
  },
  {
    timestamps:
      false /*TODO: crea  la fecha de creacion y de actualizacion createdAt,updateAt*/,
    versionKey: false,
    _id: false,
  }
);
