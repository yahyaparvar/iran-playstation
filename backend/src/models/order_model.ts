import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";
import { Product } from "./product_model";

@modelOptions({ schemaOptions: { timestamps: true } })
export class Order {
  public _id?: string;
  @prop({ required: true })
  public name!: string;
  @prop({ required: true, index: false })
  public email!: string;
  @prop({ required: true })
  public items!: [];
  @prop({ required: true })
  public price!: number;
  @prop({ required: true })
  public quantity!: number;
}

export const OrderModel = getModelForClass(Order);
