import { Button, Typography } from "@mui/material";
import Router from "next/router";
import GlobalStyles from "../../../../../packages/lib/Globalstyles";
import { AppProps } from "next/app";

export default function Home() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <div style={{ display: "flex", margin: 0, padding: 0 }}>
        <div
          style={{
            backgroundColor: "#2E3033",
            height: "100vh",
            width: "50vw",
            padding: 0,
            margin: 0,
          }}
          className="logobox"
        >
          <img
            src="/logo.jpeg"
            style={{ height: "300px", marginLeft: "135px", marginTop: "70px" }}
          ></img>
          <br></br>
          <br></br>

          <Typography
            variant="h2"
            fontFamily={"arial"}
            marginLeft={"105px"}
            color={"#E5E1E6"}
          >
            GADGETHUB
          </Typography>
        </div>
        <div
          style={{
            backgroundColor: "#E5E1E6",
            height: "100vh",
            width: "50vw",
          }}
        >
          <div style={{ marginTop: "220px", marginLeft: "160px" }}>
            <h1 className="font-bold">Welcome to GadgetHub</h1>
            <h2></h2>
            <Button
              variant="outlined"
              style={{
                marginLeft: "40px",
                backgroundColor: "#2E3033",
                color: "white",
              }}
              onClick={() => {
                Router.push("user/Signup");
              }}
            >
              Signup
            </Button>
            <Button
              variant="outlined"
              style={{
                marginLeft: "40px",
                backgroundColor: "#2E3033",
                color: "white",
              }}
              onClick={() => {
                Router.push("user/Login");
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
