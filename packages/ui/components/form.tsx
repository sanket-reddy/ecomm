import { TextField } from "@mui/material";
import { useState } from "react";
export function Form(props: {
  type: "USER" | "ADMIN";
  function: "LOGIN" | "SIGNUP";
  onClick: (username: string, password: string) => Promise<boolean>;
}) {
  const [username, setusername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [info, setinfo] = useState<string>("");
  return (
    <div className="card flex bg-gray-200 min-h-screen  justify-center items-center  flex-col gap-5 ">
      <h1 className="font-bold text-2xl sm:text-3xl">WELCOME TO GADGETHUB </h1>
      <h1 className="text-2xl">
        {props.function} BELOW {props.type}
      </h1>
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        className="w-1/2 lg:w-1/4"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        className="w-1/2 lg:w-1/4"
        label="password"
        type="password"
        variant="outlined"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button
        className="bg-teal-500 font-bold shadow-lg hover:bg-teal-700 p-3 w-40 rounded-md"
        onClick={async () => {
          let x = await props.onClick(username, password);
          setinfo("");
          if (!x && props.function === "LOGIN") {
            setinfo("Invalid username or password");
          } else if (!x && props.function === "SIGNUP") {
            setinfo("username already exists");
          }
        }}
      >
        {props.function}
      </button>
      <h1>{info}</h1>
    </div>
  );
}
