import { Button, CircularProgress } from "@mui/material";
import Appbar from "ui/components/Appbar";
import GlobalStyles from "../../../../../../packages/lib/Globalstyles";
import Router from "next/router";
import Laptop from "ui/components/Laptop";
import { useState, useEffect } from "react";
import axios from "axios";

interface LaptopDetials {
  title: string;
  description: string;
  img: string;
  price: string;
}

export default function () {
  const [token, setToken] = useState<string>("");
  const [Laptops, setLaptops] = useState<LaptopDetials[]>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken: string = localStorage.getItem("token") ?? "";
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        let response = await axios.get("../../api/getitems", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setLaptops(response.data);
        console.log(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("Axios error : ", error.response);
        } else {
          console.log("error : ", error);
        }
      }
    };
    fetchLaptops();
  }, [token]);

  if (Laptops) {
    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="admin"></Appbar>
        <div style={{ backgroundColor: "#eeeeee", padding: "10px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h2>CHECKOUT YOUR LAPTOPS HERE</h2>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#415A9E",
                width: "120px",
                height: "40px",
                marginRight: "5px",
                marginTop: "10px",
              }}
              onClick={() => {
                Router.push("add");
              }}
            >
              ADD NEW
            </Button>
          </div>
          {Laptops.map((item, i) => (
            <Laptop
              key={`Laptop${i}`}
              title={item.title}
              img={item.img}
              price={item.price}
            ></Laptop>
          ))}
        </div>
      </>
    );
  } else if (!token) {
    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="admin"></Appbar>
        <center>
          <h1>PLEASE Login </h1>
          <h3>to see your products</h3>
        </center>
      </>
    );
  } else if (!Laptops) {
    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="admin"></Appbar>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>CHECKOUT YOUR LAPTOPS HERE</h2>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#415A9E",
              width: "120px",
              height: "40px",
              marginRight: "5px",
              marginTop: "10px",
            }}
            onClick={() => {
              Router.push("add");
            }}
          >
            ADD NEW
          </Button>
        </div>

        <CircularProgress
          style={{ marginLeft: "580px", marginTop: "150px" }}
        ></CircularProgress>
      </>
    );
  }
}
