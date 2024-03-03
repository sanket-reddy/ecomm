import GlobalStyles from "../../../../../../packages/lib/Globalstyles";
import Appbar from "ui/components/Appbar";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Router from "next/router";
import Category from "ui/components/category";

export default function Categories() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);
  if (token) {
    return (
      <div>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>
        <h2 className="text-2xl font-serif sm:flex justify-center ">
          SELECT THE CATEGORY TO BUY
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Category img="/category/LAPTOPS.png" next_page="Laptops"></Category>
          <Category
            img="/category/HEADPHONE.png"
            next_page="headphones"
          ></Category>
          <Category
            img="/category/SMARTWATCHES.png"
            next_page="smartwatches"
          ></Category>
          <Category img="/category/CAMERA.png" next_page="/camera"></Category>
          <Category
            img="/category/MONITORS.png"
            next_page="monitors"
          ></Category>
          <Category
            img="/category/PRINTERS.png"
            next_page="printers"
          ></Category>
          <Category
            img="/category/HOMETHEATRE.png"
            next_page="home-theatres"
          ></Category>
          <Category img="/category/ROUTER.png" next_page="router"></Category>
          <Category
            img="/category/SECURITYCAMERA.png"
            next_page="securitycameras"
          ></Category>
          <Category img="/category/SSDRAM.png" next_page="ssdram"></Category>
          <Category
            img="/category/INSTRUMENTS.png"
            next_page="instruments"
          ></Category>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h1>PLEASE LOGIN </h1>
        <Button
          variant="contained"
          onClick={() => {
            Router.push("/user/Login");
          }}
        >
          LOGIN
        </Button>
      </>
    );
  }
}
