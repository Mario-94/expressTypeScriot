import { check } from "express-validator";
import { customValidatorResult } from "../utils/handleValidator";
import { NextFunction, Request, Response } from "express";

const validatorCreateBlog = [
  check("title").exists().notEmpty().isLength({ min: 3, max: 50 }),
  check("description").exists().notEmpty().isLength({ min: 3, max: 200 }),
  check("usuario").exists().notEmpty().isMongoId(),
  (req: Request, res: Response, next: NextFunction) => {
    return customValidatorResult(req, res, next);
  },
];
const validatorGetBlog = [
  check("id").exists().notEmpty().isMongoId(),
  (req: Request, res: Response, next: NextFunction) => {
    return customValidatorResult(req, res, next);
  },
];
export { validatorCreateBlog, validatorGetBlog };
