import { Button, Card } from "@mui/material";
import Appbar from "ui/components/Appbar";
import GlobalStyles from "../../../../../../packages/lib/Globalstyles";
import Category from "ui/components/category";
import Router from "next/router";
export default function () {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Appbar ClientType="admin"></Appbar>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ marginLeft: "15px" }}> SELECT THE CATEGORY BELOW</h2>
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
            Router.push("categories/add");
          }}
        >
          ADD NEW
        </Button>
      </div>
      <div style={{ marginLeft: "15px" }}>
        <h1>check out your products</h1>
        <Category img="/category/LAPTOPS.png" next_page="Laptops"></Category>
        <Category
          img="/category/HEADPHONE.png"
          next_page="headphones"
        ></Category>
        <Category
          img="/category/SMARTWATCHES.png"
          next_page="smartwatches"
        ></Category>
      </div>
    </>
  );
}
