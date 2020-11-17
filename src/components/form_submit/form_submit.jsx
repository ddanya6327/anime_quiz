import React from "react";
import styles from "./form_submit.module.css";

const FormSubmit = ({ saveQuiz }) => {
  return (
    <button className={styles.submit} onClick={saveQuiz}>
      クイズ投稿
    </button>
  );
};

export default FormSubmit;
