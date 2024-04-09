import { check } from "express-validator";
import { customValidatorResult } from "../utils/handleValidator";
import { NextFunction, Request, Response } from "express";
const validatorAddress = [
  check("nameUser").exists().notEmpty().isLength({ max: 10 }),
  check("imgAvatar").exists().notEmpty(),
  ,
  (req: Request, res: Response, next: NextFunction) => {
    return customValidatorResult(req, res, next);
  },
];

export { validatorAddress };
