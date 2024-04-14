import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, CircularProgress, TextField } from "@mui/material";
import Appbar from "ui/components/Appbar";
import GlobalStyles from "../../../../../../../packages/lib/Globalstyles";
import ConfirmPopup from "ui/components/testpop";
export default function () {
  const router = useRouter();
  const { slug } = router.query;
  const product: string = slug?.[0] || "";
  const [token, setToken] = useState<string>("");

  const [desc, setdesc] = useState<string>("");
  const [img, setimg] = useState<string>("");
  const [price, setprice] = useState<string>("");
  const [isOpen, setOpen] = useState<boolean>(false);
  const [giveRating, setgiveRating] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const onClose = () => {
    setOpen(false);
  };
  function ConfirmationPopup() {
    if (!isOpen) return null;
    else {
      return (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-gray-900 bg-opacity-70">
          <div className="bg-white  p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl">
              are you sure that you want buy the product
            </h1>
            <div className="flex justify-center items-center gap-3 mt-3">
              <button
                className="bg-blue-500 p-3 rounded-md w-1/4 hover:bg-blue-600"
                onClick={async () => {
                  try {
                    let response = await axios.post("../../../api/buyproduct", {
                      title: product,
                      token: token,
                      category: "Laptops",
                    });
                    onClose();
                    if (response.status === 200) {
                      setgiveRating(true);
                    }
                  } catch (error) {
                    console.log("error has occured here : ", error);
                  }
                }}
              >
                YES
              </button>
              <button
                className="bg-blue-500 p-3 rounded-md w-1/4 hover:bg-blue-600"
                onClick={onClose}
              >
                NO
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  function RatingPopUp() {
    if (!giveRating) return null;
    return (
      <div className="fixed inset-0 flex items-center justify-center  backdrop-blur-md bg-gray-900 bg-opacity-50">
        <div className="bg-white p-9  rounded-lg">
          <h1>pls give ur rating for the product</h1>
          <TextField
            variant="outlined"
            className="mt-4"
            placeholder="provide your rating out of 5"
            onChange={(e) => {
              setRating(Number(e.target.value));
            }}
          ></TextField>
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 p-3 w-full rounded-md"
              onClick={async () => {
                if (rating > 5 || rating < 0) {
                  alert("please give the rating from 1 star to 5 stars");
                } else if (rating === 0) {
                  setgiveRating(false);
                } else {
                  let response = await axios.post("../../../api/submitRating", {
                    title: product,
                    rating,
                  });
                  console.log(response.data);
                  setgiveRating(false);
                }
              }}
            >
              SUBMIT
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 p-3 w-full rounded-md"
              onClick={() => {
                setgiveRating(false);
              }}
            >
              SKIP
            </button>
          </div>
        </div>
      </div>
    );
  }
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
        <div className="m-5 flex flex-col lg:flex-row items-center justify-center h-min-[500px]">
          <img src={img} className="h-[350px] sm:h-[500px]"></img>
          <div className="flex flex-col gap-5 mt-3">
            <h2 className="sm:text-2xl font-semibold">{product}</h2>
            <h3 className="text-3xl font-bold">₹ {formattedPrice}</h3>
            <div>
              <button
                className="bg-teal-500 p-3 w-40 rounded-lg shadow-md hover:bg-teal-700 font-bold "
                onClick={async () => {
                  let response = await axios.post("../../../api/addtoCart", {
                    token,
                    title: product,
                    category: "Laptops",
                  });
                  if (response.status === 200) {
                    alert("the item has been added successfully to the cart");
                  } else {
                    alert("error occured while adding product");
                  }
                }}
              >
                ADD TO CART
              </button>
              <button
                className="bg-teal-500 p-3 w-40 rounded-lg shadow-md hover:bg-teal-700 mx-3 font-bold"
                onClick={() => {
                  setOpen(true);
                }}
              >
                BUY NOW
              </button>

              <ConfirmationPopup></ConfirmationPopup>
              <RatingPopUp></RatingPopUp>
            </div>
            <h3>{desc}</h3>
          </div>
        </div>
      </>
    );
  }
}

