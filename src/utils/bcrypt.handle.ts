import { hash, compare } from "bcryptjs";

const encrypt = async (pass: string) => {
  const passwordHas = await hash(pass, 8);
  return passwordHas;
};
const verified = async (pass: string, passHas: string) => {
  const isCorrect = await compare(pass, passHas);
  return isCorrect;
};
export { encrypt, verified };
