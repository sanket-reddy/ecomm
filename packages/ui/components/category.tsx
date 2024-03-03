import Router from "next/router";
interface Icon {
  img: string;
  next_page: string;
}
export default function Category(props: Icon) {

  if (props.next_page !== "Laptops") {
    return (
      <>
        <img
          src={props.img}
          // style={{ height: "300px", width: "200px" }}
          className=" h-[300px] sm:[240px] w-[130px] sm:w-[200px]"
          onClick={() => {
            alert("the products aren't ready for sale yet !!");
          }}
        ></img>
      </>
    );
  }
  return (
    <>
      <img
        src={props.img}
        // style={{ height: "300px", width: "200px" }}
        className=" h-[300px] sm:[240px] w-[130px] sm:w-[200px]"
        onClick={() => Router.push(`categories/${props.next_page}`)}
      ></img>
    </>
  );
}
