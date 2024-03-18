import { Random } from "db";
import { NextApiRequest, NextApiResponse } from "next";

type Item = {
  title: string;
  description: string;
  img: string;
  price: number;
  rating: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("the ejarero");
  let { title, description, img, price } = req.body;
  let rating = 0;
  let itemDetials: Item = { title, description, img, price, rating };
  const random = new Random(itemDetials);
  random.save();
  res
    .status(200)
    .json({ message: "the detials have been successfully added " });
}
