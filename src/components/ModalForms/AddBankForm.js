import classes from "./AddBankForm.module.css";
import { Fragment } from "react";
import { GrAddCircle } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";
import foto from "../../assets/concer.png";

const AddBankForm = (props) => {
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
          {/* <div className={classes.formItem}>
            <GrAddCircle color="red" size={20} className={classes.icon} /> Add
            All
          </div>
          <div className={classes.formItem}>
            <GrAddCircle size={20} className={classes.icon} /> 5944 5495 4955
            34344 - Z Bank
          </div>
          <div className={classes.formItem}>
            <GrAddCircle size={20} className={classes.icon} />
            5944 5495 4955 34344 - Z Bank
          </div>
          <div className={classes.formItem}>
            <GrAddCircle size={20} className={classes.icon} />
            5944 5495 4955 34344 - Z Bank
          </div>
          <div className={classes.formItem}>
            <GrAddCircle size={20} className={classes.icon} />
            5944 5495 4955 34344 - Z Bank
          </div> */}
          <label htmlFor="file-input" className={classes.label}>
            <div
              style={{
                width: "12vw",
                height: "5vh",
                background: "#f7f7f7",
                border: "1px solid black",
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              ADD FILE
            </div>
            <input
              required
              id="file-input"
              type="file"
              multiple="false"
              className={classes.imgInput}
              // onChange={handleFotoYukleme}
            />
          </label>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBankForm;
