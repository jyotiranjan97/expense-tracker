import "./App.css";
import NewExpense from "./components/Expenses/NewExpense";
import Expense from "./components/Expenses/Expense";
import ExpensesContainer from "./components/UI/ExpensesContainer";

function App() {
  const expenses = [
    {
      id: "01",
      item: "Grocerry",
      price: "200",
      date: new Date(2021, 3, 21),
    },
    {
      id: "02",
      item: "Tution",
      price: "600",
      date: new Date(2021, 3, 3),
    },
  ];

  const onInsertExpenseHandler = (exp) => {
    console.log(exp);
  };

  const expenseItem = expenses.map((exp) => (
    <Expense key={exp.id} expense={exp} />
  ));
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onSubmitExpense={onInsertExpenseHandler} />
      <ExpensesContainer>{expenseItem}</ExpensesContainer>
    </div>
  );
}

export default App;
