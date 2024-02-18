import { signup } from "@/controllers/auth.controller";
import express, { Router } from "express";

const router: Router = express.Router();

export const authRoutes = (): Router => {
  router.post("/signup", signup);

  return router;
};
