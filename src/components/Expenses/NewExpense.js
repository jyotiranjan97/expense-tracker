import React, { useState } from "react";
import "./NewExpense.css";

function InputExpense(props) {
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
    <form onSubmit={onSubmitHandler}>
      <div className="NewExpense">
        <label className="Label">
          Item
          <input
            type="text"
            value={enteredItem}
            onChange={(e) => setEnteredItem(e.target.value)}
            className="Input"
          />
        </label>
        <label className="Label">
          Money Spent
          <input
            type="number"
            value={enteredPrice}
            onChange={(e) => setEnteredPrice(e.target.value)}
            className="Input"
          />
        </label>
        <label className="Label">
          Date
          <input
            type="date"
            value={enteredDate}
            onChange={(e) => setEnteredDate(e.target.value)}
            className="Input"
          />
        </label>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default InputExpense;
