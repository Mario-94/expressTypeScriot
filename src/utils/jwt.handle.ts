import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "contraseñaDeacceso123";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    /* En esta parte decidimos cuando expira el token */
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (webToken: string) => {
  const verificationToken = verify(webToken, JWT_SECRET);

  if (!verificationToken) return "TOKEN_INVALID";

  return verificationToken;
};

export { generateToken, verifyToken };
