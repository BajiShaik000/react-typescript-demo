import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: Boolean;
};

function Greet(props: GreetProps) {

  const {messageCount = 0} = props;

  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}, You have ${messageCount} unread Messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
}

export default Greet;

//use types when building applications and interfaces when building libraries
