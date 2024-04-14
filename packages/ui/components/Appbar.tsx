import { AppBar, Toolbar } from "@mui/material";
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
              justifyContent: "space-between",
              width: "100%",
              padding: "15px",
            }}
            className="flex justify-center items-center"
          >
            <div className="flex items-center justify-center">
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
              <div className="flex items-center justify-center">
                <button
                  onClick={handleLogout}
                  className="bg-teal-500 w-[120px] font-bold text-black p-3 rounded-lg text-lg hover:bg-red-500"
                >
                  LOGOUT
                </button>
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
          <div className="flex items-center w-full justify-between p-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpeg"
                style={{ height: "60px" }}
                onClick={() => {
                  Router.push("/admin/categories");
                }}
              ></img>
              <h1 className="text-xl font-bold">GADGETHUB</h1>
            </div>

            <div>
              <button
                onClick={handleLogout}
                className="bg-teal-500 w-[120px] font-bold text-black p-3 rounded-lg text-lg hover:bg-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
