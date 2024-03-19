import { useEffect, useState } from "react";
import Appbar from "ui/components/Appbar";
import Laptop from "ui/components/Laptop";
import GlobalStyles from "../../../../../packages/lib/Globalstyles";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Product from "ui/components/product";

interface productDetials {
  title?: string;
  description?: string;
  img?: string;
  price?: string;
  category?: string;
}

const profile = () => {
  let [token, setToken] = useState<string>("");
  let [username, setUsername] = useState<string>("");
  let [Products, setProducts] = useState<productDetials[]>();
  useEffect(() => {
    if (window.location !== undefined) {
      let StoredToken: string = localStorage.getItem("token") ?? "";
      setToken(StoredToken);
      console.log("stored the token : ", token);
    }
  }, [token]);

  useEffect(() => {
    const getProduct = async () => {
      let response = await axios.post("../api/getproducts", {
        token,
      });
      let data = response.data;
      console.log(data);
      setUsername(data.username);
      setProducts(data.products);
    };
    getProduct();
  }, [username]);

  if (Products === undefined) {
    return (
      <div>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>
        <div className="min-h-screen flex flex-col gap-3  justify-center items-center">
          <CircularProgress className="h-[300px]"></CircularProgress>
          <h1 className="text-3xl">Loading...</h1>
        </div>
      </div>
    );
  } else if (Products.length === 0) {
    return (
      <>
        <div>
          <GlobalStyles></GlobalStyles>
          <Appbar ClientType="user"></Appbar>
          <h1>Hello {username}</h1>
          {/* <h1>PRODUCTS YOU BOUGHT</h1> */}
          <h1> You haven't placed any orders yet</h1>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>
        <div style={{ backgroundColor: "#eeeeee", padding: "10px" }}>
          {" "}
          <h1 className="text-2xl">
            Hello <b>{username}</b>
          </h1>
          <h1 className="text-xl">Your orders</h1>
          {Products.map((item) => (
            <Laptop
              key={item.title}
              title={item.title}
              img={item.img}
              price={item.price}
            ></Laptop>
          ))}{" "}
        </div>
      </div>
    );
  }
};

export default profile;
