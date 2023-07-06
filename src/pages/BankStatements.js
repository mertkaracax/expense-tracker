import React, { useState } from "react";
import classes from "./BankStatements.module.css";
import SideBar from "../components/General/SideBar";
import BankStatementItem from "../components/Tables/BankStatementItem";
import AddBankForm from "../components/ModalForms/AddBankForm";
import { useEffect } from "react";

const BankStatements = (props) => {
  const [modalFormOpen, setModalFormOpen] = useState(false);
  const [statements, setStatements] = useState([]);
  const username = localStorage.getItem("username");

  const closeModal = () => {
    setModalFormOpen(false);
  };

  const openModal = () => {
    setModalFormOpen(true);
  };

  useEffect(() => {
    fetch(`http://localhost:8080/statement/get_statements/${username}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStatements(data);
      });
  }, [modalFormOpen]);

  return (
    <div className={classes.homepage}>
      {modalFormOpen && (
        <AddBankForm title="Add Bank Statement" onClose={closeModal} />
      )}
      <SideBar onPage="BankStatements" />
      <div className={classes.tableContainer}>
        <h4 className={classes.title}>Bank Statements</h4>
        <span
          className={classes.addBankStatement}
          onClick={() => {
            setModalFormOpen(true);
          }}
        >
          Add Bank Statement
        </span>
        {statements.map((item) => {
          return (
            <BankStatementItem
              bankAndDate={`${item.bankName} - ${item.month}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BankStatements;
