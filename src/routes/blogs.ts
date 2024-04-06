import { Router } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers/blogs";
import { checkJwt } from "../middleware/session";

const router = Router();
router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", checkJwt, postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
export { router };
