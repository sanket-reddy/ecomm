import { Form, Signup } from "ui";
import adminSign from "../api/adminsignfetch";
export default function adminSignup() {
  return (
    <div>
      <Form type="ADMIN" function="SIGNUP" onClick={adminSign}></Form>
    </div>
  );
}
