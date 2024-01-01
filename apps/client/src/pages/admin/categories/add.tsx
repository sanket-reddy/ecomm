import GlobalStyles from "../../../../../../packages/lib/Globalstyles";
import { TextField, Button } from "@mui/material";
import Appbar from "ui/components/Appbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";
export default function () {
  const [category, setcategory] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [img, setimg] = useState("");
  const [price, setprice] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken: string = localStorage.getItem("token") ?? "";
      setToken(storedToken);
    }
  }, []);
  async function handleadd() {
    try {
      let response = await axios.post(
        "../../api/additem",
        {
          category,
          title,
          description,
          img,
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      if (response.status == 200) {
        Router.push("Laptops");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("AxioskError :", error.response?.data);
      } else {
        console.log("error :", error);
      }
    }
  }
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Appbar ClientType="admin"></Appbar>
      <div style={{ margin: "30px" }}>
        <h1>Add your product here</h1>
        <TextField
          type="contained"
          label="category"
          style={{ width: "700px" }}
          onChange={(e) => {
            setcategory(e.target.value);
          }}
        ></TextField>
        <br></br>
        <br></br>
        <TextField
          type="contained"
          label="title"
          multiline
          style={{ width: "700px" }}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></TextField>
        <br></br>
        <br></br>
        <TextField
          type="contained"
          label="description"
          multiline
          style={{ width: "700px" }}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        ></TextField>
        <br></br>
        <br></br>
        <TextField
          type="contained"
          label="imgLink"
          multiline
          style={{ width: "700px" }}
          onChange={(e) => {
            setimg(e.target.value);
          }}
        ></TextField>
        <br></br>
        <br></br>
        <TextField
          type="contained"
          label="price"
          style={{ width: "700px" }}
          onChange={(e) => {
            setprice(e.target.value);
          }}
        ></TextField>
        <br></br>
        <br></br>
        <Button variant="contained" onClick={handleadd}>
          SUBMIT
        </Button>
      </div>
    </>
  );
}
