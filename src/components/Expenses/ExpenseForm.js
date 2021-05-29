import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredItem, setEnteredItem] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expense = {
      id: Math.floor(Math.random() * 10).toString(),
      item: enteredItem,
      price: enteredPrice,
      date: new Date(enteredDate),
    };
    props.onSubmitExpense(expense);
    setEnteredItem("");
    setEnteredPrice("");
    setEnteredDate("");
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="ExpenseForm">
          <div className="ExpenseInput">
            <label>Item</label>
            <input
              type="text"
              value={enteredItem}
              onChange={(e) => setEnteredItem(e.target.value)}
              className="Input"
            />
          </div>
          <div className="ExpenseInput">
            <label>Money Spent</label>
            <input
              type="number"
              value={enteredPrice}
              onChange={(e) => setEnteredPrice(e.target.value)}
              className="Input"
            />
          </div>
          <div className="ExpenseInput">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={(e) => setEnteredDate(e.target.value)}
              className="Input"
            />
          </div>
        </div>
        <button type="submit" className="Button">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
