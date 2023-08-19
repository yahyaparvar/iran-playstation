import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true } })
export class Product {
  public _id?: string;

  @prop({ required: true })
  public name!: string;
  @prop({ required: true })
  public country!: string;
  @prop({ required: true, unique: true })
  public slug!: string;
  @prop({ required: true })
  public image!: string;
  @prop({ required: true })
  public description!: string;
}

export const ProductModel = getModelForClass(Product);
