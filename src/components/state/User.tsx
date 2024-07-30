import React, { useState } from "react";

export default function User() {

    type Authuser = {
        name:string,
        email:string
    }
    
    // const [user,setUser] = useState<Authuser | null>(null)
    const [user,setUser] = useState<Authuser>({} as Authuser) // type asertion
    const handleLogIn = () => {
        setUser({
            name:"Baji",
            email:"BajiShaik@example.come"
        })
    }
    // const handleLogOut = () => {
    //     setUser(null)
    // }
  return (
    <div>
      <button onClick={handleLogIn}>LogIn</button>
      {/* <button onClick={handleLogOut}>LogOut</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
}
