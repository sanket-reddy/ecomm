import { AppBar, Button, Toolbar, Typography, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Router from "next/router";

interface ClientType {
  ClientType: string;
}

export default function Appbar(props: ClientType) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    Router.push("/");
  };

  if (props.ClientType === "user") {
    return (
      <AppBar
        position="static"
        style={{ backgroundColor: "#2E3033", width: "full" }}
      >
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "15px",
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="/logo.jpeg"
                style={{ height: "60px" }}
                onClick={() => {
                  console.log("clicked");
                  Router.push("/user/categories");
                }}
              ></img>

              <AccountCircleSharpIcon
                style={{ marginLeft: "20px", marginTop: "3px" }}
                sx={{ fontSize: 55 }}
                onClick={() => {
                  Router.push("/user/profile");
                }}
              ></AccountCircleSharpIcon>
            </div>

            <div style={{ display: "flex" }}>
              <ShoppingCartIcon
                style={{ marginRight: "20px", marginTop: "8px" }}
                sx={{ fontSize: 44 }}
                onClick={() => {
                  Router.push("/user/cart");
                }}
              />
              <div>
                <Button
                  variant="contained"
                  onClick={handleLogout}
                  style={{ backgroundColor: "#415A9E", marginTop: "13px" }}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar position="static" style={{ backgroundColor: "#2E3033" }}>
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "15px",
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src="/logo.jpeg"
                style={{ height: "60px" }}
                onClick={() => {
                  Router.push("/user/categories");
                }}
              ></img>

              <AccountCircleSharpIcon
                style={{ marginLeft: "20px", marginTop: "3px" }}
                sx={{ fontSize: 55 }}
                onClick={() => {
                  Router.push("/user/profile");
                }}
              ></AccountCircleSharpIcon>
            </div>

            <div style={{ display: "flex" }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleLogout}
                  style={{ backgroundColor: "#415A9E", marginTop: "13px" }}
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
