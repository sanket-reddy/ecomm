import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { ensureDbConnected } from "../../../../../packages/lib/dbconnect";
import { Laptops, User } from "db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await ensureDbConnected();
  let { token, title, category } = await req.body;

  let username = jwt.decode(token);
  const user = await User.findOne({ username });
  if (category === "Laptops") {
    let product = await Laptops.findOne({ title });
    product.total_users++;
    product.category = "Laptops";
    user.Products.push(product);
    try {
      await user.save();
      await product.save();
      res.status(200).json({ message: "done" });
    } catch (error) {
      console.log("error", error);
    }
  } else {
    res.status(201).send("the category is not added yet");
  }
}
