import t from "../Assets/Icons/cash.svg";
import "../Styles/ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="ExpenseItem">
      <div className="col1">
        <img src={t} alt="" />
        <h3>Title</h3>
      </div>
      <div className="col2">
        <h3>68%</h3>
      </div>
      <div className="col3">
        <h3>Rs. 12,300</h3>
      </div>
    </div>
  );
};

export default ExpenseItem;
