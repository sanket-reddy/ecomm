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
      <div className="flex justify-between items-center m-2">
        <h2 className="text-2xl"> check out your products</h2>
        <button
          className="bg-teal-500 p-3 w-[120px] rounded-md font-bold shadow-xl hover:bg-teal-700"
          onClick={() => {
            Router.push("./add");
          }}
        >
          Add new
        </button>
      </div>
      <div className="sm:flex sm:flex-wrap gap-1  ">
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
