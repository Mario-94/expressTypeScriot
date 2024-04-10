import { check } from "express-validator";
import { customValidatorResult } from "../utils/handleValidator";
import { NextFunction, Request, Response } from "express";

/* MARK: En este caso no es necesario mostar la interface, ya que con validator, podemos validar que esta interface se cumpla */
const validatorRegister = [
  check("dataUser.name").exists().notEmpty().isLength({ min: 3, max: 50 }),
  check("dataUser.lastName").exists().notEmpty().isLength({ min: 3, max: 10 }),
  check("dataUser.motherName")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 10 }),
  check("dataUser.email")
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 30 })
    .isEmail(),
  check("dataUser.password").exists().notEmpty().isLength({ min: 8, max: 15 }),
  check("phone.numberPhone").exists().notEmpty().isLength({ min: 10, max: 12 }),
  check("phone.lada").exists().notEmpty().isLength({ min: 3, max: 10 }),
  (req: Request, res: Response, next: NextFunction) => {
    return customValidatorResult(req, res, next);
  },
];

const validatorLogin = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 8, max: 15 }),
  (req: Request, res: Response, next: NextFunction) => {
    return customValidatorResult(req, res, next);
  },
];

export { validatorLogin, validatorRegister };
