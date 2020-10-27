import React from "react";
import styles from './form_answer.module.css';

const FormAnswer = () => {
  return (
    <div className={styles.form}>
      <div className={styles.multiple}>
        <input className={styles.answer} type="text" />
        <input className={styles.answer} type="text" />
      </div>
      <button className={styles.button}>항목추가</button>
    </div>
  );
};

export default FormAnswer;
