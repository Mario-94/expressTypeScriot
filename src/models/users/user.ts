import mongoose, { Schema } from "mongoose";
import { User } from "../../interface/user";

const userSchema = new Schema<User>(
  {
    dataUser: {
      name: { type: String, required: true },
      lastName: { type: String },
      motherName: { type: String },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      gender: { type: String, enum: ["male", "female"], default: "male" },
    },
    phone: {
      numberPhone: { type: String, required: true },
      lada: { type: String, required: true },
    },
    addressUser: {
      zipCode: { type: String, required: true },
      nationality: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
  },
  {
    /* MARKE: timestamps crea la fecha de creacion y actualizacion es el createdAt updateAt 
    versionKey: con esto lo que hacemos es que no nos realizara algunas validaciones con la finalidad de que revise si se cumplen los campos o no, 
    en mi caso no ocupo esto ya que necesito validar posteriormente los schemas 
    para verificar que los datos se llenen de manera correcta   strict: false  
    */
    timestamps: false,
    versionKey: false,
  }
);
const UserModel = mongoose.model("user", userSchema);
export default UserModel;
