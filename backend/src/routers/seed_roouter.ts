import express from "express";
import { ProductModel } from "../models/product_model";
import { sampleProducts } from "../data";

export const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await ProductModel.deleteMany({});
  const createdProducts = await ProductModel.insertMany(sampleProducts);
  res.json({ createdProducts });
});
