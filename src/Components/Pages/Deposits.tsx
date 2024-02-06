import { useEffect, useState } from "react";
import "../../Styles/Deposits.css";

type installmentType = {
  id: number;
  Date: string;
  AccountNo: string;
  DepositedFrom: string;
  DepositedTo: string;
  DepositMethod: string;
  RefNo: string;
  Amount: number;
  Status: number;
};

const Deposits = () => {
  const [installments, setinstallments] = useState<installmentType[]>([]);

  useEffect(() => {
    console.log("Deposits");
    async function fetchDeposits() {
      const response = await fetch("/api/Deposits");
      try {
        if (!response.ok) {
          throw new Error("Error Fetch Installments :  " + response.status);
        }
        setinstallments(await response.json());
      } catch (err) {
        console.log(err);
      }
    }
    fetchDeposits();
  }, []);

  return (
    <div className="Deposits">
      <table>
        <thead>
          <tr className="headingsDepositTable">
            <th>Date</th>
            <th>Account No</th>
            <th>Deposited From</th>
            <th>Deposited To</th>
            <th>Deposit Method</th>
            <th>Ref No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        {installments.map((item) => (
          <DepositRow
            AccountNo={item.AccountNo}
            Amount={item.Amount}
            Date={item.Date}
            DepositMethod={item.DepositMethod}
            DepositedFrom={item.DepositedFrom}
            DepositedTo={item.DepositedTo}
            Status={item.Status}
            id={item.id}
            refNo={item.RefNo}
            key={item.RefNo}
          />
        ))}
      </table>
    </div>
  );
};

function DepositRow(props: {
  id: number;
  Date: string;
  AccountNo: string;
  DepositedFrom: string;
  DepositedTo: string;
  DepositMethod: string;
  refNo: string;
  Amount: number;
  Status: number;
}) {
  const paymentStatus = props.Status;
  let paymentclassName = "";
  switch (paymentStatus) {
    case 0:
      paymentclassName = "Partial";
      break;
    case 1:
      paymentclassName = "Full";
      break;
    case 2:
      paymentclassName = "No";
      break;
    default:
      paymentclassName = "";
      break;
  }
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  const formattedDate = new Date(props.Date).toLocaleDateString(
    "en-US",
    options
  );

  return (
    <tbody>
      <tr className="seperator" />
      <tr className="tableDataRow">
        <td className="dataDate">{formattedDate}</td>
        <td>{props.AccountNo}</td>
        <td className="dataName">{props.DepositedFrom}</td>
        <td>{props.DepositedTo}</td>
        <td>{props.DepositMethod}</td>
        <td className="tooltip">
          <p className="tooltipData">{props.refNo}</p>
        </td>
        <td>{props.AccountNo}</td>
        <td>
          <p className={"paymentStatus " + paymentclassName}>
            {paymentclassName} Payment
          </p>
        </td>
      </tr>
    </tbody>
  );
}

export default Deposits;
