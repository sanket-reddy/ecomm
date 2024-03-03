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
}

export default function () {
  const [laptop, setlaptop] = useState<LaptopDetial[]>();
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get("../../api/getLaptops");
      console.log(response.data);
      setlaptop(response.data);
    };
    fetchData();
  }, []);

  if (laptop) {
    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>
        <div style={{ backgroundColor: "#eeeeee", padding: "10px" }}>
          {laptop.map((item, i) => (
            <Laptop
              key={`Laptop${i}`}
              title={item.title}
              img={item.img}
              price={item.price}
            ></Laptop>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <GlobalStyles></GlobalStyles>
        <Appbar ClientType="user"></Appbar>
        <div className="flex items-center justify-center">
          <CircularProgress></CircularProgress>
        </div>
      </>
    );
  }
}
