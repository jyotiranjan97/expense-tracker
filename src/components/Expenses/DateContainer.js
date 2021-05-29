import React from "react";
import "./DateContainer.css";

function DateContainer(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const day = props.date.toLocaleString("en-IN", { day: "2-digit" });
  return (
    <div className="Date">
      <div className="Text">{day}</div>
      <div className="Text">{month}</div>
      <div className="Text">{year}</div>
    </div>
  );
}

export default DateContainer;
