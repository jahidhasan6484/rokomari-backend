import { NextFunction, Request, Response } from "express";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { registerServices } from "./register.services";

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await registerServices.registerUser(req.body);

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

const registerAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await registerServices.registerAuthor(req.body);

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

export const registerControllers = {
  registerUser,
  registerAuthor,
};
