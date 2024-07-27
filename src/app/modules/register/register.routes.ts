import express from "express";
import { registerControllers } from "./register.controllers";
const router = express.Router();

router.post("/user", registerControllers.registerUser);
router.post("/author", registerControllers.registerAuthor);

export const registerRouters = router;
