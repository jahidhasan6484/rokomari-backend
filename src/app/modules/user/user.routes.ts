import express from "express";
import { userControllers } from "./user.controllers";
const router = express.Router();

router.post("/register", userControllers.registerUser);

export const userRouters = router;
