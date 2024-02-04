import { useEffect, useRef, useState } from "react";
import "../../Styles/charts.css";
import ExpenseTable from "../ExpenseTable";
import Graph from "../LineGraph";

// function getMonthYear() {
//   const currentDate = new Date();
//   const month = currentDate.getMonth() + 1;
//   const year = currentDate.getFullYear();

//   const monthYear = year + "-" + month;
//   return monthYear;
// }

const Charts = () => {
  const [monthlyData, setmonthlyData] = useState({
    id: 0,
    year: "",
    month: "",
    day: "",
    rent_amount: 0,
    pkr: 1,
  });

  const [selectedMonth, setselectedMonth] = useState("");

  function handleMonthSelection(event: any) {
    setselectedMonth(event.target.value);
  }
  useEffect(() => {
    async function getMonthlyData() {
      const uri = "/api/Statistics/" + selectedMonth;
      const response = await fetch(uri);
      try {
        if (!response.ok) {
          throw new Error("Error Receiving response : " + response.status);
        }
        const responseData = await response.json();
        setmonthlyData(responseData);
        console.log(responseData); //DEBUG PURPOSE CONSOLE LOG
      } catch (err) {
        console.log("Error Receiving Statistics Data : " + err);
      }
    }
    if (selectedMonth != "") getMonthlyData();
  }, [selectedMonth]);
  return (
    <div className="charts">
      <div className="filters">
        <h3>Income</h3>
        <input type="month" min={"2022-01"} onChange={handleMonthSelection} />
      </div>
      <div className="Chart">
        <Graph />
        <p>601 Daily Bookings</p>
      </div>
      <div className="expense">
        <div className="filters">
          <h3>Expense</h3>
          <select name="" id="">
            <option value="">All</option>
            <option value="">Groceries</option>
            <option value="">Electric</option>
            <option value="">Gas</option>
          </select>
        </div>
        <ExpenseTable />
      </div>
    </div>
  );
};

export default Charts;
