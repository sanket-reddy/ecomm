import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { User } from "db";
import { ensureDbConnected } from "../../../../../packages/lib/dbconnect";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  await ensureDbConnected();
  const token = req.body.token;
  const username = jwt.decode(token);
  const user = await User.findOne({ username });
  if (!user) {
    res.send("no user found");
  } else {
    const cart = user.Cart;
    if (cart === null) {
      res.status(200).send("nothing in cart");
    }
    res.status(200).send(cart);
  }
}
