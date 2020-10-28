import React, { useState } from "react";
import styles from "./form_ox.module.css";

const FormOX = ({ updateAnswer }) => {
  const [answer, setAnswer] = useState();

  const selectAnswer = (event) => {
    const answer = event.currentTarget.innerText;
    setAnswer(answer);
    updateAnswer(answer);
  };

  return (
    <div className={styles.answer_list}>
      <h4>정답</h4>
      <div className={styles.buttons}>
        <button className={`${styles.answer_button} ${answer === "O" ? styles.selected : ''}`} onClick={selectAnswer}>O</button>
        <button className={`${styles.answer_button} ${answer === "X" ? styles.selected : ''}`} onClick={selectAnswer}>X</button>
      </div>
    </div>
  );
};

export default FormOX;
