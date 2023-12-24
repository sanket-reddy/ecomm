import Router from "next/router";
interface Icon {
  img: string;
  next_page: string;
}
export default function Category(props: Icon) {
  return (
    <>
      <img
        src={props.img}
        style={{ height: "300px", width: "200px" }}
        onClick={() => Router.push(`categories/${props.next_page}`)}
      ></img>
    </>
  );
}
