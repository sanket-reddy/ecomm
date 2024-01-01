import { Signup } from "ui";
import userSign from "../api/usersignfetch";
export default function adminSignup() {
  return (
    <div>
      <Signup userType="User" onClick={userSign}></Signup>
    </div>
  );
}
