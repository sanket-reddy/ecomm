import { NextApiRequest, NextApiResponse } from "next";
import { ensureDbConnected } from "../../../../../packages/lib/dbconnect";
import Jwt from "jsonwebtoken";
import { User } from "db";
export default async function (req: NextApiRequest, res: NextApiResponse) {
  await ensureDbConnected();
  let token: string = req.body.token;
  let username = Jwt.decode(token);
  try {
    const user = await User.findOne({ username });
    res.status(200).json({
      username,
      products: user.Products,
    });
  } catch (error) {
    res.status(200).send(error);
  }
}
