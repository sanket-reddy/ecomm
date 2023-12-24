import { Login } from "ui";
import Loginfetch from "./apicalls/userLoginfetch";
export default function AdminLogin() {
  return (
    <>
      <Login Type="User" onClick={Loginfetch}></Login>
    </>
  );
}
