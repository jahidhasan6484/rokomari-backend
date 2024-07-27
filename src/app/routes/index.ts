import express from "express";
// import { userRouters } from "../modules/user/user.routes";
// import { bookRouters } from "../modules/book/book.routes";
import { authRouters } from "../modules/auth/auth.routes";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: authRouters,
  },
  // {
  //   path: "/user",
  //   route: userRouters,
  // },
  // {
  //   path: "/book",
  //   route: bookRouters,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
