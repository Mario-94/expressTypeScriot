import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "contraseñaDeacceso123";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    /* En esta parte decidimos cuando expira el token */
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = () => {};

export { generateToken, verifyToken };
