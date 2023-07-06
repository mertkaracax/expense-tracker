import classes from "./AddBankForm.module.css";
import { Fragment } from "react";
import { GrAddCircle } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";
import foto from "../../assets/concer.png";
import { useState } from "react";
import Dropdown from "./Dropdown";

const AddBankForm = (props) => {
  const [file, setFile] = useState("null");
  const [card, setCard] = useState();

  const chooseCardHandler = (item) => {
    setCard(item.bankName);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    setFile(file);
    reader.onload = () => {
      setFile(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      setFile(reader.result);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const imgData = new FormData();
    imgData.append("file", file);
    imgData.append("username", localStorage.getItem("username"));
    imgData.append("bankName", card);
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
          <Dropdown onSubmit={chooseCardHandler} />
          <label htmlFor="file-input" className={classes.label}>
            <div
              style={{
                width: "15vw",
                height: "5vh",
                background: "#f7f7f7",
                border: "1px solid black",
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {file === "null" ? "Add File" : "File is added"}
            </div>
            <input
              required
              id="file-input"
              type="file"
              multiple="false"
              className={classes.imgInput}
              onChange={handleFileUpload}
            />
          </label>
          <button
            style={{ width: "15vw", height: "5vh" }}
            onClick={submitHandler}
          >
            Save
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBankForm;
