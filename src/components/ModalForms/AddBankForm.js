import classes from "./AddBankForm.module.css";
import { Fragment } from "react";
import { GrAddCircle } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";
import foto from "../../assets/concer.png";
import { useState } from "react";

const AddBankForm = (props) => {
  const [file, setFile] = useState();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    setFile(file);
    reader.onload = () => {
      setFile(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const imgData = new FormData();
    imgData.append("file", file);
    fetch(`http://localhost:8080/statement/upload/`, {
      method: "POST",
      body: imgData,
    }).then((res) => {
      props.onClose();
      return res.json();
    });
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
          <button onClick={submitHandler}></button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBankForm;
