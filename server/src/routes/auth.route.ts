import express, { Router } from "express";
import { signin, signout, signup } from "@/controllers/auth.controller";

const router: Router = express.Router();

export const authRoutes = (): Router => {
  router.post("/signup", signup);
  router.post("/signin", signin);
  router.get("/signout", signout);

  return router;
};
