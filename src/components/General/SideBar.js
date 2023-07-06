import React from "react";
import classes from "./SideBar.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const SideBar = (props) => {
  return (
    <div className={classes.sideBar}>
      {/* <AiOutlineRight className={classes.icon} /> */}
      <h4 className={classes.username}>{localStorage.getItem("username")}</h4>
      <Link
        to="/Homepage"
        style={{
          color: props.onPage === "Homepage" ? "#9510e8" : "#9510e87e",
          fontWeight: props.onPage === "Homepage" ? "bold" : "normal",
        }}
        className={classes.link}
      >
        Dashboard
      </Link>
      <Link
        to="/BankStatements"
        style={{
          color: props.onPage === "BankStatements" ? "#9510e8" : "#9510e87e",
          fontWeight: props.onPage === "BankStatements" ? "bold" : "normal",
        }}
        className={classes.link}
      >
        Bank Statements
      </Link>
      <Link
        to="/CreditCards"
        style={{
          color: props.onPage === "CreditCards" ? "#9510e8" : "#9510e87e",
          fontWeight: props.onPage === "CreditCards" ? "bold" : "normal",
        }}
        className={classes.link}
      >
        Credit Cards
      </Link>
      <Link
        to="/Profile"
        style={{
          color: props.onPage === "Profile" ? "#9510e8" : "#9510e87e",
          fontWeight: props.onPage === "Profile" ? "bold" : "normal",
        }}
        className={classes.link}
      >
        Profile
      </Link>
      <Link to="/" className={classes.logout}>
        Log out
      </Link>
    </div>
  );
};

export default SideBar;
