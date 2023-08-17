import express from "express";
import { ProductModel } from "../models/product_model";
import { sampleProducts, sampleUsers } from "../data";
import { UserModel } from "../models/user_model";

export const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await ProductModel.deleteMany({});
  const createdProducts = await ProductModel.insertMany(sampleProducts);
  await UserModel.deleteMany({});
  const createdUsers = await UserModel.insertMany(sampleUsers);
  res.json({ createdProducts, createdUsers });
});
