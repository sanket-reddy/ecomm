import { Form } from "ui";
import Loginfetch from "../api/userLoginfetch";
export default function AdminLogin() {
  return <Form type="USER" function="LOGIN" onClick={Loginfetch} />;
}
