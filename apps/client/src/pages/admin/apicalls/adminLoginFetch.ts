import axios from "axios";
import Router from "next/router";

export default async function Loginfetch(username: string, password: string) {
  console.log("reached axios req");
  try {
    let response = await axios.post("../api/adminLogin", {
      username,
      password,
    });
    const token = response.data.token;
    if (token) {
      localStorage.setItem("token", token);
      // console.log(token);
      Router.push("categories");
      return true;
    } else {
      console.log("admin already exists");
      return false;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("AxioskError :", error.response?.data);
    } else {
      console.log("error ");
    }
    return false;
  }
}
