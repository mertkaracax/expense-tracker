import React, { useRef } from "react";
import classes from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const navigate = useNavigate(); // For navigating between secreens

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          localStorage.setItem("username", username);
          navigate("/Homepage");
        } else {
          props.openModal();
        }
      });
  };

  return (
    <>
      <div className={classes.loginForm}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h4 className={classes.heading}>Welcome!</h4>
          <p className={classes.subHeading}>Please enter your details.</p>
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
            Login
          </button>
          <span style={{ marginTop: 15 }}>
            <span style={{ color: "gray" }}>Not a member? </span>
            <span
              onClick={() => {
                navigate("/SignUp");
              }}
              className={classes.link}
              style={{ display: "inline-block" }}
            >
              Sign up now
            </span>
          </span>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
