import { Login } from "ui";
import Loginfetch from "./apicalls/adminLoginFetch";
export default function AdminLogin() {
  return (
    <>
      <Login Type="Admin" onClick={Loginfetch}></Login>
    </>
  );
}
