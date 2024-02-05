import { Line, PolarArea } from "react-chartjs-2";
import "../Styles/chartsJs.css";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  RadialLinearScale,
  ArcElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  RadialLinearScale,
  ArcElement,
  Filler,
  Tooltip
);
const createLinearGradient = (context: any) => {
  const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, "rgba(73, 155, 234, 0.38)"); // Start color with 38% opacity
  gradient.addColorStop(1, "rgba(32, 124, 229, 0.19)"); // End color with 19% opacity
  return gradient;
};

const dataPolarArea = {
  labels: ["Groceries", "Electric", "Gas", "Water", "Internet"],
  datasets: [
    {
      data: [4000, 3000, 7000, 3500],
      backgroundColor: ["yellow", "blue", "red", "green"],
    },
  ],
};
const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 14, // Set the font size for x-axis labels
        },
      },
      scaleLabel: {
        display: true,
        labelString: "X-Axis Label",
        font: {
          size: 16, // Set the font size for the x-axis label
        },
      },
    },
    y: {
      grid: {
        display: false,
      },

      min: 15000,
      max: 25000,
      ticks: {
        stepSize: 2500,
        font: {
          size: 14, // Set the font size for y-axis labels
        },
      },
      scaleLabel: {
        display: true,
        labelString: "Y-Axis Label",
        font: {
          size: 16, // Set the font size for the y-axis label
        },
      },
    },
  },
};
type GraphDataType = {
  label: string[];
  amount: number[];
};
const LineGraph = (props: { graphData: GraphDataType }) => {
  const labels = props.graphData.label;

  const data = {
    labels: labels,
    datasets: [
      {
        data: props.graphData.amount,
        borderColor: "rgb(94, 116, 242)",
        backgroundColor: createLinearGradient,
        pointBorderWidth: 5,
        tension: 0.4,
        fill: true,
        spanGaps: true,
      },
    ],
  };

  return (
    <div className="Lineandpolar">
      <div className="lineChart">
        <Line data={data} options={options} />
      </div>
      <div className="polarChart">
        <PolarArea data={dataPolarArea} />
      </div>
    </div>
  );
};
export default LineGraph;

// 19474,
// 21056,
// 20153,
// 19023,
// 18671,
// 20505,
// 20225,
// 19307,
// 18387,
// 22566,
// 18314,
// 18776,
// null,
// 22816,
// 20340,
// 19651,
// 19315,
// 19795,
// 18851,
// 18364,
// 20176,
// 21642,
// 20684,
// 21571,
// 18869,
// 18444,
// 20306,
// 19315,
// 22566,
// 20306,
// 18851,

// "01/01",
// "02/01",
// "03/01",
// "04/01",
// "05/01",
// "06/01",
// "07/01",
// "08/01",
// "09/01",
// "10/01",
// "11/01",
// "12/01",
// "13/01",
// "14/01",
// "15/01",
// "16/01",
// "17/01",
// "18/01",
// "19/01",
// "20/01",
// "21/01",
// "22/01",
// "23/01",
// "24/01",
// "25/01",
// "26/01",
// "27/01",
// "28/01",
// "29/01",
// "30/01",
// "31/01",
