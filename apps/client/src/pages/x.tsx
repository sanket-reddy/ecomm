import { Route } from "@mui/icons-material";
import Image from "next/image";
import Router from "next/router";

export default function page() {
  return (
    <div className="sm:grid grid-cols-12">
      <div className="bg-zinc-800 min-h-[330px] flex flex-col items-center justify-center sm:min-h-screen col-span-6">
        {/* <img src="/logo.jpeg" className=""></img> */}
        <Image
          src="/logo.jpeg"
          alt="logo"
          width={250}
          height={250}
          className="shadow-lg h-1/2 w-1/2"
        ></Image>
        <h1 className="text-gray-300 text-3xl mt-3 font-bold ">GADGETHUB</h1>
      </div>
      <div className="bg-[#E5E1E6] min-h-[342px] sm:min-h-screen col-span-6 flex flex-col justify-center items-center">
        <h1 className=" font-bold text-2xl">WELCOME TO GADGETHUB</h1>
        <div className="m-2">
          <button
            className="bg-teal-500 p-3 mx-2 w-40 rounded-lg shadow-md hover:bg-teal-700"
            onClick={() => {
              Router.push("/user");
            }}
          >
            User
          </button>
          <button
            className="bg-teal-500 p-3 w-40 rounded-lg shadow-md hover:bg-teal-700"
            onClick={() => {
              Router.push("/admin");
            }}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
}
