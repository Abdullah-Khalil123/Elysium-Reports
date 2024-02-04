import "../../Styles/charts.css";
import ExpenseTable from "../ExpenseTable";
import Graph from "../LineGraph";

const Charts = () => {
  return (
    <div className="charts">
      <div className="filters">
        <h3>Income</h3>
        <input type="date" />
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
