import { Response } from "express";

const hanldeHTTP = (res: Response, error: string, ErrorRaw?: any) => {
  console.log(ErrorRaw);
  res.status(500);
  res.send({ error });
};
export { hanldeHTTP };
