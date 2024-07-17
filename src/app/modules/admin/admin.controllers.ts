import { Request, Response } from "express";
import { adminServices } from "./admin.services";

const getAllAdminFromDB = async (req: Request, res: Response) => {
  try {
    const result = await adminServices.getAllAdminFromDB();

    res.status(200).json({
      isSuccess: true,
      message: "Admin data retrive successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      isSuccess: false,
      message: "Something went wrong!",
      error,
    });
  }
};

export const adminControllers = {
  getAllAdminFromDB,
};
