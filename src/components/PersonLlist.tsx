import React from "react";
import { Name } from "./Person.types";

//Array of Objects Props type

// type PersonListProps = {
//     names:{
//         first:string,
//         last:string
//     }[]
// }

type PersonListProps = {
  names:Name[]
}

function PersonLlist(props:PersonListProps) {
  return (
    <div>
      {
        props.names.map((name,index) => <h2 key={index}>{name.first} {name.last}</h2>)
      }
    </div>
  );
}

export default PersonLlist;
