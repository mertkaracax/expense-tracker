import React from "react";
import classes from "./Homepage.module.css";
import SideBar from "../components/General/SideBar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { CategoryScale, LinearScale, BarElement, Title } from "chart.js";

const lastMonthSpendings = [
  { name: "Market", amount: "2500₺  [%31,25]", int: 25 },
  { name: "Transportation", amount: "1500₺  [%18,75]", int: 15 },
  { name: "Coffee", amount: "1500₺  [%18,75]", int: 15 },
  { name: "Food", amount: "1000₺  [%12,25]", int: 10 },
  { name: "Housing", amount: "500₺  [%6,25]", int: 25 },
  { name: "Medical", amount: "400₺  [%5]", int: 25 },
  { name: "Debt Payments", amount: "200₺  [%2,5]", int: 25 },
  // { name: "Personal Spending", amount: "200₺  [%2,5]" },
  // { name: "Utilities", amount: "100₺  [%1,25]" },
  // { name: "Insurance", amount: "100₺  [%1,25]" },
];

const options = {
  legend: {
    display: false,
  },
};

const pieData = {
  labels: lastMonthSpendings.map((item) => {
    return item.name;
  }),
  datasets: [
    {
      label: "# of Votes",
      data: lastMonthSpendings.map((item) => {
        return item.int;
      }),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const monthlySpendings = [
  { month: "May", amount: "8000 TL" },
  { month: "April", amount: "7600 TL" },
  { month: "February", amount: "9000 TL" },
  { month: "January", amount: "11000 TL" },
  { month: "December", amount: "500TL" },
];

const barData = {
  labels: lastMonthSpendings.map((item) => {
    return item.name;
  }),
  datasets: [
    {
      label: "# of Votes",
      data: lastMonthSpendings.map((item) => {
        return item.int;
      }),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Homepage = (props) => {
  return (
    <div className={classes.homepage}>
      <SideBar onPage="Homepage" />
      <div className={classes.tableContainer}>
        <div className={classes.leftContainer}>
          <span style={{ fontSize: 18 }}>Last Month Spending</span>
          <div className={classes.leftTable1}>
            {lastMonthSpendings.map((item) => {
              return (
                <div className={classes.item} key={item.name}>
                  <span className={classes.leftSpan} style={{ fontSize: 18 }}>
                    {item.name}
                  </span>
                  <span
                    className={classes.rightSpan}
                    style={{ fontSize: 18, color: "gray" }}
                  >
                    {item.amount}
                  </span>
                </div>
              );
            })}
          </div>
          <div className={classes.leftTable2}>
            <Pie
              options={{
                ...options,
                legend: {
                  display: false,
                },
              }}
              data={pieData}
            />
          </div>
        </div>
        <div className={classes.rightContainer}>
          <span style={{ fontSize: 18 }}>Monthly Spending</span>
          <div className={classes.rightTable1}>
            {monthlySpendings.map((item) => {
              return (
                <div className={classes.item} key={item.month}>
                  <span className={classes.leftSpan}>{item.month}</span>
                  <span className={classes.rightSpan}>{item.amount}</span>
                </div>
              );
            })}
          </div>

          <div className={classes.rightTable2}>
            <Bar data={barData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
