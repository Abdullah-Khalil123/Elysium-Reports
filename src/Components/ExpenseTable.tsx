import { useEffect, useState } from "react";
import "../Styles/ExpenseTabel.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseTable = () => {
  const [expenseData, setexpenseData] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      const response = await fetch("/api/Expenses/" + "2024-02");

      try {
        if (!response.ok) {
          throw new Error("Error Fetching Data :  " + response.status);
        } else {
          const expenses = await response.json();
          setexpenseData(expenses);
        }
      } catch (error) {}
    }
    getExpenses();
  }, []);

  return (
    <div className="ExpenseTable">
      <div className="expenseHeader">
        <h4>Category</h4>
        <h4>Percentage</h4>
        <h4>Total Expense</h4>
      </div>
      {expenseData == null ? (
        <ExpenseItem expense_amount={0} expense_title="0" />
      ) : (
        expenseData.map((item: any) => (
          <ExpenseItem
            expense_amount={item.expense_amount}
            expense_title={item.expense_name}
            key={item.expense_amount}
          />
        ))
      )}
    </div>
  );
};

export default ExpenseTable;
