import { NextApiRequest, NextApiResponse } from "next";
import { ensureDbConnected } from "../../../../../packages/lib/dbconnect";
import { Laptops } from "db";
import { LanTwoTone } from "@mui/icons-material";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await ensureDbConnected();
  let { title, rating } = await req.body;
  let laptop = await Laptops.findOne({ title });

  laptop.rating =
    (laptop.rating * (laptop.total_users - 1) + rating) / laptop.total_users;
  laptop.rating = Number(laptop.rating);
  laptop.rating = laptop.rating.toFixed(2);
  await laptop.save();
  res.status(200).send("sucessfully added the rating ");
}
