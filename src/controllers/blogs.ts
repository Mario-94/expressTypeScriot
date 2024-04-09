import { Request, Response } from "express";
import { hanldeHTTP } from "../utils/error.handle";
import {
  insertBlog,
  getBlogs,
  getBlog,
  putBlog,
  deleteBlog,
} from "../services/blogs/blogs";
import { RequestExt } from "../interface/user.extendents";

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getBlogs();
    res.send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_BLOGS");
  }
};

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getBlog(id);
    res.send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_GET_BLOGS");
  }
};

const postItem = async ({ body, user }: RequestExt, res: Response) => {
  try {
    const response = await insertBlog(body);
    res.send({ response, user });
  } catch (error) {
    hanldeHTTP(res, "ERROR_POST_BLOGS", error);
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await putBlog(id, body);
    res.send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_UPDATE_BLOGS");
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteBlog(id);
    res.send(response);
  } catch (error) {
    hanldeHTTP(res, "ERROR_DELETE_BLOGS");
  }
};

export { getItems, getItem, postItem, updateItem, deleteItem };
