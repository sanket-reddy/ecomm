import { Login } from "ui";
import Loginfetch from "../api/adminLoginFetch";
export default function AdminLogin() {
  return (
    <>
      <Login Type="Admin" onClick={Loginfetch}></Login>
    </>
  );
}
