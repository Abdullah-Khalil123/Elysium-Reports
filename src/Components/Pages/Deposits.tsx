import "../../Styles/Deposits.css";

const Deposits = () => {
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
        {DepositRow(1)}
        {DepositRow(2)}
        {DepositRow(3)}
      </table>
    </div>
  );
};

function DepositRow(status: number) {
  const paymentStatus = status;
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
        <td className="dataDate">January 2024</td>
        <td>13456</td>
        <td className="dataName">Nadeem</td>
        <td>Tahir</td>
        <td>Online Banking</td>
        <td>987654321</td>
        <td>500,000</td>
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
