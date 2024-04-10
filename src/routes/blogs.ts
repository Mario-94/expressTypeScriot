import { Router } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers/blogs";
import { checkJwt } from "../middleware/session";
import { validatorCreateBlog, validatorGetBlog } from "../validators/blogs";

const router = Router();
router.get("/", getItems);
router.get("/:id", getItem);
router.post("/:id", checkJwt, validatorGetBlog, validatorCreateBlog, postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
export { router };
