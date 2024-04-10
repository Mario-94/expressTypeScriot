import { Router } from "express";
import { loginController, registerController } from "../controllers/auth";
import { validatorLogin, validatorRegister } from "../validators/auth";

const router = Router();

/* NOTE: se suele utilizar mucho el post para la parte de logeo, aparte de eso esta es de suma importancia ya que aqui registraremos y no en la de user */

router.post("/register", validatorRegister, registerController);

router.post("/login", validatorLogin, loginController);

export { router };
