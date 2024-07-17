import { PrismaClient, UserRole } from "@prisma/client";
import { generateHashPassword } from "./user.utils";

const prisma = new PrismaClient();

const createAdmin = async (_data: any) => {
  const { password, data } = _data;

  const hashPassword = await generateHashPassword(password);

  const userData = {
    email: data.email,
    password: hashPassword,
    role: UserRole.ADMIN,
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    const createdUser = await transactionClient.user.create({
      data: userData,
    });
    const createdAdmin = await transactionClient.admin.create({
      data: data,
    });

    return createAdmin;
  });

  return result;
};

export const userServices = {
  createAdmin,
};
