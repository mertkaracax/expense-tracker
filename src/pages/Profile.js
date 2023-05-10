import React, { useRef } from "react";
import classes from "./Profile.module.css";
import SideBar from "../components/General/SideBar";

const Profile = (props) => {
  const passwordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();
  return (
    <div className={classes.homepage}>
      <SideBar onPage="Profile" />
      <div className={classes.tableContainer}>
        <form className={classes.form}>
          <h3>yagizcanpancak@gmail.com</h3>
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
