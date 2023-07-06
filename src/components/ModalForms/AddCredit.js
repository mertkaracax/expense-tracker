import classes from "./AddCredit.module.css";
import { Fragment } from "react";
import { GrAddCircle } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddCredit = (props) => {
  const navigate = useNavigate();
  const cardRef = useRef();
  const bankRef = useRef();
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardNumber = cardRef.current.value;
    const bankName = bankRef.current.value;
    const name = nameRef.current.value;
    const username = localStorage.getItem("username");

    fetch("http://localhost:8080/card/add_card", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        cardNumber: cardNumber,
        bankName: bankName,
        name: name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => props.onClose())
  };

  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <div className={classes.modal}>
        <div className={classes.modalHeader}>
          <span className={classes.modalHeaderText}>{props.title}</span>
          <FaTimes
            onClick={props.onClose}
            color="white"
            className={classes.modalHeaderButton}
            size={25}
          />
        </div>
        <div className={classes.modalContent}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <input
              type="text"
              className={classes.inp}
              placeholder="Credit Card"
              ref={cardRef}
            />
            <input
              type="text"
              className={classes.inp}
              placeholder="Name"
              ref={nameRef}
            />
            <input
              type="text"
              className={classes.inp}
              placeholder="Bank Name"
              ref={bankRef}
            />
            <input
              type="submit"
              className={classes.btn}
              placeholder="Add Card"
            ></input>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddCredit;
