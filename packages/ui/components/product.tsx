import { Button, Card } from "@mui/material";

interface Detials {
  title: string;
  description: string;
  img: string;
  price: number;
  function: string;
}

export default function Product(props: Detials) {
  return (
    <>
      <Card
        style={{
          backgroundColor: "black",
          width: "220px",
          height: "335px",
          padding: "30px",
          margin: "10px",
          color: "white",
          borderRadius: 23,
        }}
      >
        <img src={props.img} style={{ width: "220px", height: "170px" }}></img>
        <h4>{props.title}</h4>
        <h6>{props.description}</h6>
        <h5>PRICE : ${props.price} </h5>
        <Button variant="contained">{props.function}</Button>
      </Card>
    </>
  );
}
