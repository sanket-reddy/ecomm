import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { Admin } from "db";
import { ensureDbConnected } from "../../../../../packages/lib/dbconnect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await ensureDbConnected();
  let token = req.headers.authorization?.replace("Bearer ", "") ?? "";
  let username = jwt.decode(token);
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      res.status(404).send("Admin doesn't exists");
    } else {
      res.status(200).send(admin.Laptops);
    }
  } catch (error) {
    console.log("error", error);
  }
}
