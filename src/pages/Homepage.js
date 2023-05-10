import React from "react";
import classes from "./Homepage.module.css";
import SideBar from "../components/General/SideBar";

const lastMonthSpendings = [
  { name: "Market", amount: "2500₺  [%31,25]" },
  { name: "Market", amount: "2500₺  [%31,25]" },
  { name: "Market", amount: "2500₺  [%31,25]" },
  { name: "Market", amount: "2500₺  [%31,25]" },
  { name: "Market", amount: "2500₺  [%31,25]" },
  { name: "Market", amount: "2500₺  [%31,25]" },
  { name: "Market", amount: "2500₺  [%31,25]" },
];

const monthlySpendings = [
  { month: "January", amount: "8000 TL" },
  { month: "January", amount: "8000 TL" },
  { month: "January", amount: "8000 TL" },
  { month: "January", amount: "8000 TL" },
  { month: "January", amount: "8000 TL" },
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
          <h3>Borrowers</h3>
          <div className={classes.rightTable2}>Debt is not found</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
