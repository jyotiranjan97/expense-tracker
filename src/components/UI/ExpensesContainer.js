import React from "react";
import "./ExpensesContainer.css";

function ExpensesContainer(props) {
  return <div className="Container">{props.children}</div>;
}

export default ExpensesContainer;
