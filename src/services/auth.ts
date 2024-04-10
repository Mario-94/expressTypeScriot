import { Auth } from "../interface/auth.interface";

import { user } from "../interface/user";
import UserModel from "../models/users/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async (body: user) => {
  /* NOTE: De esta manera se destructura la información para que podamos encriptarla */
  const { dataUser, phone, addressUser, avatar } = body;
  const { email, password, name, lastName, motherName, gender, role } =
    dataUser;
  const { lada, numberPhone } = phone;
  const { nameUser, imgAvatar } = avatar;
  const { zipCode, nationality, country, city } = addressUser;
  const passHas = await encrypt(password);
  const checkIs = await UserModel.findOne({ "User.dataUser.email": email });
  if (checkIs) return "ALREADY_USER";

  const registerNewUser = await UserModel.create({
    dataUser: {
      email,
      password: passHas,
      name,
      lastName,
      motherName,
      gender,
      role,
    },
    phone: { lada, numberPhone },
    addressUser: { zipCode, nationality, city, country },
    avatar: { nameUser, imgAvatar },
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ "dataUser.email": email });

  if (!checkIs) return "NOT_FOUND";

  const passHas =
    checkIs?.dataUser
      ?.password; /* MARK: hase referencia al encryptado mientras que el if 
      hace la funcion deverificar que efectivamente se cuente con el password */
  if (!passHas) return "NOT_FOUND";

  const isCorrect = await verified(password, passHas);
  if (!isCorrect) return "PASSWORD_INCORRECT";
  /* MARK: Recordemos que esto de ahecer la variable y despues checar el email del usuario como tru es porque typescript me dice que no se puede asignar un valor nulo
  aunque nosotros sepamso que el modelo como tal no devuelve un valor nulo sino siempre un valor, typescript nos advierte por cualquier falla
  a diferencia de vanilla javascript */
  const emailUser = checkIs?.dataUser?.email;
  if (!emailUser) return "NOT_EMAIL";
  /* return checkIs;  cambiamos esto para ya no devolver todo el usuario sino solo el token que es lo que necesitaran en el front*/

  const token = generateToken(emailUser);
  const data = { Data: checkIs, token };
  return data;
};

export { registerNewUser, loginUser };
