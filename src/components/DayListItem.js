import React from "react";

export default function DayListItem(props) {
  return (
    <li onClick={() => props.setday(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots} spots remaing</h3>
    </li>
  );
}