import { check } from "express-validator";
import { customValidatorResult } from "../utils/handleValidator";
import { NextFunction, Request, Response } from "express";

/* MARK: En este caso no es necesario mostar la interface, ya que con validator, podemos validar que esta interface se cumpla */
const validatorRegister = [
  check("dataUser.name").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("dataUser.lastName").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("dataUser.motherName")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 15 }),
  check("dataUser.email")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 15 })
    .isEmail(),
  check("dataUser.password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("dataUser.gender").exists().notEmpty().isLength({ min: 4, max: 6 }),

  check("phone.numberPhone").exists().notEmpty().isLength({ min: 10, max: 12 }),
  check("phone.lada").exists().notEmpty().isLength({ min: 2, max: 15 }),
  check("addressUser.zipCode").exists().notEmpty().isLength({ max: 10 }),
  check("addressUser.nationality")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 40 }),
  check("addressUser.city").exists().notEmpty().isLength({ min: 3, max: 40 }),
  check("addressUser.country")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 40 }),
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
