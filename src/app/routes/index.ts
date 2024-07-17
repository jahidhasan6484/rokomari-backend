import express from "express";
import { userRouters } from "../modules/user/user.routes";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
