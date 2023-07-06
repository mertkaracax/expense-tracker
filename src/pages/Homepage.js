import React from "react";
import classes from "./Homepage.module.css";
import SideBar from "../components/General/SideBar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { useEffect } from "react";
import { useState } from "react";

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
  const username = localStorage.getItem("username");
  const [lastMonthSpendings, setLastMonthSpendings] = useState("");
  const [monthlySpendings, setMonthlySpendings] = useState("");

  const [pieData, setPieData] = useState();
  const [barData, setBarData] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/homepage/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setMonthlySpendings(data.monthly);
        setLastMonthSpendings(data.lastMonth.categoryList);
      })
      .then(() => {
        setLastMonthSpendings((lastMonthSpendings) => {
          setPieData({
            labels: lastMonthSpendings.map((item) => item.name),
            datasets: [
              {
                label: "# of Votes",
                data: lastMonthSpendings.map((item) => item.amount * -1),
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
          });
          return lastMonthSpendings;
        });
      })
      .then(() => {
        setMonthlySpendings((monthlySpendings) => {
          setBarData({
            labels: monthlySpendings.map((item) => item.month),
            datasets: [
              {
                label: "Spend amount",
                data: monthlySpendings.map((item) => item.total * -1),
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
          });
          return monthlySpendings;
        })
        
      });
  }, []);
  

  

  return (
    <div className={classes.homepage}>
      <SideBar onPage="Homepage" />
      <div className={classes.tableContainer}>
        <div className={classes.leftContainer}>
          <span style={{ fontSize: 18 }}>Last Month Spending</span>
          <div className={classes.leftTable1}>
          {console.log("dd", pieData)}
            {lastMonthSpendings !== "" && lastMonthSpendings.map((item) => {
              return (
                <div className={classes.item} key={item.name}>
                  <span className={classes.leftSpan} style={{ fontSize: 18 }}>
                    {item.name}
                  </span>
                  <span
                    className={classes.rightSpan}
                    style={{ fontSize: 18, color: "gray" }}
                  >
                    {item.amount* -1} TL
                  </span>
                </div>
              );
            })}
          </div>
          <div className={classes.leftTable2}>
            {pieData && <Pie data={pieData} />}
          </div>
        </div>
        <div className={classes.rightContainer}>
          <span style={{ fontSize: 18 }}>Monthly Spending</span>
          <div className={classes.rightTable1}>
            {monthlySpendings !== "" && monthlySpendings.map((item) => {
              return (
                <div className={classes.item} key={item.month}>
                  <span className={classes.leftSpan}>{item.month}</span>
                  <span className={classes.rightSpan}>{item.total * -1} TL</span>
                </div>
              );
            })}
          </div>

          <div className={classes.rightTable2}>
            {barData && <Bar data={barData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
