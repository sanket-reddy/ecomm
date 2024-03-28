import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { ensureDbConnected } from "../../../../../packages/lib/dbconnect";
import { User } from "db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await ensureDbConnected();
  let title = req.body.title;
  let token = req.body.token;
  let username = jwt.decode(token);
  try {
    const user = await User.findOne({ username });
    const cart = await user.Cart;
    const index = cart.findIndex((item: any) => item.title === title);
    cart.splice(index, 1);
    await user.save();
    console.log(cart);
    res.status(200).json({ message: "the product was removed sucessfully " });
  } catch (error) {
    console.log("an error has occured in the deletion process : ", error);
    res
      .status(201)
      .json({ message: "an error has during the process : ", error });
  }
}
