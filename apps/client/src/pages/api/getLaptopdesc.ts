import { NextApiRequest, NextApiResponse } from "next";
import { LaptopsDescription } from "db";
import { Laptops } from "db";
import { ensureDbConnected } from "../../../../../packages/lib/dbconnect";
export default async function (req: NextApiRequest, res: NextApiResponse) {
  await ensureDbConnected();
  const title = req.body.title;
  try {
    const description = await LaptopsDescription.findOne({ title });
    const device = await Laptops.findOne({ title });
    const x = [device, description];
    res.status(200).send(x);
  } catch (error) {
    console.log("error : ", error);
  }
}
