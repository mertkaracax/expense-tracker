import React, { useRef } from "react";
import classes from "./Profile.module.css";
import SideBar from "../components/General/SideBar";
import { useNavigate } from "react-router-dom";
import Modal from "../components/General/Modal";
import { useState } from "react";

const Profile = (props) => {
  const navigate = useNavigate();
  const passwordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = localStorage.getItem("username");
    const password = passwordRef.current.value;
    const newPassword = newPasswordRef.current.value;
    fetch("http://localhost:8080/user/change_password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password, newPassword: newPassword}),
    })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("username", "");
          navigate("/");
        } else {
          openModal();
        }
      });
  };

  return (
    <div className={classes.homepage}>
      {modalOpen && <Modal title="Error" content="Password is incorrect!" closeModal={closeModal}/>}
      <SideBar onPage="Profile" />
      <div className={classes.tableContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h3>{localStorage.getItem("username")}</h3>
          <p>Account created at 17.05.2017</p>
          <input
            type="password"
            className={classes.input}
            placeholder="password"
            ref={passwordRef}
          />
          <input
            type="password"
            className={classes.input}
            placeholder="new password"
            ref={newPasswordRef}
          />
          <input
            type="password"
            className={classes.input}
            placeholder="confirm new password"
            ref={confirmPasswordRef}
          />
          <button type="submit" className={classes.button}>
            Change Password
          </button>
          <span style={{ marginTop: 15 }}></span>
          <button className={classes.button2}>Delete Account</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
