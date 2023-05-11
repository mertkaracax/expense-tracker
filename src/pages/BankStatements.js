import React, { useState } from "react";
import classes from "./BankStatements.module.css";
import SideBar from "../components/General/SideBar";
import BankStatementItem from "../components/Tables/BankStatementItem";
import AddBankForm from "../components/ModalForms/AddBankForm";

const BankStatements = (props) => {
  const [modalFormOpen, setModalFormOpen] = useState(false);

  const closeModal = () => {
    setModalFormOpen(false);
  };

  const openModal = () => {
    setModalFormOpen(true);
  };
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
        <BankStatementItem bankAndDate="X Bank - June" />
        <BankStatementItem bankAndDate="X Bank - May" />
        <BankStatementItem bankAndDate="Y Bank - April" />
        <BankStatementItem bankAndDate="Z Bank - March" />
      </div>
    </div>
  );
};

export default BankStatements;
