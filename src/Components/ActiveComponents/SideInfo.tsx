import "../../Styles/SideInfo.css";
import IOutCome from "../IOutCome";

const SideInfo = () => {
  return (
    <div className="SideInfo">
      <div className="section1">
        <h2>This Year {2024} </h2>
        <div className="sec1p">
          <p>
            Total Earnings <h2>Rs. 12,235</h2>
          </p>
          <p>
            Total Expenses <h2>Rs. 2,235</h2>
          </p>
        </div>
      </div>
      <div className="section2">
        <h4>Abdullah Khalil</h4>
        <p>UI/UX Designer, 20 y.o.</p>
      </div>
      <div className="section3">
        <div className="sec3-margin">
          <p>Balance</p>
          <h2>100 rupy</h2>
          <div className="inoutcome">
            <IOutCome color={"rgb(55, 198, 115)"} />
            <IOutCome color={"rgb(81, 101, 235)"} />
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div className="row"></div>
      </div>
      <div className="section4">
        <div>
          <h2>$147</h2>
          <p>Your CashBack</p>
        </div>
      </div>
    </div>
  );
};

export default SideInfo;
