import React from "react";
import "components/Appointment/style.scss";
import "components/Appointment/Header.js"


export default function Appointment(props) {

  return(
    <article className="appointment">
      {props.time && `Appointment at ${props.time}`}
    </article>

  );
}