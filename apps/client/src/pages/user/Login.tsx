import { Login } from "ui";
import Loginfetch from "../api/userLoginfetch";
export default function AdminLogin() {
  return (
    <>
      <Login Type="User" onClick={Loginfetch}></Login>
      <h1 className="font-bold">dfkheo</h1>
    </>
  );
}
