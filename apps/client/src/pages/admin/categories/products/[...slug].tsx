import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CircularProgress, Button } from "@mui/material";
import Appbar from "ui/components/Appbar";
import GlobalStyles from "@/pages/lib/Globalstyles";
export default function () {
  const router = useRouter();
  const { slug } = router.query;
  const title = slug?.[0] || "asdsda";
  const [desc, setdesc] = useState<string>("");
  const [img, setimg] = useState<string>("");
  const [price, setprice] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.post("../../../api/getLaptopdesc", { title });
      console.log(response.data);
      setdesc(response.data[1]?.description);
      setimg(response.data[0]?.img);
      setprice(response.data[0]?.price);
    };
    fetchData();
  }, [title]);
  if (desc === "") {
    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="admin"></Appbar>
        <CircularProgress
          style={{ marginLeft: "600px", marginTop: "220px" }}
        ></CircularProgress>
      </>
    );
  } else {
    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="admin"></Appbar>
        <div style={{ display: "flex" }}>
          <img src={img} style={{ height: "500px", marginLeft: "10px" }}></img>
          <div
            style={{
              backgroundColor: "white",
              marginRight: "20px",
            }}
          >
            <h1>{title}</h1>
            <h2>₹ {price}</h2>

            <h5>{desc}</h5>
          </div>
        </div>
      </>
    );
  }
}
