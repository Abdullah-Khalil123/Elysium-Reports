import "../Styles/ExpenseTabel.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseTable = () => {
  return (
    <div className="ExpenseTable">
      <div className="expenseHeader">
        <h4>Category</h4>
        <h4>Percentage</h4>
        <h4>Total Expense</h4>
      </div>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
};

export default ExpenseTable;
