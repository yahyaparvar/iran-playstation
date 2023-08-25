import auth from "../middleware/auth";
import { OrderModel } from "../models/order_model";
import express, { Request, Response } from "express";
export const orderRouter = express.Router();

orderRouter.post("/submit", auth, async (req: Request, res: Response) => {
  try {
    const { name, email, items, price, quantity } = req.body;
    const newOrder = new OrderModel({
      name,
      email,
      items,
      price,
      quantity,
    });
    newOrder.save();
    return res
      .status(200)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
});

orderRouter.get("/", async (req: Request, res: Response) => {
  const orders = await OrderModel.find({});
  res.send("orders");
});
