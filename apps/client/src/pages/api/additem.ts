import { NextApiRequest, NextApiResponse } from "next";
import { ensureDbConnected } from "../lib/dbconnect";
import { Admin, Laptops, LaptopsDescription } from "db";
import jwt from "jsonwebtoken";

interface Product {
  title: string;
  img: string;
  price: number;
}

interface ProductInfo {
  title: string;
  description: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await ensureDbConnected();
  const { category, title, description, img, price } = req.body;
  const productDetials: Product = { title, img, price };
  const productDescription: ProductInfo = { title, description };
  const token: string = req.headers.authorization?.replace("Bearer ", "") ?? "";
  const username = jwt.decode(token);
  console.log(username);
  const admin = await Admin.findOne({ username });
  if (!admin) {
    return res.status(404).json({ success: false, error: "Admin not found" });
  }
  if (category === "Laptops") {
    const laptops = new Laptops(productDetials);
    admin.Laptops.push(productDetials);
    const LaptopDetials = new LaptopsDescription(productDescription);
    admin.LaptopsDescription.push(productDescription);
    try {
      await laptops.save();
      await admin.save();
      await LaptopDetials.save();
      res
        .status(200)
        .json({ "message ": "the products have been succesfully added" });
    } catch (error) {
      console.error("Error saving user:", error);
      res.status(500).json({ success: false, error: "Failed to save user" });
    }
  }
}
