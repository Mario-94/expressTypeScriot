import { check } from "express-validator";
import { customValidatorResult } from "../utils/handleValidator";
import { NextFunction, Request, Response } from "express";

const validatorCreateItem = [
  check("dataUser.name").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("dataUser.lastName").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("dataUser.motherName")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 15 }),
  check("dataUser.email").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("dataUser.password").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("dataUser.gender").exists().notEmpty().isLength({ min: 4, max: 6 }),
  check("dataUser.phone.numberPhone")
    .exists()
    .notEmpty()
    .isLength({ min: 10, max: 12 }),
  check("dataUser.phone.lada")
    .exists()
    .notEmpty()
    .isLength({ min: 2, max: 15 }),
  check("dataUser.typeUser").exists().notEmpty().isLength({ min: 2, max: 5 }),
  check("dataUser.addresUser.zipCode")
    .exists()
    .notEmpty()
    .isLength({ max: 10 }),
  check("dataUser.addresUser.nationality")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 40 }),
  check("dataUser.addresUser.city")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 40 }),
  check("dataUser.addresUser.country")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 40 }),
  check("dataUser.avatar.nameUser").exists().notEmpty().isLength({ max: 10 }),
  check("dataUser.avatar.imgAvatar").exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    return customValidatorResult(req, res, next);
  },
];
const validatorGetItem = [
  check("id").exists().notEmpty().isMongoId(),
  (req: Request, res: Response, next: NextFunction) => {
    return customValidatorResult(req, res, next);
  },
];
export { validatorGetItem, validatorCreateItem };
