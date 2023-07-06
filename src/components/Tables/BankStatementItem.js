import React, { useState } from "react";
import classes from "./BankStatementItem.module.css";
import { MdDone, MdClear } from "react-icons/md";
import { AiFillCaretDown, AiFillCaretUp, AiFillEdit } from "react-icons/ai";
import { useEffect } from "react";

const MayBankStatements = [
  {
    date: "17 - May",
    num: 6453,
    name: "Coffee",
    percentage: "100%",
    amount: "120 TL",
  },
  {
    date: "16 - May",
    num: 6453,
    name: "Coffee",
    percentage: "100%",
    amount: "120 TL",
  },
  {
    date: "16 - May",
    num: 6453,
    name: "Food",
    percentage: "100%",
    amount: "200 TL",
  },
  {
    date: "15 - May",
    num: 6453,
    name: "Insurance",
    percentage: "100%",
    amount: "100 TL",
  },
  {
    date: "15 - May",
    num: 6453,
    name: "Housing",
    percentage: "100%",
    amount: "200 TL",
  },
];

const BankStatementItem = (props) => {
  const [tableOpen, setTableOpen] = useState(false);
  const [monthlyStatements, setMonthlyStatements] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/statement/get_expenses/${props.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMonthlyStatements(data);
      });
  }, []);

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
        {/* <span>555 555 55 55</span> */}
        <span>{props.bankAndDate}</span>
        {tableOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </div>
      <table
        style={{ display: tableOpen ? "flex" : "none" }}
        className={classes.table}
      >
        {monthlyStatements.map((item) => {
          return (
            <tr className={classes.tr}>
              <td className={classes.td}>{item.id}</td>
              <td className={classes.td}>{item.date}</td>
              <td className={classes.td}>{item.category}</td>
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
