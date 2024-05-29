import express from "express";
import * as UserController from "../controllers/UserController.js";

export const router = express.Router();

router.get("/", (req, res) => {
  res.json(UserController.getAllUsers(req, res));
});
