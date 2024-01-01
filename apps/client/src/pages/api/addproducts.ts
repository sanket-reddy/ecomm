import mongoose from "mongoose";
import { Admin, Product } from "db";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { ensureDbConnected } from "../../../../../packages/lib/dbconnect";
interface Product {
  title: string;
  description: string;
  img: string;
  price: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await ensureDbConnected();
  const { title, description, img, price } = req.body;
  const productDetials: Product = { title, description, img, price };
  const token: string = req.headers.authorization?.replace("Bearer ", "") ?? "";
  const username = jwt.decode(token);
  const admin = await Admin.findOne({ username });
  if (!admin) {
    return res.status(404).json({ success: false, error: "Admin not found" });
  }
  const product = new Product(productDetials);
  // product.push(productDetials);
  admin.Products.push(productDetials);
  try {
    await admin.save();
    await product.save();
    res
      .status(200)
      .json({ "message ": "the products have been succesfully added" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ success: false, error: "Failed to save user" });
  }
}
