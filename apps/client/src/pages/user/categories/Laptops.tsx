import { useEffect, useState } from "react";
import axios from "axios";
import Laptop from "ui/components/Laptop";
import { CircularProgress } from "@mui/material";
import GlobalStyles from "../../../../../../packages/lib/Globalstyles";
import Appbar from "ui/components/Appbar";
interface LaptopDetial {
  title: string;
  img: string;
  price: string;
  rating: number;
  total_users: number;
}

export default function () {
  const [laptop, setlaptop] = useState<LaptopDetial[]>();
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get("../../api/getLaptops");
      setlaptop(response.data);
    };
    fetchData();
  }, []);

  if (laptop) {
    return (
      <div className="bg-[#eeeeee] min-h-screen">
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>

        {laptop.map((item, i) => (
          <Laptop
            key={`Laptop${i}`}
            title={item.title}
            img={item.img}
            price={item.price}
            rating={item.rating}
            total_users={item.total_users}
            userType="user"
          ></Laptop>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>
        <div className="flex flex-col items-center min-h-screen justify-center ">
          <CircularProgress></CircularProgress>
          <h1 className="text-3xl">Loading...</h1>
        </div>
      </div>
    );
  }
}
