import express from "express";

const userRouter = express.Router();

import { createUser, deleteUser, updateUser, getUserById, getAllUsers } from "../controllers/userController.js";

userRouter.post("/", async (req, res) => {
  createUser(req, res);
});

userRouter.patch("/:id", async (req, res) => {
  updateUser(req, res);
});

userRouter.delete("/:id", async (req, res) => {
  deleteUser(req, res);
});

userRouter.get("/", async (req, res) => {
  getAllUsers(req, res);
});

userRouter.get("/:id", async (req, res) => {
  getUserById(req, res);
});

export default userRouter;