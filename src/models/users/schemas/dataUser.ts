import { Schema } from "mongoose";
import { dataUser } from "../../../interface/data.user.interface";
export const dataUserSchema = new Schema<dataUser>(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    motherName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    phone: {
      numberPhone: { type: String, required: true },
      lada: { type: String, required: true },
    },
  },
  {
    timestamps:
      false /*TODO: crea  la fecha de creacion y de actualizacion createdAt,updateAt*/,
    versionKey: false,
    _id: false,
  }
);
