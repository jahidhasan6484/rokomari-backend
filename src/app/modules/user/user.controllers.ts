import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.services";
import sendResponse from "../../shared/sendResponse";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await userServices.createUser(req.body);

    sendResponse(res, {
      isSuccess: true,
      message: "User created successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const userControllers = {
  createUser,
};
