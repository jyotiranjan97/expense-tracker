import React from "react";
import DateContainer from "./DateContainer";
import "./Expense.css";

function Expense({ expense }) {
  return (
    <div className="Expense">
      <DateContainer date={expense.date} />
      <div>{expense.item}</div>
      <div>{expense.price} rs</div>
    </div>
  );
}

export default Expense;
