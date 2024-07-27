import { NextFunction, Request, Response } from "express";
import { authServices } from "./auth.services";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await authServices.registerUser(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "you are registerd as user",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const authControllers = {
  registerUser,
};
