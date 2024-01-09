import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import Appbar from "ui/components/Appbar";
import GlobalStyles from "../../../../../../../packages/lib/Globalstyles";
import Category from "ui/components/category";
export default function () {
  const router = useRouter();
  const { slug } = router.query;
  const product = slug?.[0];
  const [token, setToken] = useState<string>("");
  const [title, settitle] = useState<string>("");
  const [desc, setdesc] = useState<string>("");
  const [img, setimg] = useState<string>("");
  const [price, setprice] = useState<string>("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken: string = localStorage.getItem("token") ?? "";
      setToken(storedToken);
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.post("../../../api/getLaptopdesc", {
        title: product,
      });
      console.log(response.data);
      setdesc(response.data[1]?.description);
      setimg(response.data[0]?.img);
      setprice(response.data[0]?.price);
      settitle(response.data[0]?.title);
    };
    fetchData();
  }, [product]);
  if (desc === "") {
    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>
        <CircularProgress
          style={{ marginLeft: "600px", marginTop: "220px" }}
        ></CircularProgress>
      </>
    );
  } else {
    const priceAsNumber = Number(price);
    const formattedPrice = priceAsNumber.toLocaleString();
    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>
        <div style={{ display: "flex" }}>
          <img src={img} style={{ height: "500px", marginLeft: "30px" }}></img>
          <div
            style={{
              backgroundColor: "white",
              marginRight: "20px",
              padding: "10px",
            }}
          >
            <h2>{title}</h2>
            <h3>₹ {formattedPrice}</h3>
            <Button
              style={{ backgroundColor: "#415A9E", color: "white" }}
              onClick={async () => {
                let response = await axios.post("../../../api/buyproduct", {
                  token,
                  title,
                  category: "Laptops",
                });
                if (response.status === 200) {
                  alert("you have successfully bought the product");
                  console.log(response.data);
                } else {
                  alert("error has occured");
                }
              }}
            >
              BUY NOW
            </Button>
            <Button
              style={{
                backgroundColor: "#415A9E",
                color: "white",
                marginLeft: "10px",
              }}
              onClick={async () => {
                let response = await axios.post("../../../api/addtoCart", {
                  token,
                  title,
                  category: "Laptops",
                });
                if (response.status === 200) {
                  alert("the item has been added successfully to the cart");
                } else {
                  alert("error occured while adding product");
                }
              }}
            >
              ADD TO CART
            </Button>
            <h5>{desc}</h5>
          </div>
        </div>
      </>
    );
  }
}
