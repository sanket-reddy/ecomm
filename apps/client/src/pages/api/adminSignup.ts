import type { NextApiRequest, NextApiResponse } from "next";
import { Admin } from "db";
import jwt from "jsonwebtoken";
import { ensureDbConnected } from "../lib/dbconnect";
const SecretKey = "e-commerce";
type Data = {
  token?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await ensureDbConnected();
  const { username, password } = req.body;
  const x = await Admin.findOne({ username });

  if (x) {
    res.status(201).json({ message: "the username is already in use" });
  } else {
    const admin = new Admin({ username, password });
    admin.save();

    const token = jwt.sign(username, SecretKey);
    res.status(200).json({ message: "successfully registered", token });
  }
}
