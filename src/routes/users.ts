import { Router } from "express";
// import { logMiddleware } from "../middleware/log";
import { validatorCreateItem, validatorGetItem } from "../validators/user";
import {
  getItem,
  getItems,
  deleteItem,
  updateItem,
} from "../controllers/users";
//FIXME: ahorita por lo pronto vamos a posponer lo de roles
// import { checkRol } from "../middleware/rol";
import { checkJwt } from "../middleware/session";
const router = Router();
router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
/* parte de las inserciones del usuario
MARK: en esta parte ya olvidaremos la parte de insercion por partes
*/
router.put(
  "/modificar/:id",
  checkJwt,
  // checkRol(["admin"]),
  /* NOTE: ojo siempre que vayamos a modificar es necesario primero utilizar el middleware, que se encarga de revisar que el id este, de lo controrio no reconoce este id */
  validatorGetItem,
  validatorCreateItem,
  updateItem
);

router.delete("/:id", validatorGetItem, deleteItem);

export { router };
