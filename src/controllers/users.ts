import { Request, Response } from "express";
import { hanldeHTTP } from "../utils/error.handle";
import {
  deleteUser,
  getUser,
  getUsers,
  insertUser,
} from "../services/usuarios";
import {
  insertAddressUser,
  insertAvatarUser,
  updateUser,
} from "../services/usuarioPut/usuariosPut";
import { matchedData } from "express-validator";

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getUsers();
    res.status(200).json(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_USERS");
  }
};

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    // const { id } = params;
    const response = await getUser(id);
    res.status(200).json(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_USER");
  }
};
/* Controla para insertar un usuario, preferimos agregar el número telefonico al usuario en general */
const postDataItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertUser(body);
    res.status(200).json(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_POST_USER", error);
  }
};
/* put Data user */
const putDataItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateUser(id, body);
    res.status(200).json(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_PUT_USER_DATA");
  }
};

/* Put addressUser */
const putAddressItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await insertAddressUser(id, body);
    res.status(200).json(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_PUT_USER_ADDRESS");
  }
};

/* Put avatarUser */
const putAvatarItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await insertAvatarUser(id, body);
    res.send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_PUT_USER_AVATAR");
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteUser(id);
    if (response === null) {
      res.send({ message: "usuario no encontrado" });
    }
    res.status(200).json(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_DELETE_USER", error);
  }
};

export {
  getItems,
  getItem,
  deleteItem,
  postDataItem,
  putDataItem,
  putAddressItem,
  putAvatarItem,
};
