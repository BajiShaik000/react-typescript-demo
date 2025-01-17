import React from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

function Private({ isLoggedIn, component:Component }: PrivateProps) {
  if (isLoggedIn) {
    return <Component name="Baji" />;
  } else {
    return <Login />;
  }
}

export default Private;
