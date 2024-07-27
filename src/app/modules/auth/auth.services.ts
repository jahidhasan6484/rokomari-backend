import { UserRole } from "@prisma/client";
import prisma from "../../shared/prisma";
import { generateHashPassword } from "../user/user.utils";

const registerUser = async (payload: any) => {
  const { email, password, profile } = payload;
  const hashPassword = await generateHashPassword(password);

  const userInfo = {
    email,
    password: hashPassword,
    role: UserRole.USER,
  };

  const userProfile = {
    name: profile.name,
    email,
  };

  await prisma.$transaction(async (tx) => {
    const newUser = await tx.user.create({
      data: userInfo,
    });

    const profile = await tx.profile.create({
      data: userProfile,
    });

    return profile;
  });
};

export const authServices = {
  registerUser,
};
