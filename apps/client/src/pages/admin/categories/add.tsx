import GlobalStyles from "../../../../../../packages/lib/Globalstyles";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
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
    console.log("clicked");
    console.log("the category is : ", category);
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
      <Appbar ClientType="admin"></Appbar>
      <div className="flex flex-col mt-6 items-center min-h-screen">
        <h1>Add your product here</h1>
        <FormControl className="w-1/2 ">
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Category
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "category",
              id: "uncontrolled-native",
            }}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="Laptops">Laptops</option>
            <option value="Moblies">Moblies</option>
            <option value="Camera">Camera</option>
          </NativeSelect>
        </FormControl>
        <br></br>
        <br></br>
        <TextField
          type="contained"
          label="title"
          className="w-1/2"
          multiline
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
          className="w-1/2"
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
          className="w-1/2"
          onChange={(e) => {
            setimg(e.target.value);
          }}
        ></TextField>
        <br></br>
        <br></br>
        <TextField
          type="contained"
          label="price"
          className="w-1/2"
          onChange={(e) => {
            setprice(e.target.value);
          }}
        ></TextField>
        <br></br>
        <br></br>
        <Button
          className="bg-teal-500 font-bold"
          variant="contained"
          onClick={handleadd}
        >
          SUBMIT
        </Button>
      </div>
    </>
  );
}
