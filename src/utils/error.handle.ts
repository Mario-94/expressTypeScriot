import { Response } from "express";

const hanldeHTTP = (res: Response, error: string) => {
    res.status(500);
    res.send({ error })
}
export { hanldeHTTP };