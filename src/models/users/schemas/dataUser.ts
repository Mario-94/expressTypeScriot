import { Schema } from "mongoose";
import { dataUser } from "../../../interface/data.user.interface";
export const dataUserSchema = new Schema<dataUser>(
  {
    name: { type: String, required: true },
    lastName: { type: String },
    motherName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, default: "male" },
    phone: {
      numberPhone: { type: String, required: true, unique: true },
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
