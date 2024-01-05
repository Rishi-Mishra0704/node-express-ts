import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  price: string;
}

const ProductSchema: Schema = new Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
});

export default mongoose.model<IProduct>('Product', ProductSchema)
