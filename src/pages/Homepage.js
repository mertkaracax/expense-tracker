import React from "react";
import classes from "./Homepage.module.css";
import SideBar from "../components/General/SideBar";
import ReactSvgPieChart from "react-svg-piechart";

const data = [
  { title: "Data 1", value: 70, color: "#307dd545" },
  { title: "Data 2", value: 60, color: "#9375e7" },
  { title: "Data 3", value: 30, color: "#ece4e06e" },
  { title: "Data 4", value: 20, color: "#c16023" },
  { title: "Data 5", value: 40, color: "#e83c08" },
];

const lastMonthSpendings = [
  { name: "Market", amount: "2500₺  [%31,25]" },
  { name: "Transportation", amount: "1500₺  [%18,75]" },
  { name: "Coffee", amount: "1500₺  [%18,75]" },
  { name: "Food", amount: "1000₺  [%12,25]" },
  { name: "Housing", amount: "500₺  [%6,25]" },
  { name: "Medical", amount: "400₺  [%5]" },
  { name: "Debt Payments", amount: "200₺  [%2,5]" },
  // { name: "Personal Spending", amount: "200₺  [%2,5]" },
  // { name: "Utilities", amount: "100₺  [%1,25]" },
  // { name: "Insurance", amount: "100₺  [%1,25]" },
];

const monthlySpendings = [
  { month: "May", amount: "8000 TL" },
  { month: "April", amount: "7600 TL" },
  { month: "February", amount: "9000 TL" },
  { month: "January", amount: "11000 TL" },
  { month: "December", amount: "500TL" },
];
const Homepage = (props) => {
  return (
    <div className={classes.homepage}>
      <SideBar onPage="Homepage" />
      <div className={classes.tableContainer}>
        <div className={classes.leftContainer}>
          <h3>Last Month Spending</h3>
          <div className={classes.leftTable}>
            {lastMonthSpendings.map((item) => {
              return (
                <div className={classes.item}>
                  <span className={classes.leftSpan} style={{ fontSize: 18 }}>
                    {item.name}
                  </span>
                  <span className={classes.rightSpan} style={{ fontSize: 18 }}>
                    {item.amount}
                  </span>
                </div>
              );
            })}
          </div>
          <ReactSvgPieChart
            data={data}
            // If you need expand on hover (or touch) effect
            expandOnHover
            // If you need custom behavior when sector is hovered (or touched)
            onSectorHover={(d, i, e) => {
              if (d) {
                console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e);
              } else {
                console.log("Mouse leave - Index:", i, "Event:", e);
              }
            }}
          />
        </div>
        <div className={classes.rightContainer}>
          <h3>Monthly Spending</h3>
          <div className={classes.rightTable1}>
            {monthlySpendings.map((item) => {
              return (
                <div className={classes.item}>
                  <span className={classes.leftSpan}>{item.month}</span>
                  <span className={classes.rightSpan}>{item.amount}</span>
                </div>
              );
            })}
          </div>
          <h3>Debts</h3>
          <div className={classes.rightTable2}>Debt is not found</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
