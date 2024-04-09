import { check } from "express-validator";
import { customValidatorResult } from "../utils/handleValidator";
import { NextFunction, Request, Response } from "express";

/* MARK: En este caso no es necesario mostar la interface, ya que con validator, podemos validar que esta interface se cumpla */
const validatorRegister = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 50 }),
  check("lastName").exists().notEmpty().isLength({ min: 3, max: 10 }),
  check("motherName").exists().notEmpty().isLength({ min: 3, max: 10 }),
  check("email").exists().notEmpty().isLength({ min: 5, max: 30 }),
  check("password").exists().notEmpty().isLength({ min: 8, max: 15 }),
  check("numberPhone").exists().notEmpty().isLength({ min: 10, max: 12 }),
  check("lada").exists().notEmpty().isLength({ min: 3, max: 10 }),
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
