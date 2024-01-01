import axios, { AxiosError } from "axios";
import Router, { useRouter } from "next/router";

export default async function adminSign(username: string, password: string) {
  console.log("the function has reached axios call");

  try {
    let response = await axios.post("../api/adminSignup", {
      username,
      password,
    });
    const token = response.data.token;
    if (token) {
      localStorage.setItem("token", token);
      console.log(token);
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
