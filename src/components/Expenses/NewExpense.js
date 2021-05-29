import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function InputExpense(props) {
  return (
    <div className="NewExpense">
      <ExpenseForm onSubmitExpense={props.onSubmitExpense} />
    </div>
  );
}

export default InputExpense;
