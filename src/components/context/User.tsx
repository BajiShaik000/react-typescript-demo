import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function User() {
  const userContext = useContext(UserContext);

  const handleLogIn = () => {
    // if (userContext) {
    //   userContext.setUser({
    //     name: "Baji",
    //     email: "Shaik@example.com",
    //   });
    // }
    userContext.setUser({
      name: "Baji",
      email: "Shaik@example.com",
    });
  };
  const handleLogOut = () => {
    // if (userContext) {
    //   userContext.setUser(null);
    // }
    userContext.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Logged In</button>
      <button onClick={handleLogOut}>Logged Out</button>
      {/* <div>User Name is {userContext?.user?.name} </div>
      <div>User email is {userContext?.user?.email} </div> */}
      <div>User Name is {userContext.user?.name} </div>
      <div>User email is {userContext.user?.email} </div>
    </div>
  );
}
