import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "db";
import jwt from "jsonwebtoken";
import { ensureDbConnected } from "../lib/dbconnect";
const SecretKey = "e_commerce_app";
type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await ensureDbConnected();

  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (user) {
    let token = jwt.sign(username, SecretKey);
    res.status(200).json({ message: "the credentials are fine", token });
  } else {
    res.status(201).json({ message: "the credentials are invalid" });
  }
}
