import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  img: { type: String },
  category: { type: String },
});

const laptopSchema = new Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  img: { type: String },
});

const laptopDescriptionSchema = new Schema({
  title: { type: String },
  description: { type: String },
});

const userSchema = new Schema({
  username: { type: String },
  password: { type: String },
  Products: [productSchema],
  Cart: [productSchema],
});

const adminSchema = new Schema({
  username: { type: String },
  password: { type: String },
  Products: [productSchema],
  Laptops: [laptopSchema],
  LaptopsDescription: [laptopDescriptionSchema],
});

export const Admin =
  mongoose.models?.Admin || mongoose.model("Admin", adminSchema);
export const Product =
  mongoose.models?.Product || mongoose.model("Product", productSchema);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Laptops =
  mongoose.models?.Laptop || mongoose.model("Laptop", laptopSchema);
export const LaptopsDescription =
  mongoose?.models?.LaptopsDescription ||
  mongoose.model("LaptopsDescription", laptopDescriptionSchema);
