import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";

const registerController = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(body);

    res.send(responseUser).status(200);
  } catch (error) {
    console.error("Error in registerController:", error);
    res.status(500).send({ error: "Internal server error" });
  }
};

const loginController = async ({ body }: Request, res: Response) => {
  const { email, password } = body;

  const responseUser = await loginUser({ email, password });

  if (responseUser === "PASSWORD_INCORRECT") {
    res.status(401);
    res.send(responseUser);
  } else {
    res.status(200);
    res.send(responseUser);
  }
};

export { registerController, loginController };
