import { UserRole } from "@prisma/client";
import { generateHashPassword } from "./user.utils";
import prisma from "../../shared/prisma";

const registerUser = async (payload: any) => {
  const { password, data } = payload;

  const hashPassword = await generateHashPassword(password);

  const userData = {
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
  registerUser,
};
