import { useEffect, useState } from "react";
import "../../Styles/Deposits.css";

type installmentType = {
  id: number;
  Date: string;
  AccountNo: string;
  DepositedFrom: string;
  DepositedTo: string;
  DepositMethod: string;
  refNo: number;
  Amount: number;
  Status: number;
};

const Deposits = () => {
  const [installments, setinstallments] = useState<installmentType[]>([]);

  useEffect(() => {
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
            refNo={item.refNo}
            key={item.refNo}
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
  refNo: number;
  Amount: number;
  Status: number;
}) {
  const paymentStatus = props.Status;
  let paymentclassName = "";
  switch (paymentStatus) {
    case 1:
      paymentclassName = "Partial";
      break;
    case 2:
      paymentclassName = "Full";
      break;
    case 3:
      paymentclassName = "No";
      break;
    default:
      paymentclassName = "";
      break;
  }

  return (
    <tbody>
      <tr className="seperator" />
      <tr className="tableDataRow">
        <td className="dataDate">{props.Date}</td>
        <td>{props.AccountNo}</td>
        <td className="dataName">{props.DepositedFrom}</td>
        <td>{props.DepositedTo}</td>
        <td>{props.DepositMethod}</td>
        <td>{props.refNo}</td>
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
