import { Router } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postDataItem,
  putAddressItem,
  putAvatarItem,
  putDataItem,
} from "../controllers/users";
import { logMiddleware } from "../middleware/log";
import { validatorGetItem } from "../validators/user";
const router = Router();
router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
/* elimimamos un usuario por completo, ya que no queremos eliminar solo un apartado */
router.delete("/:id", deleteItem);
/* parte de las inserciones del usuario
 */
router.post("/addUser", postDataItem);

router.put("/addAddress/:id", putAddressItem);
router.put("/addAvatar/:id", putAvatarItem);
/* para la modificacion de una sola parte del usuario */

router.put("/updateData/:id", putDataItem);
router.put("/updateAddress/:id", putAddressItem);
router.put("/updateAvatar/:id", putAvatarItem);
/* Este put hace referencia a cuando agregamso todos los datos del usuario y queremos modificar una parte en concreto */
// router.put("/:id", putDataItem);
export { router };
