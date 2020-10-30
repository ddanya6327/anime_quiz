import React from "react";
import styles from "./answer_ox.module.css";

const AnswerOx = ({ handleAnswerItem, hidden }) => {
  return (
    <div className={styles.buttons}>
      <button className={styles.ox_button} onClick={handleAnswerItem}>
        O
      </button>
      <button className={styles.ox_button} onClick={handleAnswerItem}>
        {hidden ? "O" : "X"}
      </button>
    </div>
  );
};

export default AnswerOx;
