import { useEffect, useState } from "react";
import GlobalStyles from "../../../../../packages/lib/Globalstyles";
import Appbar from "ui/components/Appbar";
import axios from "axios";
import Laptop from "ui/components/Laptop";
import { Button, Card, CircularProgress } from "@mui/material";

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
          console.log("got the products");
        } else {
          console.log("didn't yet get the array :", response.data);
        }
      };
      fetchCart();
    }
  }, [token]);
  // useEffect(() => {}, [token]);

  if (product) {
    let formattedPrice = cartprice.toLocaleString();
    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>
        <div style={{ backgroundColor: "#eeeeee", padding: "10px" }}>
          <h1>Check out the Card</h1>
          {product.map((item) => (
            <Product
              key={item.title}
              title={item.title}
              img={item.img}
              price={item.price}
              token={token}
            ></Product>
          ))}
          <h1>TOTAL PRICE OF CART</h1>
          <h2>{formattedPrice}</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>
        <center>
          <CircularProgress style={{ marginTop: "210px" }}></CircularProgress>
        </center>
      </>
    );
  }
}

function Product(props: productDetials) {
  let token = props.token;
  let title = props.title;
  const priceAsNumber = Number(props.price);
  const formattedPrice = priceAsNumber.toLocaleString();
  return (
    <>
      <Card style={{ display: "flex", marginBottom: "14px" }}>
        <img src={props.img} style={{ height: "300px" }}></img>
        <div style={{ marginLeft: "10px", backgroundColor: "white" }}>
          <h2>{props.title}</h2>
          <h3>₹ {formattedPrice}</h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "#415A9E" }}
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
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: "8px", backgroundColor: "#415A9E" }}
          >
            REMOVE
          </Button>
          <br></br>
          <br></br>
        </div>
      </Card>
    </>
  );
}
