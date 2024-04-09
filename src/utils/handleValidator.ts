import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

const customValidatorResult = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error: any) {
    res.status(403).send({ error: error.array() });
  }
};

export { customValidatorResult };
