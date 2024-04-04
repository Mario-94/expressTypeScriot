import { NextFunction, Request, Response } from "express";
const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers;
  const userAgent = header["user-agent"];
  /* este next o responde algo con la funcion o forsosamente debe responder sino se quedara esperando la funcion
    next(); */
  console.log("user-agent", userAgent);

  res.send("DESDE_MIDDLEWARE");
};
export { logMiddleware };
