import React from "react";
import classes from "./Login.module.css";
import LoginForm from "../components/LoginForm";

const Login = (props) => {
  return (
    <div className={classes.login}>
      <div className={classes.leftSide}>
        <LoginForm />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.logo}></div>
      </div>
    </div>
  );
};

export default Login;
