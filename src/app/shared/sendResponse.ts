import { Response } from "express";

const sendResponse = async (
  res: Response,
  data: {
    statusCode: number;
    success: boolean;
    message: string;
    data: any;
  }
) => {
  res.status(200).json({
    data,
  });
};

export default sendResponse;
