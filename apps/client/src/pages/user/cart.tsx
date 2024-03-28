import { useEffect, useState } from "react";
import GlobalStyles from "../../../../../packages/lib/Globalstyles";
import Appbar from "ui/components/Appbar";
import axios from "axios";
import Laptop from "ui/components/Laptop";
import { Button, Card, CircularProgress } from "@mui/material";
import Link from "next/link";

interface productDetials {
  title?: string;
  description?: string;
  img?: string;
  price?: string;
  category?: string;
  token?: string;
}

export default function () {
  const [token, setToken] = useState<string>("");
  const [product, setProduct] = useState<productDetials[]>() ?? [];
  let [cartprice, setcartPrice] = useState<number>(0);
  if (product !== undefined) {
    for (let i = 0; i < product.length; i++) {
      cartprice += Number(product[i].price);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken: string = localStorage.getItem("token") ?? "";
      setToken(storedToken);
      const fetchCart = async () => {
        let response = await axios.post("../api/getcart", {
          token,
        });

        if (Array.isArray(response.data)) {
          setProduct(response.data);
        } else {
          console.log("didn't yet get the array :", response.data);
        }
      };
      fetchCart();
    }
  }, [token]);

  if (product) {
    let formattedPrice = cartprice.toLocaleString();
    return (
      <div className="bg-[#eeeeee] min-h-screen">
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>
        <div className="m-5">
          <h1 className="text-2xl">Check out the Cart</h1>
          {product.map((item) => (
            <Product
              key={item.title}
              title={item.title}
              img={item.img}
              price={item.price}
              token={token}
            ></Product>
          ))}
          <h1 className="text-2xl">TOTAL PRICE OF CART</h1>
          <h2 className="text-2xl font-bold">{formattedPrice}</h2>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>
        <div className="flex items-center justify-center">
          <CircularProgress style={{ marginTop: "210px" }}></CircularProgress>
        </div>
      </>
    );
  }
}

function Product(props: productDetials) {
  let token = props.token;
  let title = props.title;
  const priceAsNumber = Number(props.price);
  const formattedPrice = priceAsNumber.toLocaleString();
  const encodedTitle = encodeURIComponent(props.title || "");
  return (
    <>
      <div className="bg-white my-5  flex flex-col items-center justify-center shadow-md p-3  sm:flex-row">
        <img src={props.img} className="h-[200px] sm:h-[300px]"></img>
        <div>
          <Link href={`categories/products/${encodedTitle}`}>
            <h2 className="sm:text-2xl hover:underline hover:font-semibold">
              {props.title}
            </h2>
          </Link>
          <h1 className="text-2xl font-bold my-2"> ₹ {formattedPrice}</h1>
          <div className="flex gap-4">
            <button
              className="bg-teal-500 p-2 rounded-lg font-bold hover:bg-teal-700"
              onClick={async () => {
                let response = await axios.post("../../../api/buyproduct", {
                  token,
                  title,
                  category: "Laptops",
                });
                if (response.status === 200) {
                  alert("you have successfully bought the product");
                } else {
                  alert("error has occured");
                }
              }}
            >
              BUY NOW
            </button>
            <button
              className="bg-teal-500 p-2 rounded-lg font-bold hover:bg-red-600"
              onClick={async () => {
                let response = await axios.post("../../../api/removefromcart", {
                  token,
                  title,
                });
                if (response.status === 200) {
                  alert("you have successfully removed the product");
                  window.location.reload();
                  ``;
                } else {
                  alert("error has occured");
                  console.log("an error has occured : ", response.data.error);
                }
              }}
            >
              REMOVE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
