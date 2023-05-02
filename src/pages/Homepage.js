import React from "react";
import classes from "./Homepage.module.css";
import LoginForm from "../components/LoginForm";
import SideBar from "../components/SideBar";

const Homepage = (props) => {
  return (
    <div className={classes.homepage}>
      <SideBar onPage="Homepage" />
      <div className={classes.tableContainer}>
        <span className={classes.addBankStatement}>Add Bank Statement</span>
        <div className={classes.tableItem}>
          <span>555 555 55 55</span>
          <span>X Bank May</span>
        </div>
        <div className={classes.tableItem}>
          <span>555 555 55 55</span>
          <span>X Bank May</span>
        </div>
        <div className={classes.tableItem}>
          <span>555 555 55 55</span>
          <span>X Bank May</span>
        </div>
        <div className={classes.tableItem}>
          <span>555 555 55 55</span>
          <span>X Bank May</span>
        </div>
        <div className={classes.tableItem}>
          <span>555 555 55 55</span>
          <span>X Bank May</span>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
