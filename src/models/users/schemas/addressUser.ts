import { Schema } from "mongoose";
import { addressUser } from "../../../interface/address.user.interface";

export const addressUserSchema = new Schema<addressUser>(
  {
    zipCode: { type: String, required: true },
    nationality: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    timestamps:
      false /*TODO: crea  la fecha de creacion y de actualizacion createdAt,updateAt*/,
    versionKey: false,
    _id: false,
  }
);
