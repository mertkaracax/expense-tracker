import React, { useRef } from "react";
import classes from "./SignUpForm.module.css";
import { useNavigate } from "react-router-dom";

const SignUpForm = (props) => {
  const navigate = useNavigate(); // For navigating between secreens
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className={classes.loginForm}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h4 className={classes.heading}>Sign Up Now</h4>
        <p className={classes.subHeading}>Please enter your details.</p>
        <input
          type="email"
          className={classes.input}
          placeholder="email"
          ref={emailRef}
        />
        <input
          type="username"
          className={classes.input}
          placeholder="username"
          ref={usernameRef}
        />
        <input
          type="password"
          className={classes.input}
          placeholder="password"
          ref={passwordRef}
        />
        <button type="submit" className={classes.button}>
          Sign Up
        </button>
        <span style={{ marginTop: 15 }}>
          <span style={{ color: "gray" }}>Already a member? </span>
          <span
            onClick={() => {
              navigate("/");
            }}
            className={classes.link}
            style={{ display: "inline-block" }}
          >
            Sign in now
          </span>
        </span>
      </form>
    </div>
  );
};

export default SignUpForm;
