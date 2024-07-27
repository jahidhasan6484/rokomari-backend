import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.services";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await userServices.registerUser(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `${data.role.toLocaleLowerCase()} created successfuly`,
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

export const userControllers = {
  registerUser,
};
