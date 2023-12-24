import { Card, Button, CircularProgress } from "@mui/material";
import Router from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Product from "ui/components/product";

interface Details {
  title: string;
  description: string;
  img: string;
  price: number;
}

export default function Products() {
  let token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const handleaddproducts = () => {
    Router.push("addproducts");
  };

  let [Products, setProduct] = useState<Details[]>();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await axios.get("../api/products", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProduct(response.data);
      } catch (error) {
        console.log("ERROR", error);
      }
    };
    fetchProducts();
  }, [token]);
  if (Products?.length === 0) {
    return (
      <>
        <h2 style={{ marginLeft: "450px" }}> YOUR PRODUCTS </h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Card
            style={{
              backgroundColor: "#4F5A69",
              width: "150px",
              padding: "10px",
              color: "white",
              borderRadius: 10,
            }}
          >
            <h3>Click here to add products</h3>
            <Button variant="contained" onClick={handleaddproducts}>
              ADD
            </Button>
          </Card>
        </div>
      </>
    );
  } else if (Products) {
    return (
      <>
        <h1>YOUR PRODUCTS</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "0",
          }}
        >
          {Products?.map((item, index) => (
            <Product
              key={index}
              title={item.title}
              description={item.description}
              img={item.img}
              price={item.price}
              function="UPDATE"
            ></Product>
          ))}
          <Card
            style={{
              backgroundColor: "black",
              width: "150px",
              color: "white",
              height: "130px",
              padding: "10px",
              margin: "10px",
              borderRadius: 10,
            }}
          >
            <h3>Click here to add products</h3>
            <Button variant="contained" onClick={handleaddproducts}>
              ADD
            </Button>
          </Card>
        </div>
      </>
    );
  } else {
    return (
      <center>
        <CircularProgress style={{ marginTop: "220px" }}></CircularProgress>
      </center>
    );
  }
}
