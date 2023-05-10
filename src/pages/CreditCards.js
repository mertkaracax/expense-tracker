import React from "react";
import classes from "./CreditCards.module.css";
import SideBar from "../components/General/SideBar";

const CreditCards = (props) => {
  return (
    <div className={classes.homepage}>
      <SideBar onPage="CreditCards" />
      <div className={classes.tableContainer}>
        <h4 className={classes.title}>Credit Cards</h4>
        <span className={classes.addBankStatement}>Add a Credit Card</span>
        <div className={classes.tableItem}>
          <div className={classes.leftSide}>
            <span>555 555 5325 5235</span>
            <br />
            <span>Bilgehan Ay</span>
          </div>
          <span className={classes.rightSide}>X Bank</span>
        </div>
        <div className={classes.tableItem}>
          <div className={classes.leftSide}>
            <span>555 555 5325 5235</span>
            <br />
            <span>Bilgehan Ay</span>
          </div>
          <span className={classes.rightSide}>X Bank</span>
        </div>
        <div className={classes.tableItem}>
          <div className={classes.leftSide}>
            <span>555 555 5325 5235</span>
            <br />
            <span>Bilgehan Ay</span>
          </div>
          <span className={classes.rightSide}>X Bank</span>
        </div>
        <div className={classes.tableItem}>
          <div className={classes.leftSide}>
            <span>555 555 5325 5235</span>
            <br />
            <span>Bilgehan Ay</span>
          </div>
          <span className={classes.rightSide}>X Bank</span>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
