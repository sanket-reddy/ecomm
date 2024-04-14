import Link from "next/link";

interface laptopDetials {
  img?: string;
  title?: string;
  price?: string;
  rating?: number;
  total_users?: number;
  userType?: string;
}
export default function Laptop(props: laptopDetials) {
  const priceAsNumber = Number(props.price);
  const formattedPrice = priceAsNumber.toLocaleString();
  const encodedTitle = encodeURIComponent(props.title || "");
  const rating = props.rating;
  const user = props.total_users;

  console.log("total user : ", props.total_users);
  return (
    <>
      <div className=" bg-white shadow-lg p-4 m-5 flex flex-col items-center justify-center  sm:flex sm:flex-row">
        <img src={props.img} className="h-[200px] sm:h-[300px]"></img>
        <div>
          <Link
            href={`/${props.userType}/categories/products/${encodedTitle}`}
            replace
          >
            <h2 className="sm:text-2xl hover:underline hover:font-semibold">
              {props.title}
            </h2>
          </Link>
          {user !== undefined ? (
            <h1>
              Rating : {rating}⭐ ({user})
            </h1>
          ) : null}

          <h2 className="font-bold text-2xl sm:text-3xl my-3">
            ₹ {formattedPrice}
          </h2>
        </div>
      </div>
    </>
  );
}
