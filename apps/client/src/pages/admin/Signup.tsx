import { Signup } from "ui";
import adminSign from "./apicalls/adminsignfetch";
export default function adminSignup() {
  return (
    <div>
      <Signup userType="ADMIN" onClick={adminSign}></Signup>
    </div>
  );
}
