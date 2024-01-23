import React from "react";
export default function Submit(props) {
  return (
    <>
      <button className="but" onClick={props.onClick}>
        {props.children}{" "}
      </button>
    </>
  );
}
