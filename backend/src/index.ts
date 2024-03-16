import { orderRouter } from "./routers/order_router";
import { productRouter } from "./routers/product_router";
import { seedRouter } from "./routers/seed_roouter";
import { userRouter } from "./routers/user_router";
import { sampleProducts } from "./data";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
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
app.use(express.json());
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use(express.urlencoded({ extended: true }));
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/seed", seedRouter);
app.use("/orders", orderRouter);
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
