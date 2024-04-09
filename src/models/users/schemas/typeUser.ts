import { Schema } from "mongoose";

export const typeUserSchema = new Schema<string>(
  {
    typeUser: { type: String, enum: ["admin", "user"], default: "user" },
  },
  {
    timestamps:
      false /*TODO: crea  la fecha de creacion y de actualizacion createdAt,updateAt*/,
    versionKey: false,
    _id: false,
  }
);
