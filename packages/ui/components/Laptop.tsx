import { Card, Button } from "@mui/material";
import Router from "next/router";
import Product from "./product";

interface laptopDetials {
  img?: string;
  title?: string;
  price?: string;
}
export default function Laptop(props: laptopDetials) {
  const productId = 124;
  const title = props.title;
  return (
    <>
      <Card style={{ display: "flex", margin: "10px", padding: "5px" }}>
        <div>
          <img src={props.img} style={{ width: "300px" }}></img>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <h2>{props.title}</h2>`
          <h5>Rating : 4.9 ⭐ </h5>
          <h3>₹ {props.price}</h3>
          <Button
            variant="contained"
            style={{ backgroundColor: "#415A9E" }}
            onClick={() => {
              const encodedTitle = encodeURIComponent(props.title || "");
              Router.push(`products/${encodedTitle}`);
            }}
          >
            SEE MORE
          </Button>
        </div>
      </Card>
    </>
  );
}
