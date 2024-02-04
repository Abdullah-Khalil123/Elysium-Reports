import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../Styles/IOutCome.css";

const IOutCome = (props: { color: any }) => {
  return (
    <div className="IOutCome">
      <div style={{ width: 50, height: 50 }}>
        <CircularProgressbar
          value={40}
          text={`${40}%`}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            strokeLinecap: "round",
            pathColor: `${props.color}`,
            textColor: `${props.color}`,
            trailColor: "rgb(71, 76, 83)",
          })}
        />
      </div>
      <div className="textincomeoutcome">
        <h4>Income</h4>
        <p>$6,123</p>
      </div>
    </div>
  );
};

export default IOutCome;
