import { UserRole } from "@prisma/client";
import prisma from "../../shared/prisma";
import { generateHashPassword } from "./register.utils";

const registerUser = async (payload: {
  email: string;
  password: string;
  name: string;
}) => {
  const { email, password, name } = payload;

  const hashPassword = await generateHashPassword(password);

  const userData = {
    email: email,
    password: hashPassword,
    role: UserRole.USER,
  };

  const profileData = {
    name: name,
    email: email,
  };

  const result = await prisma.$transaction(async (tx) => {
    const createdUser = await tx.user.create({ data: userData });
    const createdProfile = await tx.profile.create({ data: profileData });

    return { createdUser, createdProfile };
  });

  return result;
};

const registerAuthor = async (payload: {
  email: string;
  password: string;
  name: string;
}) => {
  const { email, password, name } = payload;

  const hashPassword = await generateHashPassword(password);

  const authorData = {
    email: email,
    password: hashPassword,
    role: UserRole.AUTHOR,
  };

  const profileData = {
    name: name,
    email: email,
  };

  const result = await prisma.$transaction(async (tx) => {
    const createdUser = await tx.user.create({ data: authorData });
    const createdProfile = await tx.profile.create({ data: profileData });

    return { createdUser, createdProfile };
  });

  return result;
};

export const registerServices = {
  registerUser,
  registerAuthor,
};
