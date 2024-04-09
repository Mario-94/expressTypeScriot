import { Request, Response } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  insertUser,
  updateUser,
} from "../services/usuarios.actualizado";
import { hanldeHTTP } from "../utils/error.handle";
import { matchedData } from "express-validator";
const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getUsers();
    res.status(200).send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_USERS");
  }
};

const getItem = async (req: Request, res: Response) => {
  try {
    /* MARK: en  este caso lo que hacemos es que cambiamos el params por el matchedData, ay que es más conveniente porque este es deacuerdo al modelo que tenemos  const {
      id,
    } = params;*/
    const { id } = matchedData(req);

    const response = await getUser(id);
    res.status(200).send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_USERS");
  }
};
const insertItem = async (req: Request, res: Response) => {
  try {
    const { body } = matchedData(req);
    const response = await insertUser(body);
    res.status(200).send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_USERS");
  }
};
const updateItem = async (req: Request, res: Response) => {
  try {
    const { id, body } = matchedData(req);
    const response = await updateUser(id, body);
    res.status(200).send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_USERS");
  }
};
const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = matchedData(req);
    const response = await deleteUser(id);
    res.status(200).send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_USERS");
  }
};

export { getItem, getItems, insertItem, updateItem, deleteItem };
