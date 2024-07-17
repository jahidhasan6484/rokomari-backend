import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllAdminFromDB = async () => {
  const data = await prisma.admin.findMany();

  return data;
};

export const adminServices = {
  getAllAdminFromDB,
};
