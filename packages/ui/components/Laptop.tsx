import { Card, Button } from "@mui/material";
import Router from "next/router";
import Product from "./product";
import Image from "next/image";
import Link from "next/link";

interface laptopDetials {
  img?: string;
  title?: string;
  price?: string;
}
export default function Laptop(props: laptopDetials) {
  const priceAsNumber = Number(props.price);
  const formattedPrice = priceAsNumber.toLocaleString();
  const encodedTitle = encodeURIComponent(props.title || "");
  return (
    <>
      <div className=" bg-white shadow-lg p-4 m-5 flex flex-col items-center justify-center  sm:flex sm:flex-row">
        <img src={props.img} className="h-[200px] sm:h-[300px]"></img>
        <div>
          <Link href={`/user/categories/products/${encodedTitle}`} replace>
            <h2 className="sm:text-2xl hover:underline hover:font-semibold">
              {props.title}
            </h2>
          </Link>

          <h2 className="font-bold text-2xl sm:text-3xl my-3">
            ₹ {formattedPrice}
          </h2>
        </div>
      </div>
    </>
  );
}
