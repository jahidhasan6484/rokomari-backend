import express from "express";
import { authControllers } from "./auth.controllers";
const router = express.Router();

router.post("/register/user", authControllers.registerUser);

export const authRouters = router;
