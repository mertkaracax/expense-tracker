import React from "react";
import classes from "./SignUp.module.css";
import SignUpForm from "../components/SignUpForm";

const SignUp = (props) => {
  return (
    <div className={classes.login}>
      <div className={classes.leftSide}>
        <SignUpForm />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.logo}></div>
      </div>
    </div>
  );
};

export default SignUp;
