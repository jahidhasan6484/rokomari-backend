import { Request, Response } from "express";
import { userServices } from "./user.services";

const createUser = async (req: Request, res: Response) => {
  try {
    // const data = await userServices.createAdmin(req.body);

    res.status(200).json({
      isSuccess: true,
      message: "Admin created successfully",
      // data,
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: "Something went wrong!",
      error,
    });
  }
};

export const userControllers = {
  createUser,
};
