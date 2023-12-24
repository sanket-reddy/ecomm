"use client";

import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

interface details {
  onClick: (username: string, password: string) => Promise<boolean>;
  userType?: string;
}
export function Signup(props: details) {
  const [username, setusername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [info, setinfo] = useState<string>("");
  return (
    <div>
      <h1 style={{ marginTop: "140px", marginLeft: "470px" }}>
        WELCOME TO E-COM
      </h1>
      <h2 style={{ marginTop: "10px", marginLeft: "475px" }}>
        SIGNUP BELOW HERE {props.userType}
      </h2>
      <Card
        style={{
          height: "220px",
          width: "400px",
          marginLeft: "450px",
          marginTop: "8px",
          backgroundColor: "#F8F9FA",
          padding: "14px",
        }}
      >
        <TextField
          variant="outlined"
          label="username"
          style={{ marginLeft: "8px", marginTop: "3px", width: "370px" }}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        ></TextField>

        <TextField
          variant="outlined"
          label="password"
          type="password"
          style={{ marginLeft: "8px", marginTop: "7px", width: "370px" }}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></TextField>
        <br></br>
        <br></br>
        <Button
          variant="contained"
          style={{ marginLeft: "8px", width: "100px", height: "30px" }}
          size="large"
          onClick={async () => {
            let x = await props.onClick(username, password);
            // console.log(x);
            setinfo("");
            if (!x) {
              setinfo("admin already exists");
              console.log("the console reached if else case");
            } else {
            }
          }}
        >
          Signup
        </Button>

        <h4 style={{ marginLeft: "6px" }}>{info}</h4>
      </Card>
    </div>
  );
}
