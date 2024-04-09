import { check } from "express-validator";
import { customValidatorResult } from "../utils/handleValidator";
import { NextFunction, Request, Response } from "express";
const validatorAddress = [
  check("typeUser").exists().notEmpty().isLength({ min: 2, max: 5 }),
  (req: Request, res: Response, next: NextFunction) => {
    return customValidatorResult(req, res, next);
  },
];

export { validatorAddress };
