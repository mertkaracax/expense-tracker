import classes from "./AddCredit.module.css";
import { Fragment } from "react";
import { GrAddCircle } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";

const AddCredit = (props) => {
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
          <div className={classes.formItem}>
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddCredit;
