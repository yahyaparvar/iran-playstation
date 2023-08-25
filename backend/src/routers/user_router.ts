import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";
import { generateToken } from "../utils";
import { UserModel } from "../models/user_model";

export const userRouter = express.Router();
userRouter.post("/signin", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const secretKey: Secret = process.env.JWT_VERIFY_SECRET_KEY || "mysecretkey";
  try {
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User No Existonita" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect Password" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secretKey,
      { expiresIn: "30d" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something info wrongo" });
  }
});

userRouter.post("/register", async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already signed up" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match." });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await UserModel.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: `${error} Lady Gaga, we should have sex` });
  }
});
