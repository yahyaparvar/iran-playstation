import express, { Request, Response } from "express";
import { sampleProducts } from "./data";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { productRouter } from "./routers/product_router";
import { seedRouter } from "./routers/seed_roouter";
dotenv.config();

const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/playstation-iran";

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use("/products", productRouter);
app.use("/seed", seedRouter);
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
