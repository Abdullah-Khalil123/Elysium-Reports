import t from "../Assets/Icons/cash.svg";
import "../Styles/ExpenseItem.css";

const ExpenseItem = (props: {
  expense_amount: number;
  expense_title: string;
}) => {
  return (
    <div className="ExpenseItem">
      <div className="col1">
        <img src={t} alt="" />
        <h3>{props.expense_title}</h3>
      </div>
      <div className="col2">
        <h3>68%</h3>
      </div>
      <div className="col3">
        <h3>{props.expense_amount}</h3>
      </div>
    </div>
  );
};

export default ExpenseItem;
