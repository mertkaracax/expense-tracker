import React, { useState } from "react";
import classes from "./Login.module.css";
import LoginForm from "../components/Forms/LoginForm";
import Modal from "../components/General/Modal";

const Login = (props) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <div className={classes.login}>
        {modal && (
          <Modal
            title="Error"
            content="Username or password is invalid."
            closeModal={closeModal}
          />
        )}
        <div className={classes.leftSide}>
          <LoginForm openModal={openModal} closeModal={closeModal} />
        </div>
        <div className={classes.rightSide}>
          <div className={classes.logo}></div>
        </div>
      </div>
    </>
  );
};

export default Login;
