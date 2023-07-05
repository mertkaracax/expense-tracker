import React, { useState, useEffect } from "react";
import classes from "./CreditCards.module.css";
import SideBar from "../components/General/SideBar";
import AddCredit from "../components/ModalForms/AddCredit";

const CreditCards = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  const username = localStorage.getItem("username");

  useEffect(() => {
    fetch(`http://localhost:8080/get_cards/${username}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className={classes.homepage}>
      {modalOpen && <AddCredit onClose={closeModal} title="Add Credit Card" />}
      <SideBar onPage="CreditCards" />
      <div className={classes.tableContainer}>
        <h4 className={classes.title}>Credit Cards</h4>
        <span
          onClick={() => {
            setModalOpen(true);
          }}
          className={classes.addBankStatement}
        >
          Add a Credit Card
        </span>
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
