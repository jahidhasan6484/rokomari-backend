import express from "express";
import { bookControllers } from "./book.controllers";
const router = express.Router();

router.post("/add", bookControllers.addBook);

export const bookRouters = router;
