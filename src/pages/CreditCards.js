import React, { useState, useEffect } from "react";
import classes from "./CreditCards.module.css";
import SideBar from "../components/General/SideBar";
import AddCredit from "../components/ModalForms/AddCredit";

const CreditCards = (props) => {
  const [cards, setCards] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  const username = localStorage.getItem("username");

  useEffect(() => {
    fetch(`http://localhost:8080/card/get_cards/${username}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCards(data);
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

        {cards.map((item) => {
          return (
            <div className={classes.tableItem} key={item.id}>
              <div className={classes.leftSide}>
                <span>{item.cardNumber}</span>
                <br />
                <span>{item.name}</span>
              </div>
              <span className={classes.rightSide}>{item.bankName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreditCards;
