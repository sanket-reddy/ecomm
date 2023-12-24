import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { Laptops } from "db";
import { ensureDbConnected } from "../lib/dbconnect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await ensureDbConnected();
  let laptop = await Laptops.find({});
  res.status(200).send(laptop);
}
