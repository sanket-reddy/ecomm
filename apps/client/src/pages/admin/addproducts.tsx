import { Card, TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export default function addproducts() {
  const [title, settitle] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [img, setimg] = useState<string>("");
  const [price, setprice] = useState<number>(0);
  const [category, setcategory] = useState<string>("");
  const obj = { title, description, img, price };
  const router = useRouter();
  return (
    <>
      <h1
        style={{
          marginLeft: "450px",
        }}
      >
        ADD YOUR PRODUCTS HERE
      </h1>
      <Card
        style={{
          backgroundColor: "#F8F9FA",
          width: "300px",
          padding: "10px",
          marginLeft: "500px",
        }}
      >
        <TextField
          variant="outlined"
          label="title"
          style={{ marginTop: "10px", width: "270px", marginLeft: "8px" }}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></TextField>
        <TextField
          variant="outlined"
          label="description"
          style={{ marginTop: "10px", width: "270px", marginLeft: "8px" }}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        ></TextField>
        <TextField
          variant="outlined"
          label="imgLink"
          style={{ marginTop: "10px", width: "270px", marginLeft: "8px" }}
          onChange={(e) => {
            setimg(e.target.value);
          }}
        ></TextField>
        <TextField
          variant="outlined"
          label="price"
          style={{ marginTop: "10px", width: "270px", marginLeft: "8px" }}
          onChange={(e) => {
            setprice(parseFloat(e.target.value));
          }}
        ></TextField>
        <TextField
          variant="outlined"
          label="category"
          style={{ marginTop: "10px", width: "270px", marginLeft: "8px" }}
          onChange={(e) => {
            setcategory("e.target.values");
          }}
        ></TextField>

        <br></br>
        <br></br>
        <Button
          variant="contained"
          style={{ marginLeft: "8px", width: "100px", height: "30px" }}
          onClick={async () => {
            try {
              let token = localStorage.getItem("token");
              console.log(token);
              let response = await axios.post("../api/addproducts", obj, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              console.log(response.data);
              if (response.status == 200) {
                router.push("main");
              }
            } catch (error) {
              if (axios.isAxiosError(error)) {
                console.log("AxioskError :", error.response?.data);
              } else {
                console.log("error ");
              }
            }
          }}
        >
          ADD
        </Button>
      </Card>
    </>
  );
}
