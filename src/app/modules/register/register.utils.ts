import bcrypt from "bcrypt";
const SALT: number = 12;

export const generateHashPassword = async (password: string) => {
  const hashPassword = await bcrypt.hash(password, SALT);

  return hashPassword;
};
