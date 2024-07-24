import { PrismaClient, UserRole } from "@prisma/client";
import { generateHashPassword } from "./user.utils";

const prisma = new PrismaClient();

const createUser = async (payload: any) => {
  const { password, data } = payload;

  const hashPassword = await generateHashPassword(password);

  const userData = {
    name: data.name,
    email: data.email,
    password: hashPassword,
    role: UserRole.USER,
  };

  const createdUser = await prisma.user.create({
    data: userData,
  });

  return createdUser;
};

export const userServices = {
  createUser,
};
