import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interface/user.extendents";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization;
    if (!jwtByUser) {
      return res.status(401).send("NOT_SESSION");
    }

    const jwt = jwtByUser.split(" ").pop();
    if (!jwt) {
      return res.status(401).send("NOT_SESSION_VALID");
    }

    const isUser = verifyToken(jwt);
    if (!isUser) {
      return res.status(401).send("NOT_TOKEN_VALID");
    } else {
      req.user = isUser;
      next();
    }
  } catch (error) {
    console.log(error);

    res.status(400);
    res.send("SESSION_INVALID");
  }
};

export { checkJwt };
