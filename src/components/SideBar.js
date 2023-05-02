import React from "react";
import classes from "../components/SideBar.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const SideBar = (props) => {
  return (
    <div className={classes.sideBar}>
      <AiOutlineRight className={classes.icon} />
      <h4 className={classes.username}>Tokatlayarak_Siken_31</h4>
      <Link
        style={{ color: props.onPage === "Homepage" ? "#9510e8" : "#9510e87e" }}
        className={classes.link}
      >
        Dashboard
      </Link>
      <Link className={classes.link}>Bank Statements</Link>
      <Link className={classes.link}>Credit Cards</Link>
      <Link className={classes.link}>Profile</Link>
      <Link to="/" className={classes.logout}>
        Log out
      </Link>
    </div>
  );
};

export default SideBar;
