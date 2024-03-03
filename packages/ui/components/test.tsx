"use client";
import { Card, TextField, Button } from "@mui/material";
import { useState } from "react";

interface detials {
  Type: string;
  onClick: (username: string, password: string) => Promise<boolean>;
}
export function Login(props: detials) {
  const [username, setusername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [info, setinfo] = useState<string>("");

  return (
    <div>
      <h1></h1>
    </div>
  );
}
