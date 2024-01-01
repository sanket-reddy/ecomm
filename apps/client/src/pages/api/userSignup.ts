import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { User } from "db";
import { ensureDbConnected } from "../../../../../packages/lib/dbconnect";

type Data = {
  token?: string;
  message?: string;
};
const SecretKey = "e_comm";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await ensureDbConnected();
  const { username, password } = req.body;
  let found = await User.findOne({ username });
  if (found) {
    res.status(201).json({ message: "user already exists" });
  } else {
    const user = new User({ username, password });
    user.save();

    const token = jwt.sign(username, SecretKey);
    res.status(200).json({ message: "succesful registration", token });
  }
}
