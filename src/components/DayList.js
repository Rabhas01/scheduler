import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
 const dayArray = props.days.map(day => {
   
   return (
    <DayListItem 
   key={day.id}
   name={day.name} 
   selected={day.name === props.day} 
   spots={day.spots} 
   setDay={props.setDay} 
 />)
});
 
return (
  <ul>{dayArray}</ul> 
)}

