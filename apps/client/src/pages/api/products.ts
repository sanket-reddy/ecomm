import { NextApiRequest, NextApiResponse } from "next";
import { ensureDbConnected } from "../../../../../packages/lib/dbconnect";
import jwt from "jsonwebtoken";
import { Admin } from "db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await ensureDbConnected();
  const token: string = req.headers.authorization?.replace("Bearer ", "") ?? "";
  const username = jwt.decode(token);
  try {
    const admin = await Admin.findOne({ username });
    res.status(200).send(admin.Products);
  } catch (error) {
    console.log("Error", error);
  }
}
