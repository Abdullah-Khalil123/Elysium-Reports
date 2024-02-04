import { useEffect, useRef, useState } from "react";
import "../../Styles/charts.css";
import ExpenseTable from "../ExpenseTable";
import Graph from "../LineGraph";

type MonthlyDataType = {
  id: number;
  year: number;
  month: number;
  day: number;
  rent_amount: number;
  pkr: number;
};

function getDaysInMonth(year: number, month: number) {
  const lastDayOfMonth = new Date(year, month, 0);
  return lastDayOfMonth.getDate();
}
function prepareFetchedData(datarecived: MonthlyDataType[]) {
  let days = getDaysInMonth(datarecived[0].year, datarecived[0].month);
  console.log(days);

  let mapedGraphData: {
    label: string[];
    amount: number[];
  } = { label: [], amount: Array(days).fill(-1) };
  for (let i = 1; i <= days; i++) {
    mapedGraphData.label[i] =
      (i < 10 ? "0" : "") +
      i.toString() +
      "/" +
      (datarecived[0].month < 10 ? "0" : "") +
      datarecived[0].month.toString();
  }
  for (let index = 0; index < datarecived.length; index++) {
    mapedGraphData.amount[datarecived[index].day] =
      datarecived[index].rent_amount;
  }
  // console.log(mapedGraphData);
  return mapedGraphData;
}

const Charts = () => {
  const [monthlyData, setmonthlyData] = useState<MonthlyDataType[]>([]);
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
        setmonthlyData(await response.json());
      } catch (err) {
        console.log("Error Receiving Statistics Data : " + err);
      }
    }
    if (selectedMonth != "") getMonthlyData();
  }, [selectedMonth]);

  useEffect(() => {
    console.log(monthlyData); //Debug Purposes
    monthlyData.length == 0 ? null : prepareFetchedData(monthlyData);
  }, [monthlyData]);

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
