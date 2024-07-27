import { UserRole } from "@prisma/client";

export type IAuthUser = {
  email: string;
  role: UserRole;
} | null;

export type IRegisterUser = {
  name: string;
  email: string;
  password: string;
  role: string;
};
