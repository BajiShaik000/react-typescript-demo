import React from "react";

type ContainerProps = {
    style: React.CSSProperties
}

export default function Container(props:ContainerProps) {
  return (
    <div style={props.style}>
      Text Content goes here
    </div>
  );
}
