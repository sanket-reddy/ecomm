import { Signup, Form } from "ui";
import userSign from "../api/usersignfetch";
export default function adminSignup() {
  return (
    <div>
      <Form type="USER" function="SIGNUP" onClick={userSign}></Form>
    </div>
  );
}
