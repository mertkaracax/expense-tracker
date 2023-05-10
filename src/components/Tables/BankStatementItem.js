import React, { useState } from "react";
import classes from "./BankStatementItem.module.css";
import { MdDone, MdClear } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const MayBankStatements = [
  {
    date: "17 may",
    num: 6453,
    name: "coffee",
    percentage: "88%",
    amount: "120 TL",
  },
  {
    date: "17 may",
    num: 6453,
    name: "coffee",
    percentage: "88%",
    amount: "120 TL",
  },
  {
    date: "17 may",
    num: 6453,
    name: "coffee",
    percentage: "88%",
    amount: "120 TL",
  },
  {
    date: "17 may",
    num: 6453,
    name: "coffee",
    percentage: "88%",
    amount: "120 TL",
  },
  {
    date: "17 may",
    num: 6453,
    name: "coffee",
    percentage: "88%",
    amount: "120 TL",
  },
];

const BankStatementItem = (props) => {
  const [tableOpen, setTableOpen] = useState(false);
  return (
    <div className={classes.statement}>
      <div
        className={classes.tableHeader}
        onClick={() => {
          if (tableOpen) {
            setTableOpen(false);
          } else if (!tableOpen) setTableOpen(true);
        }}
      >
        <span>555 555 55 55</span>
        <span>X Bank May</span>
      </div>
      <table
        style={{ display: tableOpen ? "flex" : "none" }}
        className={classes.table}
      >
        {MayBankStatements.map((item) => {
          return (
            <tr className={classes.tr}>
              <td className={classes.td}>{item.date}</td>
              <td className={classes.td}>{item.num}</td>
              <td className={classes.td}>{item.name}</td>
              <td className={classes.td}>{item.percentage}</td>
              <td className={classes.td}>{item.amount}</td>
              <td className={classes.td}>{item.amount}</td>
              <td className={classes.td}>
                <AiFillEdit size={20} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default BankStatementItem;
