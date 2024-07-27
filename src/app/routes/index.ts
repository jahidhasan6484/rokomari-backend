import express from "express";
import { registerRouters } from "../modules/register/register.routes";
// import { userRouters } from "../modules/user/user.routes";
// import { bookRouters } from "../modules/book/book.routes";
// import { authRouters } from "../modules/auth/auth.routes";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/register",
    route: registerRouters,
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
