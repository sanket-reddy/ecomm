import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Appbar from "ui/components/Appbar";
import GlobalStyles from "../../../../../../../packages/lib/Globalstyles";
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
        <div className="flex justify-center items-center min-h-screen">
          <CircularProgress></CircularProgress>
        </div>
      </>
    );
  } else {
    const priceAsNumber = Number(price);
    const formattedPrice = priceAsNumber.toLocaleString();
    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>

        <div className="mx-5 flex flex-col lg:flex-row items-center justify-center h-min-[500px]">
          <img src={img} className="h-[350px] sm:h-[500px]"></img>
          <div className="flex flex-col gap-5 mt-3">
            <h2 className="sm:text-2xl font-semibold">{title}</h2>
            <h3 className="text-3xl font-bold">₹ {formattedPrice}</h3>
            <h3>{desc}</h3>
          </div>
        </div>
      </>
    );
  }
}
