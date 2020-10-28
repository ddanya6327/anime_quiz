import React from "react";
import styles from "./form_submit.module.css";

const FormSubmit = ({ saveQuiz }) => {
  return (
    <button className={styles.submit} onClick={saveQuiz}>
      퀴즈 등록
    </button>
  );
};

export default FormSubmit;
