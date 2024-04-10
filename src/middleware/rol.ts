import { NextFunction, Request, Response } from "express";
import { hanldeHTTP } from "../utils/error.handle";
/**
 * Arrya con los roles permitidos
 * @param roles
 * @returns
 */
const checkRol =
  (roles: [string]) => (req: any, res: Response, next: NextFunction) => {
    try {
      const { user } = req;
      console.log(user);

      // const rolesByUser = role;
      // const checkValueRole = roles.some((rolesSingle) =>
      //   rolesByUser.includes(rolesSingle)
      // );
      // if (!checkValueRole) {
      //   hanldeHTTP(res, "USER_NOT_PERMISSIONS", 403);
      //   return;
      // }
      next();
    } catch (error) {
      console.log(error);
      hanldeHTTP(res, "ERROR_PERMISSIONS", 403);
    }
  };

export { checkRol };
