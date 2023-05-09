import { makeError } from "../middlewares/errorHandler";
import usersRepositories from "../repositories/usersRepositories";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createUser = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  const hash = await bcrypt.hash(password, Number(process.env.SALT!));

  const insertedUser: number[] = await usersRepositories.insertUser({
    login,
    password: hash,
  });

  return insertedUser[0];
};

const loginUser = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  const userFromDataBase = await usersRepositories.getUser({ login });
  const verify = await bcrypt.compare(password, userFromDataBase.password);

  if (!verify || !userFromDataBase)
    throw makeError({ message: "Usuário ou senha inválido", status: 400 });
  return jwt.sign({ userId: userFromDataBase.id }, process.env.SECRET_TOKEN!, {
    expiresIn: "7 days",
  });
};

export default { createUser, loginUser };
