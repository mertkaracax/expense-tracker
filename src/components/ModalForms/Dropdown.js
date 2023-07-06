import React from "react";
import styles from "./Dropdown.module.css";
import { useState, useEffect } from "react";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    fetch(`http://localhost:8080/card/get_cards/${username}`)
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleButtonClick = () => {
    setOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div className={styles.dropdownMenu}>
      <button
        style={{}}
        className={styles.dropdownButton}
        onClick={handleButtonClick}
      >
        Choose Card
      </button>
      <div
        style={{ display: open ? "flex" : "none" }}
        className={styles.dropdownContent}
      >
        {cards.map((item) => {
          return (
            <div
              onClick={() => {
                props.onSubmit(item);
              }}
              className={styles.dropdownItem}
            >
              {item.bankName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
