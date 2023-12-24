import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { Admin, User } from "db";
import jwt from "jsonwebtoken";
import { ensureDbConnected } from "../lib/dbconnect";
const SecretKey = "e-commerce";
type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await ensureDbConnected();

  const { username, password } = req.body;

  const user = await Admin.findOne({ username, password });

  if (user) {
    let token = jwt.sign(username, SecretKey);
    res.status(200).json({ message: "the credentials are fine", token });
  } else {
    res.status(201).json({ message: "the credentials are invalid" });
  }
}
