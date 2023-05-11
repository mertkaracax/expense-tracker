import React from "react";
import classes from "./Homepage.module.css";
import SideBar from "../components/General/SideBar";

const lastMonthSpendings = [
  { name: "Market", amount: "2500₺  [%31,25]" },
  { name: "Transportation", amount: "1500₺  [%18,75]" },
  { name: "Coffee", amount: "1500₺  [%18,75]" },
  { name: "Food", amount: "1000₺  [%12,25]" },
  { name: "Housing", amount: "500₺  [%6,25]" },
  { name: "Medical", amount: "400₺  [%5]" },
  { name: "Debt Payments", amount: "200₺  [%2,5]" },
  { name: "Personal Spending", amount: "200₺  [%2,5]" },
  { name: "Utilities", amount: "100₺  [%1,25]" },
  { name: "Insurance", amount: "100₺  [%1,25]" },
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
          <div className={classes.rightTable2}>Debts</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
