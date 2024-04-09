import { check } from "express-validator";
import { customValidatorResult } from "../utils/handleValidator";
import { NextFunction, Request, Response } from "express";
const validatorAddress = [
  check("zipCode").exists().notEmpty().isLength({ max: 10 }),
  check("nationality").exists().notEmpty().isLength({ min: 3, max: 40 }),
  check("city").exists().notEmpty().isLength({ min: 3, max: 40 }),
  check("country").exists().notEmpty().isLength({ min: 3, max: 10 }),
  (req: Request, res: Response, next: NextFunction) => {
    return customValidatorResult(req, res, next);
  },
];

export { validatorAddress };
