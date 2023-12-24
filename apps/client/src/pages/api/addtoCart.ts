import { NextApiRequest, NextApiResponse } from "next";
import { ensureDbConnected } from "../lib/dbconnect";
import { Laptops, User } from "db";
import jwt from "jsonwebtoken";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await ensureDbConnected();
  const token = req.body.token;
  const username = jwt.decode(token);
  const title = req.body.title;
  const category = req.body.category;
  const user = await User.findOne({ username });
  if (category == "Laptops") {
    const Laptop = await Laptops.findOne({ title });
    let product = Laptop;
    product.category = "Laptops";
    user.Cart.push(product);
    try {
      await user.save();
      res.status(200).send("the item has been added succesfully into the cart");
    } catch (error) {
      console.log("Error : ", error);
    }
  }
}
