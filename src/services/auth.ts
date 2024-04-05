import { Auth } from "../interface/auth.interface";
import { dataUser } from "../interface/data.user.interface";
import UserModel from "../models/users/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
const registerNewUser = async (body: dataUser) => {
  /* NOTE: De esta manera se destructura la información para que podamos encriptarla */
  const { email, password, name, lastName, motherName, gender, phone } = body;
  const { lada, numberPhone } = phone;
  const passHas = await encrypt(password);
  const checkIs = await UserModel.findOne({ "User.dataUser.email": email });
  if (checkIs) return "ALREADY_USER";

  const registerNewUser = await UserModel.create({
    User: {
      dataUser: {
        email,
        password: passHas,
        name,
        lastName,
        motherName,
        gender,
        phone: { lada, numberPhone },
      },
      typeUser: "user",
    },
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ "User.dataUser.email": email });

  if (!checkIs) return "NOT_FOUND";

  const passHas =
    checkIs.User?.dataUser
      ?.password; /* MARK: hase referencia al encryptado mientras que el if 
      hace la funcion deverificar que efectivamente se cuente con el password */
  if (!passHas) return "NOT_FOUND";

  const isCorrect = await verified(password, passHas);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  return checkIs;
};

export { registerNewUser, loginUser };
