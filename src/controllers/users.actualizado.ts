import { Request, Response } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  insertUser,
  updateUser,
} from "../services/usuarios.actualizado";
import { hanldeHTTP } from "../utils/error.handle";
const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getUsers();
    res.status(200).send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_USERS");
  }
};

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getUser(id);
    res.status(200).send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_USERS");
  }
};
const insertItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertUser(body);
    res.status(200).send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_USERS");
  }
};
const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateUser(id, body);
    res.status(200).send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_USERS");
  }
};
const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteUser(id);
    res.status(200).send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_USERS");
  }
};

export { getItem, getItems, insertItem, updateItem, deleteItem };
