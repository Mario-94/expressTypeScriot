import { Router } from "express";
import { loginController, registerController } from "../controllers/auth";

const router = Router();

/* NOTE: se suele utilizar mucho el post para la parte de logeo */

router.post("/register", registerController);

router.post("/login", loginController);

export { router };
