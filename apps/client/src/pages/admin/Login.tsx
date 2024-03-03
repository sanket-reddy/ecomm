import { Form } from "ui";
import Loginfetch from "../api/adminLoginFetch";
export default function AdminLogin() {
  return (
    <>
      <Form type="ADMIN" function="LOGIN" onClick={Loginfetch}></Form>
    </>
  );
}
