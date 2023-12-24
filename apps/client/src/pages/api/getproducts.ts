import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const products = await Product.find({});

    res.send(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.send("Internal Server Error");
  }
}
