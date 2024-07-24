import { Response } from "express";

const globalErrorHandler = (res: Response) => {
  res.status(500).json({
    message: "Error from Global Error Handler",
  });
};

export default globalErrorHandler;
