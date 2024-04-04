import mongoose, { Schema } from "mongoose";
import { dataUserSchema } from "./schemas/dataUser";
import { addressUserSchema } from "./schemas/addressUser";
import { avatarUserSchema } from "./schemas/avatar";
/* Para este caso en particular ocupamso pasar el schema no el modelo sino no podras hacer referencia al modelo ya que los modelos solo hacen referencia a un solo modelo y este no puede tener anidados los modelos */
const userSchema = new Schema(
  {
    User: {
      dataUser: { type: dataUserSchema, require: true },
      typeUser: {
        type: String,
        enum: ["admin", "user"],
        required: true,
      },
      addressUser: { type: addressUserSchema },
      avatarUser: { type: avatarUserSchema },
    },
  },
  {
    timestamps: true,
    versionKey: false,
    /* con esto lo que hacemos es que no nos realizara algunas validaciones con la finalidad de que revise si se cumplen los campos o no, en mi caso no ocupo esto ya que necesito validar posteriormente los schemas para verificar que los datos se llenen de manera correcta   strict: false  */
  }
);

const UserModel = mongoose.model("users", userSchema);

export default UserModel;
