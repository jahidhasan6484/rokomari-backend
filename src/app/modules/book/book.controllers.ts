import { NextFunction, Request, Response } from "express";
import { bookServices } from "./book.services";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

const addBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await bookServices.addBook(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "book added successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const bookControllers = {
  addBook,
};
